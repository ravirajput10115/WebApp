import React from 'react';
import { Centre } from '../types';
import { MonitorPlay, BookOpen, MessageSquare, Smartphone, FileText, UserCheck } from 'lucide-react';

interface FacilitiesBentoProps {
  centre: Centre;
  onClaimDemo: () => void;
}

export const FacilitiesBento: React.FC<FacilitiesBentoProps> = ({
  centre,
  onClaimDemo,
}) => {
  return (
    <section id="facilities" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-adda-600 uppercase tracking-wider mb-2">
            Campus Infrastructure
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
            Engineered for 12-Hour Focused Exam Discipline
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Cracking a top government job requires an environment free from mobile notifications, home distractions, and isolated doubts. Take a look inside {centre.displayName}.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Item 1: Large Classroom Spotlight (2 cols on md/lg) */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={centre.images.classroom}
                alt={`${centre.name} Smart Classroom`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6">
                <div>
                  <span className="text-rose-400 text-xs font-bold uppercase tracking-wider block mb-1">
                    Smart Audio-Visual Theatres
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    Interactive 4K Digital Panels &amp; Tiered Seating
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Every classroom at {centre.name} is acoustically treated with noise-damping panels and multi-channel lapel mic audio systems. High-definition digital boards ensure crystal-clear visibility of math derivations, maps, and flowcharts from every single desk.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <MonitorPlay className="w-4 h-4 text-adda-600 shrink-0" />
                  <span>Dual 85&quot; 4K Interactive Panels</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-adda-600 shrink-0" />
                  <span>HD Lecture Video Backup on App</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Dedicated Silent Library */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={centre.images.library}
                alt={`${centre.name} Library`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold">
                  70-Seater Silent Study Hall
                </span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Distraction-Free Self Study
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Open 7:00 AM to 9:00 PM for all enrolled students. Individual wooden carrels, charging sockets for tablets, high-speed Wi-Fi, and strict silence monitoring.
                </p>
              </div>
              <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span>Free for Batch Students</span>
                <span className="font-semibold text-slate-900">7 AM – 9 PM</span>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Daily Doubt Counters */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-adda-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Daily In-Person Doubt Counters
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Never take a doubt home. Dedicated faculty tables remain active for 3 hours every day after lecture sessions. Sit down with your educator to resolve tricky Quant, Reasoning, or English questions step-by-step.
              </p>
            </div>
            <div className="text-xs text-slate-600 pt-3 border-t border-slate-100">
              <span className="font-semibold text-slate-900">Available:</span> 12:30 PM – 3:30 PM &amp; 5:30 PM – 7:30 PM daily
            </div>
          </div>

          {/* Bento Item 4: Counselling Desk Spotlight */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={centre.images.counselling}
                alt={`${centre.name} Academic Counselling Desk`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold">
                  Academic Mentorship Desk
                </span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Personal Study Roadmap Planning
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Sit with seasoned exam counselors who analyze your past attempts, graduation background, and daily hours to map out a targeted 90-day timetable.
                </p>
              </div>
              <button
                type="button"
                onClick={onClaimDemo}
                className="text-xs font-semibold text-adda-600 hover:text-adda-700 text-left pt-2 border-t border-slate-100 block cursor-pointer"
              >
                Book 20-Min Free Counselling &rarr;
              </button>
            </div>
          </div>

          {/* Bento Item 5: Weekly OMR Proctored Test Series */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Weekly Proctored OMR Tests
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Every Sunday morning, sit for a real exam simulation with physical question booklets and scannable OMR sheets. Receive All-India Rank, negative marking analysis, and speed breakdown within 24 hours.
              </p>
            </div>
            <div className="text-xs text-slate-600 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-900">OMR Scanner Evaluated</span>
              <span className="text-emerald-700 font-medium">Every Sunday</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
