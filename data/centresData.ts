import { Centre } from '../types';

export const CENTRES_DATA: Centre[] = [
  {
    id: 'delhi-mukherjee-nagar',
    name: 'Mukherjee Nagar Centre',
    displayName: 'Adda247 Offline Centre - Mukherjee Nagar, Delhi',
    city: 'Delhi',
    state: 'Delhi NCR',
    fullAddress: 'Plot No. 711, 2nd & 3rd Floor, Above Punjab National Bank, Main Commercial Complex, Mukherjee Nagar, New Delhi - 110009',
    landmark: 'Near Batra Cinema & PNB Bank, 5 min from GTB Nagar Metro Station (Gate No. 2)',
    phone: '+919958605051',
    displayPhone: '+91 99586 05051',
    whatsappNumber: '919958605051',
    email: 'mukherjee.nagar@adda247.com',
    timings: 'Monday to Sunday · 7:00 AM to 9:00 PM',
    nearestMetroOrStation: 'GTB Nagar Metro Station (Yellow Line, Gate No. 2, 800m walk / e-rickshaw)',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Mukherjee+Nagar+Delhi+Adda247',
    images: {
      hero: '/src/assets/images/centre_classroom_1791225494909.jpg',
      classroom: '/src/assets/images/centre_classroom_1791225494909.jpg',
      library: '/src/assets/images/centre_library_1791225519301.jpg',
      counselling: '/src/assets/images/counselling_desk_1791225530023.jpg',
      studyKit: '/src/assets/images/prep_study_kit_1791225507186.jpg'
    },
    stats: {
      studentsTrained: '48,000+',
      selectionsCount: '12,400+',
      facultyCount: 18,
      googleRating: 4.8,
      reviewCount: 3410
    },
    featuredExams: ['SSC CGL & CHSL', 'Banking (SBI/IBPS PO)', 'Railways (RRB NTPC)', 'Delhi Police & DSSSB', 'State PSC'],
    amenities: [
      {
        title: 'Acoustic Smart Classrooms',
        description: '4K interactive digital panels, high-clarity collar mics, and tiered seating with unrestricted sightlines.'
      },
      {
        title: 'Full Hybrid App Backup',
        description: 'Every offline classroom session is automatically uploaded in HD to your Adda247 App within 2 hours.'
      },
      {
        title: 'Dedicated 70-Seat Silent Library',
        description: 'Quiet individual study carrels with personal power sockets and 100 Mbps Wi-Fi open 7:00 AM to 9:00 PM.'
      },
      {
        title: 'Daily In-Person Doubt Counters',
        description: 'Dedicated faculty desks available for 3 hours daily after classes for 1-on-1 problem resolution.'
      },
      {
        title: 'Physical Study Kits & Printed DPPs',
        description: 'Comprehensive 8-book syllabus kit authored by Adda247 Publications, delivered on Day 1.'
      },
      {
        title: 'Weekly OMR All-India Mock Tests',
        description: 'Proctored Sunday simulations with computer-scanned OMR sheets and all-India percentile reports.'
      }
    ],
    upcomingBatches: [
      {
        id: 'batch-ssc-cgl-target',
        exam: 'SSC CGL 2025-26',
        category: 'SSC',
        batchName: 'SSC CGL Super Rankers Target Batch (Tier 1 + 2)',
        startDate: 'Monday, 13 Oct',
        timing: '8:30 AM – 1:00 PM (4.5 Hours Daily)',
        duration: '6 Months Comprehensive Course',
        facultyInCharge: 'Abhinay Sharma Sir (Quant) & Ashutosh Sir (GS)',
        seatsRemaining: 7,
        totalSeats: 35,
        mode: 'Offline Classroom + App Access',
        highlights: ['Daily 100-Question DPPs', 'Personal Doubt Counter', 'Complete 6-Book Kit']
      },
      {
        id: 'batch-bank-po-foundation',
        exam: 'SBI / IBPS PO 2025',
        category: 'BANKING',
        batchName: 'Banking Mahapack Offline Elite Batch',
        startDate: 'Wednesday, 15 Oct',
        timing: '2:00 PM – 6:30 PM (Evening Slot)',
        duration: '5 Months Foundation to Mains',
        facultyInCharge: 'Shantanu Sir (Quant) & Radhey Sir (Reasoning)',
        seatsRemaining: 11,
        totalSeats: 35,
        mode: 'Offline Classroom + Speed Drill Lab',
        highlights: ['Sectional Timed Speed Drills', 'Descriptive English Lab', 'Interview Mastery']
      },
      {
        id: 'batch-rrb-ntpc-express',
        exam: 'RRB NTPC & Group D',
        category: 'RAILWAYS',
        batchName: 'Railway NTPC CBT-1 & CBT-2 Fast-Track',
        startDate: 'Friday, 17 Oct',
        timing: '10:00 AM – 2:00 PM',
        duration: '4 Months Targeted Course',
        facultyInCharge: 'Pawan Sir (Science & GS) & Sahil Sir (Maths)',
        seatsRemaining: 9,
        totalSeats: 40,
        mode: 'Offline Classroom + OMR Tests',
        highlights: ['General Science Special Focus', '50 Offline Mock Papers', 'Formula Pocket Handbook']
      },
      {
        id: 'batch-delhi-police-dsssb',
        exam: 'Delhi Police & DSSSB 2025',
        category: 'STATE_EXAMS',
        batchName: 'Delhi Police SI / Constable Offline Batch',
        startDate: 'Monday, 20 Oct',
        timing: '3:00 PM – 7:00 PM',
        duration: '4.5 Months Exam-Centric',
        facultyInCharge: 'Praveen Sir (Reasoning) & Ankit Sir (Polity)',
        seatsRemaining: 14,
        totalSeats: 40,
        mode: 'Offline Classroom + Physical Prep Tips',
        highlights: ['Special Computer Knowledge Section', 'Previous 10-Year Question Bank', 'Bi-weekly Mock Tests']
      }
    ],
    faculty: [
      {
        id: 'fac-1',
        name: 'Er. Shantanu Shukla',
        role: 'Head of Quantitative Aptitude',
        subject: 'Quant & Advanced Maths',
        experience: '11+ Years Experience',
        selectionsCount: '15,000+ Students Selected',
        specialty: 'Speed Calculation Vedic Shortcuts, Arithmetic Mastery for Bank PO & SSC Tier-2'
      },
      {
        id: 'fac-2',
        name: 'Radhey Mohan Sir',
        role: 'Senior Faculty - Reasoning',
        subject: 'Logical & Analytical Reasoning',
        experience: '9+ Years Experience',
        selectionsCount: '12,500+ Selections',
        specialty: 'Complex High-Level Puzzles, Machine Input-Output, Critical Reasoning'
      },
      {
        id: 'fac-3',
        name: 'Dr. Ashutosh Tripathi',
        role: 'General Studies & Current Affairs Specialist',
        subject: 'General Knowledge & Static GK',
        experience: '12+ Years Teaching',
        selectionsCount: '18,000+ Selections',
        specialty: 'Polity, Indian Modern History, Monthly In-Depth Editorial Analysis'
      },
      {
        id: 'fac-4',
        name: 'Pooja Rawat Ma\'am',
        role: 'Chief English Mentor',
        subject: 'English Language & Comprehension',
        experience: '8+ Years Teaching',
        selectionsCount: '9,200+ Selections',
        specialty: 'Rule-Free English Grammar, Cloze Test & Vocabulary Retention Memory Tricks'
      }
    ],
    toppers: [
      {
        id: 'top-1',
        name: 'Aman Kumar Verma',
        exam: 'SSC CGL 2023',
        rankOrPost: 'AIR 27 · Inspector (Central Excise / GST)',
        year: '2023 Batch',
        centre: 'Mukherjee Nagar Centre',
        quote: 'The offline environment at Mukherjee Nagar Adda247 kept me accountable. The doubt counter with Shantanu Sir after daily classes cleared all speed hurdles in Quant.'
      },
      {
        id: 'top-2',
        name: 'Sneha Pandey',
        exam: 'SBI PO 2023-24',
        rankOrPost: 'Probationary Officer (SBI Corporate Centre)',
        year: '2024 Batch',
        centre: 'Mukherjee Nagar Centre',
        quote: 'Studying in the Adda247 silent library from 8 AM to 8 PM helped me eliminate mobile distractions. Offline tests mirrored the real exam pressure.'
      },
      {
        id: 'top-3',
        name: 'Rohit Choudhary',
        exam: 'RRB NTPC',
        rankOrPost: 'Station Master · Commercial Apprentice',
        year: '2023 Batch',
        centre: 'Mukherjee Nagar Centre',
        quote: 'The weekly Sunday OMR mock tests and personal counseling by centre mentors gave me the exact strategy needed to score 94.6% in CBT 2.'
      }
    ]
  },
  {
    id: 'patna-boring-road',
    name: 'Boring Road Centre',
    displayName: 'Adda247 Offline Centre - Boring Road, Patna',
    city: 'Patna',
    state: 'Bihar',
    fullAddress: '3rd Floor, Grand Shere Punjab Building, Opposite Alankar Jewellers, Boring Road Crossing, Patna, Bihar - 800001',
    landmark: 'Boring Road Crossing, near Alankar Jewellers & Pantaloons',
    phone: '+919958605052',
    displayPhone: '+91 99586 05052',
    whatsappNumber: '919958605052',
    email: 'patna.boringroad@adda247.com',
    timings: 'Monday to Sunday · 7:00 AM to 8:30 PM',
    nearestMetroOrStation: 'Patna Junction (4 km, direct autos & buses to Boring Road)',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Boring+Road+Patna+Adda247',
    images: {
      hero: '/src/assets/images/centre_classroom_1791225494909.jpg',
      classroom: '/src/assets/images/centre_classroom_1791225494909.jpg',
      library: '/src/assets/images/centre_library_1791225519301.jpg',
      counselling: '/src/assets/images/counselling_desk_1791225530023.jpg',
      studyKit: '/src/assets/images/prep_study_kit_1791225507186.jpg'
    },
    stats: {
      studentsTrained: '41,000+',
      selectionsCount: '10,800+',
      facultyCount: 16,
      googleRating: 4.9,
      reviewCount: 2890
    },
    featuredExams: ['BPSC & Bihar Daroga', 'SSC CGL / CHSL', 'Railways (RRB ALP & NTPC)', 'Banking (IBPS/SBI)', 'Bihar Police SI'],
    amenities: [
      {
        title: 'Special BPSC & State Exam Lab',
        description: 'Dedicated Bihar GK, History, and Geography state modules by top ex-civil servants.'
      },
      {
        title: 'High-Tech Digital Board Classrooms',
        description: 'Interactive audiovisual teaching with zero board-glare and air-conditioned halls.'
      },
      {
        title: 'Patna Student Silent Reading Hall',
        description: '60 seats with dedicated lockers and charging points for uninterrupted 12-hour self study.'
      },
      {
        title: 'Daily Hindi & English Batch Tracks',
        description: 'Separate batches for Hindi and Bilingual medium aspirants with customized study materials.'
      },
      {
        title: 'Bihar Daroga Physical Training Guidance',
        description: 'Weekend physical fitness and medical standards guidance from certified coaches.'
      },
      {
        title: 'Free Adda247 Digital Mahapack Access',
        description: 'Complimentary online test series with 5,000+ mock tests accessible on mobile app.'
      }
    ],
    upcomingBatches: [
      {
        id: 'batch-patna-bpsc-71',
        exam: 'BPSC 71st CCE & Daroga',
        category: 'STATE_EXAMS',
        batchName: 'BPSC Integrated Foundation Offline Batch',
        startDate: 'Tuesday, 14 Oct',
        timing: '8:00 AM – 12:30 PM',
        duration: '7 Months Intensive GS + CSAT',
        facultyInCharge: 'Ranjan Sir (Bihar Special GK) & Alok Sir (Polity)',
        seatsRemaining: 5,
        totalSeats: 35,
        mode: 'Offline Classroom + Daily Mains Answer Writing',
        highlights: ['Daily 2 Mains Answer Reviews', 'Bihar Budget & Economic Survey Kit', 'Complete NCERT Coverage']
      },
      {
        id: 'batch-patna-rrb-alp',
        exam: 'Railways RRB ALP & Technician',
        category: 'RAILWAYS',
        batchName: 'RRB ALP CBT 1 + CBT 2 Tech Batch',
        startDate: 'Thursday, 16 Oct',
        timing: '1:00 PM – 5:30 PM',
        duration: '4 Months Target Course',
        facultyInCharge: 'Amit Verma Sir (Basic Science & Engineering)',
        seatsRemaining: 8,
        totalSeats: 40,
        mode: 'Offline Classroom + Lab Workshops',
        highlights: ['Basic Science & Engineering Drawing', 'Trade Theory Practice Modules', 'Weekly Live Tests']
      },
      {
        id: 'batch-patna-ssc-cgl',
        exam: 'SSC CGL 2025',
        category: 'SSC',
        batchName: 'SSC CGL Patna Warriors Batch',
        startDate: 'Monday, 20 Oct',
        timing: '9:00 AM – 1:30 PM',
        duration: '6 Months Complete Course',
        facultyInCharge: 'Mukesh Sharma Sir (Maths) & Rajesh Sir (Reasoning)',
        seatsRemaining: 12,
        totalSeats: 35,
        mode: 'Offline Classroom + Study Kit',
        highlights: ['Maths Speed Drills 200 Qs/Day', 'Daily Current Affairs Bulletins', 'Mock Test Series']
      }
    ],
    faculty: [
      {
        id: 'fac-p1',
        name: 'Ranjan Kumar Singh',
        role: 'State PSC & Bihar Special Head',
        subject: 'Bihar Special GK, History & Polity',
        experience: '13+ Years Teaching in Patna',
        selectionsCount: '8,500+ Selections in BPSC & Daroga',
        specialty: 'Bihar History, Geography & Modern Governance'
      },
      {
        id: 'fac-p2',
        name: 'Amit Verma Sir',
        role: 'Engineering & Science Faculty',
        subject: 'General Science & Tech',
        experience: '10+ Years Experience',
        selectionsCount: '11,000+ Railway Selections',
        specialty: 'Physics, Railway Technical Mechanics, Chemistry'
      }
    ],
    toppers: [
      {
        id: 'top-p1',
        name: 'Priyanshu Ranjan',
        exam: 'BPSC 68th CCE',
        rankOrPost: 'Rank 19 · Revenue Officer (BPSC)',
        year: '2023 Batch',
        centre: 'Boring Road Patna Centre',
        quote: 'The daily answer writing sessions at Boring Road Adda247 were checked personally by Ranjan Sir. That made all the difference in my mains score.'
      }
    ]
  },
  {
    id: 'prayagraj-civil-lines',
    name: 'Civil Lines Centre',
    displayName: 'Adda247 Offline Centre - Civil Lines, Prayagraj',
    city: 'Prayagraj',
    state: 'Uttar Pradesh',
    fullAddress: '2nd Floor, Vinayak City Centre, Tashkent Marg, Civil Lines, Prayagraj (Allahabad), UP - 211001',
    landmark: 'Near Subhash Chauraha, Opposite PVR Vinayak Mall',
    phone: '+919958605053',
    displayPhone: '+91 99586 05053',
    whatsappNumber: '919958605053',
    email: 'prayagraj.civillines@adda247.com',
    timings: 'Monday to Sunday · 7:30 AM to 8:30 PM',
    nearestMetroOrStation: 'Prayagraj Junction (1.5 km, 7 min auto ride)',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Civil+Lines+Prayagraj+Adda247',
    images: {
      hero: '/src/assets/images/centre_classroom_1791225494909.jpg',
      classroom: '/src/assets/images/centre_classroom_1791225494909.jpg',
      library: '/src/assets/images/centre_library_1791225519301.jpg',
      counselling: '/src/assets/images/counselling_desk_1791225530023.jpg',
      studyKit: '/src/assets/images/prep_study_kit_1791225507186.jpg'
    },
    stats: {
      studentsTrained: '36,000+',
      selectionsCount: '9,200+',
      facultyCount: 15,
      googleRating: 4.8,
      reviewCount: 2430
    },
    featuredExams: ['UPPSC RO/ARO & PCS', 'UP Police Constable & SI', 'SSC CGL / CHSL', 'Railway RRB', 'UP Teaching (TET/Super TET)'],
    amenities: [
      {
        title: 'RO/ARO & UP GK Research Wing',
        description: 'Specialized notes on UP Samanya Gyan, Hindi grammar, and administrative letter drafting.'
      },
      {
        title: 'Spacious Tiered Classrooms',
        description: 'High capacity audio amplification, AC cooling, and clear projector visibility from every seat.'
      },
      {
        title: 'Exclusive Prayagraj Library Space',
        description: 'Open 14 hours every single day including Sundays for focused revision.'
      },
      {
        title: 'Speed Hindi Grammar Labs',
        description: 'Targeted drills to score 55+/60 in RO/ARO General Hindi paper.'
      }
    ],
    upcomingBatches: [
      {
        id: 'batch-pry-ro-aro',
        exam: 'UPPSC RO/ARO & PCS',
        category: 'STATE_EXAMS',
        batchName: 'UPPSC Samiksha Adhikari Special Target Batch',
        startDate: 'Wednesday, 15 Oct',
        timing: '8:30 AM – 1:00 PM',
        duration: '5 Months Fast-Track',
        facultyInCharge: 'Dr. Akhilesh Tripathi & Sanjay Sir (Hindi)',
        seatsRemaining: 6,
        totalSeats: 35,
        mode: 'Offline Classroom + Test Series',
        highlights: ['Daily 60 Marks Hindi Practice Test', 'Complete UP Special GK Book', 'Previous 15-Year Solved Papers']
      },
      {
        id: 'batch-pry-up-police',
        exam: 'UP Police Constable & SI',
        category: 'STATE_EXAMS',
        batchName: 'UP Police Mission Khaki Offline Batch',
        startDate: 'Monday, 20 Oct',
        timing: '2:30 PM – 6:30 PM',
        duration: '4 Months Target Course',
        facultyInCharge: 'Pradeep Sir (Maths) & Vivek Sir (Mool Vidhi)',
        seatsRemaining: 15,
        totalSeats: 45,
        mode: 'Offline Classroom + Weekly OMR Drills',
        highlights: ['Mool Vidhi & Constitution Special Notes', 'Reasoning Speed Tricks', 'Weekly OMR Rankings']
      }
    ],
    faculty: [
      {
        id: 'fac-pr1',
        name: 'Sanjay Kumar Shukla',
        role: 'Chief Hindi & Grammar Mentor',
        subject: 'General Hindi for RO/ARO & UP Exams',
        experience: '14+ Years Experience',
        selectionsCount: '16,000+ Selections in UP Exams',
        specialty: 'Samanya Hindi, Vartani, Vilom, Vakya Shuddhi, Essay Writing'
      }
    ],
    toppers: [
      {
        id: 'top-pr1',
        name: 'Vikas Mishra',
        exam: 'UPPSC RO/ARO',
        rankOrPost: 'Selected as Samiksha Adhikari (UP Secretariat)',
        year: '2023 Batch',
        centre: 'Civil Lines Prayagraj Centre',
        quote: 'Adda247 Civil Lines gave me the exact guidance for Samanya Hindi. Scoring 58/60 in Hindi was the single biggest factor for my final selection.'
      }
    ]
  },
  {
    id: 'lucknow-alambagh',
    name: 'Alambagh Centre',
    displayName: 'Adda247 Offline Centre - Alambagh, Lucknow',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    fullAddress: '1st & 2nd Floor, Above HDFC Bank, Phoenix Mall Road, Singar Nagar, Alambagh, Lucknow - 226005',
    landmark: 'Near Singar Nagar Metro Station (Gate 1), Opposite Phoenix United Mall',
    phone: '+919958605054',
    displayPhone: '+91 99586 05054',
    whatsappNumber: '919958605054',
    email: 'lucknow.alambagh@adda247.com',
    timings: 'Monday to Sunday · 7:30 AM to 8:30 PM',
    nearestMetroOrStation: 'Singar Nagar Metro Station (Red Line, 150m walk)',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Alambagh+Lucknow+Adda247',
    images: {
      hero: '/src/assets/images/centre_classroom_1791225494909.jpg',
      classroom: '/src/assets/images/centre_classroom_1791225494909.jpg',
      library: '/src/assets/images/centre_library_1791225519301.jpg',
      counselling: '/src/assets/images/counselling_desk_1791225530023.jpg',
      studyKit: '/src/assets/images/prep_study_kit_1791225507186.jpg'
    },
    stats: {
      studentsTrained: '32,000+',
      selectionsCount: '8,100+',
      facultyCount: 14,
      googleRating: 4.8,
      reviewCount: 2150
    },
    featuredExams: ['Banking (SBI/IBPS PO & Clerk)', 'SSC CGL & CHSL', 'UP Police SI', 'UPSSSC VDO & Junior Assistant'],
    amenities: [
      {
        title: 'Metro-Connected Location',
        description: 'Just 150 meters from Singar Nagar Metro Station with dedicated student parking.'
      },
      {
        title: 'Banking Speed Lab',
        description: 'Daily timed calculation drills and sectional mock speed tests.'
      },
      {
        title: '50-Seater Quiet Reading Hall',
        description: 'Wi-Fi enabled study booths open from early morning to late evening.'
      }
    ],
    upcomingBatches: [
      {
        id: 'batch-lko-bank-po',
        exam: 'SBI / IBPS PO 2025',
        category: 'BANKING',
        batchName: 'Lucknow Banking Super 40 Batch',
        startDate: 'Monday, 13 Oct',
        timing: '9:00 AM – 1:30 PM',
        duration: '5 Months Complete Program',
        facultyInCharge: 'Sudhir Sir (Quant) & Megha Ma\'am (Reasoning)',
        seatsRemaining: 8,
        totalSeats: 40,
        mode: 'Offline Classroom + Interview Training',
        highlights: ['Daily DI & Puzzle Masterclasses', 'Mock Bank Interviews', 'Free Book Kit']
      }
    ],
    faculty: [
      {
        id: 'fac-l1',
        name: 'Sudhir Srivastava',
        role: 'Head of Banking Aptitude',
        subject: 'Quant & Data Interpretation',
        experience: '11+ Years Teaching',
        selectionsCount: '10,000+ Selections',
        specialty: 'Mains Level Caselet DI & High-Speed Arithmetic Shortcuts'
      }
    ],
    toppers: [
      {
        id: 'top-l1',
        name: 'Kavita Singh',
        exam: 'IBPS PO XII',
        rankOrPost: 'Probationary Officer (Bank of Baroda)',
        year: '2023 Batch',
        centre: 'Alambagh Lucknow Centre',
        quote: 'The personal mentor support at Alambagh centre helped me overcome my fear of Mains Data Interpretation.'
      }
    ]
  },
  {
    id: 'jaipur-gopalpura',
    name: 'Gopalpura Bypass Centre',
    displayName: 'Adda247 Offline Centre - Gopalpura, Jaipur',
    city: 'Jaipur',
    state: 'Rajasthan',
    fullAddress: 'Plot No. 42-43, Main Gopalpura Bypass Road, Near Riddhi Siddhi Chauraha, Mansarovar Link, Jaipur, Rajasthan - 302018',
    landmark: 'Near Riddhi Siddhi Circle & Metro Pillar No. 64, Gopalpura Bypass',
    phone: '+919958605055',
    displayPhone: '+91 99586 05055',
    whatsappNumber: '919958605055',
    email: 'jaipur.gopalpura@adda247.com',
    timings: 'Monday to Sunday · 7:00 AM to 9:00 PM',
    nearestMetroOrStation: 'Mansarovar Metro Station (1.2 km)',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Gopalpura+Jaipur+Adda247',
    images: {
      hero: '/src/assets/images/centre_classroom_1791225494909.jpg',
      classroom: '/src/assets/images/centre_classroom_1791225494909.jpg',
      library: '/src/assets/images/centre_library_1791225519301.jpg',
      counselling: '/src/assets/images/counselling_desk_1791225530023.jpg',
      studyKit: '/src/assets/images/prep_study_kit_1791225507186.jpg'
    },
    stats: {
      studentsTrained: '38,000+',
      selectionsCount: '9,500+',
      facultyCount: 16,
      googleRating: 4.9,
      reviewCount: 2740
    },
    featuredExams: ['RAS / Rajasthan CET', 'SSC CGL & CPO', 'Railways (NTPC & Group D)', 'Rajasthan Police SI & Patwar'],
    amenities: [
      {
        title: 'Rajasthan GK & Art & Culture Cell',
        description: 'Comprehensive historical and geographical notes curated by top RAS exam specialists.'
      },
      {
        title: 'Modern 80-Seat Silent Study Library',
        description: 'Fully air conditioned with individual reading lamps and high speed fiber internet.'
      },
      {
        title: 'Special SSC CPO Physical Prep Support',
        description: 'Guidance from ex-paramilitary personnel for physical fitness and ground tests.'
      }
    ],
    upcomingBatches: [
      {
        id: 'batch-jpr-ssc-cgl',
        exam: 'SSC CGL 2025-26',
        category: 'SSC',
        batchName: 'Jaipur Super 30 CGL Target Batch',
        startDate: 'Monday, 13 Oct',
        timing: '8:00 AM – 12:30 PM',
        duration: '6 Months Intensive',
        facultyInCharge: 'Naveen Sir (Maths) & Gaurav Sir (English)',
        seatsRemaining: 4,
        totalSeats: 30,
        mode: 'Offline Classroom + App Access',
        highlights: ['Strict Batch Size of 30 Students', 'Weekly In-Person Performance Review', 'Full 8-Book Set']
      }
    ],
    faculty: [
      {
        id: 'fac-j1',
        name: 'Dr. Mahendra Bishnoi',
        role: 'Rajasthan GK & RAS Faculty',
        subject: 'Rajasthan History, Geography & Art',
        experience: '12+ Years Teaching in Jaipur',
        selectionsCount: '7,800+ Selections',
        specialty: 'Rajasthan Art, Architecture, Economic Survey & Polity'
      }
    ],
    toppers: [
      {
        id: 'top-j1',
        name: 'Deepak Meena',
        exam: 'SSC CPO 2023',
        rankOrPost: 'Sub-Inspector (Delhi Police)',
        year: '2023 Batch',
        centre: 'Gopalpura Jaipur Centre',
        quote: 'Adda247 Jaipur faculty gave personal attention on every single weak topic in English and Maths.'
      }
    ]
  },
  {
    id: 'kanpur-kakadeo',
    name: 'Kakadeo Centre',
    displayName: 'Adda247 Offline Centre - Kakadeo, Kanpur',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    fullAddress: 'Building No. 117/N/35, 1st & 2nd Floor, Main Road, Kakadeo Coaching Hub, Kanpur, UP - 208025',
    landmark: 'Near Gurudev Palace Crossing & Deoki Cinema, Kakadeo',
    phone: '+919958605056',
    displayPhone: '+91 99586 05056',
    whatsappNumber: '919958605056',
    email: 'kanpur.kakadeo@adda247.com',
    timings: 'Monday to Sunday · 7:30 AM to 8:30 PM',
    nearestMetroOrStation: 'Gurudev Palace Metro Station (Upcoming, 200m) / Rawatpur Station (1.8 km)',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Kakadeo+Kanpur+Adda247',
    images: {
      hero: '/src/assets/images/centre_classroom_1791225494909.jpg',
      classroom: '/src/assets/images/centre_classroom_1791225494909.jpg',
      library: '/src/assets/images/centre_library_1791225519301.jpg',
      counselling: '/src/assets/images/counselling_desk_1791225530023.jpg',
      studyKit: '/src/assets/images/prep_study_kit_1791225507186.jpg'
    },
    stats: {
      studentsTrained: '29,000+',
      selectionsCount: '7,400+',
      facultyCount: 14,
      googleRating: 4.8,
      reviewCount: 1980
    },
    featuredExams: ['SSC CGL & MTS', 'Railway RRB ALP/Technician', 'UP Police SI & Constable', 'Bank Clerk & PO'],
    amenities: [
      {
        title: 'Air Conditioned Smart Theatres',
        description: 'HD digital interactive displays with recording back up for revision.'
      },
      {
        title: 'In-House Testing Hall',
        description: 'Weekly printed mock tests with computerized OMR result generation.'
      },
      {
        title: 'Dedicated Kakadeo Library',
        description: '60 personal desks with charging points and silent zone rules.'
      }
    ],
    upcomingBatches: [
      {
        id: 'batch-knp-ssc-railway',
        exam: 'SSC CGL & Railway NTPC',
        category: 'SSC',
        batchName: 'Kanpur Combined Govt Exam Target Batch',
        startDate: 'Monday, 13 Oct',
        timing: '8:30 AM – 1:00 PM',
        duration: '5 Months Complete Course',
        facultyInCharge: 'Rishi Sir (Maths) & Alok Sir (Reasoning)',
        seatsRemaining: 7,
        totalSeats: 35,
        mode: 'Offline Classroom + Book Set',
        highlights: ['Maths Speed Drill Lab', 'Weekly OMR Tests', 'Daily Doubt Clearance']
      }
    ],
    faculty: [
      {
        id: 'fac-k1',
        name: 'Rishi Kant Trivedi',
        role: 'Mathematics Specialist',
        subject: 'Quantitative Aptitude & Number System',
        experience: '10+ Years Experience in Kakadeo',
        selectionsCount: '9,000+ Selections',
        specialty: 'Trigonometry, Geometry & Mental Arithmetic Speed Tricks'
      }
    ],
    toppers: [
      {
        id: 'top-k1',
        name: 'Anupam Dixit',
        exam: 'SSC CGL 2023',
        rankOrPost: 'Auditor (CAG)',
        year: '2023 Batch',
        centre: 'Kakadeo Kanpur Centre',
        quote: 'The rigorous daily schedule and printed DPP sheets at Kakadeo Adda247 gave me consistency throughout the year.'
      }
    ]
  }
];
