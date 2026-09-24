// Authoritative Events & Sessions Data (11 official events for IDEAS)
// Cleaned up to include exclusively the 11 active stakeholder-provided events.

const CULTURAL_EVENT_TITLES = new Set([
  "group dance",
  "group dance (school students)",
  "duet dance",
]);

// Raw row structure reflecting provided JSON keys
export interface RawRow {
  "Name of Events"?: string;
  Department?: string;
  Participation?: string;
  "Time Slot"?: string;
  "Venue Details"?: string;
  "Number of Participant in a Slot"?: string | number;
  "Coordinator Name"?: string;
  "Email ID / Mobile  Number"?: string;
  "Guidlines of  the Event"?: string;
  "Evaluation Pattern"?: string;
  "Team Event/Individual"?: string;
  "Team Size"?: string | number;
  Prize?: string;
  Date?: string;
  Description?: string;
  Category?: string;
  Image?: string;
}

export interface EventSession {
  participation?: string;
  timeSlot?: string;
  startTime?: string;
  endTime?: string;
  venue?: string;
  capacity?: string;
  coordinator?: string;
  contacts?: string;
  guidelines?: string;
  evaluation?: string;
  teamType?: string;
  teamSize?: string;
  prize?: string;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  department?: string;
  category: string;
  description: string;
  guidelines?: string;
  evaluation?: string;
  teamType?: string;
  teamSize?: string;
  prize?: string;
  image?: string;
  sessions: EventSession[];
  date: string;
  dateObj?: Date | null;
  location: string;
  address?: string;
  time?: string;
  type?: string;
  day?: string;
}

// Utility: build a URL-friendly slug
function slugify(title: string) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Attempt to extract start/end times from a time slot string like "10:00 - 11.00 AM" or "11:15 - 12:15 PM"
function parseTimes(slot?: string): { start?: string; end?: string } {
  if (!slot) return {};
  const cleaned = slot.replace(/\./g, ":").replace(/\s+/g, " ").trim();
  const match = cleaned.match(
    /(\d{1,2}:?\d{0,2}\s?(?:AM|PM|am|pm)?)[^0-9A-Za-z]+(\d{1,2}:?\d{0,2}\s?(?:AM|PM|am|pm)?)/,
  );
  if (match) {
    let [_, a, b] = match;
    a = a.replace(/\s+/g, "").toUpperCase();
    b = b.replace(/\s+/g, "").toUpperCase();
    if (!/AM|PM/.test(a) && /AM|PM/.test(b))
      a += b.endsWith("AM") ? "AM" : "PM";
    if (!/AM|PM/.test(b) && /AM|PM/.test(a))
      b += a.endsWith("AM") ? "AM" : "PM";
    return { start: a, end: b };
  }
  return {};
}

// Event image mapping - WebP assets for optimal loading
const eventImages: { [key: string]: string } = {
  "crime scene investigation game": "/assets/upcoming-events/up-ev-2.webp",
  "robots race": "/events/Robo race.png",
  "robo war (ai arena)": "/events/robo-war-ai-arena.webp",
  "react to the situation": "/assets/upcoming-events/up-ev-9.webp",
  "react to situation": "/assets/upcoming-events/up-ev-9.webp",
  "button masala": "/events/Button Masala.png",
  "imprint: the art of hand block printing":
    "/events/IMPRINT The Art of Hand Block Printing.png",
  "soap carving - carved expression":
    "/events/Soap Carving - Carved Expression.png",
  "soap carving – carved expression":
    "/events/Soap Carving - Carved Expression.png",
  "soap-carving-carved-expression":
    "/events/Soap Carving - Carved Expression.png",
  "debate competition": "/events/debate.jpg",
  "reelbaaz (30s reel making)": "/assets/upcoming-events/up-ev-13.webp",
  "group dance": "/events/Group Dance.png",
  "group-dance": "/events/Group Dance.png",
  "group-dance-2": "/assets/upcoming-events/up-ev-25.webp",
  "science quiz & puzzle solve based on ai theme":
    "/assets/upcoming-events/up-ev-17.webp",
  "science quiz & puzzle solve (ai theme)":
    "/assets/upcoming-events/up-ev-17.webp",
  "poster/ collage making competition  (theme: know your laws)":
    "/assets/upcoming-events/up-ev-19.webp",
  "poster/ collage making competition (theme: know your laws)":
    "/assets/upcoming-events/up-ev-19.webp",
  "poster / collage making (theme: know your laws)":
    "/assets/upcoming-events/up-ev-19.webp",
  "drone race (ai arena)": "/events/Drone Race (AI Arena).png",
  "agritech – ai smart farming models":
    "/events/Agritech – AI Smart Farming Models.png",
  "agritech - ai smart farming models":
    "/events/Agritech – AI Smart Farming Models.png",
  "zero waste innovation": "/events/Zero Waste Innovation.png",
  "tech treasure hunt": "/assets/upcoming-events/up-ev-10.webp",
  "duet dance": "/events/Duet Dance.png",
  "duet singing": "/assets/upcoming-events/up-ev-27.webp",
  "one day hackathon": "/events/One Day Hackathon.png",
  "ai teaching aid innovation challenge":
    "/assets/upcoming-events/up-ev-3.webp",
  "the beverage arena": "/assets/upcoming-events/up-ev-8.webp",
  "the beverage arena (teams represent countries and create signature beverages from those regions)":
    "/assets/upcoming-events/up-ev-8.webp",
  "robo soccer": "/assets/upcoming-events/up-ev-14.webp",
  "young ai innovators hackathon": "/assets/upcoming-events/up-ev-2.webp",
};

// Official Events Provided by Stakeholder (Prize hidden as requested)
export const rawRows: RawRow[] = [
  // 1. SBAS - Crime Scene Investigation Game
  {
    "Name of Events": "Crime Scene Investigation Game",
    Department: "SBAS – School of Basic & Applied Sciences",
    Participation: "School Students / University Students",
    "Time Slot": "10:00 AM - 12:30 PM",
    "Venue Details": "B Block Lobby Ground Floor",
    "Coordinator Name": "Dr Sourabh and Mr Vaibhav",
    "Email ID / Mobile  Number":
      "Vaibhav Saini (8178695170), Arijit Adhikari (7217674411), Tanvee Vashishth (9625124803), Kanika Sudha (8630907218)",
    Date: "27–28 October 2026",
    Category: "Technical",
    "Team Event/Individual": "TEAM",
    "Team Size": "2–5",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
    Description:
      "A simulated crime scene investigation where participants collect and document evidence, prepare crime scene sketches, analyse clues and witness statements, build criminal profiles, and identify the culprit. Teams are evaluated on evidence search, sketching accuracy, storyline formulation, profiling, and the accuracy of their final verdict.",
    "Guidlines of  the Event":
      "1. Time Management\n• The investigation phase is strictly limited to 1 hour.\n• No team is allowed back into the crime scene after the 5-minute mark.\n\n2. Evidence Handling\n• Evidence must be photographed and logged before physical collection to preserve the integrity of the scene.\n\n3. Collaboration\n• Teams must divide tasks such as sketching, searching, and profiling effectively.\n• Participants must use the provided CS kits and raw materials appropriately.\n\n4. Conduct\n• Crossing barricades outside designated entry points or tampering with another team's scene will result in immediate point deductions.\n\n5. Team Size\n• Each team must consist of a minimum of 2 and a maximum of 5 members.",
    "Evaluation Pattern":
      "Teams are evaluated on evidence search, sketching accuracy, storyline formulation, profiling, and the accuracy of their final verdict.",
  },
  {
    Participation: "University Students",
    "Time Slot": "2:00 PM - 4:00 PM",
    "Venue Details": "B Block Lobby Ground Floor",
    "Coordinator Name": "Dr Sourabh and Mr Vaibhav",
    "Email ID / Mobile  Number":
      "Vaibhav Saini (8178695170), Arijit Adhikari (7217674411), Tanvee Vashishth (9625124803), Kanika Sudha (8630907218)",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
  },

  // 2. SOET - Robots Race
  {
    "Name of Events": "Robots Race",
    Department: "SOET – School of Engineering & Technology",
    Participation: "School Students / University Students",
    "Time Slot": "10:00 AM - 12:30 PM",
    "Venue Details": "Basketball ground",
    "Coordinator Name": "Mr.Gaurav Verma/Dr.Imran Siraj",
    "Email ID / Mobile  Number": "Tanush Tyagi, Tanishka",
    Date: "27–28 October 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO / TEAM",
    "Team Size": "3–4",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
    Description:
      "A head-to-head robotic sprint on a purpose-built track featuring turns, straight runs, obstacles and ramps. Robots must follow the track without skipping checkpoints. Participants are evaluated on speed, design, navigation and technical complexity, with the robot completing the track first within the predefined time slot declared the winner.",
    "Guidlines of  the Event":
      "1. Machine Specifications\n• The robot must be wireless.\n• Maximum dimensions and weight will be specified by the organisers, such as 30 × 30 cm and 5 kg.\n\n2. Track & Run\n• The track will include turns, straight paths, obstacles or ramps.\n• The track may be announced in advance or revealed on the spot.\n• Robots must follow the track without skipping checkpoints.\n• Touching the robot during a run, except for an official reset, may result in penalty points or disqualification.\n\n3. Evaluation\n• Judging is based on speed, design, navigation and technical complexity.\n• The robot completing the track first within the predefined time slot wins.",
    "Evaluation Pattern":
      "Judging is based on speed, design, navigation and technical complexity. The robot completing the track first within the predefined time slot wins.",
  },
  {
    Participation: "University Students",
    "Time Slot": "1:30 PM Onwards",
    "Venue Details": "Basketball Ground/AI Arena",
    "Coordinator Name": "Mr.Gaurav Verma/Dr.Imran Siraj",
    "Email ID / Mobile  Number": "Tanush Tyagi, Tanishka",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
  },

  // 3. SOET - Robo War (AI Arena)
  {
    "Name of Events": "Robo War (AI Arena)",
    Department: "SOET – School of Engineering & Technology",
    Participation: "School Students / University Students",
    "Time Slot": "10:00 AM Onwards",
    "Venue Details": "Basketball ground / AI Arena",
    "Coordinator Name": "Mr.Gaurav Verma/Dr.Imran Siraj",
    "Email ID / Mobile  Number":
      "1) Umar Farooq, 2) Ayush Partap Singh, 3) Rudra Partap Singh, 4) Khushboo",
    Date: "27–28 October 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO / TEAM",
    "Team Size": "3–4",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
    Description:
      "A high-energy robotics gaming arena where student-built robots compete head-to-head in Sumo Battle, Robo Soccer and Task Arena challenges. Participants design, program and control their machines to outmanoeuvre opponents through strength, strategy and agility, showcasing innovation, teamwork and technical skill.",
    "Guidlines of  the Event":
      "1. Robot Specifications\n• The robot must be wireless.\n• Maximum robot size and weight will be specified by the organisers, such as 40 × 40 cm and 10 kg.\n\n2. Match Formats\n• Robo Soccer: Score the maximum number of goals.\n• Sumo Battle: Push the opponent out of the arena.\n• Task Arena: Collect objects or complete missions in the fastest time.\n\n3. Arena Conduct\n• Robots must remain inside the arena at all times.\n• Leaving the arena may result in penalty or disqualification.\n• Each match will have a fixed time limit of 2–5 minutes.\n\n4. Evaluation\n• Teams will be judged on speed, design, navigation and technical complexity.",
    "Evaluation Pattern":
      "Teams will be judged on speed, design, navigation and technical complexity.",
  },
  {
    Participation: "University Students",
    "Time Slot": "1:00 PM Onwards",
    "Venue Details": "Basketball Ground / AI Arena",
    "Coordinator Name": "Mr.Gaurav Verma/Dr.Imran Siraj",
    "Email ID / Mobile  Number":
      "1) Umar Farooq, 2) Ayush Partap Singh, 3) Rudra Partap Singh, 4) Khushboo",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
  },

  // 4. SOMC - React to Situation
  {
    "Name of Events": "React to Situation",
    Department: "SOMC – School of Management & Commerce",
    Participation: "School Students / University Students",
    "Time Slot": "9:30 AM - 12:00 PM",
    "Venue Details": "C415",
    "Coordinator Name": "Dr. Anumeha, Dr. Sapna Rana",
    "Email ID / Mobile  Number": "Vandana, Mansi, Prince, Sameeksha",
    Date: "27–28 October 2026",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹7,000 (3500+3500) 900/1100/1500",
    Description:
      "A one-minute spontaneous speech challenge based on legal and ethical dilemmas covering justice, cybercrime, equality and professional ethics. Participants think, structure and deliver their responses on the spot, developing quick thinking, communication, legal reasoning, confidence and responsible citizenship.",
    "Guidlines of  the Event":
      "1. Format\n• Each participant receives a stimulus word or situation based on a legal or ethical theme.\n• One minute is allotted in total for thinking, structuring and delivery.\n• There is no separate thinking time.\n• Speaking must begin as soon as the timer starts.\n\n2. Delivery Standards\n• Responses must be relevant, well structured and logically reasoned.\n• Responses should reflect appropriate legal or ethical reasoning.\n• Exceeding the one-minute limit results in automatic stoppage and disqualification from scoring for that round.\n• No external aids, notes or prompts are permitted.",
    "Evaluation Pattern":
      "Spontaneity, logical reasoning, legal and ethical awareness, structure, and adherence to time limit.",
  },
  {
    Participation: "University Students",
    "Time Slot": "1:00 PM - 3:00 PM",
    "Venue Details": "C415",
    "Coordinator Name": "Dr. Anumeha, Dr. Sapna Rana",
    "Email ID / Mobile  Number": "Vandana, Mansi, Prince, Sameeksha",
    Prize: "₹7,000 (3500+3500) 900/1100/1500",
  },

  // 5. SOAD - Button Masala
  {
    "Name of Events": "Button Masala",
    Department: "SOAD – School of Architecture & Design",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 2:00 PM",
    "Venue Details": "C116 (Pattern Making Lab)",
    "Coordinator Name": "Ms. Paramjeet Kaur / Dr Dinkar Kumavat (8826289725)",
    "Email ID / Mobile  Number": "Himanshi Singla (9518495115)",
    Date: "27–28 October 2026",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "A zero-waste fashion technique using buttons and elastic bands to shape garments without cutting or stitching. Participants learn the fundamentals of Button Masala before applying them in a creative competition, exploring material innovation, sustainability and original design thinking through a hands-on workshop-to-contest format.",
    "Guidlines of  the Event":
      "1. Materials\n• Each participant receives basic materials including fabric, buttons, elastic or rubber bands, scissors and measuring tools.\n• Additional non-permanent or reusable materials may be brought with prior permission.\n\n2. Construction Rules\n• Fabric, buttons, elastic or rubber bands and other approved materials are provided by the organisers.\n• Primary construction must be achieved through Button Masala techniques.\n• Conventional stitching should not be used.\n• Participants should avoid unnecessary cutting and wastage of fabric.\n• Buttons and elastic should be integral to the construction, not merely decorative.\n• The final design should preferably be reversible, detachable, reusable or reconfigurable.",
    "Evaluation Pattern":
      "Creativity, sustainability, innovative application of Button Masala techniques, and concept presentation.",
  },

  // 6. SOAD - IMPRINT: The Art of Hand Block Printing
  {
    "Name of Events": "IMPRINT: The Art of Hand Block Printing",
    Department: "SOAD – School of Architecture & Design",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 2:00 PM",
    "Venue Details": "C101 (Textile Lab)",
    "Coordinator Name":
      "Ms. Annu Yadav (9650468235) and Ms. Kanishka Singh (7408099898)",
    "Email ID / Mobile  Number": "Kirty (7015376660)",
    Date: "27–28 October 2026",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "A hands-on introduction to traditional hand block printing covering block design, colour preparation, fabric selection and printing techniques. Participants create their own printed textile sample while exploring Indian textile heritage through a blend of traditional craftsmanship and contemporary design approaches.",
    "Guidlines of  the Event":
      "1. Workshop Guidelines\n• Use printing blocks carefully and handle all tools responsibly.\n• Maintain cleanliness and keep the work area organised throughout.\n• Do not exchange or misuse tools and materials without permission.\n• Clean the blocks, work surface and tools after completing the activity.\n• Follow the instructor's demonstration and safety guidelines throughout.",
    "Evaluation Pattern":
      "Creativity, experimentation, craftsmanship, neatness, and block design execution.",
  },

  // 7. SOAD - Soap Carving – Carved Expression
  {
    "Name of Events": "Soap Carving – Carved Expression",
    Department: "SOAD – School of Architecture & Design",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 1:00 PM",
    "Venue Details": "SOAD Studios / Campus Lab",
    "Coordinator Name":
      "Mr. Deepanshu Sharma (9646617238) and Indrajeet Singh Pandit (9354271104) / Pravesh Tandon (9996813341)",
    "Email ID / Mobile  Number": "Bhumika (9560990811), Anjali (8708776166)",
    Date: "27–28 October 2026",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "A creative art activity transforming ordinary soap bars into detailed sculptures. Participants express ideas through delicate carving, developing imagination, patience and precision while showcasing intricate designs and fine motor skills.",
    "Guidlines of  the Event":
      "1. Format\n• Each participant is given 2 hours to complete their soap carving artwork.\n• The competition theme will be announced at the start of the workshop.\n\n2. Materials & Originality\n• Soap and basic carving materials are provided by the organisers.\n• Each artwork must be original.\n• Pre-designed or pre-carved soap is not allowed.\n\n3. Conduct\n• Carving tools must be used carefully and according to all safety instructions.\n• Participants must complete their artwork independently.\n• Teachers, parents or accompanying persons may not assist.",
    "Evaluation Pattern":
      "Originality, delicate detail, precision, craftsmanship, and completeness.",
  },

  // 8. SOLA - Debate Competition
  {
    "Name of Events": "Debate Competition",
    Department: "SOLA – School of Liberal Arts",
    Participation: "School Students",
    "Time Slot": "9:30 AM - 12:00 PM",
    "Venue Details": "A-213",
    "Coordinator Name": "Dr. Vagish Mishra",
    "Email ID / Mobile  Number": "Manasvi, Harsimran, Tulsi (9717006092)",
    Date: "27–28 October 2026",
    Category: "Academic",
    "Team Event/Individual": "TEAM",
    "Team Size": "3",
    Prize: "₹5,000 (Trophies)",
    Description:
      "A structured two-day debate competition with a fresh motion each day. Participants compete as For Speaker, Against Speaker or Interjector, developing argumentation, questioning, rebuttal, communication and critical-thinking skills.",
    "Guidlines of  the Event":
      "1. Team Composition\n• Each team shall consist of:\n  - 1 For Speaker\n  - 1 Against Speaker\n  - 1 Interjector\n• Teams shall be randomly paired on the day of the competition.\n\n2. Format\n• A separate motion shall be announced for each day.\n• Each speaker shall have 1 minute 30 seconds for the opening statement.\n• This will be followed by 30 seconds of interjection and 30 seconds for response.\n• Interjections must directly address the speaker's arguments and remain relevant to the motion.\n• Participants must strictly follow the allotted time.\n\n3. Conduct\n• Personal attacks, discriminatory remarks, irrelevant arguments and unauthorised interruption are prohibited.\n\n4. Scoring\n• For Speakers, Against Speakers and Interjectors shall be evaluated separately.\n• A Winner and Runner-Up shall be awarded in each category.\n• The decision of the judging panel shall be final.",
    "Evaluation Pattern":
      "For Speakers, Against Speakers and Interjectors evaluated separately on argumentation, questioning, rebuttal, communication, and critical thinking.",
  },
  {
    Participation: "University Students",
    "Time Slot": "1:30 PM - 3:30 PM",
    "Venue Details": "A-215",
    "Coordinator Name": "Dr. Vagish Mishra",
    "Email ID / Mobile  Number": "Manasvi, Harsimran, Tulsi (9717006092)",
    Prize: "₹5,000 (Trophies)",
  },

  // 9. SEMCE - ReelBaaz (30s Reel Making)
  {
    "Name of Events": "ReelBaaz (30s Reel Making)",
    Department: "SEMCE – School of Emerging Media & Creator Economy",
    Participation: "School Students",
    "Time Slot": "10:30 AM - 12:00 PM",
    "Venue Details": "C113 (SEMCE Studio)",
    "Coordinator Name": "Dr. Neha Arora (9541394959)",
    "Email ID / Mobile  Number":
      "Poorti Sharma, Palak Saini, Palak Verma, Sakshi Gupta, Kenneth and Manukriti Sharma",
    Date: "27–28 October 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO / TEAM",
    "Team Size": "2–3",
    Prize: "₹5,000 (2500+2500) 700/800/1000",
    Description:
      "A short-form content challenge where participants create and upload a 30–60 second Instagram reel on the given theme. Entries are judged on creativity, originality, storytelling and adherence to submission guidelines and community standards.",
    "Guidlines of  the Event":
      "1. Submission Format\n• Reel duration should be 30–60 seconds.\n• Upload the reel on the participant's own Instagram account using #Ideas4.0, #KRMU and #SEMCE_KRMU.\n• Participants must tag @semce_krmu.\n• The reel must be downloaded and submitted with the Instagram link through the official submission form.\n• The submission title must be ReelBaaz.\n\n2. Content Guidelines\n• The reel must be original and creative.\n• Content must comply with Instagram Community Guidelines.\n• Plagiarism, violence, hate speech and inappropriate content are strictly prohibited.\n• Multiple entries are allowed, but each must be registered separately.\n• AI-generated or plagiarised content will lead to disqualification.\n\n3. Deadline\n• All reels must be uploaded and submitted within the specified submission period.\n• The jury's decision is final and binding.",
    "Evaluation Pattern":
      "Creativity, originality, storytelling, video editing quality, and adherence to submission guidelines and community standards.",
  },
  {
    Participation: "University Students",
    "Time Slot": "2:00 PM - 4:00 PM",
    "Venue Details": "C113 (SEMCE Studio)",
    "Coordinator Name": "Dr. Neha Arora (9541394959)",
    "Email ID / Mobile  Number":
      "Poorti Sharma, Palak Saini, Palak Verma, Sakshi Gupta, Kenneth and Manukriti Sharma",
    Prize: "₹5,000 (2500+2500) 700/800/1000",
  },

  // 10. Student Welfare - Group Dance
  {
    "Name of Events": "Group Dance",
    Department: "Student Welfare",
    Participation: "School Students",
    "Time Slot": "12:30 PM - 2:00 PM (Oct 27)",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Date: "27–28 October 2026",
    Category: "Cultural",
    "Team Event/Individual": "TEAM",
    "Team Size": "3–8",
    Prize: "₹4,500 (1000/1500/2000)",
    Image: "/events/Group Dance.png",
    Description:
      "Teams of three to eight take the stage in an open-format dance battle spanning contemporary, hip-hop, classical and fusion styles. The event focuses on creativity, coordination, rhythm, energy, teamwork and stage presence.",
    "Guidlines of  the Event":
      "1. Performance Rules\n• Time limit is 2:00–2:30 minutes per performance.\n• Points are deducted for exceeding the time limit and organisers may stop the performance.\n• Any dance form is allowed.\n• Pre-recorded audio tracks must be submitted at least 3 days before the event.\n• Last-minute audio changes are not allowed.\n• Costumes and props are allowed.\n• Colours, gulal, water or any stage-damaging material are strictly prohibited and may lead to disqualification.\n• Obscene or derogatory moves or lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Choreography, synchronization, rhythm, costume coordination, stage presence, and crowd impact.",
  },
  {
    Participation: "University Students",
    "Time Slot": "2:00 PM - 3:30 PM (Oct 27)",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Prize: "₹4,500 (1000/1500/2000)",
  },
  {
    Participation: "School Students",
    "Time Slot": "9:30 AM - 11:00 AM (Oct 28)",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nigam (9625003139), Moksh (9211575767), Utkarsh (9220400574), Ananya (8368720719), Swapnil (9582327541)",
    Prize: "₹4,500 (1000/1500/2000)",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:30 AM - 1:00 PM (Oct 28)",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nigam (9625003139), Moksh (9211575767), Utkarsh (9220400574), Ananya (8368720719), Swapnil (9582327541)",
    Prize: "₹4,500 (1000/1500/2000)",
  },

  // 11. SMAS - Science Quiz & Puzzle Solve (AI Theme)
  {
    "Name of Events": "Science Quiz & Puzzle Solve (AI Theme)",
    Department: "SMAS – School of Medical & Allied Sciences",
    Participation: "School Students",
    "Time Slot": "9:00 AM - 10:00 AM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name": "Dr. Swati Kaushik & Ms. Samiksha Mishra",
    "Email ID / Mobile  Number": "Piyush Jain (83073 74664), Ritika",
    Date: "27–28 October 2026",
    Category: "Academic",
    "Team Event/Individual": "SOLO / TEAM",
    "Team Size": "2–5",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "An AI-themed science quiz and puzzle-solving competition conducted across multiple rounds. The first two rounds are team-based, while the final round is individual, sharpening scientific awareness, logical reasoning, teamwork and quick thinking.",
    "Guidlines of  the Event":
      "1. Format\n• The event runs across multiple rounds.\n• The first two rounds are conducted in teams.\n• The final round is conducted individually.\n• Participants must follow all instructions given by the organisers.\n\n2. Puzzle Round\n• The puzzle-solving round has a 5-minute time limit.\n• The fastest participant or team to solve the puzzle correctly receives the corresponding score.\n• A tie-breaker round may be conducted in case of a tie.\n\n3. Conduct\n• The decision of the jury or organising committee shall be final.",
    "Evaluation Pattern":
      "Scientific awareness, logical reasoning, puzzle-solving speed, accuracy, and quick thinking.",
  },
  {
    Participation: "University Students",
    "Time Slot": "12:30 PM - 1:30 PM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name": "Dr. Swati Kaushik & Ms. Samiksha Mishra",
    "Email ID / Mobile  Number": "Piyush Jain (83073 74664), Ritika",
    Prize: "₹4,500 (1000/1500/2000)",
  },

  // 12. SOLS - Poster / Collage Making (Theme: Know Your Laws)
  {
    "Name of Events": "Poster / Collage Making (Theme: Know Your Laws)",
    Department: "SOLS – School of Legal Studies",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 11:00 AM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name":
      "Dr. Ankita (9501474214) & Dr. Arti Sharma (9899073342)",
    "Email ID / Mobile  Number": "baibhavi, Ritika",
    Date: "27–28 October 2026",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "A visual art competition encouraging participants to depict cyber law and digital safety themes such as cybercrime, online fraud, data privacy and social media's impact on youth through an original poster or collage paired with a clear, self-composed slogan.",
    "Guidlines of  the Event":
      "1. Guidelines\n• Posters must include a slogan reflecting a cyber-related legal issue such as cybercrime, online fraud, data privacy or the impact of social media on youngsters.\n• The slogan should be short and catchy.\n• The slogan must contain a maximum of 15 words.\n• Long explanations should be avoided.\n• The slogan must be original and well-composed.\n• Each poster must include the participant's name, class and institution.",
    "Evaluation Pattern":
      "Relevance to cyber law and digital safety themes, artistic creativity, original slogan impact, and visual neatness.",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:30 AM - 12:30 PM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name":
      "Dr. Ankita (9501474214) & Dr. Arti Sharma (9899073342)",
    "Email ID / Mobile  Number": "baibhavi, Ritika",
    Prize: "₹4,500 (1000/1500/2000)",
  },

  // 13. SOET - Drone Race (AI Arena)
  {
    "Name of Events": "Drone Race (AI Arena)",
    Department: "SOET – School of Engineering & Technology",
    Participation: "School Students",
    "Time Slot": "9:30 AM Onwards",
    "Venue Details": "Basketball ground",
    "Coordinator Name":
      "Mr. Gaurav Verma / Dr. Imran Siraj / Dr Naman Gupta / Dr Digvijay",
    "Email ID / Mobile  Number": "Krish, Varun, Bhaumik",
    Date: "27–28 October 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO / TEAM",
    "Team Size": "As specified by organisers",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
    Image: "/events/Drone Race (AI Arena).png",
    Description:
      "A precision flying contest where manual or remote-controlled drones navigate a marked obstacle course containing hoops and zig-zag poles. Drones are judged on compact, efficient and innovative design and precision, with the fastest drone reaching the destination declared the winner.",
    "Guidlines of  the Event":
      "1. Drone Specifications\n• Drones may be manual or remote-controlled.\n• Maximum size and weight will be specified by the organisers, such as diagonal under 500 mm and weight under 2 kg.\n\n2. Course Rules\n• The obstacle course may include hoops or rings and zig-zag poles.\n• Drones must follow the marked obstacle path without skipping.\n\n3. Evaluation\n• Drones will be judged on compact, efficient and innovative design.\n• Precision in crossing the course will also be considered.\n• The drone that reaches the destination first wins.",
    "Evaluation Pattern":
      "Evaluation is based on compact, efficient, innovative drone design, flying precision, and course completion speed.",
  },
  {
    Participation: "University Students",
    "Time Slot": "1:30 PM Onwards",
    "Venue Details": "Basketball Ground / AI Arena",
    "Coordinator Name":
      "Mr. Gaurav Verma / Dr. Imran Siraj / Dr Naman Gupta / Dr Digvijay",
    "Email ID / Mobile  Number": "Krish, Varun, Bhaumik",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
  },

  // 14. SOAS - Agritech – AI Smart Farming Models
  {
    "Name of Events": "Agritech – AI Smart Farming Models",
    Department: "SOAS – School of Agricultural Sciences",
    Participation: "School Students",
    "Time Slot": "11:00 AM - 2:00 PM",
    "Venue Details": "C-306A",
    "Coordinator Name": "Dr Jay Nath Patel and Dr Agnibha Sinha",
    "Email ID / Mobile  Number":
      "Divesh (9599724998), Shubham (9306630597), Anjali (9211964717), Lalit (9813634671)",
    Date: "27–28 October 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO / TEAM",
    "Team Size": "2–4",
    Prize: "₹4,500 (1000/1500/2000)",
    Image: "/events/Agritech – AI Smart Farming Models.png",
    Description:
      "A farming innovation competition where participants design and present models integrating IoT, sensors, drones, automation, AI, precision agriculture and smart irrigation. The event showcases technology-driven and climate-smart solutions focused on productivity, resource efficiency, sustainability and farmer profitability.",
    "Guidlines of  the Event":
      "1. Guidelines\n• Participants may compete individually or in teams of up to 4 members.\n• The model must be original.\n• The model must be related to smart or sustainable farming and AI technologies.\n• Use of recycled or eco-friendly materials is encouraged.\n• Students must bring their own prepared model.\n• Model size must not exceed 3 × 2 feet.\n• Teams must follow safety guidelines and maintain fair play.\n• The judges' decisions are final.",
    "Evaluation Pattern":
      "Innovation, sustainability impact, technological integration (IoT, AI, automation), practical feasibility, and model presentation.",
  },

  // 15. SOLA - Zero Waste Innovation
  {
    "Name of Events": "Zero Waste Innovation",
    Department: "SOLA – School of Liberal Arts",
    Participation: "School Students",
    "Time Slot": "10:30 AM - 3:00 PM",
    "Venue Details": "C Block Ground Floor TT Room",
    "Coordinator Name":
      "Dr Amrita Ratnani (6394260965) / Dr Jyotsna Tyagi (9728509807)",
    "Email ID / Mobile  Number":
      "Manish Kumar- M.A. Sem- 3 (9654464361), Anushka Roy B.A. Sem 3 (8287372002)",
    Date: "27–28 October 2026",
    Category: "Technical",
    "Team Event/Individual": "TEAM",
    "Team Size": "3–5",
    Prize: "₹6,000 (3000+2000+1000)",
    Image: "/events/Zero Waste Innovation.png",
    Description:
      "A team-based competition encouraging students to develop original solutions for waste reduction, recycling, reuse and sustainability. Teams create and present an innovative model or prototype addressing real-world waste challenges, followed by a brief Q&A with the judges.",
    "Guidlines of  the Event":
      "1. Team Composition\n• Participation is strictly in groups of 3 to 5 members.\n• Members must belong to the same school or university.\n\n2. Theme & Originality\n• All models and presentations must align with Zero Waste Innovation.\n• Projects should focus on sustainability, recycling and waste reduction.\n• The project must be original and student-developed.\n• Plagiarism or pre-made models will lead to immediate disqualification.\n\n3. Presentation\n• Each team gets 5–7 minutes to present and explain its model.\n• A short Q&A with the judges will follow the presentation.",
    "Evaluation Pattern":
      "Sustainability impact, innovation, feasibility, prototype/model design, and presentation & Q&A quality.",
  },
  {
    Participation: "University Students",
    "Time Slot": "10:30 AM - 3:00 PM",
    "Venue Details": "C Block Dance Room",
    "Coordinator Name":
      "Dr Amrita Ratnani (6394260965) / Dr Jyotsna Tyagi (9728509807)",
    "Email ID / Mobile  Number":
      "Manish Kumar- M.A. Sem- 3 (9654464361), Anushka Roy B.A. Sem 3 (8287372002)",
    Prize: "₹6,000 (3000+2000+1000)",
  },

  // 16. SOET - Tech Treasure Hunt
  {
    "Name of Events": "Tech Treasure Hunt",
    Department: "SOET – School of Engineering & Technology",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 1:00 PM",
    "Venue Details": "Campus Ground / SOET Block",
    "Coordinator Name": "Mr. Gaurav Verma / Dr. Imran Siraj",
    "Email ID / Mobile  Number": "Krish, Varun, Bhaumik",
    Date: "27–28 October 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO / TEAM",
    "Team Size": "2–4",
    Prize: "₹4,500 (1000/1500/2000)",
    Image: "/assets/upcoming-events/up-ev-10.webp",
    Description:
      "A clue-based treasure hunt where participants solve puzzles and riddles across checkpoints to locate a hidden treasure. The activity develops teamwork, problem-solving, logical thinking and observation skills through a fast-paced technology-themed challenge.",
    "Guidlines of  the Event":
      "1. Team Rules\n• Teams must stay together at all times.\n• Teams are not allowed to split up.\n• Each clue should logically lead to the next checkpoint.\n• Teams cannot skip clues or move ahead without solving them.\n\n2. Conduct & Boundaries\n• Participants must respect the environment.\n• Littering or disturbing nature is not permitted.\n• Smaller rewards may be included at checkpoints.\n• A grand prize may be provided at the end.",
    "Evaluation Pattern":
      "Fastest team to decipher all clues, solve technology puzzles at all checkpoints, and locate the final treasure.",
  },
  {
    Participation: "University Students",
    "Time Slot": "1:30 PM - 4:00 PM",
    "Venue Details": "Campus Ground / SOET Block",
    "Coordinator Name": "Mr. Gaurav Verma / Dr. Imran Siraj",
    "Email ID / Mobile  Number": "Krish, Varun, Bhaumik",
    Prize: "₹4,500 (1000/1500/2000)",
  },

  // 17. Student Welfare - Duet Dance
  {
    "Name of Events": "Duet Dance",
    Department: "Student Welfare",
    Participation: "School Students",
    "Time Slot": "09:30 AM - 11:00 AM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Date: "27–28 October 2026",
    Category: "Cultural",
    "Team Event/Individual": "Duet",
    "Team Size": "2",
    Prize: "₹4,500 (1000/1500/2000)",
    Image: "/events/Duet Dance.png",
    Description:
      "Pairs take the stage to showcase rhythm, coordination and creative expression through dance. The duet format highlights synchronised artistry and stage presence, with performances judged on choreography, energy, coordination and overall performance.",
    "Guidlines of  the Event":
      "1. Performance Rules\n• Time limit is 2–2.5 minutes per performance.\n• Points are deducted for exceeding the time limit and organisers may stop the performance.\n• Any dance form is allowed.\n• Pre-recorded tracks must be submitted in advance.\n• Last-minute audio changes are not allowed.\n• Costumes and props are allowed.\n• Colours, gulal, water or any stage-damaging material are strictly prohibited and lead to disqualification.\n• Obscene or derogatory moves or lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Choreography, energy, coordination, synchronisation, stage presence, and overall performance.",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:00 AM - 12:30 PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Prize: "₹4,500 (1000/1500/2000)",
  },

  // 18. SOET - One Day Hackathon
  {
    "Name of Events": "One Day Hackathon",
    Department: "SOET – School of Engineering & Technology",
    Participation: "School Students",
    "Time Slot": "10:00 AM Onwards",
    "Venue Details": "AI Arena",
    "Coordinator Name": "Dr. Amar Saraswat, Dr. Reenu Batra, Dr. Megha Sharma",
    "Email ID / Mobile  Number": "Aditya Kumar Singh, Kartik Sharma",
    Date: "27–28 October 2026",
    Category: "Technical",
    "Team Event/Individual": "Team",
    "Team Size": "2–4",
    Prize: "₹10,000+ (Trophies & Certificates)",
    Image: "/events/One Day Hackathon.png",
    Description:
      "An innovation challenge empowering school students to turn creative ideas into working solutions using AI, machine learning, generative AI, robotics and IoT. The competition consists of an online ideation round followed by an offline AI Arena demonstration.",
    "Guidlines of  the Event":
      "1. Format\n• The theme is Artificial Intelligence.\n• Teams must build an innovative solution to a real-world problem using AI.\n• Teams must consist of 2–4 students.\n• Round 1 – Online: Teams submit their idea, problem statement, solution and AI implementation plan with a short presentation or video within the deadline.\n• Shortlisted teams advance to Round 2 – AI Arena, held physically at K.R. Mangalam University.\n\n2. Round 2 Requirements\n• Teams must present and demonstrate a working AI-based software and/or hardware prototype before the judges.\n• Software, hardware, AI tools, APIs, ML models, generative AI, IoT or robotics may be used, provided AI is central to the solution.\n• Teams must bring all hardware, components, software and datasets required for the demonstration.\n• The final-round project must substantially match the Round 1 submission.\n• Major changes require organiser approval.\n\n3. Evaluation\n• Projects will be judged on innovation, originality and creativity.\n• Functionality, working prototype quality and real-world feasibility will be assessed.\n• Presentation quality and the ability to answer judges' questions will also be considered.",
    "Evaluation Pattern":
      "Innovation, originality, meaningful AI integration, working prototype functionality, real-world impact, and presentation.",
  },

  // 19. SOET - Robo Soccer
  {
    "Name of Events": "Robo Soccer",
    Department: "SOET – School of Engineering & Technology",
    Participation: "School Students",
    "Time Slot": "10:00 AM Onwards",
    "Venue Details": "Basketball Ground / AI Arena",
    "Coordinator Name": "Mr. Gaurav Verma / Dr. Imran Siraj",
    "Email ID / Mobile  Number": "Tanush Tyagi, Tanishka",
    Date: "27–28 October 2026",
    Category: "Academic",
    "Team Event/Individual": "TEAM",
    "Team Size": "3–8",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
    Image: "/assets/upcoming-events/up-ev-14.webp",
    Description:
      "A robotic football match where two teams of robots compete to score goals. Each team fields 3–5 robots, with one robot potentially serving as goalkeeper. Robots must comply with safety requirements relating to battery, voltage, infrared emission and interference while competing under official supervision.",
    "Guidlines of  the Event":
      "1. Match Format\n• Each soccer team may have a minimum of 3 and maximum of 8 members.\n• Each team must field 3–5 robots during a match.\n• One robot may serve as the goalkeeper.\n• The number of robots in a match may vary depending on the number of participating teams.\n• Each team must field at least 3 and at most 5 robots.\n• Matches will be played in a designated arena according to the setup and rules announced by the organising committee.\n\n2. Robot Safety Specifications\n• Robots must be sealed, non-explosive and electrically powered.\n• Battery, NiCad or dry cell may be used.\n• Voltage anywhere in the robot must not exceed 24V DC at any point during the match.\n• Robots must not emit infrared light.\n• Infrared-distance optical sensors may be used provided they do not affect other robots.\n• Infrared-reflecting materials must not be used externally.\n• Painted robots must have a matte finish.\n• A team claiming interference from an opposing robot must provide proof, which must be confirmed by a referee.\n\n3. Fair Play & Evaluation\n• Teams must follow all safety rules, game etiquette and match discipline.\n• Any robot violating safety norms or causing deliberate disruption may be penalised or disqualified by the judges.\n• The team with the highest number of goals at the end of the match will be declared the winner.",
    "Evaluation Pattern":
      "Highest number of goals scored, adherence to safety and voltage rules, robot agility, and team tactics.",
  },
  {
    Participation: "University Students",
    "Time Slot": "1:30 PM Onwards",
    "Venue Details": "Basketball Ground / AI Arena",
    "Coordinator Name": "Mr. Gaurav Verma / Dr. Imran Siraj",
    "Email ID / Mobile  Number": "Tanush Tyagi, Tanishka",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
  },
];

// Function to group consecutive rows by event name
function groupEventSessions(rows: RawRow[]): EventItem[] {
  const events: EventItem[] = [];
  let currentEvent: EventItem | null = null;

  for (const row of rows) {
    const title = row["Name of Events"];

    if (title) {
      // Start new event
      const normalizedTitle = title.trim().toLowerCase();
      let slugifiedTitle = slugify(title);
      let count = 2;
      while (events.some((e) => e.id === slugifiedTitle)) {
        slugifiedTitle = `${slugify(title)}-${count}`;
        count++;
      }
      const eventImage =
        row.Image ||
        eventImages[slugifiedTitle] ||
        eventImages[normalizedTitle] ||
        eventImages[slugify(title)] ||
        "/placeholder.svg";
      const isCultural = CULTURAL_EVENT_TITLES.has(normalizedTitle);

      const rawDate = (row.Date || "27-Oct-26").trim();
      const lowerDate = rawDate.toLowerCase();
      let formattedDate = "October 27, 2026";
      let dayValue = "day1";

      if (
        lowerDate.includes("both") ||
        lowerDate.includes("27-28") ||
        (lowerDate.includes("27") && lowerDate.includes("28"))
      ) {
        formattedDate = "October 27–28, 2026";
        dayValue = "both";
      } else if (lowerDate.includes("24")) {
        formattedDate =
          "24th – 25th October 2026 (Online), 27th – 28th October 2026 (Offline)";
        dayValue = "both";
      } else if (
        lowerDate.includes("28") ||
        lowerDate.includes("sep-28") ||
        lowerDate.includes("28-sep")
      ) {
        formattedDate = "October 28, 2026";
        dayValue = "day2";
      } else {
        formattedDate = "October 27, 2026";
        dayValue = "day1";
      }

      const venueLocation = row["Venue Details"] || "Campus";
      const campusAddress =
        "K.R. Mangalam University, Sohna Road, Gurugram, Delhi-NCR, Haryana";
      const fullAddress = `${venueLocation}, ${campusAddress}`;

      currentEvent = {
        id: slugifiedTitle,
        title: title,
        slug: slugifiedTitle,
        department: row.Department || "TBA",
        category:
          row.Category ||
          (isCultural ? "Cultural" : row.Department || "General"),
        description:
          row.Description ||
          row["Guidlines of  the Event"] ||
          `Join us for ${title}`,
        guidelines: row["Guidlines of  the Event"],
        evaluation: row["Evaluation Pattern"],
        teamType: row["Team Event/Individual"],
        teamSize: row["Team Size"]?.toString(),
        prize: row.Prize,
        image: eventImage,
        sessions: [],
        date: formattedDate,
        dateObj:
          dayValue === "day2" ? new Date("2026-10-28") : new Date("2026-10-27"),
        location: venueLocation,
        address: fullAddress,
        time: row["Time Slot"],
        type: "spotlight",
        day: dayValue,
      };

      // Add first session
      const { start, end } = parseTimes(row["Time Slot"]);
      currentEvent.sessions.push({
        participation: row.Participation,
        timeSlot: row["Time Slot"],
        startTime: start,
        endTime: end,
        venue: row["Venue Details"],
        capacity: row["Number of Participant in a Slot"]?.toString(),
        coordinator: row["Coordinator Name"],
        contacts: row["Email ID / Mobile  Number"],
        guidelines: row["Guidlines of  the Event"],
        evaluation: row["Evaluation Pattern"],
        teamType: row["Team Event/Individual"],
        teamSize: row["Team Size"]?.toString(),
        prize: row.Prize,
      });

      events.push(currentEvent);
    } else if (currentEvent) {
      // Add session to current event
      const { start, end } = parseTimes(row["Time Slot"]);
      currentEvent.sessions.push({
        participation: row.Participation,
        timeSlot: row["Time Slot"],
        startTime: start,
        endTime: end,
        venue: row["Venue Details"],
        capacity: row["Number of Participant in a Slot"]?.toString(),
        coordinator: row["Coordinator Name"],
        contacts: row["Email ID / Mobile  Number"],
        guidelines: row["Guidlines of  the Event"],
        evaluation: row["Evaluation Pattern"],
        teamType: row["Team Event/Individual"],
        teamSize: row["Team Size"]?.toString(),
        prize: row.Prize,
      });
    }
  }

  // Format combined time slot for events with multiple sessions
  for (const ev of events) {
    if (ev.sessions.length > 1) {
      const s1 = ev.sessions[0];
      const s2 = ev.sessions[1];
      if (s1.timeSlot && s2.timeSlot && s1.timeSlot !== s2.timeSlot) {
        const isS1School = s1.participation?.toLowerCase().includes("school");
        const isS2School = s2.participation?.toLowerCase().includes("school");
        const isS1Univ = s1.participation?.toLowerCase().includes("univ");
        const isS2Univ = s2.participation?.toLowerCase().includes("univ");

        if (isS1School && isS2Univ) {
          ev.time = `${s1.timeSlot} (School) | ${s2.timeSlot} (University)`;
        } else if (isS1Univ && isS2School) {
          ev.time = `${s1.timeSlot} (University) | ${s2.timeSlot} (School)`;
        } else if (isS1Univ && isS2Univ) {
          ev.time = `${s1.timeSlot} (University) | ${s2.timeSlot} (University)`;
        } else {
          ev.time = `${s1.timeSlot} | ${s2.timeSlot}`;
        }
      } else if (s1.timeSlot) {
        ev.time = s1.timeSlot;
      }
    }
  }

  return events;
}

const allEvents = groupEventSessions(rawRows);

function isCultural(ev: EventItem) {
  return (
    ev.category?.toLowerCase() === "cultural" ||
    CULTURAL_EVENT_TITLES.has(ev.title.trim().toLowerCase())
  );
}

// Export functions
export function getAllEvents(): EventItem[] {
  return allEvents;
}

export function getAllRawEvents(): EventItem[] {
  return allEvents;
}

export function getCulturalEvents(): EventItem[] {
  return allEvents.filter(isCultural);
}

export function getSpotlightEvents(): EventItem[] {
  return allEvents.filter((ev) => !isCultural(ev));
}

export function getSpotlightCategories(): string[] {
  const set = new Set<string>();
  for (const ev of getSpotlightEvents()) {
    if (ev.category) set.add(ev.category.toLowerCase());
  }
  return Array.from(set).sort();
}

export function searchSpotlightEvents(
  term: string,
  category: string,
): EventItem[] {
  const t = term.trim().toLowerCase();
  const cat = category.toLowerCase();
  return getSpotlightEvents().filter((ev) => {
    if (cat !== "all" && ev.category.toLowerCase() !== cat) return false;
    if (!t) return true;
    return (
      ev.title.toLowerCase().includes(t) ||
      ev.description.toLowerCase().includes(t) ||
      ev.department?.toLowerCase().includes(t) ||
      ev.sessions.some(
        (s) =>
          s.venue?.toLowerCase().includes(t) ||
          s.timeSlot?.toLowerCase().includes(t) ||
          s.coordinator?.toLowerCase().includes(t),
      )
    );
  });
}

export function getEventCounts() {
  const cultural = getCulturalEvents().length;
  const spotlight = getSpotlightEvents().length;
  const total = allEvents.length;
  return { cultural, spotlight, total };
}

export function getEventBySlug(slug: string): EventItem | undefined {
  if (!slug) return undefined;
  const decoded = decodeURIComponent(slug).toLowerCase().trim();
  if (decoded === "group-dance-2") {
    return allEvents.find((event) => event.slug === "group-dance");
  }
  const normalizedSlug = decoded.replace(/[–—\s]+/g, "-").replace(/-+/g, "-");
  return (
    allEvents.find((event) => event.slug.toLowerCase() === decoded) ||
    allEvents.find((event) => event.id.toLowerCase() === decoded) ||
    allEvents.find((event) => slugify(event.title) === decoded) ||
    allEvents.find(
      (event) =>
        event.slug.toLowerCase().replace(/-+/g, "-") === normalizedSlug,
    ) ||
    allEvents.find(
      (event) => slugify(event.title).replace(/-+/g, "-") === normalizedSlug,
    )
  );
}

// Legacy format support for backwards compatibility
export interface Event {
  id: string;
  title: string;
  category: "Academic" | "Cultural" | "Sports" | "Technical";
  department: string;
  participation: "School Students" | "University Students" | "Both";
  date: string;
  schoolVenue?: string;
  schoolTime?: string;
  universityVenue?: string;
  universityTime?: string;
  entry: "SOLO" | "TEAM";
  teamSize?: string;
  details: string;
  rules: string;
  faculty: string;
  coordinator: string;
  coordinatorPhone: string;
}

export const events: Event[] = allEvents.map((e, idx) => ({
  id: (idx + 1).toString(),
  title: e.title,
  category: (e.category?.includes("Cultural")
    ? "Cultural"
    : e.category?.includes("Academic")
      ? "Academic"
      : "Technical") as any,
  department: e.department || "General",
  participation: "Both",
  date: e.date,
  schoolVenue: e.sessions[0]?.venue || e.location,
  schoolTime: e.sessions[0]?.timeSlot || e.time,
  universityVenue: e.sessions[1]?.venue || e.sessions[0]?.venue || e.location,
  universityTime: e.sessions[1]?.timeSlot || e.sessions[0]?.timeSlot || e.time,
  entry: e.teamType?.toLowerCase().includes("team") ? "TEAM" : "SOLO",
  teamSize: e.teamSize,
  details: e.description,
  rules: e.guidelines || "",
  faculty: e.sessions[0]?.coordinator || "",
  coordinator: e.sessions[0]?.coordinator || "",
  coordinatorPhone: e.sessions[0]?.contacts || "",
}));
