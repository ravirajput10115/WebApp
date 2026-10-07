import React, { useState } from 'react';
import { Centre, BatchInfo, ExamCategory } from '../types';
import { Calendar, Clock, User, Check, Users, ArrowRight } from 'lucide-react';

interface BatchScheduleSectionProps {
  centre: Centre;
  onBookBatch: (batch: BatchInfo) => void;
}

export const BatchScheduleSection: React.FC<BatchScheduleSectionProps> = ({
  centre,
  onBookBatch,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories: { label: string; value: string }[] = [
    { label: 'All Batches', value: 'ALL' },
    { label: 'SSC Exams', value: 'SSC' },
    { label: 'Banking & Insurance', value: 'BANKING' },
    { label: 'Railways RRB', value: 'RAILWAYS' },
    { label: 'State Exams & Police', value: 'STATE_EXAMS' },
  ];

  const filteredBatches = centre.upcomingBatches.filter((batch) => {
    if (selectedCategory === 'ALL') return true;
    return batch.category === selectedCategory;
  });

  return (
    <section id="batches" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold text-adda-600 uppercase tracking-wider mb-2">
              Next In-Person Cohorts
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Upcoming Offline Batches at {centre.name}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
              Limited to 35–40 desks per classroom to guarantee every student gets individual doubt attention and mentor feedback.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons per frontend design constitution) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 bg-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBatches.map((batch) => {
            const isFillingFast = batch.seatsRemaining <= 8;
            return (
              <div
                key={batch.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-6 shadow-sm hover:shadow transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Exam & Urgency Meta (unboxed text) */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="text-xs font-semibold text-adda-600">
                      {batch.exam}
                    </div>
                    <div className="text-xs">
                      {isFillingFast ? (
                        <span className="text-rose-600 font-semibold bg-rose-50 border border-rose-200 px-2 py-0.5 rounded text-[11px]">
                          Only {batch.seatsRemaining} Seats Left
                        </span>
                      ) : (
                        <span className="text-slate-500 font-medium">
                          {batch.seatsRemaining} Desks Available
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {batch.batchName}
                  </h3>

                  {/* Batch Details List */}
                  <div className="space-y-2 text-xs text-slate-600 mb-5 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
                      <span className="font-semibold text-slate-900">Starts:</span>
                      <span>{batch.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                      <span className="font-semibold text-slate-900">Class Timings:</span>
                      <span>{batch.timing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-500 shrink-0" />
                      <span className="font-semibold text-slate-900">Faculty:</span>
                      <span className="text-slate-800">{batch.facultyInCharge}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500 shrink-0" />
                      <span className="font-semibold text-slate-900">Batch Duration:</span>
                      <span>{batch.duration} · {batch.mode}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6 space-y-1.5">
                    {batch.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Batch Action Buttons */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onBookBatch(batch)}
                    className="flex-1 bg-adda-600 hover:bg-adda-700 text-white font-semibold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Reserve Demo Seat in this Batch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`tel:${centre.phone}`}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-lg border border-slate-200 transition-colors"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
