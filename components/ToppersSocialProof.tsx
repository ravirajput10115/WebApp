import React from 'react';
import { Centre } from '../types';
import { Quote, Trophy, Star, CheckCircle2 } from 'lucide-react';

interface ToppersSocialProofProps {
  centre: Centre;
}

export const ToppersSocialProof: React.FC<ToppersSocialProofProps> = ({ centre }) => {
  return (
    <section id="results" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-adda-600 uppercase tracking-wider mb-2">
            Verified Results
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
            Real Aspirants. Real Classrooms. Real Selections.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Over {centre.stats.selectionsCount} candidates who prepped at {centre.name} are currently serving as Gazetted Officers, Bank POs, and Railway Staff across India.
          </p>
        </div>

        {/* Toppers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {centre.toppers.map((topper) => (
            <div
              key={topper.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center font-display text-base">
                      {topper.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{topper.name}</h4>
                      <div className="text-xs font-semibold text-adda-600">{topper.exam}</div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-slate-200 shrink-0" />
                </div>

                <div className="bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs font-semibold p-2.5 rounded-lg mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{topper.rankOrPost}</span>
                </div>

                <p className="text-xs text-slate-600 italic leading-relaxed mb-4">
                  &ldquo;{topper.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Offline Student
                </span>
                <span>{topper.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
