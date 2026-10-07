import React, { useState } from 'react';
import { Centre, LeadCaptureData } from '../types';
import { X, Sparkles, CheckCircle2, ArrowRight, Award, Clock, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExamDiagnosticModalProps {
  centre: Centre;
  onClose: () => void;
  onClaimVoucherAndDemo: (lead: LeadCaptureData) => void;
}

export const ExamDiagnosticModal: React.FC<ExamDiagnosticModalProps> = ({
  centre,
  onClose,
  onClaimVoucherAndDemo,
}) => {
  const [step, setStep] = useState<number>(1);
  const [exam, setExam] = useState(centre.featuredExams[0] || 'SSC CGL');
  const [stage, setStage] = useState<'beginner' | 'intermediate' | 'repeater'>('beginner');
  const [hours, setHours] = useState('6 to 8 hours (Full-time aspirant)');
  const [weakSubject, setWeakSubject] = useState('Quantitative Aptitude / Maths');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const calculateResult = () => {
    let score = 65;
    if (stage === 'intermediate') score += 15;
    if (stage === 'repeater') score += 20;
    if (hours.includes('8+')) score += 10;
    
    let recommendedBatch = 'Super 30 Rankers Offline Batch';
    if (stage === 'beginner') {
      recommendedBatch = 'Foundation to Selection Comprehensive Offline Batch';
    } else if (stage === 'repeater') {
      recommendedBatch = 'Mains Target & Speed Drill Test Lab Batch';
    }

    return {
      score: Math.min(score, 92),
      recommendedBatch,
      voucherCode: `ADDA-OFFLINE-SCHOLAR-3K`,
      voucherAmount: '₹3,000'
    };
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please enter your full name');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    }

    const { recommendedBatch } = calculateResult();

    const newLead: LeadCaptureData = {
      id: `diag_${Date.now()}`,
      fullName: fullName.trim(),
      phone: cleanPhone,
      targetExam: exam,
      leadType: '3_DAY_DEMO_PASS',
      preferredDate: 'Upcoming Monday',
      preferredTimeSlot: 'Morning Slot (8:30 AM)',
      centreId: centre.id,
      centreName: centre.displayName,
      timestamp: new Date().toISOString(),
      passCode: `DIAG-${centre.city.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'CONFIRMED',
      notes: `Diagnostic: ${stage}, Weak: ${weakSubject}, Batch: ${recommendedBatch}`
    };

    onClaimVoucherAndDemo(newLead);
    onClose();
  };

  const result = calculateResult();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-600/30 text-rose-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                Exam Readiness &amp; Batch Diagnostic
              </h3>
              <p className="text-xs text-slate-400">
                Personalized 90-day offline study recommendation for {centre.name}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Diagnostic Form Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Step 1 of 3: Your Target &amp; Current Stage
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  1. Which government exam are you aiming for?
                </label>
                <select
                  value={exam}
                  onChange={(e) => setExam(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 outline-none"
                >
                  {centre.featuredExams.map((ex) => (
                    <option key={ex} value={ex}>{ex}</option>
                  ))}
                  <option value="Other Govt Exams">Other Govt Exams</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  2. What is your prior preparation background?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'beginner', label: 'Fresh Beginner', desc: 'Starting from scratch, need concept fundamentals' },
                    { value: 'intermediate', label: 'Intermediate (6+ Months)', desc: 'Know basic concepts, struggling with speed and high-level questions' },
                    { value: 'repeater', label: 'Repeat Aspirant / Given 1+ Attempt', desc: 'Appeared previously, missed cutoff by few marks' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-start gap-3 p-3 rounded-lg border text-left cursor-pointer transition-all ${
                        stage === opt.value
                          ? 'border-adda-600 bg-rose-50/60'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="stage"
                        checked={stage === opt.value}
                        onChange={() => setStage(opt.value as any)}
                        className="mt-1 text-adda-600 focus:ring-adda-500"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{opt.label}</div>
                        <div className="text-[11px] text-slate-500">{opt.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-adda-600 hover:bg-adda-700 text-white text-xs font-bold py-2.5 px-5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Step 2 of 3: Daily Routine &amp; Bottlenecks
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  3. How many daily hours can you commit at the centre &amp; library?
                </label>
                <select
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 outline-none"
                >
                  <option value="4 to 5 hours (College / Working Aspirant)">4 to 5 hours (College / Working Aspirant)</option>
                  <option value="6 to 8 hours (Full-time aspirant)">6 to 8 hours (Full-time aspirant)</option>
                  <option value="10 to 12 hours (Full-day Classroom + Library Immersion)">10 to 12 hours (Full-day Classroom + Library Immersion)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  4. Which subject causes the most negative marks or time loss?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Quantitative Aptitude / Maths',
                    'Logical & Analytical Reasoning',
                    'English Grammar & Vocab',
                    'General Awareness & Static GK'
                  ].map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => setWeakSubject(sub)}
                      className={`p-3 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer ${
                        weakSubject === sub
                          ? 'border-adda-600 bg-rose-50 text-adda-900 font-bold'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-adda-600 hover:bg-adda-700 text-white text-xs font-bold py-2.5 px-5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Generate Diagnostic &amp; Voucher</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-rose-50/70 border border-adda-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-rose-200/60">
                  <div className="text-xs font-bold text-adda-700 uppercase tracking-wider">
                    Diagnostic Analysis Complete
                  </div>
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Score: {result.score}/100 Readiness
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div>
                    <strong className="text-slate-900">Recommended Offline Track:</strong>{' '}
                    <span className="font-semibold text-adda-700">{result.recommendedBatch}</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Priority Fix:</strong> Daily 1-on-1 doubt counter session for{' '}
                    <span className="font-semibold text-slate-900">{weakSubject}</span>.
                  </div>
                  <div className="pt-2 flex items-center justify-between border-t border-rose-200/60 text-xs">
                    <span className="font-semibold text-slate-900">Offline Tuition Waiver Granted:</span>
                    <span className="text-sm font-extrabold text-adda-700 font-mono">
                      {result.voucherAmount} OFF
                    </span>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleFinish} className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Your Name (to issue voucher &amp; 3-Day Demo Pass) *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter candidate name"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Mobile Number (to receive voucher code on WhatsApp) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-mono">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-12 pr-3 py-2.5 text-xs sm:text-sm font-mono outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-adda-600 hover:bg-adda-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Claim ₹3,000 Waiver &amp; Book Demo Seat</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
