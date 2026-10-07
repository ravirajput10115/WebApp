import { LeadCaptureData, LeadType } from '../types';

const STORAGE_KEY = 'adda247_offline_centre_leads';

export const getSavedLeads = (): LeadCaptureData[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultInitialLeads();
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load leads from localStorage', e);
    return getDefaultInitialLeads();
  }
};

export const saveLead = (lead: Omit<LeadCaptureData, 'id' | 'timestamp' | 'passCode' | 'status'>): LeadCaptureData => {
  const currentLeads = getSavedLeads();
  const passCode = `ADDA-${lead.centreId.split('-')[1]?.toUpperCase() || 'CTR'}-${Math.floor(1000 + Math.random() * 9000)}`;
  
  const newLead: LeadCaptureData = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
    passCode,
    status: 'CONFIRMED'
  };

  const updated = [newLead, ...currentLeads];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save lead', e);
  }

  return newLead;
};

export const exportLeadsToCSV = (leads: LeadCaptureData[]) => {
  if (leads.length === 0) return;
  
  const headers = ['Pass ID', 'Candidate Name', 'Phone Number', 'Target Exam', 'Lead Magnet Type', 'Centre', 'Slot Date', 'Slot Time', 'Captured Time', 'Status'];
  const rows = leads.map(l => [
    `"${l.passCode}"`,
    `"${l.fullName}"`,
    `"${l.phone}"`,
    `"${l.targetExam}"`,
    `"${l.leadType}"`,
    `"${l.centreName}"`,
    `"${l.preferredDate || 'N/A'}"`,
    `"${l.preferredTimeSlot || 'N/A'}"`,
    `"${new Date(l.timestamp).toLocaleString('en-IN')}"`,
    `"${l.status}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Adda247_Centre_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function getDefaultInitialLeads(): LeadCaptureData[] {
  return [
    {
      id: 'lead-init-1',
      fullName: 'Rahul Sharma',
      phone: '+91 98112 34567',
      targetExam: 'SSC CGL 2025-26',
      leadType: '3_DAY_DEMO_PASS',
      preferredDate: '13 Oct 2025',
      preferredTimeSlot: 'Morning Slot (8:30 AM)',
      centreId: 'delhi-mukherjee-nagar',
      centreName: 'Mukherjee Nagar Centre, Delhi',
      timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
      passCode: 'ADDA-MUKH-8241',
      status: 'CONFIRMED'
    },
    {
      id: 'lead-init-2',
      fullName: 'Pooja Verma',
      phone: '+91 97234 56789',
      targetExam: 'Banking (SBI/IBPS PO)',
      leadType: 'ASAT_SCHOLARSHIP',
      preferredDate: 'Upcoming Sunday',
      preferredTimeSlot: '11:00 AM Slot',
      centreId: 'delhi-mukherjee-nagar',
      centreName: 'Mukherjee Nagar Centre, Delhi',
      timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
      passCode: 'ADDA-MUKH-3914',
      status: 'CONFIRMED'
    },
    {
      id: 'lead-init-3',
      fullName: 'Aditya Kumar',
      phone: '+91 94567 12345',
      targetExam: 'Railways RRB NTPC',
      leadType: 'FREE_STUDY_KIT',
      preferredDate: 'Tomorrow',
      preferredTimeSlot: 'Afternoon (2:00 PM)',
      centreId: 'patna-boring-road',
      centreName: 'Boring Road Centre, Patna',
      timestamp: new Date(Date.now() - 3600000 * 9).toISOString(),
      passCode: 'ADDA-BOR-5512',
      status: 'CONFIRMED'
    }
  ];
}
