import React from 'react';
import { Centre } from '../types';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  centre: Centre;
  allCentres: Centre[];
  onSelectCentre: (c: Centre) => void;
  onOpenCounselorDrawer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  centre,
  allCentres,
  onSelectCentre,
  onOpenCounselorDrawer,
}) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-14 pb-20 md:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-adda-600 text-white font-display font-extrabold text-sm px-2 py-0.5 rounded">
                ADDA247
              </span>
              <span className="font-display font-bold text-white tracking-tight text-base">
                OFFLINE CENTRES
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              India&apos;s leading offline test preparation classroom network, empowering aspirants for SSC, Banking, Railways, State PSC, and Defence exams.
            </p>
            <div className="text-[11px] text-slate-500 pt-1">
              Official Lead Magnet &amp; Trial Admissions Portal
            </div>
          </div>

          {/* Current Centre Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              {centre.name} Desk
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-adda-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">{centre.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${centre.phone}`} className="hover:text-white transition-colors">
                  {centre.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${centre.email}`} className="hover:text-white transition-colors">
                  {centre.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{centre.timings}</span>
              </li>
            </ul>
          </div>

          {/* Other Regional Centres */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Explore Other Centres
            </h4>
            <ul className="space-y-1.5">
              {allCentres.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectCentre(c);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-left hover:text-white transition-colors cursor-pointer text-xs ${
                      c.id === centre.id ? 'text-adda-400 font-semibold' : 'text-slate-400'
                    }`}
                  >
                    {c.city} - {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Centre Staff & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Internal &amp; Admissions
            </h4>
            <div className="space-y-2 text-slate-400">
              <p>
                Centre counselors and front-desk managers can view and export registered leads directly:
              </p>
              <button
                type="button"
                onClick={onOpenCounselorDrawer}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold py-2 px-3 rounded-lg w-full text-center transition-colors cursor-pointer"
              >
                Open Admissions Lead Desk
              </button>
              <div className="pt-2 text-[11px] text-slate-500">
                &copy; {new Date().getFullYear()} Adda247 (Metis Eduventures Pvt Ltd). All rights reserved.
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-2">
          <div>
            <span>Adda247 Offline Centres Network · ISO 9001:2015 Certified Test Prep Partner</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.adda247.com/coaching-centers" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">
              Official Website
            </a>
            <span>·</span>
            <a href="https://www.adda247.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="https://www.adda247.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
