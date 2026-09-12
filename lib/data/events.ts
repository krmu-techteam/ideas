// Authoritative Events & Sessions Data (11 official events for IDEAS)
// Cleaned up to include exclusively the 11 active stakeholder-provided events.

const CULTURAL_EVENT_TITLES = new Set([
  "group dance",
  "group dance (school students)",
  "duet dance",
  "duet singing",
  "solo singing",
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
  "react to situation": "/assets/upcoming-events/up-ev-9.webp",
  "react to the situation": "/assets/upcoming-events/up-ev-9.webp",
  "reelbaaz (30s reel making)": "/assets/upcoming-events/up-ev-13.webp",
  "group dance": "/assets/upcoming-events/up-ev-25.webp",
  "group dance (school students)": "/assets/upcoming-events/up-ev-25.webp",
  "science quiz & puzzle solve based on ai theme": "/assets/upcoming-events/up-ev-17.webp",
  "science quiz & puzzle solve": "/assets/upcoming-events/up-ev-17.webp",
  "poster/ collage making competition (theme: know your laws)": "/assets/upcoming-events/up-ev-19.webp",
  "poster/collage making competition (theme: know your laws)": "/assets/upcoming-events/up-ev-19.webp",
  "poster making (theme: know your laws)": "/assets/upcoming-events/up-ev-19.webp",
  "zero waste innovation": "/assets/upcoming-events/up-ev-6.webp",
  "duet dance": "/assets/upcoming-events/up-ev-26.webp",
  "duet singing": "/assets/upcoming-events/up-ev-27.webp",
  "ai teaching aid innovation challenge": "/assets/upcoming-events/up-ev-3.webp",
  "the beverage arena": "/assets/upcoming-events/up-ev-8.webp",
  "the beverage arena (teams represent countries and create signature beverages from those regions)": "/assets/upcoming-events/up-ev-8.webp",
  "debate competition": "/assets/upcoming-events/up-ev-12.webp",
};

// 11 Official Events Provided by Stakeholder
const rawRows: RawRow[] = [
  // 1. SBAS - Crime Scene Investigation Game
  {
    "Name of Events": "Crime Scene Investigation Game",
    Department: "SBAS",
    Participation: "School Students",
    "Time Slot": "10.00 - 12.30 PM",
    "Venue Details": "B Block Lobby Ground Floor",
    "Coordinator Name": "Dr Sourabh and Mr Vaibhav",
    "Email ID / Mobile  Number": "Vaibhav Saini (8178695170), Arijit Adhikari (7217674411), Tanvee Vashishth (9625124803), Kanika Sudha (8630907218)",
    Date: "27-Oct-26",
    Category: "Technical/ Competition",
    "Team Event/Individual": "SOLO",
    Prize: "₹9,000 (4500+4500) | 1000/1500/2000",
    Description:
      "These activities, such as scavenger hunts and crime scene investigations, are interactive and educational exercises that encourage teamwork, observation, and critical thinking. Participants search for hidden clues, solve puzzles, analyze evidence, and collaborate to reach a solution. They make learning fun while developing problem-solving, communication, and decision-making skills in an engaging, hands-on environment.",
    "Guidlines of  the Event":
      "1. Teams: Players must be divided into teams. Each team must stay together at all times during the hunt.\n2. Objective: Find all the hidden items or clues on the list. Complete any challenges or puzzles at each station. Be the first team to solve the final mystery or finish all tasks.\n3. Time Limit: All teams must complete the hunt within the designated time (e.g., 30–45 minutes).\n4. Clues and Evidence: Teams must collect or photograph all items/clues exactly as instructed. Handle items carefully; do not damage or remove permanent property.\n5. Teamwork: Team members must work together and share information. No helping or giving answers to other teams.",
    "Evaluation Pattern":
      "Be the first team to solve the final mystery or finish all tasks within the designated time limit.",
  },
  {
    Participation: "School Students",
    "Time Slot": "2-4 PM",
    "Venue Details": "B Block Lobby Ground Floor",
    "Coordinator Name": "Dr Sourabh and Mr Vaibhav",
    "Email ID / Mobile  Number": "Vaibhav Saini (8178695170), Arijit Adhikari (7217674411), Tanvee Vashishth (9625124803), Kanika Sudha (8630907218)",
  },

  // 2. SOMC - React to Situation
  {
    "Name of Events": "React to Situation",
    Department: "SOMC",
    Participation: "School Students/University Students",
    "Time Slot": "9.30 - 12.00 PM",
    "Venue Details": "C415",
    "Coordinator Name": "Dr. Anumeha, Dr. Sapna Rana",
    "Email ID / Mobile  Number": "Vandana, Mansi, Prince, Sameeksha",
    Date: "27-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹7,000 (3500+3500) | 900/1100/1500",
    Description:
      "The IDEAS 3.0 activity engages students in developing ethical awareness, quick thinking, and communication skills through one-minute spontaneous speeches and model situational responses on legal and moral dilemmas. Covering topics like justice, cybercrime, equality, and professional ethics, it promotes integrity, empathy, and legal reasoning—essential traits for future law professionals and responsible citizens.",
    "Guidlines of  the Event":
      "Rules for IDEA 3.0 Activity:\n1. Each participant will be given a stimulus word or situation related to legal themes or ethical dilemmas.\n2. A total of 1 minute will be allotted to each participant: this time includes thinking, structuring, and delivering their answer on the spot.\n3. Participants must begin speaking as soon as the timer starts; there is no separate \"thinking time\".\n4. Answers should be relevant, well-structured, and must reflect logical reasoning and legal/ethical awareness.\n5. The answer must be completed within 1 minute; exceeding the time limit will lead to automatic stoppage and disqualification from scoring for that round.\n6. No external aids, notes, or prompts may be used during the speech.\n7. The decision of the moderator or evaluator regarding timing, relevance, and adherence to rules will be final.\n8. Respectful language and decorum must be maintained; offensive or disrespectful remarks will result in negative marking or disqualification.\n9. These rules are designed to ensure fairness and to test participant spontaneity, legal knowledge, and ethical reasoning under time constraints.",
    "Evaluation Pattern":
      "Spontaneity, logical reasoning, ethical awareness, structure, and adherence to time limit.",
  },
  {
    Participation: "School Students/University Students",
    "Time Slot": "1:00 - 3:00 PM",
    "Venue Details": "C415",
    "Coordinator Name": "Dr. Anumeha, Dr. Sapna Rana",
    "Email ID / Mobile  Number": "Vandana, Mansi, Prince, Sameeksha",
  },

  // 3. SEMCE - ReelBaaz (30s Reel Making)
  {
    "Name of Events": "ReelBaaz (30s Reel Making)",
    Department: "SEMCE",
    Participation: "School Students/University Students",
    "Time Slot": "10:30 - 12:00 PM",
    "Venue Details": "C113 (SEMCE Studio)",
    "Coordinator Name": "Dr. Neha Arora (9541394959)",
    "Email ID / Mobile  Number": "Poorti Sharma, Palak Saini, Palak Verma, Sakshi Gupta, Kenneth, Manukriti Sharma",
    Date: "27-Oct-26",
    Category: "Technical",
    "Team Event/Individual": "SOLO / TEAM (2-3)",
    "Team Size": "1-3",
    Prize: "₹5,000 (2500+2500) | 700/800/1000",
    Description:
      "Participants have to upload 30-60 seconds reel on the given theme, showcasing visual storytelling, digital aesthetics, and innovative concepts.",
    "Guidlines of  the Event":
      "1. The duration of the reel should be 30–60 seconds.\n2. Upload your reel on your own Instagram account using the hashtags #Ideas3.0 and #KRMU.\n3. Download your reel and email it along with the reel link to the given ID.\n4. Mention “Reelbaaz” in the subject line of your email.\n5. Your reel must be original, creative, and must comply with Instagram’s community guidelines.\n6. Strictly no plagiarism, violence, hate speech, or inappropriate content.\n7. Multiple entries are allowed, but each entry must be registered separately.\n8. AI-generated or plagiarized content will lead to immediate disqualification.\n9. The jury’s decision will be final and binding.\n10. Reels must be uploaded and submitted by the deadline.",
    "Evaluation Pattern":
      "Creativity, adherence to theme, cinematography/editing quality, originality, and storytelling.",
  },
  {
    Participation: "School Students/University Students",
    "Time Slot": "2:00 - 4:00 PM",
    "Venue Details": "C113 (SEMCE Studio)",
    "Coordinator Name": "Dr. Neha Arora (9541394959)",
    "Email ID / Mobile  Number": "Poorti Sharma, Palak Saini, Palak Verma, Sakshi Gupta, Kenneth, Manukriti Sharma",
  },

  // 4. Student Welfare - Group Dance (School Students)
  {
    "Name of Events": "Group Dance",
    Department: "Student Welfare",
    Participation: "School Students",
    "Time Slot": "9:30 AM - 11:00 AM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number": "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Date: "28-Oct-26",
    Category: "Cultural",
    "Team Event/Individual": "TEAM (3-5)",
    "Team Size": "3-5",
    Prize: "₹4,500 | 1000/1500/2000",
    Description:
      "Showcase your rhythm, energy, and teamwork in the ultimate dance battle! Teams of 3–8 participants can perform any style of dance—be it contemporary, hip-hop, classical, or fusion. Impress the judges with creativity, coordination, and stage presence to win exciting prizes.",
    "Guidlines of  the Event":
      "1. Time limit: 1–2.5 minutes per performance. Points shall be deducted on exceeding the time limit, organizers reserve the right to stop the performance if the time limit is exceeded.\n2. Any dance form allowed.\n3. Pre-recorded tracks must be submitted in advance. Last minute changes in audio are not allowed.\n4. Costumes and props allowed. Use of colors, gulal, water, or any material that can damage/disturb the stage is strictly prohibited and will lead to disqualification.\n5. Obscene/derogatory moves or lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Choreography, synchronization, rhythm, costume coordination, stage presence, and crowd impact.",
  },
  {
    Participation: "School Students",
    "Time Slot": "11:30 AM - 01:00 PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number": "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
  },

  // 5. SMAS - Science Quiz & Puzzle Solve based on AI Theme
  {
    "Name of Events": "Science Quiz & Puzzle Solve based on AI Theme",
    Department: "SMAS",
    Participation: "School Students",
    "Time Slot": "09:00 AM - 10:00 AM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name": "Dr. Swati Kaushik & Ms. Samiksha Mishra",
    "Email ID / Mobile  Number": "Mehek, Anshika, Aryan",
    Date: "27-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 | 1000/1500/2000",
    Description:
      "To spread awareness about science related facts through teamwork, quick thinking, and engaging puzzles based on AI themes.",
    "Guidlines of  the Event":
      "Team event in first two rounds, and individual in last round. Fastest to solve in 5 minutes wins.",
    "Evaluation Pattern":
      "Accuracy of answers and speed of problem solving within the 5-minute threshold.",
  },
  {
    Participation: "School Students",
    "Time Slot": "12:30 PM - 1:30 PM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name": "Dr. Swati Kaushik & Ms. Samiksha Mishra",
    "Email ID / Mobile  Number": "Mehek, Anshika, Aryan",
  },

  // 6. SOLS - Poster/ Collage Making Competition (Theme: Know Your Laws)
  {
    "Name of Events": "Poster/ Collage Making Competition (Theme: Know Your Laws)",
    Department: "SOLS",
    Participation: "School Students",
    "Time Slot": "10:00 AM - 11:00 AM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name": "Dr. Ankita (9501474214) & Dr. Arti Sharma (9899073342)",
    "Email ID / Mobile  Number": "Dr. Ankita (9501474214), Dr. Arti Sharma (9899073342)",
    Date: "27-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO",
    Prize: "₹4,500 | 1000/1500/2000",
    Description:
      "To spread awareness about cyber laws and promote digital safety by encouraging participants to creatively depict legal knowledge through visual art.",
    "Guidlines of  the Event":
      "Posters must include a slogan reflecting cyber-related legal issues such as:\n1. Cyber Crime\n2. Online fraud\n3. Data privacy\n4. Impact of social media on youngsters\n\nLength should be short and catchy — maximum 15 words.\n• Avoid long sentences or slogans that require additional explanations.\n• The slogan must be original and self-composed.\n\nEach poster must have the participant’s Name, Class & Institution.",
    "Evaluation Pattern":
      "Relevance to theme, artistic creativity, original slogan impact, and visual neatness.",
  },
  {
    Participation: "School Students",
    "Time Slot": "11:30 AM - 12:30 PM",
    "Venue Details": "Multi purpose hall",
    "Coordinator Name": "Dr. Ankita (9501474214) & Dr. Arti Sharma (9899073342)",
    "Email ID / Mobile  Number": "Dr. Ankita (9501474214), Dr. Arti Sharma (9899073342)",
  },

  // 7. SOLA - Zero Waste Innovation
  {
    "Name of Events": "Zero Waste Innovation",
    Department: "SOLA",
    Participation: "School Students/University Students",
    "Time Slot": "10:30 AM - 03:00 PM",
    "Venue Details": "C Block Ground Floor TT Room",
    "Coordinator Name": "Dr Amrita Ratnani (6394260965) / Dr Jyotsna Tyagi (9728509807)",
    "Email ID / Mobile  Number": "Manish Kumar- M.A. Sem- 3 (9654464361), Anushka Roy B.A. Sem 3 (8287372002)",
    Date: "27-Oct-26",
    Category: "Technical/ Competition",
    "Team Event/Individual": "TEAM (3-5 Members)",
    "Team Size": "3-5",
    Prize: "₹6,000 | 3000+2000+1000",
    Description:
      "Zero Waste Innovation is an inter-school and inter-university event designed to inspire young minds to create sustainable solutions for a cleaner planet. The event encourages students to present innovative ideas, models, and practices that minimize waste, promote recycling, and support environmental responsibility — fostering creativity, awareness, and action toward a zero-waste future.",
    "Guidlines of  the Event":
      "Team Composition: Participation is strictly in groups. Each team must consist of 3 to 5 members from the same school or university.\n\nTheme Adherence: All models and presentations must align with the theme “Zero Waste Innovation”, focusing on sustainability, recycling, and waste reduction.\n\nOriginality of Work: The project must be original and student-developed. Plagiarism or pre-made models will lead to immediate disqualification.\n\nPresentation Guidelines: Each team will be given 5–7 minutes to present and explain their model, followed by a short Q&A session with the judges.",
    "Evaluation Pattern":
      "Sustainability impact, innovation, feasibility, prototype/model design, and presentation quality.",
  },
  {
    Participation: "School Students/University Students",
    "Time Slot": "10:30 AM - 03:00 PM",
    "Venue Details": "C Block Dance Room",
    "Coordinator Name": "Dr Amrita Ratnani (6394260965) / Dr Jyotsna Tyagi (9728509807)",
    "Email ID / Mobile  Number": "Manish Kumar- M.A. Sem- 3 (9654464361), Anushka Roy B.A. Sem 3 (8287372002)",
  },

  // 8. STUDENT WELFARE - Duet Dance
  {
    "Name of Events": "Duet Dance",
    Department: "STUDENT WELFARE",
    Participation: "University Students/School Students",
    "Time Slot": "09:30 AM - 11:00 AM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number": "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Date: "27-Oct-26",
    Category: "Cultural",
    "Team Event/Individual": "Duet",
    "Team Size": "2",
    Prize: "₹4,500 | 1000/1500/2000",
    Description:
      "Unleash your rhythm and coordination as pairs take the stage to showcase creativity, synchronization, and expression through dance. Participants will be judged on choreography, energy, coordination, and overall performance.",
    "Guidlines of  the Event":
      "1. Time limit: 1–1.5 minutes per performance. Points shall be deducted on exceeding the time limit, organizers reserve the right to stop the performance if the time limit is exceeded.\n2. Any dance form allowed.\n3. Pre-recorded tracks must be submitted in advance. Last minute changes in audio are not allowed.\n4. Costumes and props allowed. Use of colors, gulal, water, or any material that can damage/disturb the stage is strictly prohibited and will lead to disqualification.\n5. Obscene/derogatory moves or lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Pair chemistry, timing, choreography, technical execution, and stage dynamic.",
  },
  {
    Participation: "University Students/School Students",
    "Time Slot": "11:00 AM - 12:30 PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number": "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
  },

  // 9. STUDENT WELFARE - Duet Singing
  {
    "Name of Events": "Duet Singing",
    Department: "STUDENT WELFARE",
    Participation: "University Students/School Students",
    "Time Slot": "12:30 PM - 2:00 PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number": "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
    Date: "27-Oct-26",
    Category: "Cultural",
    "Team Event/Individual": "Duet",
    "Team Size": "2",
    Prize: "₹4,500 | 1000/1500/2000",
    Description:
      "Two voices, one harmony! Participants will perform as a duo, blending vocals and emotions to create musical magic. Judgement will be based on coordination, harmony, melody, and stage connection.",
    "Guidlines of  the Event":
      "1. Time limit: 3–4 minutes per performance.\n2. Points shall be deducted if time exceeds.\n3. Organizers reserve the right to stop the performance on exceeding the limit.\n4. Participants may sing in any language/genre.\n5. Karaoke tracks or instruments must be arranged and submitted in advance (if used).\n6. Obscene, offensive, or disrespectful lyrics are strictly prohibited.",
    "Evaluation Pattern":
      "Vocal pitch, harmony, synchronization, dynamics, song selection, and overall musical chemistry.",
  },
  {
    Participation: "University Students/School Students",
    "Time Slot": "2:00 PM - 3:30 PM",
    "Venue Details": "Sunken Garden",
    "Coordinator Name": "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
    "Email ID / Mobile  Number": "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
  },

  // 10. SOED - AI Teaching Aid Innovation Challenge
  {
    "Name of Events": "AI Teaching Aid Innovation Challenge",
    Department: "SOED",
    Participation: "B.Ed. and B.El.Ed. student-teachers, teacher educators, school teachers, school students, and other visitors",
    "Time Slot": "10:00 AM - 2:00 PM",
    "Venue Details": "A 203",
    "Coordinator Name": "Dr. Richa Malaviya",
    "Email ID / Mobile  Number": "Priti, P Seetha Lakshmi - B.Ed. students (Semester -III)",
    Date: "28-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO / TEAM (2-3)",
    "Team Size": "1-3",
    Prize: "₹2,000 | 1000/500/500",
    Description:
      "Develop comic strips, digital lesson planning, storytelling, worksheets prep, stories, flashcards, concept maps, quizzes, simulations, visual aids or multilingual resources using AI.",
    "Guidlines of  the Event":
      "Individual/team of 2–3; create an original AI-assisted teaching aid for a specified class, subject and learning outcome; disclose AI tools used; fact-check all AI-generated content; ensure age-appropriateness, inclusion, accuracy and ethical AI use; no confidential student data; 5–7 minute demonstration plus jury interaction; evaluation based on innovation, pedagogy, responsible AI use, usability and classroom impact.",
    "Evaluation Pattern":
      "Innovation, pedagogical effectiveness, responsible AI usage, ease of usability, and classroom relevance.",
  },

  // 11. SOHMCT - The Beverage Arena
  {
    "Name of Events": "The Beverage Arena",
    Department: "SOHMCT",
    Participation: "University Students/School Students",
    "Time Slot": "11:30 AM - 12:30 PM",
    "Venue Details": "F & B Training Restaurant",
    "Coordinator Name": "Mr. Akash Gautam",
    "Email ID / Mobile  Number": "Prashant, Chirag",
    Date: "28-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "SOLO / TEAM (2-4)",
    "Team Size": "1-4",
    Prize: "₹1,000 | 500/500",
    Description:
      "Teams represent countries and create signature beverages from those regions. Participants will represent a country and create signature beverages inspired by its culture, ingredients, and traditional flavours. The competition will test creativity, presentation, beverage knowledge, and preparation skills. Participants must present their beverage along with a brief explanation of the concept, ingredients, and inspiration behind their creation.",
    "Guidlines of  the Event":
      "1. Teams must consist of 2–4 participants.\n2. Each team must represent one country.\n3. The beverage must reflect the chosen country’s culture or flavours.\n4. Participants must bring/arrange their required ingredients and equipment as permitted.\n5. The beverage must be prepared within the allotted time.\n6. Proper hygiene and safety practices are mandatory.\n7. Judging will be based on creativity, taste, presentation, concept, technique, and explanation.\n8. Judges’ decision will be final.",
    "Evaluation Pattern":
      "Creativity, taste, presentation, technique, hygiene, and knowledge explanation.",
  },
  {
    Participation: "University Students/School Students",
    "Time Slot": "01:00 PM - 02:30 PM",
    "Venue Details": "F & B Training Restaurant",
    "Coordinator Name": "Mr. Akash Gautam",
    "Email ID / Mobile  Number": "Prashant, Chirag",
  },

  // 12. SOLA - Debate Competition
  {
    "Name of Events": "Debate Competition",
    Department: "SOLA",
    Participation: "School Students/University Students",
    "Time Slot": "9:30 AM - 12:00 NOON",
    "Venue Details": "A-213",
    "Coordinator Name": "Dr. Vagish Mishra",
    "Email ID / Mobile  Number": "Manasvi, Harsimran, Tulsi (9717006092)",
    Date: "28-Oct-26",
    Category: "Academic",
    "Team Event/Individual": "TEAM (3 Members)",
    "Team Size": "3",
    Prize: "₹5,000 | Trophies",
    Description:
      "Debate Competition is an intellectually stimulating event that encourages students to think critically, communicate effectively, and present logical arguments on contemporary issues. It provides a platform for participants to express diverse viewpoints, develop persuasive skills, and engage in healthy discussions. Through reasoned argumentation and evidence-based reasoning, students enhance their analytical thinking, confidence, and public speaking abilities. The competition fosters a spirit of respectful dialogue and critical inquiry, preparing participants to articulate their thoughts clearly and respond thoughtfully to opposing perspectives.",
    "Guidlines of  the Event":
      "Each team will consist of three participants: one For Speaker, one Against Speaker, and one Interjector. Teams will be randomly paired for each debate. The debate will consist of four rounds. In each round, one speaker will deliver their argument for 2 minutes, followed by the opposing team’s Interjector questioning them for 1 minute. The speaker will then have 45 seconds to respond. The same sequence will be followed for both For and Against Speakers from both teams. Interjections must remain relevant to the motion and the speaker’s arguments. A Winner and 1st Runner-Up will be selected separately in the For Speaker, Against Speaker, and Interjector categories.",
    "Evaluation Pattern":
      "Logical argumentation, reasoning, persuasive communication, rebuttal efficacy, time adherence, and debate decorum.",
  },
  {
    Participation: "School Students/University Students",
    "Time Slot": "1:30 PM - 3:30 PM",
    "Venue Details": "A-215",
    "Coordinator Name": "Dr. Vagish Mishra",
    "Email ID / Mobile  Number": "Manasvi, Harsimran, Tulsi (9717006092)",
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
      const slugifiedTitle = slugify(title);
      const eventImage =
        eventImages[normalizedTitle] ||
        eventImages[slugifiedTitle] ||
        "/placeholder.svg";
      const isCultural = CULTURAL_EVENT_TITLES.has(normalizedTitle);

      const rawDate = row.Date || "27-Oct-26";
      const formattedDate = rawDate.includes("28")
        ? "October 28, 2026"
        : "October 27, 2026";
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
        dateObj: rawDate.includes("28") ? new Date("2026-10-28") : new Date("2026-10-27"),
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

const SPOTLIGHT_ALLOWLIST = new Set<string>([
  "crime scene investigation game",
  "react to situation",
  "react to the situation",
  "reelbaaz (30s reel making)",
  "science quiz & puzzle solve based on ai theme",
  "science quiz & puzzle solve",
  "poster/ collage making competition (theme: know your laws)",
  "poster/collage making competition (theme: know your laws)",
  "poster making (theme: know your laws)",
  "zero waste innovation",
  "ai teaching aid innovation challenge",
  "the beverage arena",
  "the beverage arena (teams represent countries and create signature beverages from those regions)",
  "debate competition",
]);

function isCultural(ev: EventItem) {
  return ev.category === "Cultural" || CULTURAL_EVENT_TITLES.has(ev.title.trim().toLowerCase());
}

const spotlightFiltered = allEvents.filter((ev) => {
  if (isCultural(ev)) return false;
  return true;
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
  return allEvents.find((event) => event.slug === slug);
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
