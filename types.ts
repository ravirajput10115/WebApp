/**
 * Adda247 Offline Coaching Centres - Type Definitions
 */

export type ExamCategory = 
  | 'SSC'
  | 'BANKING'
  | 'RAILWAYS'
  | 'STATE_EXAMS'
  | 'DEFENCE'
  | 'TEACHING';

export interface BatchInfo {
  id: string;
  exam: string;
  category: ExamCategory;
  batchName: string;
  startDate: string;
  timing: string;
  duration: string;
  facultyInCharge: string;
  seatsRemaining: number;
  totalSeats: number;
  mode: string;
  highlights: string[];
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  subject: string;
  experience: string;
  selectionsCount: string;
  specialty: string;
  avatarUrl?: string;
}

export interface SelectionTopper {
  id: string;
  name: string;
  exam: string;
  rankOrPost: string;
  year: string;
  centre: string;
  quote: string;
  avatarUrl?: string;
}

export interface Centre {
  id: string;
  name: string;
  displayName: string;
  city: string;
  state: string;
  fullAddress: string;
  landmark: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  timings: string;
  nearestMetroOrStation: string;
  googleMapsDirectionsUrl: string;
  images: {
    hero: string;
    classroom: string;
    library: string;
    counselling: string;
    studyKit: string;
  };
  stats: {
    studentsTrained: string;
    selectionsCount: string;
    facultyCount: number;
    googleRating: number;
    reviewCount: number;
  };
  featuredExams: string[];
  upcomingBatches: BatchInfo[];
  faculty: FacultyMember[];
  toppers: SelectionTopper[];
  amenities: {
    title: string;
    description: string;
  }[];
}

export type LeadType = 
  | '3_DAY_DEMO_PASS'
  | 'ASAT_SCHOLARSHIP'
  | 'FREE_STUDY_KIT'
  | 'OFFLINE_COUNSELLING'
  | 'EXAM_ROADMAP';

export interface LeadCaptureData {
  id: string;
  fullName: string;
  phone: string;
  targetExam: string;
  leadType: LeadType;
  preferredDate?: string;
  preferredTimeSlot?: string;
  centreId: string;
  centreName: string;
  timestamp: string;
  passCode: string;
  status: 'CONFIRMED' | 'CONTACTED' | 'ATTENDED_DEMO';
  notes?: string;
}

export interface DiagnosticAssessment {
  exam: string;
  preparationStage: 'beginner' | 'intermediate' | 'repeater';
  dailyHours: string;
  weakSubject: string;
  recommendedBatch: string;
  estimatedTimeline: string;
  readinessScore: number;
  scholarshipGrant: string;
}
