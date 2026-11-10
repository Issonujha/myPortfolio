import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { STUDIO_SERVICES } from '../data/studioData';
import { Clock, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const FeatureTimingEstimator: React.FC = () => {
  const { submitServiceQuoteToChat } = useStudio();
  const [selectedServiceId, setSelectedServiceId] = useState<string>(STUDIO_SERVICES[0].id);
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>([
    STUDIO_SERVICES[0].features[0]?.id || '',
    STUDIO_SERVICES[0].features[1]?.id || '',
  ]);

  const activeService = STUDIO_SERVICES.find(s => s.id === selectedServiceId) || STUDIO_SERVICES[0];

  const toggleFeature = (fId: string) => {
    setSelectedFeatureIds(prev => 
      prev.includes(fId) ? prev.filter(id => id !== fId) : [...prev, fId]
    );
  };

  const handleServiceChange = (sId: string) => {
    setSelectedServiceId(sId);
    const newService = STUDIO_SERVICES.find(s => s.id === sId);
    if (newService && newService.features.length > 0) {
      setSelectedFeatureIds([newService.features[0].id]);
    } else {
      setSelectedFeatureIds([]);
    }
  };

  // Calculations
  const selectedFeatures = activeService.features.filter(f => selectedFeatureIds.includes(f.id));
  const totalDays = activeService.baseDeliveryDays + selectedFeatures.reduce((acc, f) => acc + f.additionalDays, 0);
  const totalCost = activeService.basePrice + selectedFeatures.reduce((acc, f) => acc + f.additionalPrice, 0);

  const handleSendToChat = () => {
    submitServiceQuoteToChat(activeService.id, selectedFeatureIds);
  };

  return (
    <div className="rounded-3xl p-6 sm:p-10 border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-white shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Service & Feature Toggles */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" /> INTERACTIVE ESTIMATOR
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-zinc-900 tracking-tight">
              Configure Scope &amp; Delivery Timeline
            </h3>
            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              Select your service domain and toggle individual features. Our engine calculates on-time delivery deadlines and transparent budgets.
            </p>
          </div>

          {/* Service Domain Buttons */}
          <div className="space-y-2">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              1. Select Service Domain
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {STUDIO_SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleServiceChange(s.id)}
                  className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                    selectedServiceId === s.id
                      ? 'bg-cyan-500 text-black font-bold border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 border-white/[0.06] dark:border-white/[0.06] light:border-zinc-300 hover:border-cyan-500/50'
                  }`}
                >
                  <div className="line-clamp-1">{s.name}</div>
                  <div className="text-[10px] opacity-75 mt-0.5">{s.baseDeliveryDays}d Base</div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Checklist */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              2. Add Custom Technical Features ({activeService.name})
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {activeService.features.map((feat) => {
                const isSelected = selectedFeatureIds.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-cyan-50 border-cyan-500/60 shadow-sm'
                        : 'bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 border-white/[0.05] dark:border-white/[0.05] light:border-zinc-200 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected
                          ? 'bg-cyan-500 border-cyan-400 text-black'
                          : 'border-zinc-600 bg-zinc-950/60'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white dark:text-white light:text-zinc-900 flex items-center gap-2">
                          <span>{feat.name}</span>
                          {feat.isPopular && (
                            <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                          {feat.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0 pl-3">
                      <div className="text-xs font-mono font-bold text-white dark:text-white light:text-zinc-900">
                        +${feat.additionalPrice}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        +{feat.additionalDays}d
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Live Estimate Card */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-2xl p-6 sm:p-7 border border-white/[0.1] dark:border-white/[0.1] light:border-zinc-300 bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-50 shadow-2xl space-y-6 text-left sticky top-24">
            
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Sprint Specification
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                100% On-Time Guarantee
              </span>
            </div>

            {/* Total Delivery Countdown */}
            <div className="space-y-1">
              <div className="text-xs font-mono text-zinc-400">Guaranteed Delivery SLA:</div>
              <div className="text-4xl font-extrabold text-white dark:text-white light:text-zinc-900 font-mono tracking-tight flex items-baseline gap-2">
                <span>{totalDays}</span>
                <span className="text-lg font-normal text-cyan-400">Business Days</span>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Base ({activeService.baseDeliveryDays}d) + Features ({totalDays - activeService.baseDeliveryDays}d)</span>
              </div>
            </div>

            {/* Total Investment Quote */}
            <div className="space-y-1 pt-2 border-t border-white/[0.08]">
              <div className="text-xs font-mono text-zinc-400">Transparent Budget Estimate:</div>
              <div className="text-3xl font-extrabold text-white dark:text-white light:text-zinc-900 font-mono">
                ${totalCost.toLocaleString()}
              </div>
              <div className="text-[11px] font-mono text-zinc-500">
                Fixed scope contract &bull; Milestone-based invoicing
              </div>
            </div>

            {/* What is Included list */}
            <div className="space-y-2 pt-2 border-t border-white/[0.08]">
              <div className="text-xs font-mono font-bold text-zinc-300">Package Deliverables:</div>
              <ul className="space-y-1 text-xs text-zinc-400">
                {activeService.deliverables.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleSendToChat}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02]"
            >
              <span>Submit Scope &amp; Chat with Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[11px] font-mono text-zinc-500 text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct engineer consultation &bull; Zero sales pressure</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
