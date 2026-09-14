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
  "robots race": "/assets/upcoming-events/up-ev-14.webp",
  "robo war (ai arena)": "/assets/upcoming-events/up-ev-14.webp",
  "react to the situation": "/assets/upcoming-events/up-ev-9.webp",
  "react to situation": "/assets/upcoming-events/up-ev-9.webp",
  "button masala": "/assets/upcoming-events/up-ev-4.webp",
  "imprint: the art of hand block printing": "/assets/upcoming-events/up-ev-5.webp",
  "soap carving - carved expression": "/assets/upcoming-events/up-ev-7.webp",
  "debate competition": "/assets/upcoming-events/up-ev-12.webp",
  "reelbaaz (30s reel making)": "/assets/upcoming-events/up-ev-13.webp",
  "group dance": "/assets/upcoming-events/up-ev-25.webp",
  "science quiz & puzzle solve based on ai theme": "/assets/upcoming-events/up-ev-17.webp",
  "poster/ collage making competition  (theme: know your laws)": "/assets/upcoming-events/up-ev-19.webp",
  "poster/ collage making competition (theme: know your laws)": "/assets/upcoming-events/up-ev-19.webp",
  "drone race (ai arena)": "/assets/upcoming-events/up-ev-11.webp",
  "agritech – ai smart farming models": "/assets/upcoming-events/up-ev-1.webp",
  "zero waste innovation": "/assets/upcoming-events/up-ev-6.webp",
  "tech treasure hunt": "/assets/upcoming-events/up-ev-10.webp",
  "duet dance": "/assets/upcoming-events/up-ev-26.webp",
  "duet singing": "/assets/upcoming-events/up-ev-27.webp",
  "one day hackathon": "/assets/upcoming-events/up-ev-2.webp",
  "ai teaching aid innovation challenge": "/assets/upcoming-events/up-ev-3.webp",
  "the beverage arena": "/assets/upcoming-events/up-ev-8.webp",
  "the beverage arena (teams represent countries and create signature beverages from those regions)": "/assets/upcoming-events/up-ev-8.webp",
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
    "Time Slot": "10.00 -12.30 PM",
    "Venue Details": "B Block Lobby Ground Floor",
    "Coordinator Name": "Dr Sourabh and Mr Vaibhav",
    "Email ID / Mobile  Number":
      "Vaibhav Saini (8178695170), Arijit Adhikari (7217674411), Tanvee Vashishth (9625124803), Kanika Sudha (8630907218)",
    Date: "27-Oct-26",
    Category: "Technical/ Competition",
    "Team Event/Individual": "SOLO",
    Description:
      "These activities, such as scavenger hunts and crime scene investigations, are interactive and educational exercises that encourage teamwork, observation, and critical thinking. Participants search for hidden clues, solve puzzles, analyze evidence, and collaborate to reach a solution. They make learning fun while developing problem-solving, communication, and decision-making skills in an engaging, hands-on environment",
    "Guidlines of  the Event":
      "1. Teams\nPlayers must be divided into teams\nEach team must stay together at all times during the hunt.\n2. Objective\nFind all the hidden items or clues on the list.\nComplete any challenges or puzzles at each station.\nBe the first team to solve the final mystery or finish all tasks.\n3. Time Limit\nAll teams must complete the hunt within the designated time (e.g., 30–45 minutes).\n4. Clues and Evidence\nTeams must collect or photograph all items/clues exactly as instructed.\nHandle items carefully; do not damage or remove permanent property.\n5. Teamwork\nTeam members must work together and share information.\nNo helping or giving answers to other teams.",
    "Evaluation Pattern":
      "Find all the hidden items or clues on the list. Complete any challenges or puzzles at each station. Be the first team to solve the final mystery or finish all tasks within the designated time.",
  },
  {
    Participation: "School Students",
    "Time Slot": "2-4 PM",
    "Venue Details": "B Block Lobby Ground Floor",
    "Coordinator Name": "Dr Sourabh and Mr Vaibhav",
    "Email ID / Mobile  Number":
      "Vaibhav Saini (8178695170), Arijit Adhikari (7217674411), Tanvee Vashishth (9625124803), Kanika Sudha (8630907218)",
  },

  // 2. SOET - Robots Race
  {
    "Name of Events": "Robots Race",
    Department: "SOET",
    Participation: "School Students/University Students",
    "Time Slot": "10:00 AM Onwards",
    "Venue Details": "Basketball ground",
    "Coordinator Name": "Mr.Gaurav Verma/Dr.Imran Siraj",
    "Email ID / Mobile  Number": "Tanush Tyagi, Tanishka",
    Date: "27-28 Oct 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO/TEAM(3-4)",
    "Team Size": "3-4",
    Description:
      "1.Robot will be wireless.\n\n2.Maximum dimensions and weight will be specified by organizers (e.g., 30x30 cm, 5 kg).\n\n3.The race track will include turns, straight paths, obstacles, or ramps (announced in advance or revealed on the spot).\n\n4.Robots must follow the track without skipping checkpoints.\n\n5.Touching the robot during the run (except for an official reset) will result in penalty points or disqualification.",
    "Guidlines of  the Event":
      "1.Robot will be wireless.\n\n2.Maximum dimensions and weight will be specified by organizers (e.g., 30x30 cm, 5 kg).\n\n3.The race track will include turns, straight paths, obstacles, or ramps (announced in advance or revealed on the spot).\n\n4.Robots must follow the track without skipping checkpoints.\n\n5.Touching the robot during the run (except for an official reset) will result in penalty points or disqualification.",
    "Evaluation Pattern":
      "1. Evaluation will be entirely based on the speed, design, navigation and technical complexity of the design.\n\n2. Robot complete the track first in predefined time slot will win.",
  },

  // 3. SOET - Robo War (AI Arena)
  {
    "Name of Events": "Robo War (AI Arena)",
    Department: "SOET",
    Participation: "School Students/University Students",
    "Time Slot": "10:00 AM Onwards",
    "Venue Details": "Basketball ground",
    "Coordinator Name": "Mr.Gaurav Verma/Dr.Imran Siraj",
    "Email ID / Mobile  Number":
      "1) Umar Farooq, 2) Ayush Partap Singh, 3) Rudra Partap Singh 4) Khushboo",
    Date: "27-28 oct 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO/TEAM(3-4)",
    "Team Size": "3-4",
    Description:
      "Gaming Arena is a thrilling robotics competition where student-built robots engage in intense physical battles and challenges such as Sumo Battle, Robo Soccer, and Task Arena. Participants design, program, and control their robots to outperform opponents in strength, strategy, and agility, showcasing innovation, teamwork, and technical skills.",
    "Guidlines of  the Event":
      "1.Robot will be wireless.\n2. Maximum robot size and weight will be specified (e.g., 40x40 cm, 10 kg).\n3.The objective varies by event type:\n-Robot Soccer – score maximum goals;\n-Sumo Battle – push opponent out of arena;\n-Task Arena – collect objects or complete missions fastest.\n4.Robots must remain inside the arena during gameplay. Leaving the arena results in penalty or disqualification.\n5.Each match will have a fixed time limit (e.g., 2–5 minutes).\n6.Evaluation will be based on the speed, design, navigation, and technical complexity of the design.",
    "Evaluation Pattern":
      "Evaluation will be based on the speed, design, navigation, and technical complexity of the design.",
  },

  // 4. SOMC - React to Situation
  {
    "Name of Events": "React to Situation",
    Department: "SOMC",
    Participation: "School Students/University Students",
    "Time Slot": "9.30 - 12.00 PM",
    "Venue Details": "C415",
    "Coordinator Name": "Dr. Anumeha, Dr. Sapna Rana & Dr. Rafiq",
    "Email ID / Mobile  Number":
      "Vandana, Amar Mittal Veriesh , Naina , Taranpreet",
    Date: "27th October 2026",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Description:
      "The IDEAS 3.0 activity engages students in developing ethical awareness, quick thinking, and communication skills through one-minute spontaneous speeches and model situational responses on legal and moral dilemmas. Covering topics like justice, cybercrime, equality, and professional ethics, it promotes integrity, empathy, and legal reasoning—essential traits for future law professionals and responsible citizens.",
    "Guidlines of  the Event":
      ".Rules for IDEA 3.0 Activity\n1. Each participant will be given a stimulus word or situation related to legal themes or ethical dilemmas.\n2. A total of 1 minute will be allotted to each participant: this time includes thinking, structuring, and delivering their answer on the spot.\n3. Participants must begin speaking as soon as the timer starts; there is no separate \"thinking time\".\n4. Answers should be relevant, well-structured, and must reflect logical reasoning and legal/ethical awareness.\n5. The answer must be completed within 1 minute; exceeding the time limit will lead to automatic stoppage and disqualification from scoring for that round.\n6. No external aids, notes, or prompts may be used during the speech.\n7. The decision of the moderator or evaluator regarding timing, relevance, and adherence to rules will be final.\n8. Respectful language and decorum must be maintained; offensive or disrespectful remarks will result in negative marking or disqualification.\n9. These rules are designed to ensure fairness and to test participant spontaneity, legal knowledge, and ethical reasoning under time constraints.",
    "Evaluation Pattern":
      "Spontaneity, logical reasoning, ethical awareness, structure, and adherence to time limit.",
  },

  // 5. SOAD - Button Masala
  {
    "Name of Events": "Button Masala",
    Department: "SOAD",
    Participation: "School Students",
    "Time Slot": "10:00am- 2:00 pm",
    "Venue Details": "C116 ( Pattern Making Lab)",
    "Coordinator Name": "Ms. Paramjeet Kaur",
    "Email ID / Mobile  Number": "Himanshi Singla 9518495115",
    Date: "28-Sep-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Description:
      "Button Masala is an innovative, zero-waste fashion technique that uses buttons and elastic/rubber bands to create garments and textile forms without conventional cutting, stitching, or permanent alteration of fabric.\nThe workshop will introduce participants to the fundamentals of Button Masala, followed by a creative competition where participants will apply the technique to develop an original fashion or textile outcome.\nIt's  aims to promote experiential learning, material exploration, creativity, sustainability, and innovative design thinking.",
    "Guidlines of  the Event":
      "Each Participants will be recieve the basic materials such as:- Fabric, Buttons, Elastic/rubber bands, Scissors, Measuring tools\nNote:-Participants may be permitted to bring additional non-permanent/reusable materials.\n\nConstruction Rules:\n1.\tFabric, buttons, elastic/rubber bands and other approved materials will be provided by the organisers.\n2.\tParticipants may use additional materials only with prior permission from the organisers.\n3.\tThe primary construction of the design must be achieved through Button Masala techniques.\n4.\tConventional stitching should not be used for the primary construction.\n5.\tParticipants are encouraged to avoid unnecessary cutting and wastage of fabric.\n6.\tThe use of buttons and elastic should be integral to the construction rather than merely decorative.\n7.\tThe final design should preferably be reversible, detachable, reusable or reconfigurable.\n\nPresentation:\nEach participant will receive 3–5 minutes to present the final design.\nThe presentation should briefly explain:\nDesign Title\nConcept and Inspiration\nDesign Development\nButton Masala Techniques Used\nMaterial Selection\nSustainability / Reusability\nFunctionality and Application\n\nThe jury may ask questions regarding the design and construction process.",
    "Evaluation Pattern":
      "Creativity, sustainability, innovative application of Button Masala, and presentation.",
  },

  // 6. SOAD - IMPRINT: The Art of Hand Block Printing
  {
    "Name of Events": "IMPRINT: The Art of Hand Block Printing",
    Department: "SOAD",
    Participation: "School Students",
    "Time Slot": "10:00am- 2:00 pm",
    "Venue Details": "C101 (Textile Lab)",
    "Coordinator Name": "Ms. Annu Yadav and Ms. Kanishka Singh",
    "Email ID / Mobile  Number": "Kirty 7015376660",
    Date: "28-Sep-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Description:
      "The Block Printing Workshop is a hands-on learning experience introducing participants to the traditional art of textile printing. Participants will explore block design, colour preparation, fabric selection, and printing techniques while creating their own printed textile samples. The workshop encourages creativity, experimentation, and appreciation of Indian textile heritage, combining traditional craftsmanship with contemporary design approaches.",
    "Guidlines of  the Event":
      "Basic Instructions: Use printing blocks carefully and handle all tools responsibly.\nMaintain cleanliness and keep the work area organised throughout the workshop.\nDo not exchange or misuse tools and materials without permission.\nClean the blocks, work surface, and tools after completing the activity.\nParticipants must follow the instructor’s demonstration and safety guidelines throughout the workshop.",
    "Evaluation Pattern":
      "Creativity, experimentation, craftsmanship, neatness, and block design execution.",
  },

  // 7. SOAD - Soap Carving - Carved Expression
  {
    "Name of Events": "Soap Carving - Carved Expression",
    Department: "SOAD",
    Participation: "School Students",
    "Time Slot": "10:00am- 01:00 pm",
    "Venue Details": "Campus Lab",
    "Coordinator Name": "Mr. Deepanshu Sharma and Indrajeet Singh pandit",
    "Email ID / Mobile  Number": "Bhumika 9560990811, Anjali  8708776166",
    Date: "27-09-2026",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
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
    "Time Slot": "10:00- 11:30 AM",
    "Venue Details": "A-213",
    "Coordinator Name": "Dr. Vagish Mishra",
    "Email ID / Mobile  Number": "Manasvi , Harsimran , Tulsi(9717006092)",
    Date: "28-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Description:
      "Debate Competition is an intellectually stimulating event that encourages students to think critically, communicate effectively, and present logical arguments on contemporary issues. It provides a platform for participants to express diverse viewpoints, develop persuasive skills, and engage in healthy discussions. Through reasoned argumentation and evidence-based reasoning, students enhance their analytical thinking, confidence, and public speaking abilities. The competition fosters a spirit of respectful dialogue and critical inquiry, preparing participants to articulate their thoughts clearly and respond thoughtfully to opposing perspectives.",
    "Guidlines of  the Event":
      "Each team will consist of three participants: one For Speaker, one Against Speaker, and one Interjector. Teams will be randomly paired for each debate. The debate will consist of four rounds. In each round, one speaker will deliver their argument for 2 minutes, followed by the opposing team’s Interjector questioning them for 1 minute. The speaker will then have 45 seconds to respond. The same sequence will be followed for both For and Against Speakers from both teams. Interjections must remain relevant to the motion and the speaker’s arguments. A Winner and 1st Runner-Up will be selected separately in the For Speaker, Against Speaker, and Interjector categories.",
    "Evaluation Pattern":
      "Logical arguments, evidence-based reasoning, persuasive communication, rebuttal efficacy, time adherence, and debate decorum.",
  },
  {
    Participation: "School Students",
    "Time Slot": "12:00-1:30 PM",
    "Venue Details": "A-215",
    "Coordinator Name": "Dr. Vagish Mishra",
    "Email ID / Mobile  Number": "Manasvi , Harsimran , Tulsi(9717006092)",
  },

  // 9. SEMCE - ReelBaaz (30s Reel Making)
  {
    "Name of Events": "ReelBaaz (30s Reel Making)",
    Department: "SEMCE",
    Participation: "School Students/University Students",
    "Time Slot": "10:30-12:00 PM",
    "Venue Details": "C113 (SEMCE Studio)",
    "Coordinator Name": "Dr. Neha Arora(9541394959)",
    "Email ID / Mobile  Number":
      "Poorti Sharma, Palak Saini, Palak Verma, Sakshi Gupta, Kenneth and Manukriti Sharma",
    Date: "27-Oct-26",
    Category: "Technical",
    "Team Event/Individual": "SOLO/TEAM(2-3)",
    "Team Size": "2-3",
    Description:
      "Participants have to upload 30-60 seconds reel on the given theme",
    "Guidlines of  the Event":
      "1. The duration of the reel should be 30–60 seconds.\n2. Upload your reel on your own Instagram account using the hashtags #Ideas3.0 and #KRMU.\n3. Download your reel and email it along with the reel link to the given ID.\n4. Mention “Reelbaaz” in the subject line of your email.\n5. Your reel must be original, creative, and must comply with Instagram’s community guidelines.\n6. Strictly no plagiarism, violence, hate speech, or inappropriate content.\n7. Multiple entries are allowed, but each entry must be registered separately.\n8. AI-generated or plagiarized content will lead to immediate disqualification.\n9. The jury’s decision will be final and binding.\nReels must be uploaded on Instagram only between 1st and 3rd November 2025 — not before or after.\n10. All reels must be uploaded and submitted by 3rd November 2025.",
    "Evaluation Pattern":
      "Creativity, adherence to theme, cinematography/editing quality, originality, and storytelling.",
  },
  {
    Participation: "School Students/University Students",
    "Time Slot": "2-4 PM",
    "Venue Details": "C113 (SEMCE Studio)",
    "Coordinator Name": "Dr. Neha Arora(9541394959)",
    "Email ID / Mobile  Number":
      "Poorti Sharma, Palak Saini, Palak Verma, Sakshi Gupta, Kenneth and Manukriti Sharma",
  },

  // 10. Student Welfare - Group Dance
  {
    "Name of Events": "Group Dance",
    Department: "Student Welfare",
    Participation: "School Students",
    "Time Slot": "9:30 am-11:00am",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900).Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Date: "28-Oct-26",
    Category: "Cultural",
    "Team Event/Individual": "TEAM(3-5)",
    "Team Size": "3-5",
    Description:
      "Showcase your rhythm, energy, and teamwork in the ultimate dance battle! Teams of 3–8 participants can perform any style of dance—be it contemporary, hip-hop, classical, or fusion. Impress the judges with creativity, coordination, and stage presence to win exciting prizes.",
    "Guidlines of  the Event":
      "1. Time limit: 1–2.5 minutes per performance. Points shall be deducted on exceeding the time limit, organizers reserve the right to stop the performance if the time limit is exceeded.\n2. Any dance form allowed.\n3. Pre-recorded tracks must be submitted in advance. Last minute chances in audio are not allowed\n4. Costumes and props allowed. Use of colors, gulal, water, or any material that can damage/disturb the stage is strictly prohibited and will lead to disqualification.\n5. Obscene/derogatory moves or lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Choreography, synchronization, rhythm, costume coordination, stage presence, and crowd impact.",
  },
  {
    Participation: "School Students",
    "Time Slot": "11:30 am- 01:00pm",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900).Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
  },

  // 11. SMAS - Science Quiz & Puzzle Solve based on AI Theme
  {
    "Name of Events": "Science Quiz & Puzzle Solve based on AI Theme",
    Department: "SMAS",
    Participation: "School Students",
    "Time Slot": "09: 00 Am - 10:00 Am",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name": "Dr. Swati Kaushik &  Ms. Samiksha Mishra",
    "Email ID / Mobile  Number": "Mehek, Anshika, Aryan",
    Date: "27-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Description:
      "To spread awareness about science related facts thorugh teamwork, quick thinking",
    "Guidlines of  the Event":
      "Team event in first two rounds, and individual in last round. Fastest to solve in 5 mins",
    "Evaluation Pattern":
      "Team event in first two rounds, and individual in last round. Fastest to solve in 5 mins",
  },
  {
    Participation: "School Students",
    "Time Slot": "12:30 PM - 1:30 PM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name": "Dr. Swati Kaushik &  Ms. Samiksha Mishra",
    "Email ID / Mobile  Number": "Mehek, Anshika, Aryan",
  },

  // 12. SOLS - Poster/ Collage Making Competition (Theme: Know Your Laws)
  {
    "Name of Events":
      "Poster/ Collage Making Competition  (Theme: Know Your Laws)",
    Department: "SOLS",
    Participation: "School Students",
    "Time Slot": "10:00 am- 11 Noon",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name":
      "Dr. Ankita ( 9501474214) & Dr. Arti Sharma (9899073342)",
    "Email ID / Mobile  Number":
      "Dr. Ankita ( 9501474214) & Dr. Arti Sharma (9899073342)",
    Date: "27-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Description:
      "To spread awareness about cyber laws and promote digital safety by encouraging participants to creatively depict legal knowledge through visual art.",
    "Guidlines of  the Event":
      "Posters must include a slogan they must reflect cyber-related legal issues such as:\n1. Cyber Crime\n2. Online fraud\n3. Data privacy\n4. Impact of social media on youngsters                                                        \t                                                                      Length Should be short and catchy — maximum 15 words.\n•\tAvoid long sentences or slogans that require additional explanations.\n•\tThe slogan must be original and self-composed.\n\nEach poster must have the participant’s Name, Class & Institution.",
    "Evaluation Pattern":
      "Relevance to theme, artistic creativity, original slogan impact, and visual neatness.",
  },
  {
    Participation: "School Students",
    "Time Slot": "11:30 am- 12:30 pm",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name":
      "Dr. Ankita ( 9501474214) & Dr. Arti Sharma (9899073342)",
    "Email ID / Mobile  Number":
      "Dr. Ankita ( 9501474214) & Dr. Arti Sharma (9899073342)",
  },

  // 13. SOET - Drone Race (AI Arena)
  {
    "Name of Events": "Drone Race (AI Arena)",
    Department: "SOET",
    Participation: "School Students/University Students",
    "Time Slot": "11:00 AM Onwards",
    "Venue Details": "Basketball ground / AI Arena",
    "Coordinator Name": "Mr.Gaurav Verma/Dr.Imran Siraj",
    "Email ID / Mobile  Number": "Krish, Varun, Bhaumik",
    Date: "27-28 Oct 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO",
    Description:
      "1.Drones may be manual or remote-controlled\n\n2.Maximum size and weight will be specified by organizers (e.g., diagonal < 500 mm, weight < 2 kg).\n\n3.The obstacle course may include:\n\nHoops / rings to fly through.\n\nZig-zag poles.\n\n4.Drones must follow the marked obstacle path without skipping.",
    "Guidlines of  the Event":
      "1.Drones may be manual or remote-controlled\n\n2.Maximum size and weight will be specified by organizers (e.g., diagonal < 500 mm, weight < 2 kg).\n\n3.The obstacle course may include:\n\nHoops / rings to fly through.\n\nZig-zag poles.\n\n4.Drones must follow the marked obstacle path without skipping.",
    "Evaluation Pattern":
      "1.Evaluation will be based on Compact, efficient, and innovative design and precision in crossing the loops.\n\n2 Drone  that reached the destination first will win.",
  },

  // 14. SOAS - Agritech – AI Smart Farming Models
  {
    "Name of Events": "Agritech – AI Smart Farming Models",
    Department: "SOAS",
    Participation: "School Students",
    "Time Slot": "11.00 AM.-2.00 P.M.",
    "Venue Details": "C-306A",
    "Coordinator Name": "Dr Jay Nath Patel and Dr Agnibha Sinha",
    "Email ID / Mobile  Number":
      "Divesh (9599724998), Shubham (9306630597), Anjali (9211964717), Lalit (9813634671)",
    Date: "27-Oct-26",
    Category: "Technical/ Competition",
    "Team Event/Individual": "SOLO/Team(2-3)",
    "Team Size": "2-3",
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
    Participation: "School Students/University Students",
    "Time Slot": "10:30 am- 03:00 pm",
    "Venue Details": "C Block Ground Floor TT Room",
    "Coordinator Name": "Dr. Amrita Ratnani",
    "Email ID / Mobile  Number":
      "Manish Kumar- M.A. Sem- 3 (9654464361), Anushka Roy B.A. Sem 3 (8287372002)",
    Date: "27-Oct-26",
    Category: "Technical/ Competition",
    "Team Event/Individual": "(3-5  Members in each) 10 Group per room",
    "Team Size": "3-5",
    Description:
      "Zero Waste Innovation is an inter-school and inter-university event designed to inspire young minds to create sustainable solutions for a cleaner planet. The event encourages students to present innovative ideas, models, and practices that minimize waste, promote recycling, and support environmental responsibility — fostering creativity, awareness, and action toward a zero-waste future.",
    "Guidlines of  the Event":
      "Team Composition:\nParticipation is strictly in groups. Each team must consist of 3 to 5 members from the same school or university.\n\nTheme Adherence:\nAll models and presentations must align with the theme “Zero Waste Innovation”, focusing on sustainability, recycling, and waste reduction.\n\nOriginality of Work:\nThe project must be original and student-developed. Plagiarism or pre-made models will lead to immediate disqualification.\n\nPresentation Guidelines:\nEach team will be given 5–7 minutes to present and explain their model, followed by a short Q&A session with the judges.",
    "Evaluation Pattern":
      "Sustainability impact, innovation, feasibility, prototype/model design, and presentation quality.",
  },
  {
    Participation: "School Students/University Students",
    "Time Slot": "10:30 am- 03:00 pm",
    "Venue Details": "C Block Dance Room",
    "Coordinator Name": "Dr. Amrita Ratnani",
    "Email ID / Mobile  Number":
      "Manish Kumar- M.A. Sem- 3 (9654464361), Anushka Roy B.A. Sem 3 (8287372002)",
  },

  // 16. SOET - Tech Treasure Hunt
  {
    "Name of Events": "Tech Treasure Hunt",
    Department: "SOET",
    Participation: "School Students/University Students",
    "Time Slot": "10:00 AM Onwards",
    "Venue Details": "Campus Grounds",
    "Coordinator Name": "Dr.Manish Kumar/Dr. Feroz Ahmad",
    "Email ID / Mobile  Number": "Komal,Bandhan,Daksh,Priya ,Gaurav ,Arpit",
    Date: "27-28 Oct 2026",
    Category: "Technical",
    "Team Event/Individual": "SOLO/Team (2-4)",
    "Team Size": "2-4",
    Description:
      "A treasure hunt is a game where participants follow clues or solve puzzles to find hidden objects or a final “treasure.” It promotes teamwork, problem-solving, and adventure. Clues lead from one location to another until the treasure is discovered. Treasure hunts are popular for parties, schools, and team-building activities, offering fun, excitement, and a sense of achievement",
    "Guidlines of  the Event":
      "\n* Divide participants into teams or allow individuals to play alone.\n* Each team receives a starting clue or hint.\n* Teams must stay together at all times and are not allowed to split up.\n\n* Clues can be written, visual, riddles, puzzles, or tasks that lead to the next location.\n* Each clue should lead logically to the next clue or checkpoint.\n* Teams cannot skip clues or move ahead without solving them.\n\n* Respect the environment and do not litter or disturb nature.\n\n* Clearly define the playing area or map boundaries before starting.\n* Teams must stay within the designated limits.\n\n* The treasure can be a box of treats, a prize, a token, or a certificate.\n* You can include smaller rewards at checkpoints and a grand prize at the end.",
    "Evaluation Pattern":
      "Speed, accuracy in solving puzzles, teamwork, and completion of all checkpoints.",
  },

  // 17. STUDENT WELFARE - Duet Dance
  {
    "Name of Events": "Duet Dance",
    Department: "STUDENT WELFARE",
    Participation: "University Students/School Students",
    "Time Slot": "09:30 AM -11:00 AM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900).Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Date: "27-Oct-26",
    Category: "Cultural",
    "Team Event/Individual": "Duet",
    "Team Size": "2",
    Description:
      "Unleash your rhythm and coordination as pairs take the stage to showcase creativity, synchronization, and expression through dance. Participants will be judged on choreography, energy, coordination, and overall performance.",
    "Guidlines of  the Event":
      "1. Time limit: 1–1.5 minutes per performance. Points shall be deducted on exceeding the time limit, organizers reserve the right to stop the performance if the time limit is exceeded.\n2. Any dance form allowed.\n3. Pre-recorded tracks must be submitted in advance. Last minute chances in audio are not allowed\n4. Costumes and props allowed. Use of colors, gulal, water, or any material that can damage/disturb the stage is strictly prohibited and will lead to disqualification.\n5. Obscene/derogatory moves or lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Choreography, energy, coordination, synchronization, and overall performance.",
  },
  {
    Participation: "University Students/School Students",
    "Time Slot": "11:00 AM- 12:30PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900).Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
  },

  // 18. STUDENT WELFARE - Group Dance
  {
    "Name of Events": "Group Dance",
    Department: "STUDENT WELFARE",
    Participation: "University Students/School Students",
    "Time Slot": "12:30 PM - 2:00PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900).Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Date: "27-Oct-26",
    Category: "Cultural",
    "Team Event/Individual": "TEAM(3-5)",
    "Team Size": "3-5",
    Description:
      "Showcase your rhythm, energy, and teamwork in the ultimate dance battle! Teams of 3–8 participants can perform any style of dance—be it contemporary, hip-hop, classical, or fusion. Impress the judges with creativity, coordination, and stage presence to win exciting prizes.",
    "Guidlines of  the Event":
      "1. Time limit: 1–2.5 minutes per performance. Points shall be deducted on exceeding the time limit, organizers reserve the right to stop the performance if the time limit is exceeded.\n2. Any dance form allowed.\n3. Pre-recorded tracks must be submitted in advance. Last minute chances in audio are not allowed\n4. Costumes and props allowed. Use of colors, gulal, water, or any material that can damage/disturb the stage is strictly prohibited and will lead to disqualification.\n5. Obscene/derogatory moves or lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Choreography, synchronization, rhythm, costume coordination, stage presence, and crowd impact.",
  },
  {
    Participation: "University Students/School Students",
    "Time Slot": "2:00PM-3:30 PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number":
      "Nirdesh (9810624900).Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
  },

  // 19. SOET - One Day Hackathon
  {
    "Name of Events": "One Day Hackathon",
    Department: "SOET",
    Participation: "School Students",
    "Time Slot": "9:10 Am - 04:00 PM",
    "Venue Details": "To be decided later",
    "Coordinator Name":
      "Dr. Reenu Batra, Dr. Megha Sharma, Dr. Amar Sraswat",
    "Email ID / Mobile  Number": "Aditya Kumar Singh, Kartik Sharma",
    Date: "28-Oct-26",
    Category: "Technical",
    "Team Event/Individual": "SOLO/Team (2-4)",
    "Team Size": "2-4",
    Description:
      "One Day Hackathon challenging students to design, code, and prototype innovative technology and software solutions within a dedicated time sprint.",
    "Guidlines of  the Event":
      "Participants can compete solo or in teams of 2 to 4 members. Problem statements will be revealed at the commencement of the hackathon.",
    "Evaluation Pattern":
      "Innovation, technical implementation, working prototype, and presentation.",
  },

  // 20. SOED - AI Teaching Aid Innovation Challenge
  {
    "Name of Events": "AI Teaching Aid Innovation Challenge",
    Department: "SOED",
    Participation:
      "B.Ed. and B.El.Ed. student-teachers, teacher educators, school teachers, school students, and other visitors interested in AI-enabled teaching and learning.",
    "Time Slot": "10:00 AM -2:00 PM",
    "Venue Details": "A 203",
    "Coordinator Name": "Dr. Richa Malaviya",
    "Email ID / Mobile  Number":
      "Priti, P Seetha Lakshmi -B.Ed. students (Semester -III)",
    Date: "28-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Description:
      "Develop comic strips, digital lesson planning, storytelling, worksheets prep, stories, flashcards, concept maps, quizzes, simulations, visual aids or multilingual resources using AI.",
    "Guidlines of  the Event":
      "Individual/team of 2–3; create an original AI-assisted teaching aid for a specified class, subject and learning outcome; disclose AI tools used; fact-check all AI-generated content; ensure age-appropriateness, inclusion, accuracy and ethical AI use; no confidential student data; 5–7 minute demonstration plus jury interaction; evaluation based on innovation, pedagogy, responsible AI use, usability and classroom impact.",
    "Evaluation Pattern":
      "Innovation, pedagogy, responsible AI use, usability and classroom impact.",
  },

  // 21. SOHMCT - The Beverage Arena
  {
    "Name of Events":
      "The Beverage Arena  (Teams represent countries and create signature beverages from those regions)",
    Department: "SOHMCT",
    Participation: "University Students/School Students",
    "Time Slot": "11:30 a. m. - 12:30 p.m.",
    "Venue Details": "F & B Training Restaurant",
    "Coordinator Name": "Mr. Akash Gautam",
    "Email ID / Mobile  Number": "Prashant , Chirag",
    Date: "28-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO/Team (2-4)",
    "Team Size": "2-4",
    Description:
      "Participants will represent a country and create signature beverages inspired by its culture, ingredients, and traditional flavours. The competition will test creativity, presentation, beverage knowledge, and preparation skills. Participants must present their beverage along with a brief explanation of the concept, ingredients, and inspiration behind their creation.",
    "Guidlines of  the Event":
      "1. Teams must consist of 2–4 participants.\n2. Each team must represent one country.\n3. The beverage must reflect the chosen country’s culture or flavours.\n4. Participants must bring/arrange their required ingredients and equipment as permitted.\n5. The beverage must be prepared within the allotted time.\n6. Proper hygiene and safety practices are mandatory.\n7. Judging will be based on creativity, taste, presentation, concept, technique, and explanation.\n8. Judges’ decision will be final.",
    "Evaluation Pattern":
      "Creativity, taste, presentation, concept, technique, and explanation.",
  },
  {
    Participation: "University Students/School Students",
    "Time Slot": "01:00 p.m. - 02:30 p.m.",
    "Venue Details": "F & B Training Restaurant",
    "Coordinator Name": "Mr. Akash Gautam",
    "Email ID / Mobile  Number": "Prashant , Chirag",
  },

  // 22. SOET - ROBO Soccer
  {
    "Name of Events": "ROBO Soccer",
    Department: "SOET",
    Participation: "University/School",
    "Time Slot": "11 AM Onwards",
    "Venue Details": "Basketball Ground/Ai AReana",
    "Coordinator Name": "Mr Gaurav/ Dr Imran/ Dr.Naman",
    "Email ID / Mobile  Number": "Event Coordinators",
    Date: "27-28 Oct 2026",
    Category: "Technical",
    "Team Event/Individual": "Team (2-4)",
    "Team Size": "2-4",
    Description:
      "ROBO Soccer competition where student-engineered robots face off in exciting football matches on the arena field.",
    "Guidlines of  the Event":
      "1. Robot will be wireless.\n2. Teams of 2 to 4 members.\n3. Robots must score goals within the allotted time in the arena.\n4. Both days match schedules will be announced by the organizers.",
    "Evaluation Pattern":
      "Match wins, goals scored, technical maneuvering, and fair play.",
  },
  {
    Participation: "University/School",
    "Time Slot": "2nd day same time university",
    "Venue Details": "Basketball Ground/Ai AReana",
    "Coordinator Name": "Mr Gaurav/ Dr Imran/ Dr.Naman",
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
        eventImages[normalizedTitle] ||
        eventImages[slugifiedTitle] ||
        eventImages[slugify(title)] ||
        "/placeholder.svg";
      const isCultural = CULTURAL_EVENT_TITLES.has(normalizedTitle);

      const rawDate = row.Date || "27-Oct-26";
      let formattedDate = "October 27, 2026";
      if (rawDate.includes("24")) {
        formattedDate = "24th – 25th October 2026 (Online), 27th – 28th October 2026 (Offline)";
      } else if (rawDate.includes("28")) {
        formattedDate = "October 28, 2026";
      }
      const venueLocation = row["Venue Details"] || "Campus";
      const campusAddress = "K.R. Mangalam University, Sohna Road, Gurugram, Delhi-NCR, Haryana";
      const fullAddress = `${venueLocation}, ${campusAddress}`;

      currentEvent = {
        id: slugifiedTitle,
        title: title,
        slug: slugifiedTitle,
        department: row.Department || "TBA",
        category: row.Category || (isCultural ? "Cultural" : row.Department || "General"),
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
        dateObj: rawDate.includes("24") ? new Date("2026-10-24") : rawDate.includes("28") ? new Date("2026-10-28") : new Date("2026-10-27"),
        location: venueLocation,
        address: fullAddress,
        time: row["Time Slot"],
        type: "spotlight",
        day: rawDate.includes("28") ? "day2" : "day1",
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

  return events;
}

const allEvents = groupEventSessions(rawRows);

// 8 Curated Spotlight Events requested by stakeholder
const SPOTLIGHT_ALLOWLIST = new Set<string>([
  "crime scene investigation game",
  "react to the situation",
  "react to situation",
  "button masala",
  "imprint: the art of hand block printing",
  "soap carving - carved expression",
  "debate competition",
  "agritech – ai smart farming models",
  "agritech - ai smart farming models",
  "zero waste innovation",
]);

function isCultural(ev: EventItem) {
  return ev.category === "Cultural" || CULTURAL_EVENT_TITLES.has(ev.title.trim().toLowerCase());
}

const spotlightFiltered = allEvents.filter((ev) => {
  const norm = ev.title.trim().toLowerCase().replace(/\s+/g, " ");
  return SPOTLIGHT_ALLOWLIST.has(norm);
});

const culturalEvents = allEvents.filter(isCultural);
const curatedAllEventsMap = new Map<string, EventItem>();
for (const ev of spotlightFiltered) curatedAllEventsMap.set(ev.id, ev);
for (const ev of culturalEvents) curatedAllEventsMap.set(ev.id, ev);
const curatedAllEvents = Array.from(curatedAllEventsMap.values());

// Export functions
export function getAllEvents(): EventItem[] {
  return allEvents;
}

export function getAllRawEvents(): EventItem[] {
  return allEvents;
}

export function getSpotlightEvents(): EventItem[] {
  return spotlightFiltered;
}

export function getSpotlightCategories(): string[] {
  const set = new Set<string>();
  for (const ev of spotlightFiltered) {
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

export function getCulturalEvents(): EventItem[] {
  return allEvents.filter(isCultural);
}

export function getEventCounts() {
  const cultural = culturalEvents.length;
  const spotlight = spotlightFiltered.length;
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
  category: (e.category?.includes("Cultural") ? "Cultural" : e.category?.includes("Academic") ? "Academic" : "Technical") as any,
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
