import React from 'react';
import { Centre } from '../types';
import { Ticket, Award, BookMarked, UserCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface LeadMagnetsArsenalProps {
  centre: Centre;
  onSelectLeadMagnet: (type: '3_DAY_DEMO_PASS' | 'ASAT_SCHOLARSHIP' | 'FREE_STUDY_KIT' | 'OFFLINE_COUNSELLING') => void;
}

export const LeadMagnetsArsenal: React.FC<LeadMagnetsArsenalProps> = ({
  centre,
  onSelectLeadMagnet,
}) => {
  return (
    <section id="lead-magnets" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-adda-600 uppercase tracking-wider mb-2">
            Admissions &amp; Trial Privileges
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
            Four Free Benefits Before You Decide to Enroll
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We believe in complete transparency. Experience the faculty quality, classroom atmosphere, and study materials at {centre.name} with zero financial commitment.
          </p>
        </div>

        {/* 4 Conversion Cards (Asymmetric Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Magnet 1: Free 3-Day Demo Pass */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-adda-300 hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-adda-600 flex items-center justify-center mb-4">
                <Ticket className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Zero Cost Trial
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Free 3-Day Classroom Pass
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Attend 3 continuous days of live offline batches with master faculty. Test classroom acoustics, teaching depth, and daily doubt support.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3 mb-6">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Full access to 4.5-hr lecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Receive printed daily DPP sheet</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>1-on-1 doubt clearing session</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectLeadMagnet('3_DAY_DEMO_PASS')}
              className="w-full bg-adda-600 hover:bg-adda-700 text-white font-semibold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Generate 3-Day Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Magnet 2: ASAT Scholarship Test */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-adda-300 hover:shadow-md transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-[10px] font-extrabold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Up to 100% Off
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Offline Scholarship
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                ASAT 2025 Scholarship Test
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Appear for the offline scholarship test this Sunday at 11:00 AM at {centre.name}. Meritorious candidates receive up to 100% course fee waiver.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3 mb-6">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Held every Sunday at 11:00 AM</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>60-Min Aptitude &amp; GS Test</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Guaranteed min 15% discount</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectLeadMagnet('ASAT_SCHOLARSHIP')}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Book Scholarship Slot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Magnet 3: Physical Study Kit & PYQ Book Bundle */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-adda-300 hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <BookMarked className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Hardcopy Gift
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                5-Yr PYQ Book &amp; Formula Kit
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Claim a voucher to collect our physical 5-Year Solved Papers handbook &amp; Formula Cheat-Sheet booklet at our centre front desk.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3 mb-6">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Authentic solved question papers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Vedic math calculation charts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Collect in-person at reception</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectLeadMagnet('FREE_STUDY_KIT')}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Get Free Kit Voucher</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Magnet 4: 1-on-1 Faculty Mentorship Session */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-adda-300 hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Personal Guidance
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                1-on-1 Offline Mentorship
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Book a 20-minute face-to-face consultation at {centre.name} with our senior mentor to audit your preparation strategy and mock test trends.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3 mb-6">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Syllabus completion timeline</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Target score roadmap for Tier 1 &amp; 2</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Review with ex-selected mentors</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectLeadMagnet('OFFLINE_COUNSELLING')}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Book 1-on-1 Slot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Feature Spotlight Banner with Generated Assets */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-full">
            <img
              src="/src/assets/images/prep_study_kit_1791225507186.jpg"
              alt="Adda247 Offline Study Kit and PYQ Handbooks"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-6">
              <span className="text-white text-xs font-semibold">
                Official Adda247 Publications Printed Course Ware
              </span>
            </div>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
            <div className="text-xs font-bold text-adda-600 uppercase tracking-wider mb-2">
              Physical Resource Advantage
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
              Why Physical Books &amp; In-Person Batches Outperform Online Only
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Competitive government exams demand 6 to 8 hours of disciplined screen-free focus every day. At {centre.displayName}, we combine the accountability of a classroom with hardcopy books, weekly proctored OMR examinations, and free backup recordings on your mobile app.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onSelectLeadMagnet('FREE_STUDY_KIT')}
                className="bg-adda-600 hover:bg-adda-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Claim Free Physical Kit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs text-slate-500">
                Pick up voucher at {centre.city} Centre reception
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
