import React from 'react';
import { Centre } from '../types';
import { Phone, Ticket } from 'lucide-react';

interface MobileStickyBarProps {
  centre: Centre;
  onClaimDemo: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  centre,
  onClaimDemo,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl flex items-center gap-2.5">
      <a
        href={`tel:${centre.phone}`}
        className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
      >
        <Phone className="w-3.5 h-3.5 text-adda-600 shrink-0" />
        <span>Call Centre</span>
      </a>

      <button
        type="button"
        onClick={onClaimDemo}
        className="flex-[2] bg-adda-600 hover:bg-adda-700 text-white font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
      >
        <Ticket className="w-3.5 h-3.5 shrink-0" />
        <span>Claim Free Demo Pass</span>
      </button>
    </div>
  );
};
