import React, { useState } from 'react';
import { Centre } from '../types';
import { MapPin, Phone, ChevronDown, Check, Users, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentCentre: Centre;
  allCentres: Centre[];
  onSelectCentre: (centre: Centre) => void;
  onOpenLeadModal: (type?: string) => void;
  onOpenCounselorDrawer: () => void;
  leadCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCentre,
  allCentres,
  onSelectCentre,
  onOpenLeadModal,
  onOpenCounselorDrawer,
  leadCount,
}) => {
  const [centreDropdownOpen, setCentreDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Zone 1: Single Brand Wordmark */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <span className="bg-adda-600 text-white font-display font-extrabold text-sm md:text-base px-2.5 py-1 rounded tracking-tight transition-transform group-hover:scale-105">
                ADDA247
              </span>
              <span className="font-display font-bold text-slate-900 tracking-tight text-lg md:text-xl">
                OFFLINE
              </span>
            </a>

            {/* Centre Switcher Pill-Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCentreDropdownOpen(!centreDropdownOpen)}
                className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                title="Switch Adda247 Offline Centre"
              >
                <MapPin className="w-3.5 h-3.5 text-adda-600 shrink-0" />
                <span className="font-semibold text-slate-900 max-w-[120px] sm:max-w-[180px] md:max-w-none truncate">
                  {currentCentre.city} · {currentCentre.name.replace(' Centre', '')}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${centreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {centreDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setCentreDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-72 md:w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-20">
                    <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                      Select Adda247 Coaching Centre
                    </div>
                    <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                      {allCentres.map((centre) => {
                        const isSelected = centre.id === currentCentre.id;
                        return (
                          <button
                            key={centre.id}
                            type="button"
                            onClick={() => {
                              onSelectCentre(centre);
                              setCentreDropdownOpen(false);
                            }}
                            className={`w-full text-left p-2.5 rounded-lg text-xs md:text-sm transition-colors flex items-center justify-between cursor-pointer ${
                              isSelected ? 'bg-rose-50 text-adda-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <div>
                              <div className="font-medium text-slate-900">{centre.city} - {centre.name}</div>
                              <div className="text-[11px] text-slate-500 truncate max-w-[210px]">{centre.landmark}</div>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-adda-600 shrink-0 ml-2" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Zone 2: Navigation Links (single line, unboxed) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button 
              type="button" 
              onClick={() => scrollTo('lead-magnets')} 
              className="hover:text-adda-600 transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-700"
            >
              Free Demo & Kit
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('batches')} 
              className="hover:text-adda-600 transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-700"
            >
              Batches
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('facilities')} 
              className="hover:text-adda-600 transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-700"
            >
              Smart Class & Library
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('faculty')} 
              className="hover:text-adda-600 transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-700"
            >
              Faculty
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('results')} 
              className="hover:text-adda-600 transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-700"
            >
              Selections
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('centre-location')} 
              className="hover:text-adda-600 transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-700"
            >
              Location & Hours
            </button>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Direct Call Centre Link */}
            <a
              href={`tel:${currentCentre.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-adda-600 px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors whitespace-nowrap"
              title="Call Centre Counsellor"
            >
              <Phone className="w-3.5 h-3.5 text-adda-600" />
              <span>{currentCentre.displayPhone}</span>
            </a>

            {/* Counsellor Portal Toggle for Center Staff */}
            <button
              type="button"
              onClick={onOpenCounselorDrawer}
              className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="View Captured Leads (Counsellor Desk)"
            >
              <Users className="w-4 h-4" />
              {leadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-adda-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {leadCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => onOpenLeadModal('3_DAY_DEMO_PASS')}
              className="bg-adda-600 hover:bg-adda-700 text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Claim Free Demo Pass
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 pt-2">Navigation</div>
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <button 
              type="button" 
              onClick={() => scrollTo('lead-magnets')} 
              className="text-left px-2 py-1.5 hover:bg-slate-50 rounded"
            >
              Free 3-Day Demo & Study Kit
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('batches')} 
              className="text-left px-2 py-1.5 hover:bg-slate-50 rounded"
            >
              Upcoming Offline Batches
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('facilities')} 
              className="text-left px-2 py-1.5 hover:bg-slate-50 rounded"
            >
              Classroom & Silent Library Tour
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('faculty')} 
              className="text-left px-2 py-1.5 hover:bg-slate-50 rounded"
            >
              Expert Faculty Lineup
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('results')} 
              className="text-left px-2 py-1.5 hover:bg-slate-50 rounded"
            >
              Verified Centre Selections
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('centre-location')} 
              className="text-left px-2 py-1.5 hover:bg-slate-50 rounded"
            >
              Address & Nearest Metro
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${currentCentre.phone}`}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-slate-800 bg-slate-100 py-2.5 rounded-lg"
            >
              <Phone className="w-4 h-4 text-adda-600" />
              <span>Call Centre: {currentCentre.displayPhone}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal('3_DAY_DEMO_PASS');
              }}
              className="w-full bg-adda-600 text-white font-semibold text-sm py-2.5 rounded-lg shadow-sm"
            >
              Claim Free Demo Pass
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
