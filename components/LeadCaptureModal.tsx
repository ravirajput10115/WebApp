import React, { useState } from 'react';
import { Centre, LeadCaptureData, LeadType } from '../types';
import { X, ShieldCheck, ArrowRight, Ticket, Award, BookMarked, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LeadCaptureModalProps {
  centre: Centre;
  initialType?: LeadType;
  initialExam?: string;
  onClose: () => void;
  onLeadSubmitted: (lead: LeadCaptureData) => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  centre,
  initialType = '3_DAY_DEMO_PASS',
  initialExam,
  onClose,
  onLeadSubmitted,
}) => {
  const [selectedType, setSelectedType] = useState<LeadType>(initialType);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [targetExam, setTargetExam] = useState(initialExam || centre.featuredExams[0] || 'SSC CGL');
  const [preferredDate, setPreferredDate] = useState('Tomorrow');
  const [preferredSlot, setPreferredSlot] = useState('Morning Slot (8:30 AM)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const leadOptions: { type: LeadType; label: string; icon: React.ReactNode; sub: string }[] = [
    {
      type: '3_DAY_DEMO_PASS',
      label: 'Free 3-Day Classroom Pass',
      icon: <Ticket className="w-4 h-4 text-adda-600" />,
      sub: 'Sit in live lectures with master faculty'
    },
    {
      type: 'ASAT_SCHOLARSHIP',
      label: 'ASAT 2025 Scholarship Test',
      icon: <Award className="w-4 h-4 text-amber-600" />,
      sub: 'Appear Sunday 11 AM for up to 100% waiver'
    },
    {
      type: 'FREE_STUDY_KIT',
      label: 'Free 5-Yr PYQ Book Voucher',
      icon: <BookMarked className="w-4 h-4 text-blue-600" />,
      sub: 'Collect physical books at front desk'
    },
    {
      type: 'OFFLINE_COUNSELLING',
      label: '1-on-1 Faculty Mentorship',
      icon: <UserCheck className="w-4 h-4 text-emerald-600" />,
      sub: '20-min face-to-face syllabus strategy'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim()) {
      setError('Please provide your name');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }

      const cityCode = centre.city.slice(0, 3).toUpperCase();
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      const passCode = `ADDA-${cityCode}-${randomDigits}`;

      const lead: LeadCaptureData = {
        id: `lead_${Date.now()}`,
        fullName: fullName.trim(),
        phone: cleanPhone,
        targetExam,
        leadType: selectedType,
        preferredDate,
        preferredTimeSlot: preferredSlot,
        centreId: centre.id,
        centreName: centre.displayName,
        timestamp: new Date().toISOString(),
        passCode,
        status: 'CONFIRMED'
      };

      onLeadSubmitted(lead);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
              {centre.name}
            </div>
            <h3 className="text-base sm:text-lg font-bold font-display text-white">
              Claim Offline Lead Magnet
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <div className="p-6">
          {/* Select Lead Magnet Pill Options */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Select Your Free Privilege
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {leadOptions.map((opt) => {
                const active = selectedType === opt.type;
                return (
                  <button
                    key={opt.type}
                    type="button"
                    onClick={() => setSelectedType(opt.type)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex items-start gap-2 ${
                      active
                        ? 'border-adda-500 bg-rose-50/70 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">{opt.icon}</div>
                    <div>
                      <div className={`text-xs font-bold ${active ? 'text-adda-800' : 'text-slate-800'}`}>
                        {opt.label}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight">
                        {opt.sub}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {error && (
            <div className="mb-4 p-2.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Candidate Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter full name"
                className="w-full bg-slate-50 border border-slate-300 focus:border-adda-600 focus:bg-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Mobile Number (for SMS Pass verification) *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs sm:text-sm text-slate-500 font-mono">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98765 43210"
                  className="w-full bg-slate-50 border border-slate-300 focus:border-adda-600 focus:bg-white rounded-lg pl-12 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-mono outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Target Exam *
                </label>
                <select
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-adda-600 rounded-lg px-3 py-2 text-xs text-slate-900 outline-none"
                >
                  {centre.featuredExams.map((exam) => (
                    <option key={exam} value={exam}>
                      {exam}
                    </option>
                  ))}
                  <option value="Other Govt Exams">Other Govt Exams</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Preferred Date
                </label>
                <select
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-adda-600 rounded-lg px-3 py-2 text-xs text-slate-900 outline-none"
                >
                  <option value="Today">Today (Immediate Walk-in)</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="Upcoming Monday">Upcoming Monday</option>
                  <option value="Upcoming Saturday">Upcoming Saturday</option>
                  <option value="Sunday 11:00 AM (ASAT)">Sunday 11:00 AM (ASAT)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-adda-600 hover:bg-adda-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Issuing Pass...
                  </span>
                ) : (
                  <>
                    <span>Generate Instant Offline Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Valid for {centre.name}
            </span>
            <span>No upfront payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};
