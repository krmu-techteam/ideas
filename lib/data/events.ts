// Authoritative Events & Sessions Data (11 official events for IDEAS)
// Cleaned up to include exclusively the 11 active stakeholder-provided events.

const CULTURAL_EVENT_TITLES = new Set([
  "group dance",
  "group dance (school students)",
  "duet dance",
]);

// Raw row structure reflecting provided JSON keys
interface RawRow {
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
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
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
  "robo war (ai arena)": "/events/Robo war.png",
  "react to the situation": "/assets/upcoming-events/up-ev-9.webp",
  "react to situation": "/assets/upcoming-events/up-ev-9.webp",
  "button masala": "/events/Button Masala.png",
  "imprint: the art of hand block printing":
    "/events/IMPRINT The Art of Hand Block Printing.png",
  "soap carving - carved expression":
    "/events/Soap Carving - Carved Expression.png",
  "debate competition": "/assets/upcoming-events/up-ev-12.webp",
  "reelbaaz (30s reel making)": "/assets/upcoming-events/up-ev-13.webp",
  "group dance": "/events/Group Dance.png",
  "group-dance": "/events/Group Dance.png",
  "group-dance-2": "/assets/upcoming-events/up-ev-25.webp",
  "science quiz & puzzle solve based on ai theme":
    "/assets/upcoming-events/up-ev-17.webp",
  "poster/ collage making competition  (theme: know your laws)":
    "/assets/upcoming-events/up-ev-19.webp",
  "poster/ collage making competition (theme: know your laws)":
    "/assets/upcoming-events/up-ev-19.webp",
  "drone race (ai arena)": "/events/Drone Race (AI Arena).png",
  "agritech – ai smart farming models":
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
const rawRows: RawRow[] = [
  // 1. SBAS - Crime Scene Investigation Game
  {
    "Name of Events": "Crime Scene Investigation Game",
    Department: "SBAS",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 12:30 PM",
    "Venue Details": "B Block Lobby Ground Floor",
    "Coordinator Name": "Dr Sourabh and Mr Vaibhav",
    "Email ID / Mobile  Number":
      "Vaibhav Saini (8178695170), Arijit Adhikari (7217674411), Tanvee Vashishth (9625124803), Kanika Sudha (8630907218)",
    Date: "27-Oct-26",
    Category: "Technical/ Competition",
    "Team Event/Individual": "SOLO",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
    Description:
      "These activities, such as scavenger hunts and crime scene investigations, are interactive and educational exercises that encourage teamwork, observation, and critical thinking. Participants search for hidden clues, solve puzzles, analyze evidence, and collaborate to reach a solution. They make learning fun while developing problem-solving, communication, and decision-making skills in an engaging, hands-on environment",
    "Guidlines of  the Event":
      "1. Teams\nPlayers must be divided into teams\nEach team must stay together at all times during the hunt.\n2. Objective\nFind all the hidden items or clues on the list.\nComplete any challenges or puzzles at each station.\nBe the first team to solve the final mystery or finish all tasks.\n3. Time Limit\nAll teams must complete the hunt within the designated time (e.g., 30–45 minutes).\n4. Clues and Evidence\nTeams must collect or photograph all items/clues exactly as instructed.\nHandle items carefully; do not damage or remove permanent property.\n5. Teamwork\nTeam members must work together and share information.\nNo helping or giving answers to other teams.",
    "Evaluation Pattern":
      "Find all the hidden items or clues on the list. Complete any challenges or puzzles at each station. Be the first team to solve the final mystery or finish all tasks within the designated time.",
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
    Department: "SOET",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 12:30 PM",
    "Venue Details": "Basketball ground",
    "Coordinator Name": "Mr.Gaurav Verma/Dr.Imran Siraj",
    "Email ID / Mobile  Number": "Tanush Tyagi, Tanishka",
    Date: "27-28 Oct 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO/TEAM(3-4)",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
    Description:
      "1. Robot will be wireless.\n\n2. Maximum dimensions and weight will be specified by organizers (e.g., 30x30 cm, 5 kg).\n\n3. The race track will include turns, straight paths, obstacles, or ramps (announced in advance or revealed on the spot).\n\n4. Robots must follow the track without skipping checkpoints.\n\n5. Touching the robot during the run (except for an official reset) will result in penalty points or disqualification.",
    "Guidlines of  the Event":
      "1. Robot will be wireless.\n\n2. Maximum dimensions and weight will be specified by organizers (e.g., 30x30 cm, 5 kg).\n\n3. The race track will include turns, straight paths, obstacles, or ramps (announced in advance or revealed on the spot).\n\n4. Robots must follow the track without skipping checkpoints.\n\n5. Touching the robot during the run (except for an official reset) will result in penalty points or disqualification.",
    "Evaluation Pattern":
      "1. Evaluation will be entirely based on the speed, design, navigation and technical complexity of the design.\n\n2. Robot complete the track first in predefined time slot will win.",
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
    Department: "SOET",
    Participation: "University Students",
    "Time Slot": "10:00 AM Onwards",
    "Venue Details": "Basketball ground",
    "Coordinator Name": "Mr.Gaurav Verma/Dr.Imran Siraj",
    "Email ID / Mobile  Number":
      "1) Umar Farooq, 2) Ayush Partap Singh, 3) Rudra Partap Singh, 4) Khushboo",
    Date: "27-28 Oct 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO/TEAM(3-4)",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
    Description:
      "Gaming Arena is a thrilling robotics competition where student-built robots engage in intense physical battles and challenges such as Sumo Battle, Robo Soccer, and Task Arena. Participants design, program, and control their robots to outperform opponents in strength, strategy, and agility, showcasing innovation, teamwork, and technical skills.",
    "Guidlines of  the Event":
      "1. Robot will be wireless.\n2. Maximum robot size and weight will be specified (e.g., 40x40 cm, 10 kg).\n3. The objective varies by event type:\n- Robot Soccer – score maximum goals;\n- Sumo Battle – push opponent out of arena;\n- Task Arena – collect objects or complete missions fastest.\n4. Robots must remain inside the arena during gameplay. Leaving the arena results in penalty or disqualification.\n5. Each match will have a fixed time limit (e.g., 2–5 minutes).\n6. Evaluation will be based on the speed, design, navigation, and technical complexity of the design.",
    "Evaluation Pattern":
      "Evaluation will be based on the speed, design, navigation, and technical complexity of the design.",
  },
  {
    Participation: "University Students",
    "Time Slot": "1:00 PM Onwards",
    "Venue Details": "Basketball Ground/AI Arena",
    "Coordinator Name": "Mr.Gaurav Verma/Dr.Imran Siraj",
    "Email ID / Mobile  Number":
      "1) Umar Farooq, 2) Ayush Partap Singh, 3) Rudra Partap Singh, 4) Khushboo",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
  },

  // 4. SOMC - React to Situation
  {
    "Name of Events": "React to Situation",
    Department: "SOMC",
    Participation: "School Students",
    "Time Slot": "9:30 AM - 12:00 PM",
    "Venue Details": "C415",
    "Coordinator Name": "Dr. Anumeha, Dr. Sapna Rana",
    "Email ID / Mobile  Number": "Vandana, Mansi, Prince, Sameeksha",
    Date: "27-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹7,000 (3500+3500) 900/1100/1500",
    Description:
      "The IDEAS activity engages students in developing ethical awareness, quick thinking, and communication skills through one-minute spontaneous speeches and model situational responses on legal and moral dilemmas. Covering topics like justice, cybercrime, equality, and professional ethics, it promotes integrity, empathy, and legal reasoning—essential traits for future professionals and responsible citizens.",
    "Guidlines of  the Event":
      '1. Each participant will be given a stimulus word or situation related to legal themes or ethical dilemmas.\n2. A total of 1 minute will be allotted to each participant: this time includes thinking, structuring, and delivering their answer on the spot.\n3. Participants must begin speaking as soon as the timer starts; there is no separate "thinking time".\n4. Answers should be relevant, well-structured, and must reflect logical reasoning and legal/ethical awareness.\n5. The answer must be completed within 1 minute; exceeding the time limit will lead to automatic stoppage and disqualification from scoring for that round.\n6. No external aids, notes, or prompts may be used during the speech.\n7. The decision of the moderator or evaluator regarding timing, relevance, and adherence to rules will be final.\n8. Respectful language and decorum must be maintained; offensive or disrespectful remarks will result in negative marking or disqualification.',
    "Evaluation Pattern":
      "Spontaneity, logical reasoning, ethical awareness, structure, and adherence to time limit.",
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
    Department: "SOAD",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 2:00 PM",
    "Venue Details": "C116 (Pattern Making Lab)",
    "Coordinator Name": "Ms. Paramjeet Kaur / Dr Dinkar Kumavat (8826289725)",
    "Email ID / Mobile  Number": "Himanshi Singla (9518495115)",
    Date: "28-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "Button Masala is an innovative, zero-waste fashion technique that uses buttons and elastic/rubber bands to create garments and textile forms without conventional cutting, stitching, or permanent alteration of fabric.\nThe workshop will introduce participants to the fundamentals of Button Masala, followed by a creative competition where participants will apply the technique to develop an original fashion or textile outcome.\nIt aims to promote experiential learning, material exploration, creativity, sustainability, and innovative design thinking.",
    "Guidlines of  the Event":
      "Each participant will receive basic materials such as: Fabric, Buttons, Elastic/rubber bands, Scissors, Measuring tools.\nNote: Participants may be permitted to bring additional non-permanent/reusable materials.\n\nConstruction Rules:\n1. Fabric, buttons, elastic/rubber bands and other approved materials will be provided by the organisers.\n2. Participants may use additional materials only with prior permission from the organisers.\n3. The primary construction of the design must be achieved through Button Masala techniques.\n4. Conventional stitching should not be used for the primary construction.\n5. Participants are encouraged to avoid unnecessary cutting and wastage of fabric.\n6. The use of buttons and elastic should be integral to the construction rather than merely decorative.\n7. The final design should preferably be reversible, detachable, reusable or reconfigurable.\n\nPresentation:\nEach participant will receive 3–5 minutes to present the final design explaining concept, techniques used, sustainability, and functionality.",
    "Evaluation Pattern":
      "Creativity, sustainability, innovative application of Button Masala, and presentation.",
  },

  // 6. SOAD - IMPRINT: The Art of Hand Block Printing
  {
    "Name of Events": "IMPRINT: The Art of Hand Block Printing",
    Department: "SOAD",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 2:00 PM",
    "Venue Details": "C101 (Textile Lab)",
    "Coordinator Name":
      "Ms. Annu Yadav (9650468235) and Ms. Kanishka Singh (7408099898)",
    "Email ID / Mobile  Number": "Kirty (7015376660)",
    Date: "28-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "The Block Printing Workshop is a hands-on learning experience introducing participants to the traditional art of textile printing. Participants will explore block design, colour preparation, fabric selection, and printing techniques while creating their own printed textile samples. The workshop encourages creativity, experimentation, and appreciation of Indian textile heritage, combining traditional craftsmanship with contemporary design approaches.",
    "Guidlines of  the Event":
      "Basic Instructions: Use printing blocks carefully and handle all tools responsibly.\nMaintain cleanliness and keep the work area organised throughout the workshop.\nDo not exchange or misuse tools and materials without permission.\nClean the blocks, work surface, and tools after completing the activity.\nParticipants must follow the instructor's demonstration and safety guidelines throughout the workshop.",
    "Evaluation Pattern":
      "Creativity, experimentation, craftsmanship, neatness, and block design execution.",
  },

  // 7. SOAD - Soap Carving - Carved Expression
  {
    "Name of Events": "Soap Carving - Carved Expression",
    Department: "SOAD",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 1:00 PM",
    "Venue Details": "SOAD Studios / Campus Lab",
    "Coordinator Name":
      "Mr. Deepanshu Sharma (9646617238) and Indrajeet Singh Pandit (9354271104) / Pravesh Tandon (9996813341)",
    "Email ID / Mobile  Number": "Bhumika (9560990811), Anjali (8708776166)",
    Date: "27-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "Soap carving is a creative art form that transforms simple bars of soap into beautiful sculptures. It encourages imagination, patience, and precision as participants express their ideas through delicate carvings. This activity blends artistry with mindfulness, allowing students to showcase intricate designs and develop fine motor skills through a soothing, hands-on experience.",
    "Guidlines of  the Event":
      "Each participant will receive one soap bar and one cutter only.\nPlease be mindful of the time limit, as no extra time will be provided.\nDesigns must be original—copied work will not be accepted.\nOnly completed carvings will be considered for evaluation.\nFood and mobile phones are not allowed during the workshop.",
    "Evaluation Pattern":
      "Originality, delicate detail, precision, craftsmanship, and completeness.",
  },

  // 8. SOLA - Debate Competition
  {
    "Name of Events": "Debate Competition",
    Department: "SOLA",
    Participation: "School Students",
    "Time Slot": "9:30 AM - 12:00 PM",
    "Venue Details": "A-213",
    "Coordinator Name": "Dr. Vagish Mishra",
    "Email ID / Mobile  Number": "Manasvi, Harsimran, Tulsi (9717006092)",
    Date: "28-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "TEAM",
    "Team Size": "3",
    Prize: "₹5,000 (Trophies)",
    Description:
      "Debate Competition is an intellectually stimulating event that encourages students to think critically, communicate effectively, and present logical arguments on contemporary issues. It provides a platform for participants to express diverse viewpoints, develop persuasive skills, and engage in healthy discussions. Through reasoned argumentation and evidence-based reasoning, students enhance their analytical thinking, confidence, and public speaking abilities.",
    "Guidlines of  the Event":
      "Each team will consist of three participants: one For Speaker, one Against Speaker, and one Interjector. Teams will be randomly paired for each debate. The debate will consist of four rounds. In each round, one speaker will deliver their argument for 2 minutes, followed by the opposing team's Interjector questioning them for 1 minute. The speaker will then have 45 seconds to respond. The same sequence will be followed for both For and Against Speakers from both teams. Interjections must remain relevant to the motion and the speaker's arguments. A Winner and 1st Runner-Up will be selected separately in the For Speaker, Against Speaker, and Interjector categories.",
    "Evaluation Pattern":
      "Logical arguments, evidence-based reasoning, persuasive communication, rebuttal efficacy, time adherence, and debate decorum.",
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
    Department: "SEMCE",
    Participation: "School Students",
    "Time Slot": "10:30 AM - 12:00 PM",
    "Venue Details": "C113 (SEMCE Studio)",
    "Coordinator Name": "Dr. Neha Arora (9541394959)",
    "Email ID / Mobile  Number":
      "Poorti Sharma, Palak Saini, Palak Verma, Sakshi Gupta, Kenneth and Manukriti Sharma",
    Date: "27-Oct-26",
    Category: "Technical",
    "Team Event/Individual": "SOLO/TEAM(2-3)",
    Prize: "₹5,000 (2500+2500) 700/800/1000",
    Description:
      "Participants have to upload 30-60 seconds reel on the given theme",
    "Guidlines of  the Event":
      "1. The duration of the reel should be 30–60 seconds.\n2. Upload your reel on your own Instagram account using the hashtags #Ideas4.0 and #KRMU.\n3. Download your reel and email it along with the reel link to the given ID.\n4. Mention \"Reelbaaz\" in the subject line of your email.\n5. Your reel must be original, creative, and must comply with Instagram's community guidelines.\n6. Strictly no plagiarism, violence, hate speech, or inappropriate content.\n7. Multiple entries are allowed, but each entry must be registered separately.\n8. AI-generated or plagiarized content will lead to immediate disqualification.\n9. The jury's decision will be final and binding.",
    "Evaluation Pattern":
      "Creativity, adherence to theme, cinematography/editing quality, originality, and storytelling.",
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

  // 11. SMAS - Science Quiz & Puzzle Solve based on AI Theme
  {
    "Name of Events": "Science Quiz & Puzzle Solve based on AI Theme",
    Department: "SMAS",
    Participation: "School Students",
    "Time Slot": "9:00 AM - 10:00 AM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name": "Dr. Swati Kaushik & Ms. Samiksha Mishra",
    "Email ID / Mobile  Number": "Piyush Jain (83073 74664), Ritika",
    Date: "27-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "To spread awareness about science related facts through teamwork, quick thinking.",
    "Guidlines of  the Event":
      "Team event in first two rounds, and individual in last round. Fastest to solve in 5 mins.",
    "Evaluation Pattern":
      "Team event in first two rounds, and individual in last round. Fastest to solve in 5 mins.",
  },
  {
    Participation: "University Students",
    "Time Slot": "12:30 PM - 1:30 PM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name": "Dr. Swati Kaushik & Ms. Samiksha Mishra",
    "Email ID / Mobile  Number": "Piyush Jain (83073 74664), Ritika",
    Prize: "₹4,500 (1000/1500/2000)",
  },

  // 12. SOLS - Poster/ Collage Making Competition (Theme: Know Your Laws)
  {
    "Name of Events":
      "Poster/ Collage Making Competition  (Theme: Know Your Laws)",
    Department: "SOLS",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 11:00 AM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name":
      "Dr. Ankita ( 9501474214) & Dr. Arti Sharma (9899073342)",
    "Email ID / Mobile  Number": "baibhavi, Ritika",
    Date: "27-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "To spread awareness about cyber laws and promote digital safety by encouraging participants to creatively depict legal knowledge through visual art.",
    "Guidlines of  the Event":
      "Posters must include a slogan they must reflect cyber-related legal issues such as:\n1. Cyber Crime\n2. Online fraud\n3. Data privacy\n4. Impact of social media on youngsters\nLength Should be short and catchy — maximum 15 words.\n• Avoid long sentences or slogans that require additional explanations.\n• The slogan must be original and self-composed.\n\nEach poster must have the participant’s Name, Class & Institution.",
    "Evaluation Pattern":
      "Relevance to theme, artistic creativity, original slogan impact, and visual neatness.",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:30 AM - 12:30 PM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name":
      "Dr. Ankita ( 9501474214) & Dr. Arti Sharma (9899073342)",
    "Email ID / Mobile  Number": "baibhavi, Ritika",
    Prize: "₹4,500 (1000/1500/2000)",
  },

  // 13. SOET - Drone Race (AI Arena)
  {
    "Name of Events": "Drone Race (AI Arena)",
    Department: "SOET",
    Participation: "School Students",
    "Time Slot": "9:30 AM Onwards",
    "Venue Details": "Basketball ground",
    "Coordinator Name":
      "Mr.Gaurav Verma/Dr.Imran Siraj/Dr Naman Gupta/Dr Digvijay",
    "Email ID / Mobile  Number": "Krish, Varun, Bhaumik",
    Date: "27-28 Oct 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
    Description:
      "1.Drones may be manual or remote-controlled\n\n2.Maximum size and weight will be specified by organizers (e.g., diagonal < 500 mm, weight < 2 kg).\n\n3.The obstacle course may include:\n\nHoops / rings to fly through.\n\nZig-zag poles.\n\n4.Drones must follow the marked obstacle path without skipping.",
    "Guidlines of  the Event":
      "1.Drones may be manual or remote-controlled\n\n2.Maximum size and weight will be specified by organizers (e.g., diagonal < 500 mm, weight < 2 kg).\n\n3.The obstacle course may include:\n\nHoops / rings to fly through.\n\nZig-zag poles.\n\n4.Drones must follow the marked obstacle path without skipping.",
    "Evaluation Pattern":
      "1.Evaluation will be based on Compact, efficient, and innovative design and precision in crossing the loops.\n\n2 Drone  that reached the destination first will win.",
  },
  {
    Participation: "University Students",
    "Time Slot": "1:30 PM Onwards",
    "Venue Details": "Basketball Ground/Ai AReana",
    "Coordinator Name":
      "Mr.Gaurav Verma/Dr.Imran Siraj/Dr Naman Gupta/Dr Digvijay",
    "Email ID / Mobile  Number": "Krish, Varun, Bhaumik",
    Prize: "₹9,000 (4500+4500) 1000/1500/2000",
  },

  // 14. SOAS - Agritech – AI Smart Farming Models
  {
    "Name of Events": "Agritech – AI Smart Farming Models",
    Department: "SOAS",
    Participation: "School Students",
    "Time Slot": "11:00 AM - 2:00 PM",
    "Venue Details": "C-306A",
    "Coordinator Name": "Dr Jay Nath Patel and Dr Agnibha Sinha",
    "Email ID / Mobile  Number":
      "Divesh (9599724998), Shubham (9306630597), Anjali (9211964717), Lalit (9813634671)",
    Date: "27-Oct-26",
    Category: "Technical/ Competition",
    "Team Event/Individual": "SOLO/Team(2-3)",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "The “Agritech– Smart Farming Models” showcases innovative technologies and digital solutions revolutionizing agriculture. It highlights smart irrigation, precision farming, sensor-based monitoring and sustainable practices. Students and participants present models demonstrating how technology enhances productivity, resource efficiency and environmental sustainability in modern farming systems.",
    "Guidlines of  the Event":
      "1.\tParticipants may compete individually or in teams of up to 2 members.\n2.\tModels must be original and related to smart or sustainable farming technologies.\n3.\tUse of recycled or eco-friendly materials is encouraged.\n4.\tStudents must bring their own required materials for model making.\n5.\tModel size up to 3 x 2 feet.\n6.\tTeams must adhere to safety guidelines and maintain fair play throughout the competition.\n7.\tJudges’ decisions will be final.",
    "Evaluation Pattern":
      "Innovation, sustainability, precision agriculture relevance, and model presentation.",
  },

  // 15. SOLA - Zero Waste Innovation
  {
    "Name of Events": "Zero Waste Innovation",
    Department: "SOLA",
    Participation: "School Students",
    "Time Slot": "10:30 AM - 3:00 PM",
    "Venue Details": "C Block Ground Floor TT Room",
    "Coordinator Name":
      "Dr Amrita Ratnani(6394260965)/Dr Jyotsna Tyagi(9728509807)",
    "Email ID / Mobile  Number":
      "Manish Kumar- M.A. Sem- 3 (9654464361), Anushka Roy B.A. Sem 3 (8287372002)",
    Date: "27-Oct-26",
    Category: "Technical/ Competition",
    "Team Event/Individual": "(3-5  Members in each) 10 Group per room",
    Prize: "₹6,000 (3000+2000+1000)",
    Description:
      "Zero Waste Innovation is an inter-school and inter-university event designed to inspire young minds to create sustainable solutions for a cleaner planet. The event encourages students to present innovative ideas, models, and practices that minimize waste, promote recycling, and support environmental responsibility — fostering creativity, awareness, and action toward a zero-waste future.",
    "Guidlines of  the Event":
      "Team Composition:\nParticipation is strictly in groups. Each team must consist of 3 to 5 members from the same school or university.\n\nTheme Adherence:\nAll models and presentations must align with the theme “Zero Waste Innovation”, focusing on sustainability, recycling, and waste reduction.\n\nOriginality of Work:\nThe project must be original and student-developed. Plagiarism or pre-made models will lead to immediate disqualification.\n\nPresentation Guidelines:\nEach team will be given 5–7 minutes to present and explain their model, followed by a short Q&A session with the judges.",
    "Evaluation Pattern":
      "Sustainability impact, innovation, feasibility, prototype/model design, and presentation quality.",
  },
  {
    Participation: "University Students",
    "Time Slot": "10:30 AM - 3:00 PM",
    "Venue Details": "C Block Dance Room",
    "Coordinator Name":
      "Dr Amrita Ratnani(6394260965)/Dr Jyotsna Tyagi(9728509807)",
    "Email ID / Mobile  Number":
      "Manish Kumar- M.A. Sem- 3 (9654464361), Anushka Roy B.A. Sem 3 (8287372002)",
    Prize: "₹6,000 (3000+2000+1000)",
  },

  // 15. SOET - One Day Hackathon
  {
    "Name of Events": "One Day Hackathon",
    Department: "SOET",
    Participation: "School Students",
    "Time Slot": "10:00 AM Onwards",
    "Venue Details": "AI Arena",
    "Coordinator Name": "Dr. Amar Saraswat, Dr. Reenu Batra, Dr. Megha Sharma",
    "Email ID / Mobile  Number": "Aditya Kumar Singh, Kartik Sharma",
    Date: "27th October 2026 & 28th October 2026",
    Category: "Technical",
    "Team Event/Individual": "Team (2-4)",

    Prize: "TBD",
    Description:
      "Young AI Innovators Hackathon 4.0 is an exciting AI-focused innovation challenge designed to empower school students to transform their creative ideas into practical, technology-driven solutions. The hackathon will provide participants with an opportunity to explore the potential of Artificial Intelligence, Machine Learning, Generative AI, Robotics, IoT, and other emerging technologies to address real-world problems across areas such as education, healthcare, environment, safety, accessibility, and smart living. The event will be conducted in two rounds—an online ideation and evaluation round, followed by an offline AI Arena, where shortlisted teams will develop and demonstrate their software or hardware prototypes before a panel of judges. Through this experience, students will develop problem-solving, creativity, technical, teamwork, communication, and innovation skills, while gaining practical exposure to AI and emerging technologies in a competitive and collaborative environment.",
    "Guidlines of  the Event":
      "Guidelines / Description\n1.\tTheme: The hackathon theme will be Artificial Intelligence (AI). Participants must develop an innovative solution addressing a real-world problem using AI.\n2.\tTeam Size: Each team may consist of 2–4 students.\n3.\tRound 1 – Online: Teams will submit their AI project idea, problem statement, proposed solution, AI implementation plan, and a short presentation/video within the specified deadline. An online link would be sent to the participants for appearing in this round along with timings. Participants must be present at allotted time slot.\n4.\tProjects will be assessed in the online round based on innovation, relevance of AI, feasibility, creativity, social impact, and presentation.\n5.\tShortlisted teams will qualify for Round 2 – AI Arena, to be conducted physically at K. R. Mangalam University.\n6.\tIn the AI Arena, teams must present and demonstrate their working AI-based software and/or hardware prototype before the judges.\n7.\tParticipants may use software, hardware, AI tools, APIs, machine learning models, generative AI, IoT, robotics, or a combination of these, provided AI forms a meaningful part of the solution.\n8.\tTeams must bring all necessary hardware, components, software, datasets, and other materials required for demonstrating their project.\n9.\tThe project demonstrated in the final round should substantially correspond to the idea submitted in Round 1. Major changes, if any, must be approved by the organizers.\n10.\tUse of publicly available AI tools, libraries, APIs, and datasets is permitted. However, participants must be able to explain how these technologies are used in their project.\n11.\tTeams will be given a predefined time slot for project setup, demonstration, presentation, and interaction with the judges.",
    "Evaluation Pattern":
      "1.\tEvaluation will be based on innovation, originality, and creativity of the AI-based solution.\n2.\tProjects will be assessed on the effective and meaningful use of Artificial Intelligence in solving the identified problem.\n3.\tEvaluation will consider the functionality, working prototype, and quality of the software/hardware demonstration.\n4.\tJudges will assess the real-world impact, feasibility, and scalability of the proposed solution.\n5.\tPresentation, technical understanding, and ability to answer judges' questions will also be considered.",
  },

  // 16. Student Welfare - Duet Dance
  {
    "Name of Events": "Duet Dance",
    Department: "Student Welfare",
    Participation: "School Students",
    "Time Slot": "09:30 AM - 11:00 AM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Date: "27-Oct-26",
    Category: "Cultural",
    "Team Event/Individual": "Duet",
    Prize: "₹4,500 (1000/1500/2000)",
    Description:
      "Unleash your rhythm and coordination as pairs take the stage to showcase creativity, synchronization, and expression through dance. Participants will be judged on choreography, energy, coordination, and overall performance.",
    "Guidlines of  the Event":
      "1. Time limit: 1–1.5 minutes per performance. Points shall be deducted on exceeding the time limit, organizers reserve the right to stop the performance if the time limit is exceeded.\n2. Any dance form allowed.\n3. Pre-recorded tracks must be submitted in advance. Last minute chances in audio are not allowed\n4. Costumes and props allowed. Use of colors, gulal, water, or any material that can damage/disturb the stage is strictly prohibited and will lead to disqualification.\n5. Obscene/derogatory moves or lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Choreography, energy, coordination, synchronization, and overall performance.",
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

  // 16. Student Welfare - Group Dance (Day 1)
  {
    "Name of Events": "Group Dance",
    Department: "Student Welfare",
    Participation: "School Students",
    "Time Slot": "12:30 PM - 2:00 PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Date: "27-Oct-26",
    Category: "Cultural",
    "Team Event/Individual": "TEAM(3-5)",
    Prize: "₹4,500 (1000/1500/2000)",
    Image: "/events/Group Dance.png",
    Description:
      "Showcase your rhythm, energy, and teamwork in the ultimate dance battle! Teams of 3–8 participants can perform any style of dance—be it contemporary, hip-hop, classical, or fusion. Impress the judges with creativity, coordination, and stage presence to win exciting prizes.",
    "Guidlines of  the Event":
      "1. Time limit: 1–2.5 minutes per performance. Points shall be deducted on exceeding the time limit, organizers reserve the right to stop the performance if the time limit is exceeded.\n2. Any dance form allowed.\n3. Pre-recorded tracks must be submitted in advance. Last minute chances in audio are not allowed\n4. Costumes and props allowed. Use of colors, gulal, water, or any material that can damage/disturb the stage is strictly prohibited and will lead to disqualification.\n5. Obscene/derogatory moves or lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Choreography, synchronization, rhythm, costume coordination, stage presence, and crowd impact.",
  },
  {
    Participation: "University Students",
    "Time Slot": "2:00 PM - 3:30 PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Prize: "₹4,500 (1000/1500/2000)",
  },

  // 17. Student Welfare - Group Dance (Day 2)
  {
    "Name of Events": "Group Dance",
    Department: "Student Welfare",
    Participation: "School Students",
    "Time Slot": "9:30 AM - 11:00 AM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nigam (9625003139), Moksh (9211575767), Utkarsh (9220400574), Ananya (8368720719), Swapnil (9582327541)",
    Date: "28-Oct-26",
    Category: "Cultural",
    "Team Event/Individual": "TEAM(3-5)",
    Prize: "₹4,500 (1000/1500/2000)",
    Image: "/assets/upcoming-events/up-ev-25.webp",
    Description:
      "Showcase your rhythm, energy, and teamwork in the ultimate dance battle! Teams of 3–8 participants can perform any style of dance—be it contemporary, hip-hop, classical, or fusion. Impress the judges with creativity, coordination, and stage presence to win exciting prizes.",
    "Guidlines of  the Event":
      "1. Time limit: 1–2.5 minutes per performance. Points shall be deducted on exceeding the time limit, organizers reserve the right to stop the performance if the time limit is exceeded.\n2. Any dance form allowed.\n3. Pre-recorded tracks must be submitted in advance. Last minute chances in audio are not allowed\n4. Costumes and props allowed. Use of colors, gulal, water, or hazardous material is strictly prohibited.\n5. Obscene/derogatory moves or lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Choreography, synchronization, rhythm, costume coordination, stage presence, and crowd impact.",
  },
  {
    Participation: "University Students",
    "Time Slot": "11:30 AM - 1:00 PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nigam (9625003139), Moksh (9211575767), Utkarsh (9220400574), Ananya (8368720719), Swapnil (9582327541)",
    Prize: "₹4,500 (1000/1500/2000)",
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
          ev.time = `${s1.timeSlot} (School) | ${s2.timeSlot} (Univ)`;
        } else if (isS1Univ && isS2School) {
          ev.time = `${s1.timeSlot} (Univ) | ${s2.timeSlot} (School)`;
        } else if (isS1Univ && isS2Univ) {
          ev.time = `${s1.timeSlot} (Univ) | ${s2.timeSlot} (Univ)`;
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
  return (
    allEvents.find((event) => event.slug.toLowerCase() === decoded) ||
    allEvents.find((event) => event.id.toLowerCase() === decoded) ||
    allEvents.find((event) => slugify(event.title) === decoded)
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
