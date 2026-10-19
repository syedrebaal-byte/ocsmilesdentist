import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, Eye, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const InteractiveToothModel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<'enamel' | 'dentin' | 'pulp' | 'full'>('full');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [webGLError, setWebGLError] = useState<boolean>(false);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const toothGroupRef = useRef<THREE.Group | null>(null);
  const materialsRef = useRef<{
    enamelMat: THREE.MeshPhysicalMaterial;
    dentinMat: THREE.MeshStandardMaterial;
    pulpMat: THREE.MeshStandardMaterial;
    rootMat: THREE.MeshStandardMaterial;
  } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const width = container.clientWidth || 380;
      const height = container.clientHeight || 360;

      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 0, 7.5);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.5);
      keyLight.position.set(4, 5, 5);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.6);
      fillLight.position.set(-4, -2, 3);
      scene.add(fillLight);

      const rimLight = new THREE.PointLight(0x38bdf8, 2.2, 10);
      rimLight.position.set(0, 4, -4);
      scene.add(rimLight);

      // Procedural Anatomical Tooth Model Group
      const toothGroup = new THREE.Group();
      toothGroupRef.current = toothGroup;
      scene.add(toothGroup);

      // Materials
      const enamelMat = new THREE.MeshPhysicalMaterial({
        color: 0xfbfcfe,
        roughness: 0.15,
        metalness: 0.05,
        transmission: 0.18,
        ior: 1.54,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1,
        reflectivity: 0.8,
        specularColor: new THREE.Color(0xffffff)
      });

      const dentinMat = new THREE.MeshStandardMaterial({
        color: 0xfef08a,
        roughness: 0.45,
        metalness: 0.0
      });

      const pulpMat = new THREE.MeshStandardMaterial({
        color: 0xf87171,
        roughness: 0.3,
        emissive: 0x991b1b,
        emissiveIntensity: 0.25
      });

      const rootMat = new THREE.MeshStandardMaterial({
        color: 0xfef3c7,
        roughness: 0.5,
        metalness: 0.02
      });

      materialsRef.current = { enamelMat, dentinMat, pulpMat, rootMat };

      // Tooth Crown Geometry (Smooth sculpted molar/premolar shape)
      const crownGeo = new THREE.CylinderGeometry(1.3, 1.1, 1.5, 32, 16);
      // Displace vertices gently to create natural dental cusps
      const pos = crownGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);
        if (y > 0.4) {
          // create 4 cusps on the occlusal biting surface
          const cuspBump = Math.sin(x * 3.5) * Math.sin(z * 3.5) * 0.25;
          pos.setY(i, y + cuspBump);
        }
      }
      crownGeo.computeVertexNormals();

      const crownMesh = new THREE.Mesh(crownGeo, enamelMat);
      crownMesh.position.y = 0.5;
      crownMesh.name = 'enamel_mesh';
      toothGroup.add(crownMesh);

      // Internal Dentin layer (slightly smaller inner shell)
      const dentinGeo = new THREE.CylinderGeometry(1.1, 0.9, 1.3, 24, 12);
      const dentinMesh = new THREE.Mesh(dentinGeo, dentinMat);
      dentinMesh.position.y = 0.45;
      dentinMesh.name = 'dentin_mesh';
      dentinMesh.visible = false;
      toothGroup.add(dentinMesh);

      // Internal Pulp chamber
      const pulpGeo = new THREE.CylinderGeometry(0.5, 0.35, 1.0, 16, 8);
      const pulpMesh = new THREE.Mesh(pulpGeo, pulpMat);
      pulpMesh.position.y = 0.4;
      pulpMesh.name = 'pulp_mesh';
      pulpMesh.visible = false;
      toothGroup.add(pulpMesh);

      // Root 1 (Left Root)
      const root1Geo = new THREE.ConeGeometry(0.55, 2.0, 24);
      const root1Mesh = new THREE.Mesh(root1Geo, rootMat);
      root1Mesh.rotation.z = Math.PI;
      root1Mesh.position.set(-0.55, -1.2, 0);
      root1Mesh.rotation.z = Math.PI - 0.12;
      root1Mesh.name = 'root1_mesh';
      toothGroup.add(root1Mesh);

      // Root 2 (Right Root)
      const root2Geo = new THREE.ConeGeometry(0.52, 2.1, 24);
      const root2Mesh = new THREE.Mesh(root2Geo, rootMat);
      root2Mesh.rotation.z = Math.PI;
      root2Mesh.position.set(0.55, -1.25, 0);
      root2Mesh.rotation.z = Math.PI + 0.12;
      root2Mesh.name = 'root2_mesh';
      toothGroup.add(root2Mesh);

      // Center tooth group vertically
      toothGroup.position.y = 0.2;

      // Mouse drag controls for interactive inspection
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging || !toothGroupRef.current) return;
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        toothGroupRef.current.rotation.y += deltaX * 0.012;
        toothGroupRef.current.rotation.x += deltaY * 0.008;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const onMouseUp = () => {
        isDragging = false;
      };

      // Touch controls
      const onTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 1) {
          isDragging = true;
          previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
      };

      const onTouchMove = (e: TouchEvent) => {
        if (!isDragging || !toothGroupRef.current || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;

        toothGroupRef.current.rotation.y += deltaX * 0.015;
        toothGroupRef.current.rotation.x += deltaY * 0.01;

        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      };

      const dom = renderer.domElement;
      dom.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      dom.addEventListener('touchstart', onTouchStart, { passive: true });
      dom.addEventListener('touchmove', onTouchMove, { passive: true });
      dom.addEventListener('touchend', onMouseUp);

      // Animation loop
      let animationFrameId: number;
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        if (toothGroupRef.current && isRotating && !isDragging) {
          toothGroupRef.current.rotation.y += 0.007;
          toothGroupRef.current.position.y = 0.2 + Math.sin(elapsedTime * 1.5) * 0.08;
        }

        renderer.render(scene, camera);
      };

      animate();

      // Resize listener
      const handleResize = () => {
        if (!container || !rendererRef.current) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        rendererRef.current.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        dom.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        dom.removeEventListener('touchstart', onTouchStart);
        dom.removeEventListener('touchmove', onTouchMove);
        dom.removeEventListener('touchend', onMouseUp);

        crownGeo.dispose();
        dentinGeo.dispose();
        pulpGeo.dispose();
        root1Geo.dispose();
        root2Geo.dispose();
        enamelMat.dispose();
        dentinMat.dispose();
        pulpMat.dispose();
        rootMat.dispose();
        renderer.dispose();
        if (container.contains(dom)) {
          container.removeChild(dom);
        }
      };
    } catch (err) {
      console.warn('WebGL initialization failed, falling back:', err);
      setWebGLError(true);
    }
  }, []);

  // Update layer visibility and material opacity based on state
  useEffect(() => {
    if (!toothGroupRef.current || !materialsRef.current) return;
    const group = toothGroupRef.current;
    const enamel = group.getObjectByName('enamel_mesh') as THREE.Mesh;
    const dentin = group.getObjectByName('dentin_mesh') as THREE.Mesh;
    const pulp = group.getObjectByName('pulp_mesh') as THREE.Mesh;
    const root1 = group.getObjectByName('root1_mesh') as THREE.Mesh;
    const root2 = group.getObjectByName('root2_mesh') as THREE.Mesh;

    if (!enamel || !dentin || !pulp) return;

    if (activeLayer === 'full') {
      enamel.visible = true;
      (enamel.material as THREE.MeshPhysicalMaterial).opacity = 1.0;
      (enamel.material as THREE.MeshPhysicalMaterial).transparent = false;
      dentin.visible = false;
      pulp.visible = false;
      if (root1) root1.visible = true;
      if (root2) root2.visible = true;
    } else if (activeLayer === 'enamel') {
      enamel.visible = true;
      (enamel.material as THREE.MeshPhysicalMaterial).opacity = 0.55;
      (enamel.material as THREE.MeshPhysicalMaterial).transparent = true;
      dentin.visible = true;
      pulp.visible = true;
      if (root1) root1.visible = true;
      if (root2) root2.visible = true;
    } else if (activeLayer === 'dentin') {
      enamel.visible = false;
      dentin.visible = true;
      pulp.visible = true;
      if (root1) root1.visible = true;
      if (root2) root2.visible = true;
    } else if (activeLayer === 'pulp') {
      enamel.visible = false;
      dentin.visible = false;
      pulp.visible = true;
      if (root1) root1.visible = false;
      if (root2) root2.visible = false;
    }
  }, [activeLayer]);

  const resetOrientation = () => {
    if (toothGroupRef.current) {
      toothGroupRef.current.rotation.set(0, 0, 0);
    }
  };

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 text-white border border-slate-800 shadow-2xl overflow-hidden">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Enamel & Anatomy Explorer</span>
          </div>
          <h3 className="text-base font-semibold text-white tracking-tight mt-0.5">
            Preserving Natural Tooth Architecture
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="hidden sm:inline">Drag to rotate</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>360° Inspection</span>
        </div>
      </div>

      {/* 3D Canvas / WebGL Mount */}
      <div className="relative h-[290px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing">
        {webGLError ? (
          <div className="text-center p-6 text-slate-400">
            <ShieldCheck className="w-12 h-12 text-cyan-400 mx-auto mb-2 opacity-80" />
            <p className="text-sm">High-precision natural tooth preservation.</p>
            <p className="text-xs text-slate-500 mt-1">Every procedure at OC Smiles prioritizes conservation of healthy tooth structure.</p>
          </div>
        ) : (
          <div ref={mountRef} className="w-full h-full" />
        )}

        {/* Floating Quick Action Overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5 backdrop-blur-sm"
            title={isRotating ? "Pause Rotation" : "Auto-Rotate"}
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="text-[11px]">{isRotating ? 'Pause' : 'Play'}</span>
          </button>

          <button
            onClick={resetOrientation}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5 backdrop-blur-sm"
            title="Reset Angle"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="text-[11px]">Reset</span>
          </button>
        </div>
      </div>

      {/* Layer Selector Tabs */}
      <div className="pt-3 border-t border-slate-800">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Anatomical Cross-Section:
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {activeLayer === 'full' && 'Complete Natural Crown & Root'}
            {activeLayer === 'enamel' && 'Translucent Enamel Shell'}
            {activeLayer === 'dentin' && 'Vital Dentin Core'}
            {activeLayer === 'pulp' && 'Nerve & Vascular Canal'}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800/80 text-xs">
          <button
            onClick={() => setActiveLayer('full')}
            className={`py-1.5 px-2 rounded-lg font-medium transition-all text-center whitespace-nowrap ${
              activeLayer === 'full'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Complete
          </button>

          <button
            onClick={() => setActiveLayer('enamel')}
            className={`py-1.5 px-2 rounded-lg font-medium transition-all text-center whitespace-nowrap ${
              activeLayer === 'enamel'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Enamel
          </button>

          <button
            onClick={() => setActiveLayer('dentin')}
            className={`py-1.5 px-2 rounded-lg font-medium transition-all text-center whitespace-nowrap ${
              activeLayer === 'dentin'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Dentin
          </button>

          <button
            onClick={() => setActiveLayer('pulp')}
            className={`py-1.5 px-2 rounded-lg font-medium transition-all text-center whitespace-nowrap ${
              activeLayer === 'pulp'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Pulp
          </button>
        </div>

        {/* Educational Note */}
        <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
          Dr. Martinez applies biomimetic techniques that conserve healthy enamel and dentin during veneers, composite restorations, and clear aligner therapies.
        </p>
      </div>
    </div>
  );
};
