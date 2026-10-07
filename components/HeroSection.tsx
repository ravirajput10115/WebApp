import React, { useState } from 'react';
import { Centre, LeadCaptureData, LeadType } from '../types';
import { CheckCircle2, ShieldCheck, Clock, MapPin, Sparkles, BookOpen, ArrowRight, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  centre: Centre;
  onLeadSubmitted: (lead: LeadCaptureData) => void;
  onOpenDiagnostic: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  centre,
  onLeadSubmitted,
  onOpenDiagnostic,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [targetExam, setTargetExam] = useState(centre.featuredExams[0] || 'SSC CGL & CHSL');
  const [preferredDate, setPreferredDate] = useState('Tomorrow');
  const [preferredSlot, setPreferredSlot] = useState('Morning Slot (8:30 AM)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#e11d48', '#fb7185', '#0f172a', '#10b981']
        });
      } catch (err) {
        console.error(err);
      }

      // Generate Pass code
      const cityCode = centre.city.slice(0, 3).toUpperCase();
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      const passCode = `ADDA-${cityCode}-${randomDigits}`;

      const newLead: LeadCaptureData = {
        id: `lead_${Date.now()}`,
        fullName: fullName.trim(),
        phone: cleanPhone,
        targetExam,
        leadType: '3_DAY_DEMO_PASS' as LeadType,
        preferredDate,
        preferredTimeSlot: preferredSlot,
        centreId: centre.id,
        centreName: centre.displayName,
        timestamp: new Date().toISOString(),
        passCode,
        status: 'CONFIRMED'
      };

      onLeadSubmitted(newLead);
    }, 600);
  };

  return (
    <section className="relative pt-6 pb-14 md:py-16 bg-white overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Location Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4">
          <span className="font-semibold text-adda-600">Adda247 Coaching Centres</span>
          <span aria-hidden="true">·</span>
          <span>{centre.state}</span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-900 font-medium">{centre.name}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Admissions Open for New Offline Batches
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authoritative Copy & Proof */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance leading-[1.15]">
                {centre.city}&apos;s Premier Offline Classroom for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-adda-600 to-rose-700">
                  SSC, Banking &amp; Govt Exams
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Attend 3 days of in-person lectures with India&apos;s leading faculty at the {centre.name} before paying fees. Experience acoustic smart classrooms, a 70-seater silent study library, and daily 1-on-1 doubt clearing counters.
              </p>
            </div>

            {/* Unboxed Proof Row (No Pill Capsules, Strict Adjacency) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 pt-1 border-y border-slate-100 py-3">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 tabular-nums">{centre.stats.selectionsCount}</span>
                <span>Selections</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-amber-600 tabular-nums">★ {centre.stats.googleRating}</span>
                <span className="text-slate-500">({centre.stats.reviewCount.toLocaleString()} Google Reviews)</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-900">{centre.stats.facultyCount} Offline Faculty</span>
              </div>
            </div>

            {/* Value Guarantees for Aspirants */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-adda-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="font-semibold text-slate-900 block">Free 3-Day Classroom Pass</strong>
                  <span className="text-slate-500">Sit in live lectures with top educators before enrollment.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <BookOpen className="w-5 h-5 text-adda-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="font-semibold text-slate-900 block">Free 5-Yr Solved PYQ Kit</strong>
                  <span className="text-slate-500">Printed question bank handed to you at reception desk.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-adda-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="font-semibold text-slate-900 block">Up to 100% ASAT Scholarship</strong>
                  <span className="text-slate-500">Appear for Sunday offline test at centre &amp; waive fees.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <UserCheck className="w-5 h-5 text-adda-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="font-semibold text-slate-900 block">1-on-1 Faculty Mentorship</strong>
                  <span className="text-slate-500">Get your weak areas diagnosed with custom 90-day plan.</span>
                </div>
              </div>
            </div>

            {/* Quick Action Trigger for AI/Diagnostic Tool */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDiagnostic}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-adda-700 bg-slate-50 hover:bg-rose-50/60 border border-slate-200 hover:border-adda-200 px-4 py-2.5 rounded-lg transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-adda-600" />
                <span>Unsure which offline batch suits you? Take the 60-Sec Exam Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-adda-600" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Conversion Lead Magnet Capture Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-800 relative">
              {/* Top Magnet Callout */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                    Offline Admissions 2025–26
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    Claim Free 3-Day Demo Pass
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">Classroom Seats</span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded">
                    Only 12 Left
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 py-3">
                Enter your details to generate your verified digital demo pass instantly. Also entitles you to collect the physical 5-Year PYQ book kit at reception.
              </p>

              {errorMessage && (
                <div className="mb-3 p-2.5 bg-rose-950/80 border border-rose-700 text-rose-200 text-xs rounded-lg">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ankit Sharma"
                    className="w-full bg-slate-800/90 border border-slate-700 focus:border-adda-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Mobile Number (for SMS Pass &amp; Entry) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-sm text-slate-400 font-mono font-medium">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full bg-slate-800/90 border border-slate-700 focus:border-adda-500 rounded-lg pl-12 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 font-mono outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Target Govt Exam *
                    </label>
                    <select
                      value={targetExam}
                      onChange={(e) => setTargetExam(e.target.value)}
                      className="w-full bg-slate-800/90 border border-slate-700 focus:border-adda-500 rounded-lg px-3 py-2.5 text-xs text-white outline-none cursor-pointer"
                    >
                      {centre.featuredExams.map((exam) => (
                        <option key={exam} value={exam} className="bg-slate-900 text-white">
                          {exam}
                        </option>
                      ))}
                      <option value="Other Govt Exams" className="bg-slate-900 text-white">
                        Other Govt Exams
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Preferred Date *
                    </label>
                    <select
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-slate-800/90 border border-slate-700 focus:border-adda-500 rounded-lg px-3 py-2.5 text-xs text-white outline-none cursor-pointer"
                    >
                      <option value="Today">Today (Walk-in Entry)</option>
                      <option value="Tomorrow">Tomorrow</option>
                      <option value="Upcoming Monday">Upcoming Monday (New Batch)</option>
                      <option value="Upcoming Saturday">Upcoming Saturday</option>
                      <option value="Sunday (ASAT Scholarship)">Sunday (ASAT Scholarship)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Preferred Classroom Slot
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full bg-slate-800/90 border border-slate-700 focus:border-adda-500 rounded-lg px-3 py-2 text-xs text-white outline-none cursor-pointer"
                  >
                    <option value="Morning Slot (8:30 AM – 1:00 PM)">Morning Slot (8:30 AM – 1:00 PM)</option>
                    <option value="Noon Slot (11:00 AM – 3:30 PM)">Noon Slot (11:00 AM – 3:30 PM)</option>
                    <option value="Evening Slot (2:30 PM – 7:00 PM)">Evening Slot (2:30 PM – 7:00 PM)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-adda-600 hover:bg-adda-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-lg hover:shadow-rose-900/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Generating Your Pass...
                      </span>
                    ) : (
                      <>
                        <span>Get Instant Digital Pass &amp; Kit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% Free · No Payment Required
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  Pass valid for 7 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
