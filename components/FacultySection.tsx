import React from 'react';
import { Centre, FacultyMember } from '../types';
import { Award, GraduationCap, ArrowRight } from 'lucide-react';

interface FacultySectionProps {
  centre: Centre;
  onBookDemoWithFaculty: (faculty: FacultyMember) => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({
  centre,
  onBookDemoWithFaculty,
}) => {
  return (
    <section id="faculty" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold text-adda-600 uppercase tracking-wider mb-2">
              Teaching Credentials
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Learn Directly from Master Educators
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
              Our offline educators are author-teachers with over a decade of classroom mastery, responsible for thousands of rank-holders in SSC, Banking, and State Services.
            </p>
          </div>

          <div className="text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg shrink-0">
            {centre.stats.facultyCount} Senior Subject Experts at {centre.city} Centre
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {centre.faculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-adda-300 p-5 flex flex-col justify-between shadow-sm hover:shadow transition-all group"
            >
              <div>
                {/* Faculty Avatar Initial Box */}
                <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center font-bold text-lg font-display mb-4 group-hover:bg-rose-50 group-hover:text-adda-600 group-hover:border-rose-200 transition-colors">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>

                <div className="text-xs font-semibold text-adda-600 mb-1">
                  {member.subject}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-xs text-slate-500 mb-3">
                  {member.role}
                </div>

                {/* Experience & Selections Metadata (unboxed text) */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600 pb-3 mb-3 border-b border-slate-100">
                  <span className="font-semibold text-slate-800">{member.experience}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-emerald-700 font-semibold">{member.selectionsCount}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {member.specialty}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onBookDemoWithFaculty(member)}
                className="w-full text-xs font-semibold text-slate-700 hover:text-white bg-slate-100 hover:bg-adda-600 py-2.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span>Attend Free Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
