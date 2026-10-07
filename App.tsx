import React, { useState, useEffect } from 'react';
import { CENTRES_DATA } from './data/centresData';
import { Centre, LeadCaptureData, LeadType, BatchInfo, FacultyMember } from './types';
import { getSavedLeads, saveLead } from './utils/leadStorage';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LeadMagnetsArsenal } from './components/LeadMagnetsArsenal';
import { BatchScheduleSection } from './components/BatchScheduleSection';
import { FacilitiesBento } from './components/FacilitiesBento';
import { FacultySection } from './components/FacultySection';
import { ToppersSocialProof } from './components/ToppersSocialProof';
import { CentreLocationGuide } from './components/CentreLocationGuide';
import { DigitalPassModal } from './components/DigitalPassModal';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { ExamDiagnosticModal } from './components/ExamDiagnosticModal';
import { CounselorLeadsDrawer } from './components/CounselorLeadsDrawer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentCentre, setCurrentCentre] = useState<Centre>(CENTRES_DATA[0]);
  const [leads, setLeads] = useState<LeadCaptureData[]>([]);
  
  // Modals & Drawers state
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalType, setLeadModalType] = useState<LeadType>('3_DAY_DEMO_PASS');
  const [leadModalExam, setLeadModalExam] = useState<string | undefined>(undefined);
  
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isCounselorDrawerOpen, setIsCounselorDrawerOpen] = useState(false);
  const [activeDigitalPass, setActiveDigitalPass] = useState<LeadCaptureData | null>(null);

  // Load saved leads on mount
  useEffect(() => {
    setLeads(getSavedLeads());
  }, []);

  const handleLeadSubmitted = (leadData: LeadCaptureData) => {
    const saved = saveLead(leadData);
    setLeads(prev => [saved, ...prev.filter(l => l.id !== saved.id)]);
    setActiveDigitalPass(saved);
  };

  const handleOpenLeadModal = (type: LeadType = '3_DAY_DEMO_PASS', exam?: string) => {
    setLeadModalType(type);
    setLeadModalExam(exam);
    setIsLeadModalOpen(true);
  };

  const handleBookBatch = (batch: BatchInfo) => {
    handleOpenLeadModal('3_DAY_DEMO_PASS', batch.exam);
  };

  const handleBookDemoWithFaculty = (faculty: FacultyMember) => {
    handleOpenLeadModal('OFFLINE_COUNSELLING', currentCentre.featuredExams[0]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-rose-100 selection:text-adda-900">
      {/* Top Bar Header */}
      <Navbar
        currentCentre={currentCentre}
        allCentres={CENTRES_DATA}
        onSelectCentre={setCurrentCentre}
        onOpenLeadModal={(type) => handleOpenLeadModal(type as LeadType || '3_DAY_DEMO_PASS')}
        onOpenCounselorDrawer={() => setIsCounselorDrawerOpen(true)}
        leadCount={leads.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with Direct Lead Capture Form */}
        <HeroSection
          centre={currentCentre}
          onLeadSubmitted={handleLeadSubmitted}
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* 2. The 4 Irresistible Offline Lead Magnets */}
        <LeadMagnetsArsenal
          centre={currentCentre}
          onSelectLeadMagnet={(type) => handleOpenLeadModal(type)}
        />

        {/* 3. Upcoming In-Person Batches Schedule */}
        <BatchScheduleSection
          centre={currentCentre}
          onBookBatch={handleBookBatch}
        />

        {/* 4. Infrastructure & Campus Bento Tour */}
        <FacilitiesBento
          centre={currentCentre}
          onClaimDemo={() => handleOpenLeadModal('3_DAY_DEMO_PASS')}
        />

        {/* 5. Master Educators & Faculty Lineup */}
        <FacultySection
          centre={currentCentre}
          onBookDemoWithFaculty={handleBookDemoWithFaculty}
        />

        {/* 6. Real Selections & Hall of Fame (Proof Adjacent) */}
        <ToppersSocialProof centre={currentCentre} />

        {/* 7. Individual Centre Location, Transit & Walk-in Guide */}
        <CentreLocationGuide
          centre={currentCentre}
          onBookVisit={() => handleOpenLeadModal('3_DAY_DEMO_PASS')}
        />
      </main>

      {/* Footer */}
      <Footer
        centre={currentCentre}
        allCentres={CENTRES_DATA}
        onSelectCentre={setCurrentCentre}
        onOpenCounselorDrawer={() => setIsCounselorDrawerOpen(true)}
      />

      {/* Mobile Floating Sticky Action Bar (strictly <= 15% viewport) */}
      <MobileStickyBar
        centre={currentCentre}
        onClaimDemo={() => handleOpenLeadModal('3_DAY_DEMO_PASS')}
      />

      {/* Interactive Modal: General Lead Magnet Capture */}
      {isLeadModalOpen && (
        <LeadCaptureModal
          centre={currentCentre}
          initialType={leadModalType}
          initialExam={leadModalExam}
          onClose={() => setIsLeadModalOpen(false)}
          onLeadSubmitted={handleLeadSubmitted}
        />
      )}

      {/* Interactive Modal: 60-Second Exam Readiness & Scholarship Diagnostic */}
      {isDiagnosticOpen && (
        <ExamDiagnosticModal
          centre={currentCentre}
          onClose={() => setIsDiagnosticOpen(false)}
          onClaimVoucherAndDemo={handleLeadSubmitted}
        />
      )}

      {/* Interactive Modal: Generated Digital Admit Card / Classroom Pass */}
      {activeDigitalPass && (
        <DigitalPassModal
          lead={activeDigitalPass}
          centre={currentCentre}
          onClose={() => setActiveDigitalPass(null)}
        />
      )}

      {/* Centre Admissions & Counsellor Leads Management Drawer */}
      <CounselorLeadsDrawer
        isOpen={isCounselorDrawerOpen}
        onClose={() => setIsCounselorDrawerOpen(false)}
        leads={leads}
        centre={currentCentre}
      />
    </div>
  );
};

export default App;