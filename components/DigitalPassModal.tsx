import React from 'react';
import { LeadCaptureData, Centre } from '../types';
import { X, CheckCircle2, QrCode, Download, Share2, MapPin, Calendar, Clock, Phone, AlertCircle } from 'lucide-react';

interface DigitalPassModalProps {
  lead: LeadCaptureData | null;
  centre: Centre;
  onClose: () => void;
}

export const DigitalPassModal: React.FC<DigitalPassModalProps> = ({
  lead,
  centre,
  onClose,
}) => {
  if (!lead) return null;

  const handlePrint = () => {
    window.print();
  };

  const getLeadTypeLabel = () => {
    switch (lead.leadType) {
      case '3_DAY_DEMO_PASS':
        return '3-Day Classroom Demo Pass & VIP Welcome Kit';
      case 'ASAT_SCHOLARSHIP':
        return 'ASAT 2025 Offline Scholarship Test Entry';
      case 'FREE_STUDY_KIT':
        return 'Free 5-Year PYQ Books & Formula Kit Voucher';
      case 'OFFLINE_COUNSELLING':
        return '1-on-1 Senior Faculty Mentorship Slot';
      default:
        return 'Official Offline Centre Pass';
    }
  };

  const shareText = `Hey! I just booked my Free Demo Pass (${lead.passCode}) for Adda247 ${centre.city} Centre for ${lead.targetExam}!`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="bg-adda-600 text-white text-xs font-black font-display px-2 py-0.5 rounded">
              ADDA247
            </span>
            <span className="font-display font-bold text-sm tracking-tight">
              OFFLINE ADMIT PASS
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pass Content Body */}
        <div className="p-6 space-y-5">
          {/* Success Banner */}
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-3.5 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <div className="text-xs">
              <strong className="font-semibold block text-emerald-950">
                Seat Reserved Successfully!
              </strong>
              Your entry pass has been generated. An SMS confirmation is on its way to +91 {lead.phone}.
            </div>
          </div>

          {/* Ticket Body (Dashed border ticket aesthetic) */}
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-5 bg-slate-50/70 relative">
            <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-bold text-adda-600 uppercase tracking-wider block">
                  {getLeadTypeLabel()}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 font-display">
                  {lead.fullName}
                </h3>
                <span className="text-xs text-slate-500 font-mono">
                  +91 {lead.phone}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Pass ID
                </span>
                <span className="text-sm font-black font-mono text-slate-900 bg-white border border-slate-200 px-2 py-1 rounded">
                  {lead.passCode}
                </span>
              </div>
            </div>

            {/* Pass Metadata Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs mb-4">
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-semibold block">Target Exam</span>
                <span className="font-semibold text-slate-900">{lead.targetExam}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-semibold block">Centre Location</span>
                <span className="font-semibold text-slate-900 truncate block">{centre.name}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-semibold block">Reporting Date</span>
                <span className="font-semibold text-slate-900">{lead.preferredDate || 'Walk-in'}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-semibold block">Preferred Slot</span>
                <span className="font-semibold text-slate-900 truncate block">{lead.preferredTimeSlot || 'Morning 8:30 AM'}</span>
              </div>
            </div>

            {/* QR Simulation & Reception Instructions */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-12 h-12 bg-white border border-slate-300 rounded-lg flex items-center justify-center text-slate-800 shadow-sm shrink-0">
                  <QrCode className="w-8 h-8 text-slate-800" />
                </div>
                <div className="text-[11px] text-slate-600 leading-tight">
                  <strong className="text-slate-900 block font-semibold">Reception Verification QR</strong>
                  Scan at front desk to redeem your 5-Year PYQ book kit.
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100/70 border border-emerald-200 px-2 py-0.5 rounded">
                  VALID FOR 7 DAYS
                </span>
              </div>
            </div>
          </div>

          {/* Centre Address Reminder */}
          <div className="text-xs text-slate-600 space-y-1 bg-white p-3 rounded-lg border border-slate-200">
            <div className="flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-adda-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900">{centre.name}:</strong> {centre.fullAddress}
              </span>
            </div>
            <div className="text-[11px] text-slate-500 pl-5">
              Landmark: {centre.landmark}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Print / Save Pass</span>
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
