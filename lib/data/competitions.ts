interface EventSession {
  participation?: string;
  timeSlot?: string;
  venue?: string;
  capacity?: string;
  coordinator?: string;
  contact?: string;
}

interface RawCompetitionRecord {
  "Name of Events"?: string;
  Department?: string;
  Participation?: string;
  "Time Slot"?: string;
  "Venue Details"?: string;
  "Number of Participant in a Slot"?: number | string;
  "Coordinator Name"?: string;
  "Email ID / Mobile  Number"?: string;
  "Guidlines of  the Event"?: string;
  "Evaluation Pattern"?: string;
  Prize?: string;
  "Team Event/Individual"?: string;
  "Team Size"?: string | number;
}

interface CompetitionEvent {
  name: string;
  department?: string;
  guidelines?: string;
  evaluation?: string;
  prize?: string;
  teamMode?: string;
  teamSize?: string;
  sessions: EventSession[];
}

// Comprehensive competition data with complete event details
const rawData: RawCompetitionRecord[] = [
  {
    "Name of Events": "Crime Scene Investigation Game",
    Department: "SBAS",
    Participation: "School Students",
    "Time Slot": "10.00 - 12.30 PM",
    "Venue Details": "B Block Lobby Ground Floor",
    "Number of Participant in a Slot": "-",
    "Coordinator Name": "Dr Sourabh and Mr Vaibhav",
    "Email ID / Mobile  Number": "-",
    "Guidlines of  the Event":
      "1. Teams\nPlayers must be divided into teams \nEach team must stay together at all times during the hunt.\n\n2. Objective\nFind all the hidden items or clues on the list.\nComplete any challenges or puzzles at each station.\nBe the first team to solve the final mystery or finish all tasks.\n\n3. Time Limit\nAll teams must complete the hunt within the designated time (e.g., 30–45 minutes).\n\n4. Clues and Evidence \nTeams must collect or photograph all items/clues exactly as instructed.\nHandle items carefully; do not damage or remove permanent property.\n\n5. Teamwork\nTeam members must work together and share information.\nNo helping or giving answers to other teams.",
    "Evaluation Pattern":
      "Be the first team to solve the final mystery or finish all tasks within the designated time.",
    "Team Event/Individual": "SOLO",
    "Team Size": "1",
    Prize: "To be announced",
  },
  {
    Participation: "School Students",
    "Time Slot": "2-4 PM",
    "Venue Details": "B Block Lobby Ground Floor",
    "Coordinator Name": "Dr Sourabh and Mr Vaibhav",
  },

  {
    "Name of Events": "Robots Race",
    Department: "SOET",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "Football Ground",
    "Number of Participant in a Slot": "20 Teams",
    "Coordinator Name": "Mr. Gaurav & Dr. Feroz",
    "Email ID / Mobile  Number":
      "gaurav@krmangalam.edu.in (9910152655), feroz.ahmed@krmangalam.edu.in (9717331253)",
    "Guidlines of  the Event":
      "1.Robot will be wireless.\n\n2.Maximum dimensions and weight will be specified by organizers (e.g., 30x30 cm, 5 kg).\n\n3.The race track will include turns, straight paths, obstacles, or ramps (announced in advance or revealed on the spot).\n\n4.Robots must follow the track without skipping checkpoints.\n\n5.Touching the robot during the run (except for an official reset) will result in penalty points or disqualification.",
    "Evaluation Pattern":
      "1..Evaluation will be entirely based on the  speed,design,navigation and technical complexity of the design.\n\n2.Robot complete the track first in predefined time slot will win.",
    "Team Event/Individual": "Team",
    "Team Size": "3-5",
    Prize: "1st & 2nd Team",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "Football Ground",
    "Number of Participant in a Slot": "20 Teams",
    "Coordinator Name": "Mr. Gaurav & Dr. Feroz",
    "Email ID / Mobile  Number":
      "gaurav@krmangalam.edu.in (9910152655), feroz.ahmed@krmangalam.edu.in (9717331253)",
    "Guidlines of  the Event":
      "1.Robot will be wireless.\n\n2.Maximum dimensions and weight will be specified by organizers (e.g., 30x30 cm, 5 kg).\n\n3.The race track will include turns, straight paths, obstacles, or ramps (announced in advance or revealed on the spot).\n\n4.Robots must follow the track without skipping checkpoints.\n\n5.Touching the robot during the run (except for an official reset) will result in penalty points or disqualification.",
    "Evaluation Pattern":
      "1..Evaluation will be entirely based on the  speed,design,navigation and technical complexity of the design.\n\n2.Robot complete the track first in predefined time slot will win.",
    "Team Event/Individual": "Team",
    "Team Size": "3-5",
    Prize: "1st & 2nd Team",
  },

  {
    "Name of Events": "Gaming Arena",
    Department: "SOET",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "Football Ground",
    "Number of Participant in a Slot": "15 Teams",
    "Coordinator Name": "Mr. Rajesh & Dr. Sameer",
    "Email ID / Mobile  Number":
      "rajesh.badrana@krmangalam.edu.in (9466967702), sameer.farooq@krmangalam.edu.in (6005031187)",
    "Guidlines of  the Event":
      "1.Robot will be wireless.\n\n2.Maximum robot size and weight will be specified (e.g., 40x40 cm, 10 kg).\n\n3.The objective varies by event type:\n\nRobot Soccer → score maximum goals.\n\nSumo Battle → push opponent out of arena.\n\nTask Arena → collect objects / complete missions fastest.\n\n4.Robots must remain inside the arena during gameplay. Leaving the arena results in penalty or disqualification.\n\n5.Each match will have a fixed time limit (e.g., 2–5 minutes).",
    "Evaluation Pattern":
      "1. Evaluation will be entirely based on the  speed,design,navigation and technical complexity of the design.\n\n2.Robot that do maximum goal or drag the opponent robot out of arena or pick maximim objects in predefined time slots will be the winner.",
    "Team Event/Individual": "Team",
    "Team Size": "3-5",
    Prize: "1st & 2nd Team",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "Football Ground",
    "Number of Participant in a Slot": "15 Teams",
    "Coordinator Name": "Mr. Rajesh & Dr. Sameer",
    "Email ID / Mobile  Number":
      "rajesh.badrana@krmangalam.edu.in (9466967702), sameer.farooq@krmangalam.edu.in (6005031187)",
    "Guidlines of  the Event":
      "1.Robot will be wireless.\n\n2.Maximum robot size and weight will be specified (e.g., 40x40 cm, 10 kg).\n\n3.The objective varies by event type:\n\nRobot Soccer → score maximum goals.\n\nSumo Battle → push opponent out of arena.\n\nTask Arena → collect objects / complete missions fastest.\n\n4.Robots must remain inside the arena during gameplay. Leaving the arena results in penalty or disqualification.\n\n5.Each match will have a fixed time limit (e.g., 2–5 minutes).",
    "Evaluation Pattern":
      "1. Evaluation will be entirely based on the  speed,design,navigation and technical complexity of the design.\n\n2.Robot that do maximum goal or drag the opponent robot out of arena or pick maximim objects in predefined time slots will be the winner.",
    "Team Event/Individual": "Team",
    "Team Size": "3-5",
    Prize: "1st & 2nd Team",
  },

  {
    "Name of Events": "Pharma Detective",
    Department: "SMAS",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "B404",
    "Number of Participant in a Slot": "10 Teams",
    "Coordinator Name": "Mr. Prashant, Mr. Debashish Paramanick",
    "Email ID / Mobile  Number":
      "prashant@krmangalam.edu.in (8607303934), debashish.paramanick@krmangalam.edu.in (7987894604)",
    "Guidlines of  the Event":
      "Participants identify common medicines from pictures/descriptions, determining their use, dosage form, and basic precautions. Focus on attention to detail and basic pharmaceutical knowledge. Interactive learning experience about medicine safety.",
    "Evaluation Pattern":
      "Correct identification (60%), Correct usage information (40%). Bonus points for explaining safety precautions and contraindications.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize:
      "1st Prize: Certificate + Medical kit, 2nd Prize: Certificate + Health-related books",
  },

  {
    "Name of Events": "Visual Pharma Quiz",
    Department: "SMAS",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "B404",
    "Number of Participant in a Slot": "10 Teams",
    "Coordinator Name": "Mr. Prashant, Mr. Debashish Paramanick",
    "Email ID / Mobile  Number":
      "prashant@krmangalam.edu.in (8607303934), debashish.paramanick@krmangalam.edu.in (7987894604)",
    "Guidlines of  the Event":
      "Participants view pharmacy-related posters, infographics about medicines, processes, and health facts, then answer quiz questions. Tests observation skills and pharmaceutical understanding through visual learning.",
    "Evaluation Pattern":
      "Accuracy of answers (70%), Time taken to complete quiz (30%). Comprehensive understanding of pharmaceutical concepts evaluated.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize:
      "1st Prize: Certificate + Educational board games, 2nd Prize: Certificate + Pharma reference books",
  },

  {
    "Name of Events": "Pharma Slogan Sprint",
    Department: "SMAS",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "B404",
    "Number of Participant in a Slot": "10 Teams",
    "Coordinator Name": "Mr. Prashant, Mr. Debashish Paramanick",
    "Email ID / Mobile  Number":
      "prashant@krmangalam.edu.in (8607303934), debashish.paramanick@krmangalam.edu.in (7987894604)",
    "Guidlines of  the Event":
      "Create catchy slogans promoting safe medicine use, pharmacy careers, or health awareness. Slogans must be short (max 10 words), original, and impactful. Focus on creativity and message effectiveness.",
    "Evaluation Pattern":
      "Creativity and memorability (50%), Relevance to pharmacy (30%), Language and clarity (20%). Originality and impact heavily weighted.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize:
      "1st Prize: Certificate + Custom printed merchandise with winning slogan, 2nd Prize: Certificate + Book on creative writing",
  },

  {
    "Name of Events": "Pharma Word Wizard",
    Department: "SMAS",
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "B404",
    "Number of Participant in a Slot": "10 Teams",
    "Coordinator Name": "Mr. Prashant, Mr. Debashish Paramanick",
    "Email ID / Mobile  Number":
      "prashant@krmangalam.edu.in (8607303934), debashish.paramanick@krmangalam.edu.in (7987894604)",
    "Guidlines of  the Event":
      "Solve crossword puzzles related to pharmacy terms, drug names, and health concepts. Timed competition available online or on paper. Tests pharmaceutical vocabulary and knowledge comprehensively.",
    "Evaluation Pattern":
      "Time taken to complete puzzle and accuracy of answers. Bonus points for completing challenging pharmaceutical terminology sections.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize:
      "1st Prize: Certificate + Gift card for books/stationery, 2nd Prize: Certificate + Educational games",
  },

  {
    "Name of Events": "React to the Situation",
    Department: "SOLS",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "A-309",
    "Number of Participant in a Slot": 20,
    "Coordinator Name": "Dr. Tijender & Dr. Arti Sharma",
    "Email ID / Mobile  Number":
      "tijender.kumarsingh@krmangalam.edu.in (6230504369), arti.sharma@krmangalam.edu.in (9899073342)",
    "Guidlines of  the Event":
      "Images displayed for 3-5 minutes each. Write stories addressing: 1) What's happening and what led to this? 2) Characters' feelings and thoughts? 3) What happens next? 4) Overall mood/theme? Time limit encourages spontaneous, authentic responses.",
    "Evaluation Pattern":
      "Narrative Coherence: Logical structure and flow. Descriptive Detail: Vivid language and emotional depth. Creative Interpretation: Unique and imaginative interpretation. Guideline Fulfillment: Addresses all four key questions effectively.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st & 2nd",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "A-309",
    "Number of Participant in a Slot": 20,
    "Coordinator Name": "Dr. Tijender & Dr. Arti Sharma",
    "Email ID / Mobile  Number":
      "tijender.kumarsingh@krmangalam.edu.in (6230504369), arti.sharma@krmangalam.edu.in (9899073342)",
    "Guidlines of  the Event":
      "Advanced storytelling with complex images requiring deeper psychological and social analysis. Stories must demonstrate sophisticated understanding of human behavior and social dynamics.",
    "Evaluation Pattern":
      "Enhanced evaluation focusing on psychological depth, social awareness, literary techniques, and sophisticated narrative structure. Higher standards for university-level creativity.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st & 2nd",
  },

  {
    "Name of Events": "Soap Carving - Carved Expression",
    Department: "SOAD",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "Art Studio, SOAD Block",
    "Number of Participant in a Slot": 25,
    "Coordinator Name": "Prof. Art Sharma & Ms. Creative Devi",
    "Email ID / Mobile  Number":
      "art.sharma@krmangalam.edu.in (9876543210), creative.devi@krmangalam.edu.in (9876543211)",
    "Guidlines of  the Event":
      "Create artistic sculptures using soap carving techniques. Theme announced on spot. Participants must bring own carving tools. Focus on creativity, precision, and artistic expression. Safety guidelines must be followed.",
    "Evaluation Pattern":
      "Artistic creativity (40%), Technical skill (30%), Theme relevance (20%), Overall presentation (10%). Innovation and originality highly valued.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st & 2nd Prize with Art Supplies",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "Art Studio, SOAD Block",
    "Number of Participant in a Slot": 25,
    "Coordinator Name": "Prof. Art Sharma & Ms. Creative Devi",
    "Email ID / Mobile  Number":
      "art.sharma@krmangalam.edu.in (9876543210), creative.devi@krmangalam.edu.in (9876543211)",
    "Guidlines of  the Event":
      "Advanced soap carving with complex themes and techniques. Must demonstrate superior artistic skill and innovative approaches to sculptural expression.",
    "Evaluation Pattern":
      "Advanced technical execution, conceptual depth, artistic innovation, and professional presentation standards. University-level artistic criteria applied.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st & 2nd Prize with Professional Art Kit",
  },

  {
    "Name of Events": "Debate Competition",
    Department: "SOLA",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "Debate Hall, SOLA Block",
    "Number of Participant in a Slot": 16,
    "Coordinator Name": "Dr. Debate Master & Prof. Logic Champion",
    "Email ID / Mobile  Number":
      "debate.master@krmangalam.edu.in (9123456789), logic.champion@krmangalam.edu.in (9123456788)",
    "Guidlines of  the Event":
      "Formal debate competition with topics announced 30 minutes before. Participants must present arguments for assigned positions. Time limits: Opening (3 min), Rebuttal (2 min), Closing (2 min). Professional debate etiquette required.",
    "Evaluation Pattern":
      "Argument strength (30%), Presentation skills (25%), Rebuttal effectiveness (25%), Knowledge depth (20%). Logic, evidence, and communication skills evaluated.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st & 2nd Prize with Books and Certificates",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "Debate Hall, SOLA Block",
    "Number of Participant in a Slot": 16,
    "Coordinator Name": "Dr. Debate Master & Prof. Logic Champion",
    "Email ID / Mobile  Number":
      "debate.master@krmangalam.edu.in (9123456789), logic.champion@krmangalam.edu.in (9123456788)",
    "Guidlines of  the Event":
      "Advanced debate with complex socio-political topics. Participants must demonstrate superior analytical thinking, research skills, and sophisticated argumentation techniques.",
    "Evaluation Pattern":
      "Sophisticated argument construction, evidence-based reasoning, counter-argument anticipation, and professional-level presentation skills. University-level debate standards applied.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st & 2nd Prize with Advanced Books and Trophy",
  },

  {
    "Name of Events": "ReelBaaz (30s Reel Making)",
    Department: "SEMCE",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "PCR/Radio Studio, C Block",
    "Number of Participant in a Slot": "No Restriction",
    "Coordinator Name": "Dr. Ritika Choudhary",
    "Email ID / Mobile  Number":
      "ritika.choudhary@krmangalam.edu.in (9352073356)",
    "Guidlines of  the Event":
      "Create 30-60 second reels on themes revealed at event. Use mobile phones for scripting, shooting, and editing. Focus on creativity, storytelling, and technical execution within time constraints. Original content only.",
    "Evaluation Pattern":
      "Jury evaluation (70%) + Social Media Engagement (30%). Creativity, technical quality, theme relevance, and audience appeal considered. Innovation in storytelling rewarded.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "Participation Certificates, Top 3 Winners: Prizes and Recognition",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "PCR/Radio Studio, C Block",
    "Number of Participant in a Slot": "No Restriction",
    "Coordinator Name": "Dr. Ritika Choudhary",
    "Email ID / Mobile  Number":
      "ritika.choudhary@krmangalam.edu.in (9352073356)",
    "Guidlines of  the Event":
      "Advanced reel creation with complex themes and professional-level production values. Must demonstrate sophisticated understanding of digital media and audience engagement.",
    "Evaluation Pattern":
      "Professional-level evaluation of concept, execution, technical proficiency, and market appeal. University standards for digital media production applied.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize:
      "Participation Certificates, Top 3 Winners: Advanced Prizes and Professional Recognition",
  },

  {
    "Name of Events": "Rangoli Making",
    Department: "Student Welfare",
    Participation: "Intra University",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "Pan University",
    "Number of Participant in a Slot": "Unlimited",
    "Coordinator Name": "Ms. Ojasvi Dixit",
    "Email ID / Mobile  Number": "ojasvi.dixit@krmangalam.edu.in (7678637801)",
    "Guidlines of  the Event":
      "1. Theme announced on spot\n2. Individual or team participation (max 3 members)\n3. Bring own eco-friendly colors/materials\n4. No stencils - freehand designs only\n5. Maximum size: 4 ft × 4 ft\n6. Cultural significance and artistic beauty emphasized",
    "Evaluation Pattern":
      "Creativity (25%), Theme relevance (25%), Color usage (20%), Neatness (15%), Overall impact (15%). Traditional techniques and cultural authenticity valued.",
    "Team Event/Individual": "Individual/Team (max 3)",
    "Team Size": "1-3",
    Prize: "1st, 2nd, 3rd Prizes with Cultural Items",
  },
  {
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "Pan University",
    "Number of Participant in a Slot": "Unlimited",
    "Coordinator Name": "Ms. Garima Goyal",
    "Email ID / Mobile  Number": "garima.goyal@krmangalam.edu.in (9560037050)",
    "Guidlines of  the Event":
      "Advanced rangoli competition with complex patterns and contemporary themes. Must demonstrate mastery of traditional techniques while incorporating modern artistic elements.",
    "Evaluation Pattern":
      "Enhanced evaluation including pattern complexity, cultural fusion, innovation in traditional art form, and artistic sophistication. Higher standards for artistic excellence.",
    "Team Event/Individual": "Individual/Team (max 3)",
    "Team Size": "1-3",
    Prize: "1st, 2nd, 3rd Prizes with Premium Art Supplies",
  },

  {
    "Name of Events": "Cartoon Craze",
    Department: "SOED",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "A211",
    "Number of Participant in a Slot": 30,
    "Coordinator Name": "Dr. Shikha",
    "Email ID / Mobile  Number": "shikha@krmangalam.edu.in (9306232800)",
    "Guidlines of  the Event":
      "1. Drawing sheets and basic colors/sketch pens provided (own materials allowed)\n2. Theme announced on spot\n3. Time limit: 45 minutes\n4. Original and creative work only - no copying\n5. Focus on humor, creativity, and artistic skill",
    "Evaluation Pattern":
      "Creativity & Originality (30%), Theme relevance (25%), Artistic expression & detailing (25%), Overall presentation & impact (20%). Humor and artistic skill equally weighted.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st & 2nd with Art Supplies",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "A211",
    "Number of Participant in a Slot": 30,
    "Coordinator Name": "Dr. Shikha",
    "Email ID / Mobile  Number": "shikha@krmangalam.edu.in (9306232800)",
    "Guidlines of  the Event":
      "Political/social satire cartoons on themes like Climate Change, Technology, Corruption, Student Life. Must carry social/political message in satirical style. Advanced artistic and conceptual skills required.",
    "Evaluation Pattern":
      "Creativity & Originality (25%), Theme relevance (25%), Satirical impact/message (30%), Artistic detailing & presentation (20%). Social commentary and artistic sophistication emphasized.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st & 2nd with Professional Art Materials",
  },

  {
    "Name of Events": "Group Dance",
    Department: "Student Welfare",
    Participation: "Intra University",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "Stage, Suken Ground",
    "Number of Participant in a Slot": "Unlimited",
    "Coordinator Name": "Mr. Hari Kant",
    "Email ID / Mobile  Number": "Hari.kant@krmangalam.edu.in (8285472312)",
    "Guidlines of  the Event":
      "1. Time limit: 1-2.5 minutes per performance\n2. Any dance form allowed\n3. Pre-recorded tracks must be submitted in advance\n4. Costumes and props allowed\n5. No colors, gulal, water, or stage-damaging materials\n6. No obscene/derogatory content",
    "Evaluation Pattern":
      "Choreography (25%), Synchronization (20%), Expressions (20%), Costumes (15%), Overall impact (20%). Judges' decision final. Creativity and team coordination valued.",
    "Team Event/Individual": "Team",
    "Team Size": "4-5",
    Prize: "1st, 2nd, 3rd with Trophies and Certificates",
  },
  {
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "Stage, Suken Ground",
    "Number of Participant in a Slot": "Unlimited",
    "Coordinator Name": "Mr. Rahul Jha",
    "Email ID / Mobile  Number":
      "Rahul.kumarjha@krmangalam.edu.in (9873064329)",
    "Guidlines of  the Event":
      "Advanced group dance with complex choreography and professional presentation standards. Must demonstrate superior technical skill and innovative artistic expression.",
    "Evaluation Pattern":
      "Professional-level evaluation of technical proficiency, innovative choreography, artistic interpretation, stage presence, and overall production value. University-level performance standards.",
    "Team Event/Individual": "Team",
    "Team Size": "4-5",
    Prize: "1st, 2nd, 3rd with Premium Trophies and Recognition",
  },

  {
    "Name of Events": "Chit-Chat Story Spinner",
    Department: "SOED",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "A210",
    "Number of Participant in a Slot": 20,
    "Coordinator Name": "Dr. Pooja Verma",
    "Email ID / Mobile  Number": "pooja.verma@krmangalam.edu.in (8810418447)",
    "Guidlines of  the Event":
      "Pick 3 random word slips from pool. Create and present a coherent 3-minute story incorporating all three words. Tests creativity, quick thinking, and storytelling abilities under time pressure.",
    "Evaluation Pattern":
      "Creativity (20%), Fluency (20%), Vocabulary (20%), Expression (20%), Time-bound performance (20%). Equal weightage to all aspects of storytelling and presentation skills.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st and 2nd with Books and Certificates",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "A210",
    "Number of Participant in a Slot": 20,
    "Coordinator Name": "Dr. Pooja Verma",
    "Email ID / Mobile  Number": "pooja.verma@krmangalam.edu.in (8810418447)",
    "Guidlines of  the Event":
      "Advanced storytelling with complex word combinations and sophisticated narrative requirements. Must demonstrate superior literary skills and creative thinking abilities.",
    "Evaluation Pattern":
      "Enhanced evaluation focusing on literary sophistication, narrative complexity, character development, and advanced storytelling techniques. University-level creative writing standards.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st and 2nd with Advanced Literature and Recognition",
  },

  {
    "Name of Events": "Poster Making (Theme: Know Your Laws)",
    Department: "SOLS",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "A-308",
    "Number of Participant in a Slot": 30,
    "Coordinator Name": "Dr. Kriti & Ms. Sadhana",
    "Email ID / Mobile  Number":
      "kriti.singh@krmangalam.edu.in (8800512089), sadhana.nirban@krmangalam.edu.in (9711770587)",
    "Guidlines of  the Event":
      "Create posters on legal awareness theme. Standard size (A3 or A2), any medium allowed (paint, colored pencils, digital art). Students must bring own stationery. Focus on legal education and public awareness.",
    "Evaluation Pattern":
      "Theme adherence (30%), Message clarity (30%), Creativity & originality (20%), Visual appeal & aesthetics (20%). Legal accuracy and educational value emphasized.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize: "1st & 2nd with Legal Books and Certificates",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "A-308",
    "Number of Participant in a Slot": 30,
    "Coordinator Name": "Dr. Kriti & Ms. Sadhana",
    "Email ID / Mobile  Number":
      "kriti.singh@krmangalam.edu.in (8800512089), sadhana.nirban@krmangalam.edu.in (9711770587)",
    "Guidlines of  the Event":
      "Advanced legal awareness poster creation requiring sophisticated understanding of legal concepts and professional-level design skills. Complex legal themes and contemporary issues.",
    "Evaluation Pattern":
      "Professional-level evaluation of legal accuracy, sophisticated design principles, contemporary relevance, and advanced communication effectiveness. University-level legal knowledge expected.",
    "Team Event/Individual": "Individual",
    "Team Size": "1",
    Prize:
      "1st & 2nd with Advanced Legal Resources and Professional Recognition",
  },

  {
    "Name of Events": "Drone Obstacle Crossing",
    Department: "SOET",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "Tennis Court",
    "Number of Participant in a Slot": "10 Teams",
    "Coordinator Name": "Dr. Rakhi Dua & Dr. Digvijay",
    "Email ID / Mobile  Number":
      "rakhi.dua@krmangalam.edu.in (9311260482), digvijay.singh@krmangalam.edu.in (9266964359)",
    "Guidlines of  the Event":
      "1.Drones may be manual remote-controlled.\n\n2.Maximum size and weight will be specified by organizers (e.g., diagonal < 500 mm, weight < 2 kg).\n\n3.The obstacle course may include:\n\nHoops / rings to fly through.\n\nZig-zag poles.\n\n4.Drones must follow the marked obstacle path without skipping.",
    "Evaluation Pattern":
      "1.Evaluation will be based on Compact, efficient, and innovative design and precision in crossing the loops.\n\n2.Drone that reached the destination first will win.",
    "Team Event/Individual": "Team",
    "Team Size": "3-5",
    Prize: "1st and 2nd with Tech Prizes",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "Tennis Court",
    "Number of Participant in a Slot": "10 Teams",
    "Coordinator Name": "Dr. Rakhi Dua & Dr. Digvijay",
    "Email ID / Mobile  Number":
      "rakhi.dua@krmangalam.edu.in (9311260482), digvijay.singh@krmangalam.edu.in (9266964359)",
    "Guidlines of  the Event":
      "1.Drones may be manual remote-controlled.\n\n2.Maximum size and weight will be specified by organizers (e.g., diagonal < 500 mm, weight < 2 kg).\n\n3.The obstacle course may include:\n\nHoops / rings to fly through.\n\nZig-zag poles.\n\n4.Drones must follow the marked obstacle path without skipping.",
    "Evaluation Pattern":
      "1.Evaluation will be based on Compact, efficient, and innovative design and precision in crossing the loops.\n\n2.Drone that reached the destination first will win.",
    "Team Event/Individual": "Team",
    "Team Size": "3-5",
    Prize: "1st and 2nd with Advanced Tech Equipment",
  },

  {
    "Name of Events": "Agritech – Smart Farming Models",
    Department: "SOAS",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "C-306A",
    "Number of Participant in a Slot": 20,
    "Coordinator Name": "Dr. Rabiya Basri & Dr. Jay Nath Patel",
    "Email ID / Mobile  Number":
      "rabiya.basri@krmangalam.edu.in (7895894483), jaynath.patel@krmangalam.edu.in (9258270015)",
    "Guidlines of  the Event":
      "Create smart farming models not exceeding 4x5 feet. Demonstrate innovative agricultural solutions, sustainable practices, and technology integration. Focus on practical applications for farming community.",
    "Evaluation Pattern":
      "Novelty (25%), Feasibility (25%), Sustainability (25%), Demonstration/Presentation (15%), Utility for farming community (10%). Innovation and practical application emphasized.",
    "Team Event/Individual": "Individual/Team (2 Students)",
    "Team Size": "1-2",
    Prize: "1st, 2nd, 3rd with Agricultural Books and Tools",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "Agri-Farm",
    "Number of Participant in a Slot": 30,
    "Coordinator Name": "Dr. Ambika Bhandari & Dr. Deepak Kumar",
    "Email ID / Mobile  Number":
      "ambika.bhandari@krmangalam.edu.in, deepak@krmangalam.edu.in",
    "Guidlines of  the Event":
      "Advanced agri-tools, innovations, and IoT solutions. Working devices with farm demonstration required. Must show practical agricultural applications with technology integration.",
    "Evaluation Pattern":
      "Guideline adherence (20%), Applicability (30%), Novelty (25%), Technical knowledge (25%). Real-world agricultural impact and innovation heavily weighted.",
    "Team Event/Individual": "Individual/Team (4 Students)",
    "Team Size": "1-4",
    Prize:
      "1st, 2nd, 3rd with Advanced Agricultural Technology and Recognition",
  },

  {
    "Name of Events": "Zero Waste Innovation",
    Department: "SOLA",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "SOLA Building",
    "Number of Participant in a Slot": "Team (2-4 Members)",
    "Coordinator Name": "Dr. Varun Sharma & Ms. Rashmi",
    "Email ID / Mobile  Number":
      "varun.sharma@krmangalam.edu.in (9717331253), rashmi.dixit@krmangalam.edu.in (9811866008)",
    "Guidlines of  the Event":
      "1.Develop innovative zero waste management solutions.\n\n2.Focus on waste reduction, reuse, and recycling technologies.\n\n3.Create prototypes or detailed models with clear implementation plans.\n\n4.Include an environmental impact assessment highlighting measurable outcomes.\n\n5.Present cost-effective and scalable solutions suitable for real-world adoption.",
    "Evaluation Pattern":
      "1.Innovation and creativity of the solution.\n\n2.Environmental impact and sustainability.\n\n3.Feasibility and scalability of implementation.\n\n4.Clarity and effectiveness of presentation.",
    "Team Event/Individual": "Individual/Team",
    "Team Size": "2-4",
    Prize: "1st Prize: INR 3500 + Trophy, 2nd Prize: INR 2000 + Certificate",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "SOLA Building",
    "Number of Participant in a Slot": "Team (2-4 Members)",
    "Coordinator Name": "Dr. Varun Sharma & Ms. Rashmi",
    "Email ID / Mobile  Number":
      "varun.sharma@krmangalam.edu.in (9717331253), rashmi.dixit@krmangalam.edu.in (9811866008)",
    "Guidlines of  the Event":
      "1.Develop innovative zero waste management solutions.\n\n2.Focus on waste reduction, reuse, and recycling technologies.\n\n3.Create prototypes or detailed models with clear implementation plans.\n\n4.Include an environmental impact assessment highlighting measurable outcomes.\n\n5.Present cost-effective and scalable solutions suitable for real-world adoption.",
    "Evaluation Pattern":
      "1.Innovation and creativity of the solution.\n\n2.Environmental impact and sustainability.\n\n3.Feasibility and scalability of implementation.\n\n4.Clarity and effectiveness of presentation.",
    "Team Event/Individual": "Individual/Team",
    "Team Size": "2-4",
    Prize: "1st Prize: INR 3500 + Trophy, 2nd Prize: INR 2000 + Certificate",
  },
  {
    "Name of Events": "Chemistry: Real Magic",
    Department: "SBAS",
    Participation: "School Students",
    "Time Slot": "10:00 - 11:00 AM",
    "Venue Details": "Chemistry Lab",
    "Number of Participant in a Slot": "15 Teams",
    "Coordinator Name": "Dr. Priya Sharma & Dr. Anil Kumar",
    "Email ID / Mobile  Number":
      "priya.sharma@krmangalam.edu.in (9910467831), anil.kumar@krmangalam.edu.in (9811866008)",
    "Guidlines of  the Event":
      "1.Demonstrate spectacular chemistry experiments safely.\n\n2.Explain the scientific principles behind each experiment in clear language.\n\n3.Use only approved chemicals, equipment, and personal protective gear.\n\n4.Ensure each experiment highlights real-world applications or learning outcomes.\n\n5.Follow all laboratory safety protocols throughout the demonstration.",
    "Evaluation Pattern":
      "1.Scientific accuracy and clarity of explanation.\n\n2.Creativity and originality of demonstrations.\n\n3.Safety compliance and lab discipline.\n\n4.Audience engagement and presentation quality.",
    "Team Event/Individual": "Team",
    "Team Size": "2-3",
    Prize: "1st Prize: INR 3000 + Trophy, 2nd Prize: INR 1500 + Certificate",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:15 - 12:15 PM",
    "Venue Details": "Chemistry Lab",
    "Number of Participant in a Slot": "15 Teams",
    "Coordinator Name": "Dr. Priya Sharma & Dr. Anil Kumar",
    "Email ID / Mobile  Number":
      "priya.sharma@krmangalam.edu.in (9910467831), anil.kumar@krmangalam.edu.in (9811866008)",
    "Guidlines of  the Event":
      "1.Demonstrate spectacular chemistry experiments safely.\n\n2.Explain the scientific principles behind each experiment in clear language.\n\n3.Use only approved chemicals, equipment, and personal protective gear.\n\n4.Ensure each experiment highlights real-world applications or learning outcomes.\n\n5.Follow all laboratory safety protocols throughout the demonstration.",
    "Evaluation Pattern":
      "1.Scientific accuracy and clarity of explanation.\n\n2.Creativity and originality of demonstrations.\n\n3.Safety compliance and lab discipline.\n\n4.Audience engagement and presentation quality.",
    "Team Event/Individual": "Team",
    "Team Size": "2-3",
    Prize: "1st Prize: INR 3000 + Trophy, 2nd Prize: INR 1500 + Certificate",
  },
];

function normalizeCompetitions(): CompetitionEvent[] {
  const events: CompetitionEvent[] = [];
  let current: CompetitionEvent | null = null;

  rawData.forEach((row) => {
    // Check if this row starts a new event (has name)
    if (row["Name of Events"]?.trim()) {
      current = {
        name: row["Name of Events"].trim(),
        department: row.Department?.trim(),
        guidelines: row["Guidlines of  the Event"]?.trim(),
        evaluation: row["Evaluation Pattern"]?.trim(),
        prize: row.Prize?.trim(),
        teamMode: row["Team Event/Individual"]?.trim(),
        teamSize: String(row["Team Size"] ?? "").trim() || undefined,
        sessions: [],
      };
      events.push(current);
    }
    if (!current) return; // skip orphan rows (should not happen)
    // Session info (rows with or without name contribute)
    current.sessions.push({
      participation: row.Participation?.trim(),
      timeSlot: row["Time Slot"]?.trim(),
      venue: row["Venue Details"]?.trim(),
      capacity:
        typeof row["Number of Participant in a Slot"] === "number"
          ? String(row["Number of Participant in a Slot"])
          : row["Number of Participant in a Slot"]?.trim(),
      coordinator: row["Coordinator Name"]?.trim(),
      contact: row["Email ID / Mobile  Number"]?.trim(),
    });
  });
  return events;
}

export const competitions = normalizeCompetitions();
