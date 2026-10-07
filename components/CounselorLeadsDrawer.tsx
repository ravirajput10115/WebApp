import React, { useState } from 'react';
import { LeadCaptureData, Centre } from '../types';
import { X, Download, Phone, MessageSquare, Search, Filter, CheckCircle2, Clock } from 'lucide-react';
import { exportLeadsToCSV } from '../utils/leadStorage';

interface CounselorLeadsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  leads: LeadCaptureData[];
  centre: Centre;
}

export const CounselorLeadsDrawer: React.FC<CounselorLeadsDrawerProps> = ({
  isOpen,
  onClose,
  leads,
  centre,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterExam, setFilterExam] = useState('ALL');

  if (!isOpen) return null;

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.passCode.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExam = filterExam === 'ALL' || lead.targetExam === filterExam;

    return matchesSearch && matchesExam;
  });

  const uniqueExams = Array.from(new Set(leads.map(l => l.targetExam)));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm flex justify-end">
      <div 
        className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">
              Centre Admissions Desk CRM
            </div>
            <h3 className="text-base sm:text-lg font-bold font-display text-white">
              Captured Inbound Leads ({leads.length})
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Live registrations for {centre.name}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => exportLeadsToCSV(filteredLeads)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-1.5 px-3 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download CSV for CRM import"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by student name, phone, or pass code..."
              className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-900 outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <select
              value={filterExam}
              onChange={(e) => setFilterExam(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 outline-none"
            >
              <option value="ALL">All Exams</option>
              {uniqueExams.map((ex) => (
                <option key={ex} value={ex}>{ex}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Leads Table / List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-slate-100 space-y-3">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              No leads match your filter.
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="pt-3 pb-3 bg-white p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900 text-sm">{lead.fullName}</span>
                    <span className="font-mono text-[11px] font-semibold text-adda-700 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded">
                      {lead.passCode}
                    </span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-medium">
                      {lead.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
                    <span className="font-medium text-slate-800">{lead.targetExam}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-500">
                      Slot: {lead.preferredDate || 'Walk-in'} ({lead.preferredTimeSlot || 'Morning'})
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-400 text-[11px]">
                      {new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {lead.notes && (
                    <div className="text-[11px] text-slate-500 mt-1 italic">
                      {lead.notes}
                    </div>
                  )}
                </div>

                {/* Instant Counselor Contact Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`https://wa.me/91${lead.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(lead.fullName)},%20this%20is%20Adda247%20${encodeURIComponent(centre.name)}.%20We%20saw%20you%20reserved%20pass%20${lead.passCode}%20for%20${encodeURIComponent(lead.targetExam)}.%20When%20can%20we%20expect%20you%20at%20the%20centre?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                    title="Send WhatsApp message"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:+91${lead.phone.replace(/[^0-9]/g, '')}`}
                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                    title="Call student"
                  >
                    <Phone className="w-3.5 h-3.5 text-adda-600" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Leads persist locally in browser storage</span>
          <span className="font-semibold text-slate-700">Adda247 Offline Portal v2.5</span>
        </div>
      </div>
    </div>
  );
};
