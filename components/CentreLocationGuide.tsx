import React from 'react';
import { Centre } from '../types';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Compass, Building, HelpCircle } from 'lucide-react';

interface CentreLocationGuideProps {
  centre: Centre;
  onBookVisit: () => void;
}

export const CentreLocationGuide: React.FC<CentreLocationGuideProps> = ({
  centre,
  onBookVisit,
}) => {
  return (
    <section id="centre-location" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Centre Contact & Transit Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-bold text-adda-600 uppercase tracking-wider mb-2">
                Visit Campus
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                Location &amp; Visiting Hours
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                You are always welcome to walk in for a live classroom tour, speak with senior counselors, or browse our printed study library.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-5">
              {/* Full Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-adda-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Centre Address
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {centre.fullAddress}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    <strong className="text-slate-700">Landmark:</strong> {centre.landmark}
                  </p>
                </div>
              </div>

              {/* Transit & Metro */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-200/70">
                <Compass className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Nearest Metro &amp; Transit
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {centre.nearestMetroOrStation}
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-200/70">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Operating Schedule
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {centre.timings}
                  </p>
                  <span className="text-[11px] text-slate-500">
                    Counselling Desk &amp; Library open on all Sundays &amp; Public Holidays.
                  </span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${centre.whatsappNumber}?text=Hi%20Adda247%20${encodeURIComponent(centre.name)},%20I%20would%20like%20to%20know%20about%20upcoming%20offline%20batches.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-4 rounded-lg inline-flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Centre Desk</span>
                </a>

                <a
                  href={`tel:${centre.phone}`}
                  className="bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs py-2.5 px-4 rounded-lg border border-slate-300 inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-adda-600" />
                  <span>Call {centre.displayPhone}</span>
                </a>

                <a
                  href={centre.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-adda-600 hover:text-adda-700 inline-flex items-center gap-1.5 py-2 px-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Centre Map Card & Reception Guide */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-lg border border-slate-800 p-6 sm:p-7">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {centre.city} Centre Desk Live
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Open Today till 9:00 PM
                </span>
              </div>

              <div className="py-6 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  What Happens When You Walk In?
                </h3>
                <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                  <li className="leading-relaxed">
                    <strong className="text-white">Reception Check-in:</strong> Show your SMS/digital pass to collect your free 5-Year PYQ handbook.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Classroom Live Observation:</strong> Sit inside the ongoing smart lecture to experience faculty interaction.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">1-on-1 Academic Audit:</strong> Meet senior subject mentor for your custom syllabus schedule.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Library Seat Selection:</strong> Inspect the 70-seater silent study room and reserve your desk.
                  </li>
                </ol>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3 justify-between">
                <div className="text-xs text-slate-400 text-center sm:text-left">
                  Need directions assistance? Our front desk is ready to guide you.
                </div>
                <button
                  type="button"
                  onClick={onBookVisit}
                  className="w-full sm:w-auto bg-adda-600 hover:bg-adda-500 text-white text-xs font-bold py-2.5 px-5 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Schedule Campus Walk-in
                </button>
              </div>
            </div>

            {/* Quick Note about Hostels / Outstation Aspirants */}
            <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-4 flex items-start gap-3">
              <Building className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <strong className="font-semibold block mb-0.5">Outstation Aspirants Notice:</strong>
                Approved student hostels and paying guest (PG) accommodations with food facilities are available within 300 meters of the {centre.name}. Request hostel tie-up assistance at reception.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
