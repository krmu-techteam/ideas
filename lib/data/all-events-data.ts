export type EventSession = {
  participation: string;
  timeSlot: string;
  venue: string;
  participants: string | number;
  coordinators: { name: string; contact: string }[];
};

export type EventDetail = {
  name: string;
  department: string;
  sessions: EventSession[];
  guidelines: string;
  evaluation: string;
  teamType: string;
  teamSize?: string | number;
  prize: string;
};

export const allEventsData: EventDetail[] = [
  // 1. SBAS - Crime Scene Investigation Game
  {
    name: "Crime Scene Investigation Game",
    department: "SBAS",
    sessions: [
      {
        participation: "School Students",
        timeSlot: "10.00 - 12.30 PM",
        venue: "B Block Lobby Ground Floor",
        participants: "-",
        coordinators: [
          {
            name: "Dr Sourabh and Mr Vaibhav",
            contact: "Vaibhav Saini (8178695170), Arijit Adhikari (7217674411), Tanvee Vashishth (9625124803), Kanika Sudha (8630907218)",
          },
        ],
      },
      {
        participation: "School Students",
        timeSlot: "2-4 PM",
        venue: "B Block Lobby Ground Floor",
        participants: "-",
        coordinators: [
          {
            name: "Dr Sourabh and Mr Vaibhav",
            contact: "Vaibhav Saini (8178695170), Arijit Adhikari (7217674411), Tanvee Vashishth (9625124803), Kanika Sudha (8630907218)",
          },
        ],
      },
    ],
    guidelines:
      "1. Teams: Players must be divided into teams. Each team must stay together at all times during the hunt.\n2. Objective: Find all the hidden items or clues on the list. Complete any challenges or puzzles at each station. Be the first team to solve the final mystery or finish all tasks.\n3. Time Limit: All teams must complete the hunt within the designated time (e.g., 30–45 minutes).\n4. Clues and Evidence: Teams must collect or photograph all items/clues exactly as instructed. Handle items carefully; do not damage or remove permanent property.\n5. Teamwork: Team members must work together and share information. No helping or giving answers to other teams.",
    evaluation:
      "Be the first team to solve the final mystery or finish all tasks within the designated time.",
    teamType: "SOLO",
    teamSize: "1",
    prize: "₹9,000 (4500+4500) | 1000/1500/2000",
  },

  // 2. SOMC - React to Situation
  {
    name: "React to Situation",
    department: "SOMC",
    sessions: [
      {
        participation: "School Students/University Students",
        timeSlot: "9.30 - 12.00 PM",
        venue: "C415",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Anumeha, Dr. Sapna Rana",
            contact: "Vandana, Mansi, Prince, Sameeksha",
          },
        ],
      },
      {
        participation: "School Students/University Students",
        timeSlot: "1:00 - 3:00 PM",
        venue: "C415",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Anumeha, Dr. Sapna Rana",
            contact: "Vandana, Mansi, Prince, Sameeksha",
          },
        ],
      },
    ],
    guidelines:
      "Rules for IDEA 3.0 Activity:\n1. Each participant will be given a stimulus word or situation related to legal themes or ethical dilemmas.\n2. A total of 1 minute will be allotted to each participant: this time includes thinking, structuring, and delivering their answer on the spot.\n3. Participants must begin speaking as soon as the timer starts; there is no separate \"thinking time\".\n4. Answers should be relevant, well-structured, and must reflect logical reasoning and legal/ethical awareness.\n5. The answer must be completed within 1 minute; exceeding the time limit will lead to automatic stoppage and disqualification from scoring for that round.\n6. No external aids, notes, or prompts may be used during the speech.\n7. The decision of the moderator or evaluator regarding timing, relevance, and adherence to rules will be final.\n8. Respectful language and decorum must be maintained; offensive or disrespectful remarks will result in negative marking or disqualification.\n9. These rules are designed to ensure fairness and to test participant spontaneity, legal knowledge, and ethical reasoning under time constraints.",
    evaluation:
      "Spontaneity, logical reasoning, legal/ethical awareness, structure, and adherence to time limit.",
    teamType: "SOLO",
    teamSize: "1",
    prize: "₹7,000 (3500+3500) | 900/1100/1500",
  },

  // 3. SEMCE - ReelBaaz (30s Reel Making)
  {
    name: "ReelBaaz (30s Reel Making)",
    department: "SEMCE",
    sessions: [
      {
        participation: "School Students/University Students",
        timeSlot: "10:30 - 12:00 PM",
        venue: "C113 (SEMCE Studio)",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Neha Arora (9541394959)",
            contact: "Poorti Sharma, Palak Saini, Palak Verma, Sakshi Gupta, Kenneth, Manukriti Sharma",
          },
        ],
      },
      {
        participation: "School Students/University Students",
        timeSlot: "2:00 - 4:00 PM",
        venue: "C113 (SEMCE Studio)",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Neha Arora (9541394959)",
            contact: "Poorti Sharma, Palak Saini, Palak Verma, Sakshi Gupta, Kenneth, Manukriti Sharma",
          },
        ],
      },
    ],
    guidelines:
      "1. The duration of the reel should be 30–60 seconds.\n2. Upload your reel on your own Instagram account using the hashtags #Ideas3.0 and #KRMU.\n3. Download your reel and email it along with the reel link to the given ID.\n4. Mention “Reelbaaz” in the subject line of your email.\n5. Your reel must be original, creative, and must comply with Instagram’s community guidelines.\n6. Strictly no plagiarism, violence, hate speech, or inappropriate content.\n7. Multiple entries are allowed, but each entry must be registered separately.\n8. AI-generated or plagiarized content will lead to immediate disqualification.\n9. The jury’s decision will be final and binding.\n10. All reels must be uploaded and submitted by the deadline.",
    evaluation:
      "Creativity, adherence to theme, cinematography/editing quality, originality, and storytelling.",
    teamType: "SOLO / TEAM (2-3)",
    teamSize: "1-3",
    prize: "₹5,000 (2500+2500) | 700/800/1000",
  },

  // 4. Student Welfare - Group Dance (School Students)
  {
    name: "Group Dance",
    department: "Student Welfare",
    sessions: [
      {
        participation: "School Students",
        timeSlot: "9:30 AM - 11:00 AM",
        venue: "Sunken Garden",
        participants: "-",
        coordinators: [
          {
            name: "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
            contact: "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
          },
        ],
      },
      {
        participation: "School Students",
        timeSlot: "11:30 AM - 01:00 PM",
        venue: "Sunken Garden",
        participants: "-",
        coordinators: [
          {
            name: "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
            contact: "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
          },
        ],
      },
    ],
    guidelines:
      "1. Time limit: 1–2.5 minutes per performance. Points shall be deducted on exceeding the time limit, organizers reserve the right to stop the performance if the time limit is exceeded.\n2. Any dance form allowed.\n3. Pre-recorded tracks must be submitted in advance. Last minute changes in audio are not allowed.\n4. Costumes and props allowed. Use of colors, gulal, water, or any material that can damage/disturb the stage is strictly prohibited and will lead to disqualification.\n5. Obscene/derogatory moves or lyrics are strictly prohibited.",
    evaluation:
      "Choreography, synchronization, rhythm, costume coordination, stage presence, and crowd impact.",
    teamType: "TEAM (3-5)",
    teamSize: "3-5",
    prize: "₹4,500 | 1000/1500/2000",
  },

  // 5. SMAS - Science Quiz & Puzzle Solve based on AI Theme
  {
    name: "Science Quiz & Puzzle Solve based on AI Theme",
    department: "SMAS",
    sessions: [
      {
        participation: "School Students",
        timeSlot: "09:00 AM - 10:00 AM",
        venue: "Multi purpose hall",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Swati Kaushik & Ms. Samiksha Mishra",
            contact: "Mehek, Anshika, Aryan",
          },
        ],
      },
      {
        participation: "School Students",
        timeSlot: "12:30 PM - 1:30 PM",
        venue: "Multi purpose hall",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Swati Kaushik & Ms. Samiksha Mishra",
            contact: "Mehek, Anshika, Aryan",
          },
        ],
      },
    ],
    guidelines:
      "Team event in first two rounds, and individual in last round. Fastest to solve in 5 minutes wins.",
    evaluation:
      "Accuracy of answers and speed of problem solving within the 5-minute threshold.",
    teamType: "SOLO",
    teamSize: "1",
    prize: "₹4,500 | 1000/1500/2000",
  },

  // 6. SOLS - Poster/ Collage Making Competition (Theme: Know Your Laws)
  {
    name: "Poster/ Collage Making Competition (Theme: Know Your Laws)",
    department: "SOLS",
    sessions: [
      {
        participation: "School Students",
        timeSlot: "10:00 AM - 11:00 AM",
        venue: "Multi purpose hall",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Ankita (9501474214) & Dr. Arti Sharma (9899073342)",
            contact: "Dr. Ankita (9501474214), Dr. Arti Sharma (9899073342)",
          },
        ],
      },
      {
        participation: "School Students",
        timeSlot: "11:30 AM - 12:30 PM",
        venue: "Multi purpose hall",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Ankita (9501474214) & Dr. Arti Sharma (9899073342)",
            contact: "Dr. Ankita (9501474214), Dr. Arti Sharma (9899073342)",
          },
        ],
      },
    ],
    guidelines:
      "Posters must include a slogan reflecting cyber-related legal issues such as:\n1. Cyber Crime\n2. Online fraud\n3. Data privacy\n4. Impact of social media on youngsters\n\nLength should be short and catchy — maximum 15 words.\n• Avoid long sentences or slogans that require additional explanations.\n• The slogan must be original and self-composed.\n\nEach poster must have the participant’s Name, Class & Institution.",
    evaluation:
      "Relevance to theme, artistic creativity, original slogan impact, and visual neatness.",
    teamType: "SOLO",
    teamSize: "1",
    prize: "₹4,500 | 1000/1500/2000",
  },

  // 7. SOLA - Zero Waste Innovation
  {
    name: "Zero Waste Innovation",
    department: "SOLA",
    sessions: [
      {
        participation: "School Students/University Students",
        timeSlot: "10:30 AM - 03:00 PM",
        venue: "C Block Ground Floor TT Room",
        participants: "10 Groups per room",
        coordinators: [
          {
            name: "Dr Amrita Ratnani (6394260965) / Dr Jyotsna Tyagi (9728509807)",
            contact: "Manish Kumar- M.A. Sem- 3 (9654464361), Anushka Roy B.A. Sem 3 (8287372002)",
          },
        ],
      },
      {
        participation: "School Students/University Students",
        timeSlot: "10:30 AM - 03:00 PM",
        venue: "C Block Dance Room",
        participants: "10 Groups per room",
        coordinators: [
          {
            name: "Dr Amrita Ratnani (6394260965) / Dr Jyotsna Tyagi (9728509807)",
            contact: "Manish Kumar- M.A. Sem- 3 (9654464361), Anushka Roy B.A. Sem 3 (8287372002)",
          },
        ],
      },
    ],
    guidelines:
      "Team Composition: Participation is strictly in groups. Each team must consist of 3 to 5 members from the same school or university.\n\nTheme Adherence: All models and presentations must align with the theme “Zero Waste Innovation”, focusing on sustainability, recycling, and waste reduction.\n\nOriginality of Work: The project must be original and student-developed. Plagiarism or pre-made models will lead to immediate disqualification.\n\nPresentation Guidelines: Each team will be given 5–7 minutes to present and explain their model, followed by a short Q&A session with the judges.",
    evaluation:
      "Sustainability impact, innovation, feasibility, prototype/model design, and presentation quality.",
    teamType: "TEAM (3-5 Members)",
    teamSize: "3-5",
    prize: "₹6,000 | 3000+2000+1000",
  },

  // 8. STUDENT WELFARE - Duet Dance
  {
    name: "Duet Dance",
    department: "STUDENT WELFARE",
    sessions: [
      {
        participation: "University Students/School Students",
        timeSlot: "09:30 AM - 11:00 AM",
        venue: "Sunken Garden",
        participants: "-",
        coordinators: [
          {
            name: "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
            contact: "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
          },
        ],
      },
      {
        participation: "University Students/School Students",
        timeSlot: "11:00 AM - 12:30 PM",
        venue: "Sunken Garden",
        participants: "-",
        coordinators: [
          {
            name: "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
            contact: "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
          },
        ],
      },
    ],
    guidelines:
      "1. Time limit: 1–1.5 minutes per performance. Points shall be deducted on exceeding the time limit, organizers reserve the right to stop the performance if the time limit is exceeded.\n2. Any dance form allowed.\n3. Pre-recorded tracks must be submitted in advance. Last minute changes in audio are not allowed.\n4. Costumes and props allowed. Use of colors, gulal, water, or any material that can damage/disturb the stage is strictly prohibited and will lead to disqualification.\n5. Obscene/derogatory moves or lyrics are strictly prohibited.",
    evaluation:
      "Pair chemistry, timing, choreography, technical execution, and stage dynamic.",
    teamType: "Duet",
    teamSize: "2",
    prize: "₹4,500 | 1000/1500/2000",
  },

  // 9. STUDENT WELFARE - Duet Singing
  {
    name: "Duet Singing",
    department: "STUDENT WELFARE",
    sessions: [
      {
        participation: "University Students/School Students",
        timeSlot: "12:30 PM - 2:00 PM",
        venue: "Sunken Garden",
        participants: "-",
        coordinators: [
          {
            name: "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
            contact: "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
          },
        ],
      },
      {
        participation: "University Students/School Students",
        timeSlot: "2:00 PM - 3:30 PM",
        venue: "Sunken Garden",
        participants: "-",
        coordinators: [
          {
            name: "Mr. Yash Jaoria / Mr. Raj (Dance and Theater Teacher)",
            contact: "Nirdesh (9810624900), Garvit (9729648968), Prakhar (9084179257), Hanshika (9910079602)",
          },
        ],
      },
    ],
    guidelines:
      "1. Time limit: 3–4 minutes per performance.\n2. Points shall be deducted if time exceeds.\n3. Organizers reserve the right to stop the performance on exceeding the limit.\n4. Participants may sing in any language/genre.\n5. Karaoke tracks or instruments must be arranged and submitted in advance (if used).\n6. Obscene, offensive, or disrespectful lyrics are strictly prohibited.",
    evaluation:
      "Vocal pitch, harmony, synchronization, dynamics, song selection, and overall musical chemistry.",
    teamType: "Duet",
    teamSize: "2",
    prize: "₹4,500 | 1000/1500/2000",
  },

  // 10. SOED - AI Teaching Aid Innovation Challenge
  {
    name: "AI Teaching Aid Innovation Challenge",
    department: "SOED",
    sessions: [
      {
        participation: "B.Ed. and B.El.Ed. student-teachers, teacher educators, school teachers, school students, and other visitors",
        timeSlot: "10:00 AM - 2:00 PM",
        venue: "A 203",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Richa Malaviya",
            contact: "Priti, P Seetha Lakshmi - B.Ed. students (Semester -III)",
          },
        ],
      },
    ],
    guidelines:
      "Individual/team of 2–3; create an original AI-assisted teaching aid for a specified class, subject and learning outcome; disclose AI tools used; fact-check all AI-generated content; ensure age-appropriateness, inclusion, accuracy and ethical AI use; no confidential student data; 5–7 minute demonstration plus jury interaction; evaluation based on innovation, pedagogy, responsible AI use, usability and classroom impact.",
    evaluation:
      "Innovation, pedagogical effectiveness, responsible AI usage, ease of usability, and classroom relevance.",
    teamType: "SOLO / TEAM (2-3)",
    teamSize: "1-3",
    prize: "₹2,000 | 1000/500/500",
  },

  // 11. SOHMCT - The Beverage Arena
  {
    name: "The Beverage Arena",
    department: "SOHMCT",
    sessions: [
      {
        participation: "University Students/School Students",
        timeSlot: "11:30 AM - 12:30 PM",
        venue: "F & B Training Restaurant",
        participants: "-",
        coordinators: [
          {
            name: "Mr. Akash Gautam",
            contact: "Prashant, Chirag",
          },
        ],
      },
      {
        participation: "University Students/School Students",
        timeSlot: "01:00 PM - 02:30 PM",
        venue: "F & B Training Restaurant",
        participants: "-",
        coordinators: [
          {
            name: "Mr. Akash Gautam",
            contact: "Prashant, Chirag",
          },
        ],
      },
    ],
    guidelines:
      "1. Teams must consist of 2–4 participants.\n2. Each team must represent one country.\n3. The beverage must reflect the chosen country’s culture or flavours.\n4. Participants must bring/arrange their required ingredients and equipment as permitted.\n5. The beverage must be prepared within the allotted time.\n6. Proper hygiene and safety practices are mandatory.\n7. Judging will be based on creativity, taste, presentation, concept, technique, and explanation.\n8. Judges’ decision will be final.",
    evaluation:
      "Creativity, taste, presentation, technique, hygiene, and knowledge explanation.",
    teamType: "SOLO / TEAM (2-4)",
    teamSize: "1-4",
    prize: "₹1,000 | 500/500",
  },

  // 12. SOLA - Debate Competition
  {
    name: "Debate Competition",
    department: "SOLA",
    sessions: [
      {
        participation: "School Students/University Students",
        timeSlot: "9:30 AM - 12:00 NOON",
        venue: "A-213",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Vagish Mishra",
            contact: "Manasvi, Harsimran, Tulsi (9717006092)",
          },
        ],
      },
      {
        participation: "School Students/University Students",
        timeSlot: "1:30 PM - 3:30 PM",
        venue: "A-215",
        participants: "-",
        coordinators: [
          {
            name: "Dr. Vagish Mishra",
            contact: "Manasvi, Harsimran, Tulsi (9717006092)",
          },
        ],
      },
    ],
    guidelines:
      "Each team will consist of three participants: one For Speaker, one Against Speaker, and one Interjector. Teams will be randomly paired for each debate. The debate will consist of four rounds. In each round, one speaker will deliver their argument for 2 minutes, followed by the opposing team’s Interjector questioning them for 1 minute. The speaker will then have 45 seconds to respond. The same sequence will be followed for both For and Against Speakers from both teams. Interjections must remain relevant to the motion and the speaker’s arguments. A Winner and 1st Runner-Up will be selected separately in the For Speaker, Against Speaker, and Interjector categories.",
    evaluation:
      "Logical argumentation, reasoning, persuasive communication, rebuttal efficacy, time adherence, and debate decorum.",
    teamType: "TEAM (3 Members)",
    teamSize: "3",
    prize: "₹5,000 | Trophies",
  },
];
