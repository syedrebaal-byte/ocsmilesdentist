import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { Sparkles, Clock, CheckCircle2, SlidersHorizontal } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = BEFORE_AFTER_CASES[selectedCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="results" className="py-24 bg-stone-100/70 border-t border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-800 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-700" />
              <span>Real Clinical Outcomes · Orlando, FL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Smile Transformations
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Conservative dental artistry that enhances harmony, restores function, and protects long-term oral vitality.
            </p>
          </div>

          {/* Case Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-stone-300/80 shadow-xs self-start md:self-auto overflow-x-auto max-w-full">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCaseIndex === idx
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-stone-50'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Transformation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Split Slider Container */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-stone-300 select-none cursor-ew-resize bg-slate-900"
            >
              {/* After State (Full Base Layer) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 flex items-center justify-center p-8 text-white">
                <div className="relative text-center max-w-md">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 mb-4 shadow-inner">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <span className="block text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">
                    Completed Treatment
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                    {currentCase.afterLabel}
                  </h4>
                  <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed">
                    Custom porcelain contouring, biological shade synchronization, and restored incisal harmony.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Natural Enamel Translucency</span>
                  </div>
                </div>
              </div>

              {/* Before State (Clipped Overlay Layer) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 flex items-center justify-center p-8 text-stone-200"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="relative text-center max-w-md">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 mb-4">
                    <SlidersHorizontal className="w-8 h-8" />
                  </div>
                  <span className="block text-xs uppercase tracking-widest text-amber-400/90 font-semibold mb-1">
                    Initial Presentation
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-100 mb-2">
                    {currentCase.beforeLabel}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Pre-treatment alignment with uneven wear patterns and structural tooth discrepancy.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-xs text-amber-200">
                    <span>Baseline Clinical State</span>
                  </div>
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-xl border-2 border-cyan-600 flex items-center justify-center font-bold text-xs">
                  ↔
                </div>
              </div>

              {/* Floating Status Badges */}
              <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-xs text-[11px] font-medium text-stone-300 border border-stone-700 pointer-events-none">
                Before
              </div>
              <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-cyan-950/80 backdrop-blur-xs text-[11px] font-medium text-cyan-200 border border-cyan-800 pointer-events-none">
                After
              </div>
            </div>

            <p className="mt-2 text-center text-xs text-slate-500">
              Drag the center slider left and right to compare initial and final states
            </p>
          </div>

          {/* Case Narrative & Technical Details */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
              <span>{currentCase.category}</span>
              <span aria-hidden="true">·</span>
              <span>Orlando Case File</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
              {currentCase.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {currentCase.description}
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-medium text-slate-500">Treatment Duration</span>
                  <span className="text-sm font-semibold text-slate-900">{currentCase.treatmentDuration}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-medium text-slate-500">Clinical Focus</span>
                  <span className="text-sm font-semibold text-slate-900">{currentCase.notes}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <a
                href="#appointment"
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
              >
                Discuss Your Smile Goals
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
