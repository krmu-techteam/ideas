"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/styles/ai-arena.css";

type TabKey = "race" | "war" | "soccer";

interface TabData {
  t: string;
  tag: string;
  chips: [string, string][];
  s: [string, string[]][];
  c: string[];
}

const TAB_DATA: Record<TabKey, TabData> = {
  race: {
    t: "Robo Race",
    tag: "Rulebook & technical regulations",
    chips: [
      ["30×30×40 cm", "Max size (L×W×H)"],
      ["5 kg", "Max weight incl. battery (5.25 kg with 5% tolerance)"],
      ["12 V DC", "Max voltage anywhere"],
      ["Auto or remote", "Control type"],
    ],
    s: [
      [
        "Dimensions & weight",
        [
          "Robot must fit a <b>30 × 30 × 40 cm</b> box at all times.",
          "Max weight <b>5 kg</b> including battery; 5% tolerance allows <b>5.25 kg</b>.",
          "Officials' measuring and weighing decides eligibility.",
        ],
      ],
      [
        "Batteries & electrical",
        [
          "Sealed, immobilized-electrolyte types only: gel cell, lithium, NiCad or dry cell.",
          "Voltage must never exceed <b>12 V DC</b> anywhere.",
          "Batteries securely mounted; wiring safe and open to inspection.",
        ],
      ],
      [
        "Control & movement",
        [
          "Autonomous or remote-controlled.",
          "Robot must move in <b>all directions</b>, not just one.",
          "Do not intentionally interfere with other robots.",
        ],
      ],
      [
        "RF, infrared & interference",
        [
          "No infrared emission. IR distance sensors allowed only if they do not affect others.",
          "RF modules must support <b>changing frequency/channel</b>.",
          "Interference claims need evidence; the referee confirms.",
        ],
      ],
      [
        "Design & construction",
        [
          "Any parts or materials allowed within the specs.",
          "Design must be mainly the team's own work. <b>No ready-made robots.</b>",
          "Teams keep size, weight and voltage within limits all event.",
        ],
      ],
      [
        "Inspection & eligibility",
        [
          "Officials check size, weight, battery, voltage, movement, control and interference.",
          "A non-compliant robot may be held out until approved.",
        ],
      ],
      [
        "Race conduct",
        [
          "Follow race officials and referees.",
          "Do not interfere with other control systems or obstruct officials.",
          "Operate only in the designated race area.",
        ],
      ],
      [
        "Authority of officials",
        [
          "Referees and technical officials apply rules, confirm interference and decide eligibility.",
          "Decisions on safety and interpretation are final, subject to any announced appeal process.",
        ],
      ],
    ],
    c: [
      "Race format, attempts, time limit and ranking",
      "Obstacle touches, leaving the track, restarts, breakdowns, manual recovery",
      "Tie-breaks, penalties, disqualification and appeals",
      "Multiple robots per team and substitutions",
    ],
  },
  war: {
    t: "Robo War · 15 kg",
    tag: "Rules & regulations",
    chips: [
      ["15 kg", "Max weight incl. all components"],
      ["1+1", "Max two robots in a multibot"],
      ["1000×1000 mm", "Max combined clustered size"],
      ["Kill switch", "Mandatory on every robot"],
    ],
    s: [
      [
        "Kill switch & power isolation",
        [
          "Every robot needs a <b>main power kill switch</b> that disconnects power at once.",
          "A battery plug or connector does <b>not</b> count as a kill switch.",
          "Must be easy to reach, clearly marked, and shut down drive and weapons.",
          "May be tested at inspection.",
        ],
      ],
      [
        "Radio failsafe",
        [
          "Working transmitter failsafe is required.",
          "On loss of power, signal or control link, the robot must go to a <b>safe state</b>.",
          "Drive and weapons must stop or go neutral.",
          "A robot that fails the test may be denied entry until fixed.",
        ],
      ],
      [
        "Weigh-in",
        [
          "Max weight is <b>15 kg</b>, including all competing components.",
          "Official weigh-in decides category eligibility.",
          "For multibots, the <b>combined</b> weight must stay within 15 kg.",
        ],
      ],
      [
        "Mobility",
        [
          "A robot is mobile only with <b>controlled translational movement</b>.",
          "Twitching, spinning in place, random motion or crab-walking without real displacement does not count.",
          "Judges decide.",
        ],
      ],
      [
        "Pinning & arena assistance",
        [
          "No pinning, holding or trapping an opponent for more than <b>10 seconds</b>.",
          "After 10 s the judge may order a release; comply immediately.",
          "Repeated or intentional breaches may be penalized.",
          "If a robot is stuck on a wall, structure or debris, officials may assist; the number of unsticks is set by officials.",
          "Never touch a robot inside the arena unless told to.",
        ],
      ],
      [
        "Weapons",
        [
          "An active weapon is a powered mechanism built to damage, disable, control or engage the opponent (spinners, drums, discs, hammers, flippers, lifters).",
          "Passive wedges and static armour are not active weapons.",
          "In the 15 kg category, passive designs are allowed where category rules specify.",
        ],
      ],
      [
        "Multibots & wedges",
        [
          "Max <b>two robots (1+1)</b>, treated as one configuration.",
          "Combined clustered size ≤ <b>1000 × 1000 mm</b>; combined weight ≤ 15 kg.",
          "Both robots go through technical inspection.",
          "Only <b>one wedge robot</b> per team entry.",
        ],
      ],
      [
        "Knockout criteria",
        [
          "A multibot is knocked out only when <b>more than 50%</b> of its declared weight cannot move with controlled translation.",
          "Disabling one module is not an automatic knockout.",
          "Judges make the final call.",
        ],
      ],
      [
        "Drivers & categories",
        [
          "One driver per team may operate one 1.5 kg (3 lbs), one 8 kg and one 15 kg robot, subject to schedule.",
          "A robot is registered in <b>one weight category only</b> and cannot be reclassified or moved.",
        ],
      ],
      [
        "Judges' authority",
        [
          "For ambiguity, technical interpretation, safety or unforeseen cases, judges and technical officials have the final say.",
          "Raise concerns with organizers <b>before</b> the competition, not mid-match.",
          "Teams accept that robots may be inspected.",
        ],
      ],
    ],
    c: [],
  },
  soccer: {
    t: "Robo Soccer",
    tag: "Rulebook & technical regulations",
    chips: [
      ["40×40×40 cm", "Max size, fits cube at all times"],
      ["7 kg", "Max weight incl. battery (7.35 kg with 5% tolerance)"],
      ["24 V DC", "Max voltage anywhere"],
      ["2 robots", "Per team, marked 1 and 2"],
    ],
    s: [
      [
        "Robot specifications",
        [
          "Wireless and <b>remote-controlled</b>; circular or rectangular.",
          "Must fit a <b>40 × 40 × 40 cm</b> cube at all times.",
          "Max <b>7 kg</b> including battery; 5% tolerance gives 7.35 kg.",
          "Must move <b>omnidirectionally</b>, not along one axis only.",
          "Mainly original work. <b>No ready-made robots.</b>",
        ],
      ],
      [
        "Batteries & electrical safety",
        [
          "Sealed, immobilized-electrolyte types: gel cell, lithium, NiCad or dry cell.",
          "Max <b>24 V DC</b> anywhere at any time.",
          "Batteries securely mounted so they cannot shift.",
          "Organizers may inspect batteries, wiring and connectors.",
        ],
      ],
      [
        "Robot identification",
        [
          "Each team provides <b>two robots</b> for the whole tournament.",
          "Each robot carries a clear <b>top marker</b> (1 or 2) so the referee can identify it.",
          "No visible, unique marker means not eligible to play.",
          "Substitution of robots, within a team or with another team, is forbidden.",
        ],
      ],
      [
        "Ball",
        [
          "Diameter <b>42 mm ± 5 mm</b> (37–47 mm).",
          "Well balanced and durable enough for play.",
        ],
      ],
      [
        "Dribbling & ball handling",
        [
          "Devices that actively spin the ball and keep it in contact with the robot are <b>not permitted</b>.",
        ],
      ],
      [
        "Optical, IR & magnetic interference",
        [
          "No infrared emission; IR distance sensors only if they affect no one.",
          "No IR-reflecting materials outside; paint must be <b>matte</b>.",
          "Small reflective parts only if they affect no one.",
          "No magnetic interference with other robots.",
          "Claims need evidence; the referee confirms.",
        ],
      ],
      [
        "Inspection & eligibility",
        [
          "Every robot passes technical inspection first.",
          "Officials may check size, weight, battery, voltage, movement, top marker and interference.",
          "A failing robot may be held from play until approved.",
        ],
      ],
      [
        "Gameplay & conduct",
        [
          "Robots may be autonomous or remote-controlled.",
          "Do not intentionally interfere with opponents' controls or sensors.",
          "Follow referees; do not handle robots during active play unless directed.",
        ],
      ],
      [
        "Authority of officials",
        [
          "Referees and technical officials enforce the rules and settle disputes.",
          "Decisions on safety, eligibility and interpretation are final, subject to any announced appeal.",
        ],
      ],
    ],
    c: [
      "Match duration, rounds and bracket",
      "Goal size, scoring, kickoff, restart and out-of-bounds rules",
      "Standard top pattern size and surface limits",
      "Exact limits for dribbling devices",
      "Breakdowns, repairs, penalties and disputes",
      "Whether both robots play every match or form a roster",
    ],
  },
};

export default function AiArenaPage() {
  const [currentTab, setCurrentTab] = useState<TabKey>("race");
  const [panelOpen, setPanelOpen] = useState(false);
  const [keynoteOpen, setKeynoteOpen] = useState(false);
  const [startupOpen, setStartupOpen] = useState(false);

  const activeTabData = TAB_DATA[currentTab];
  const tabKeys: TabKey[] = ["race", "war", "soccer"];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      const nextIndex = (index + 1) % tabKeys.length;
      setCurrentTab(tabKeys[nextIndex]);
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (index - 1 + tabKeys.length) % tabKeys.length;
      setCurrentTab(tabKeys[prevIndex]);
    }
  };

  return (
    <div className="ai-arena-page">
      {/* Hero Section */}
      <header className="hero" id="top">
        <div className="wrap" style={{ width: "100%" }}>
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-left">
              <motion.p
                className="tag c"
                initial={{ opacity: 0, y: -14, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.65,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                IDEAS 4.0 / K.R. Mangalam University
              </motion.p>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.85,
                  delay: 0.22,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                AI <span>ARENA?</span>
              </motion.h1>

              <motion.p
                className="hero-desc"
                initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.36,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                AI Arena is an immersive AI, robotics, innovation and
                future-tech experience zone within IDEAS 4.0. It brings emerging
                technology out of the abstract and into a space you can see,
                explore and experience firsthand.
              </motion.p>

              <motion.div
                className="hero-meta-row"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.48,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span>October 27–28, 2026</span>
                <span>K.R. Mangalam University, Gurugram</span>
              </motion.div>

              {/* Stats Row (Left content) */}
              <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.58,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  className="hero-stat"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.64,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <b>20</b>
                  <span>AI-enthusiast canopies</span>
                </motion.div>
                <motion.div
                  className="hero-stat-divider"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 0.85, scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.72, ease: "easeOut" }}
                />
                <motion.div
                  className="hero-stat"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.78,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <b>2</b>
                  <span>days of innovation</span>
                </motion.div>
                <motion.div
                  className="hero-stat-divider"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 0.85, scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.86, ease: "easeOut" }}
                />
                <motion.div
                  className="hero-stat"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.92,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <b>∞</b>
                  <span>Robotics • AI • Immersive tech</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Orbit Circle */}
            <motion.div
              className="hero-right"
              initial={{ opacity: 0, scale: 0.88, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="orbit-wrap">
                <div className="ring" />
                <div className="ring in" />
                <motion.div
                  className="logo-c"
                  role="img"
                  aria-label="IDEAS 4.0 logo"
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Image
                    src="/ideas4.0.png"
                    alt="IDEAS 4.0"
                    width={500}
                    height={200}
                    priority
                    className="center-logo-img"
                  />
                </motion.div>
                <ul
                  className="orbit outer-orbit"
                  aria-label="IDEAS 4.0 experiences"
                >
                  <li
                    className="node"
                    style={{ "--a": "-90deg" } as React.CSSProperties}
                  >
                    <span className="orbit-chip">
                      <a className="pill" href="#about">
                        Innoverse
                      </a>
                    </span>
                  </li>
                  <li
                    className="node"
                    style={{ "--a": "-18deg" } as React.CSSProperties}
                  >
                    <span className="orbit-chip">
                      <a className="pill" href="#experiences">
                        Immersive Experience
                      </a>
                    </span>
                  </li>
                  <li
                    className="node"
                    style={{ "--a": "54deg" } as React.CSSProperties}
                  >
                    <span className="orbit-chip">
                      <a className="pill" href="#speakers">
                        Keynote Speakers
                      </a>
                    </span>
                  </li>
                  <li
                    className="node"
                    style={{ "--a": "126deg" } as React.CSSProperties}
                  >
                    <span className="orbit-chip">
                      <a className="pill" href="#about">
                        20 AI Canopies
                      </a>
                    </span>
                  </li>
                  <li
                    className="node"
                    style={{ "--a": "198deg" } as React.CSSProperties}
                  >
                    <span className="orbit-chip">
                      <a className="pill" href="#robo">
                        Robo Olympics
                      </a>
                    </span>
                  </li>
                </ul>
                <ul
                  className="orbit inner-orbit"
                  aria-label="AI Arena activities"
                >
                  <li
                    className="node"
                    style={{ "--a": "-54deg" } as React.CSSProperties}
                  >
                    <span className="orbit-chip">
                      <a className="pill" href="#about">
                        AI Arena
                      </a>
                    </span>
                  </li>
                  <li
                    className="node"
                    style={{ "--a": "18deg" } as React.CSSProperties}
                  >
                    <span className="orbit-chip">
                      <a className="pill" href="#ideathon">
                        Ideathon
                      </a>
                    </span>
                  </li>
                  <li
                    className="node"
                    style={{ "--a": "90deg" } as React.CSSProperties}
                  >
                    <span className="orbit-chip">
                      <a className="pill" href="#speakers">
                        Panel Discussion
                      </a>
                    </span>
                  </li>
                  <li
                    className="node"
                    style={{ "--a": "162deg" } as React.CSSProperties}
                  >
                    <span className="orbit-chip">
                      <a className="pill" href="#speakers">
                        Startup Pitch
                      </a>
                    </span>
                  </li>
                  <li
                    className="node"
                    style={{ "--a": "234deg" } as React.CSSProperties}
                  >
                    <span className="orbit-chip">
                      <a className="pill" href="#robo">
                        Robos
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Section Divider */}
      <motion.div
        className="section-divider"
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        role="separator"
        aria-hidden="true"
      />

      {/* Robo Olympics Section */}
      <section id="robo">
        <div className="wrap">
          <motion.div
            className="head2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="tag">Engineered to compete / 02</p>
              <h2 style={{ marginTop: "18px" }}>Robo Olympics</h2>
            </div>
            <p className="lead" style={{ fontSize: "16px", maxWidth: "340px" }}>
              Three arenas. Three ways to see ingenuity in motion.
            </p>
          </motion.div>
          <motion.div
            className="cards three tabs"
            role="tablist"
            aria-label="Robo Olympics events"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="card rc"
              role="tab"
              id="t-race"
              aria-selected={currentTab === "race"}
              aria-controls="rules"
              onClick={() => setCurrentTab("race")}
              onKeyDown={(e) => handleKeyDown(e, 0)}
              tabIndex={0}
            >
              <div className="rc-thumb">
                <Image
                  src="/aiarena/image1.jpeg"
                  alt="Robo Race"
                  width={600}
                  height={380}
                  className="rc-img"
                />
              </div>
              <div className="rc-body">
                <span className="tag c">01 / Velocity</span>
                <h3>Robo Race</h3>
                <p>
                  Speed meets precision as autonomous machines push engineering
                  into motion.
                </p>
                <em>View rulebook ↓</em>
              </div>
            </button>
            <button
              className="card rc"
              role="tab"
              id="t-war"
              aria-selected={currentTab === "war"}
              aria-controls="rules"
              onClick={() => setCurrentTab("war")}
              onKeyDown={(e) => handleKeyDown(e, 1)}
              tabIndex={0}
            >
              <div className="rc-thumb">
                <Image
                  src="/aiarena/image2.jpeg"
                  alt="Robo War"
                  width={600}
                  height={380}
                  className="rc-img"
                />
              </div>
              <div className="rc-body">
                <span className="tag c">02 / Impact</span>
                <h3>Robo War</h3>
                <p>
                  Strategy and engineering collide in a showcase of controlled
                  robotic combat.
                </p>
                <em>View rulebook ↓</em>
              </div>
            </button>
            <button
              className="card rc"
              role="tab"
              id="t-soccer"
              aria-selected={currentTab === "soccer"}
              aria-controls="rules"
              onClick={() => setCurrentTab("soccer")}
              onKeyDown={(e) => handleKeyDown(e, 2)}
              tabIndex={0}
            >
              <div className="rc-thumb">
                <Image
                  src="/aiarena/image3.jpeg"
                  alt="Robo Soccer"
                  width={600}
                  height={380}
                  className="rc-img"
                />
              </div>
              <div className="rc-body">
                <span className="tag c">03 / Collaboration</span>
                <h3>Robo Soccer</h3>
                <p>
                  Teamwork, perception and robotic agility take the field
                  together.
                </p>
                <em>View rulebook ↓</em>
              </div>
            </button>
          </motion.div>

          <motion.div
            className="panel"
            id="rules"
            role="tabpanel"
            aria-labelledby={`t-${currentTab}`}
            aria-live="polite"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="top">
              <div>
                <span className="tag">{activeTabData.tag}</span>
                <h3>{activeTabData.t}</h3>
              </div>
              <span className="draft">
                Draft · subject to official approval
              </span>
            </div>

            <div className="chips">
              {activeTabData.chips.map((chip, idx) => (
                <div key={idx} className="chip">
                  <b>{chip[0]}</b>
                  <span>{chip[1]}</span>
                </div>
              ))}
            </div>

            <div className="rules">
              {activeTabData.s.map((rule, idx) => (
                <details key={idx} open={idx < 2}>
                  <summary>
                    <i>{String(idx + 1).padStart(2, "0")}</i>
                    {rule[0]}
                  </summary>
                  <ul>
                    {rule[1].map((text, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                  </ul>
                </details>
              ))}
            </div>

            {activeTabData.c.length > 0 && (
              <div className="tbc">
                <h4>To be confirmed by organizers</h4>
                <ul>
                  {activeTabData.c.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="note">
              Teams must read the full rulebook before technical inspection.
              Officials&apos; decisions are final.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <motion.div
        className="section-divider"
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        role="separator"
        aria-hidden="true"
      />

      {/* Ideathon Section */}
      <section className="ideathon" id="ideathon">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="tag">Think beyond / 03</p>
            <h2>
              Ideathon —<br />
              Two days. Two mindshifts.
            </h2>
            <div className="line" />
          </motion.div>
          <motion.div
            className="cards two"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Day 1 - Tech */}
            <article className="card day d1">
              <span className="tag c">Day 01 • 27 Oct • Tech</span>
              <h3>Tech Ideathon: Make the impossible work.</h3>
              <p>
                Your idea. Your code. Your creation. Submit an AI-based project
                idea; shortlisted teams build solutions on the spot, on campus.
              </p>
              <div className="facts">
                <div>
                  <b>27 Oct</b>
                  <span>Event date</span>
                </div>
                <div>
                  <b>AI</b>
                  <span>Theme</span>
                </div>
                <div>
                  <b>3–5</b>
                  <span>Team size</span>
                </div>
                <div>
                  <b>₹300</b>
                  <span>Per participant, if shortlisted</span>
                </div>
              </div>
              <h4 className="sub">How it works</h4>
              <ol className="steps">
                <li>
                  Register your team and submit your AI-based project idea.
                </li>
                <li>
                  The organising team evaluates submissions and shortlists
                  teams.
                </li>
                <li>
                  Selected teams are invited to the offline round on campus.
                </li>
                <li>Shortlisted teams pay ₹300 per participant.</li>
                <li>
                  Problem statements are given in the offline round; build your
                  solution on the spot.
                </li>
              </ol>
              <p className="warn">
                Submitting the form does not guarantee selection. Only
                shortlisted teams are contacted.
              </p>
              <div className="cta">
                <a
                  className="btn fill"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfUrjM8hD7duKTkVo6GL9eltsg4b7gPSmf9UZ_oTzP88mrGWA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register ↗
                </a>
                <a
                  className="btn ghost"
                  href="https://docs.google.com/document/d/17G_4AwQISWcpwwaktTAkGbYGMuHMvVdhjZAltApWc8I/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rulebook ↗
                </a>
              </div>
              <h4 className="sub">Full guidelines</h4>
              <div className="dets">
                <details open>
                  <summary>
                    <i>01</i>Team guidelines
                  </summary>
                  <ul>
                    <li>Official registration is required for every team.</li>
                    <li>
                      Teams of <b>3–5 members</b>. No individual participation.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>02</i>What to submit when registering
                  </summary>
                  <ul>
                    <li>Team name and details of all members.</li>
                    <li>Team leader&apos;s name, email and contact number.</li>
                    <li>
                      Title and description of your AI-based project idea.
                    </li>
                    <li>Problem statement and proposed solution.</li>
                    <li>Tech stack, tools and frameworks.</li>
                    <li>Any previous work or progress on the idea.</li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>03</i>Selection process
                  </summary>
                  <ul>
                    <li>The organising team evaluates all ideas.</li>
                    <li>
                      Shortlisting is based on{" "}
                      <b>
                        innovation, relevance to AI, feasibility and technical
                        approach
                      </b>
                      .
                    </li>
                    <li>
                      Only shortlisted teams are invited to the offline round
                      and get venue and reporting details.
                    </li>
                    <li>Shortlisting decisions are final.</li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>04</i>Offline round
                  </summary>
                  <ul>
                    <li>
                      Problem statements are given on the day and differ from
                      your submitted idea.
                    </li>
                    <li>
                      Build and demonstrate a working prototype within the time
                      given.
                    </li>
                    <li>Bring your own laptops and equipment.</li>
                    <li>
                      Follow the organisers&apos; instructions and timeline.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>05</i>Registration fee
                  </summary>
                  <ul>
                    <li>
                      <b>₹300 per participant</b>, for shortlisted teams only.
                      The full team fee confirms participation.
                    </li>
                  </ul>
                  <table className="fee">
                    <thead>
                      <tr>
                        <th>Team size</th>
                        <th>Total fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>3 members</td>
                        <td>₹900</td>
                      </tr>
                      <tr>
                        <td>4 members</td>
                        <td>₹1,200</td>
                      </tr>
                      <tr>
                        <td>5 members</td>
                        <td>₹1,500</td>
                      </tr>
                    </tbody>
                  </table>
                </details>
                <details>
                  <summary>
                    <i>06</i>Rules & code of conduct
                  </summary>
                  <ul>
                    <li>All registration information must be accurate.</li>
                    <li>Keep work original; avoid plagiarism.</li>
                    <li>Follow the event schedule and instructions.</li>
                    <li>
                      Team changes after registration need organiser approval.
                    </li>
                    <li>
                      Maintain professional conduct. Rule breakers may be
                      disqualified.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>07</i>Queries
                  </summary>
                  <ul>
                    <li>
                      Krish Agarwal: <a href="tel:+919310189324">9310189324</a>
                    </li>
                    <li>
                      Somya Sharma: <a href="tel:+919205038742">9205038742</a>
                    </li>
                  </ul>
                </details>
              </div>
            </article>

            {/* Day 2 - Creative */}
            <article className="card day d2">
              <span className="tag">Day 02 • 28 Oct • Creative</span>
              <h3>Creative Ideathon: Imagine what comes next.</h3>
              <p>
                Your creativity. Your story. Your impact. Turn a story into a
                powerful advertisement video.
              </p>
              <div className="facts">
                <div>
                  <b>28 Oct</b>
                  <span>Event date</span>
                </div>
                <div>
                  <b>Ad video</b>
                  <span>Challenge</span>
                </div>
                <div>
                  <b>3</b>
                  <span>Team size</span>
                </div>
                <div>
                  <b>₹900</b>
                  <span>Per team, if shortlisted</span>
                </div>
              </div>
              <h4 className="sub">How it works</h4>
              <ol className="steps">
                <li>Form a team of 3 and complete the registration form.</li>
                <li>
                  Pick a problem statement and create a short ad video for it.
                </li>
                <li>Submit your video link with the team details.</li>
                <li>
                  Entries are judged on creativity, originality, storytelling,
                  relevance and impact.
                </li>
                <li>
                  Top shortlisted teams are invited to the offline round on
                  campus.
                </li>
              </ol>
              <p className="warn">
                Registration does not guarantee selection. Only shortlisted
                teams are contacted.
              </p>
              <div className="cta">
                <a
                  className="btn or"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSesHSMvrmW7L3z1FLxfJ9HWt7YfqV7L5p2AERdRT9fRAmhsUg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register ↗
                </a>
                <a
                  className="btn ghost"
                  href="https://docs.google.com/document/d/1mUrEf7NRNMgDnC09yd7gGs7P230nQnzqv8BuOs1JBZI/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rulebook ↗
                </a>
              </div>
              <h4 className="sub">Full guidelines</h4>
              <div className="dets">
                <details open>
                  <summary>
                    <i>01</i>Team guidelines
                  </summary>
                  <ul>
                    <li>
                      Exactly <b>3 members</b> per team.
                    </li>
                    <li>
                      Everyone registers through the official Google Form.
                    </li>
                    <li>One member is the team leader and main contact.</li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>02</i>Problem statements
                  </summary>
                  <ul>
                    <li>
                      <b>1. Reduce food waste on campus.</b> Make an ad that
                      encourages students to adopt responsible food habits.
                    </li>
                    <li>
                      <b>2. Promote digital wellbeing.</b> Make an ad that
                      encourages less screen time and healthier digital habits.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>03</i>Video guidelines
                  </summary>
                  <ul>
                    <li>
                      One ad video per team, on your chosen problem statement.
                    </li>
                    <li>
                      Recommended length: <b>30–90 seconds</b>.
                    </li>
                    <li>Creative, original, relevant and appropriate.</li>
                    <li>Editing and AI-assisted tools are allowed.</li>
                    <li>Get permission for any third-party content.</li>
                    <li>
                      Submit an accessible video link in the registration form.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>04</i>Selection process
                  </summary>
                  <ul>
                    <li>
                      Judged on{" "}
                      <b>
                        creativity, originality, storytelling, relevance and
                        overall impact
                      </b>
                      .
                    </li>
                    <li>
                      Only top shortlisted teams are invited to the offline
                      event on campus.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>05</i>Offline round & fee
                  </summary>
                  <ul>
                    <li>Only shortlisted teams are eligible.</li>
                    <li>
                      <b>₹300 per participant</b>, so ₹900 for a team of 3.
                    </li>
                    <li>
                      Shortlisted teams pay to confirm. Instructions and
                      deadlines are shared with them.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>06</i>Rules & code of conduct
                  </summary>
                  <ul>
                    <li>Submissions must be original and respect copyright.</li>
                    <li>Incomplete submissions may not be considered.</li>
                    <li>
                      Plagiarism, inappropriate content or misrepresentation may
                      lead to disqualification.
                    </li>
                    <li>
                      Follow the organisers&apos; instructions. Their
                      shortlisting and conduct decisions are final.
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>
                    <i>07</i>Important
                  </summary>
                  <ul>
                    <li>Registration does not guarantee selection.</li>
                    <li>
                      Only shortlisted teams are contacted, with venue,
                      reporting time and schedule.
                    </li>
                    <li>Read and accept the rulebook before registering.</li>
                  </ul>
                </details>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <motion.div
        className="section-divider"
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        role="separator"
        aria-hidden="true"
      />

      {/* Speakers / Conversations Section */}
      <section id="speakers">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="tag">Conversations / 04</p>
            <h2>
              Ideas that move
              <br />
              the future
            </h2>
          </motion.div>
          <motion.div
            className="cards three sxg"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Panel discussion */}
            <article className="card sx k">
              <span className="tag">01 / Panel discussion</span>
              <h3>Conversations that shape the future</h3>
              <p className="sub2">
                Different perspectives. One powerful conversation.
              </p>
              {panelOpen && (
                <div className="more">
                  <p>
                    Step into an engaging space where industry leaders, experts,
                    innovators and thought leaders come together to exchange
                    ideas, challenge conventional thinking and discuss the
                    possibilities shaping our future.
                  </p>
                  <p>
                    The Panel Discussion at IDEAS 4.0 brings diverse
                    perspectives to the table, exploring emerging technologies,
                    innovation, entrepreneurship and real-world challenges. Gain
                    valuable insights, discover new viewpoints and join
                    conversations that inspire meaningful change.
                  </p>
                  <h4 className="sub">What to expect</h4>
                  <ul>
                    <li>Insights from industry experts and thought leaders.</li>
                    <li>
                      Discussions on emerging trends and future opportunities.
                    </li>
                    <li>Diverse perspectives on real-world challenges.</li>
                    <li>Interactive audience engagement and Q&amp;A.</li>
                  </ul>
                </div>
              )}
              <button
                className="btn ghost tg"
                type="button"
                aria-expanded={panelOpen}
                onClick={() => setPanelOpen(!panelOpen)}
              >
                Explore the discussion <span>{panelOpen ? "–" : "+"}</span>
              </button>
            </article>

            {/* Keynote speakers */}
            <article className="card sx p">
              <span className="tag c">02 / Keynote speakers</span>
              <h3>Ideas that inspire. Voices that lead.</h3>
              <p className="sub2">Learn from leaders. Get inspired to lead.</p>
              {keynoteOpen && (
                <div className="more">
                  <p>
                    Great ideas often begin with a powerful story, a bold vision
                    or a different way of thinking.
                  </p>
                  <p>
                    The Keynote Speaker Sessions at IDEAS 4.0 bring inspiring
                    voices from industry, technology, entrepreneurship and
                    innovation to share their experiences, insights and
                    perspectives. Discover lessons from real-world journeys,
                    explore emerging opportunities and gain inspiration to turn
                    your ambitions into action.
                  </p>
                  <h4 className="sub">What to expect</h4>
                  <ul>
                    <li>
                      Insights from accomplished professionals and industry
                      leaders.
                    </li>
                    <li>
                      Perspectives on innovation, leadership and emerging
                      technologies.
                    </li>
                    <li>
                      Real-world experiences, challenges and success stories.
                    </li>
                    <li>
                      Fresh ideas to inspire your academic and professional
                      journey.
                    </li>
                  </ul>
                </div>
              )}
              <button
                className="btn ghost tg"
                type="button"
                aria-expanded={keynoteOpen}
                onClick={() => setKeynoteOpen(!keynoteOpen)}
              >
                Meet the speakers <span>{keynoteOpen ? "–" : "+"}</span>
              </button>
            </article>

            {/* Startup pitch */}
            <article className="card sx st">
              <span className="tag">03 / Startup pitch</span>
              <h3>Pitch your vision. Build what&apos;s next.</h3>
              <p className="sub2">Big ideas deserve the spotlight.</p>
              {startupOpen && (
                <div className="more">
                  <p>
                    Every successful venture begins with an idea. The Startup
                    Pitch at IDEAS 4.0 offers aspiring entrepreneurs and
                    innovators a platform to present their business concepts,
                    showcase creative solutions and share their vision for the
                    future.
                  </p>
                  <p>
                    Present your idea, explain the problem you aim to solve, and
                    show how your solution can create value. Whether you&apos;re
                    exploring an early-stage concept or developing an emerging
                    venture, this is your chance to bring your entrepreneurial
                    thinking to the forefront.
                  </p>
                  <h4 className="sub">What to expect</h4>
                  <ul>
                    <li>Present your startup idea and business concept.</li>
                    <li>
                      Showcase innovative solutions to real-world problems.
                    </li>
                    <li>
                      Communicate your business model and market potential.
                    </li>
                    <li>
                      Get feedback and insights from evaluators and industry
                      professionals.
                    </li>
                    <li>Gain visibility for your entrepreneurial vision.</li>
                  </ul>
                  <h4 className="sub">Suggested evaluation criteria</h4>
                  <ul>
                    <li>Innovation and originality</li>
                    <li>Problem–solution fit</li>
                    <li>Feasibility and scalability</li>
                    <li>Market potential</li>
                    <li>Presentation and pitch quality</li>
                  </ul>
                </div>
              )}
              <div className="acts">
                <button
                  className="btn ghost tg"
                  type="button"
                  aria-expanded={startupOpen}
                  onClick={() => setStartupOpen(!startupOpen)}
                >
                  Details <span>{startupOpen ? "–" : "+"}</span>
                </button>
                <a
                  className="btn or"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScsSme8WcbnHgFPdmH8Pjrequ3R7RPnjcBoMkea4cTLmvCg4w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register your startup ↗
                </a>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <motion.div
        className="section-divider"
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        role="separator"
        aria-hidden="true"
      />

      {/* Experiences Section */}
      <section id="experiences" style={{ paddingTop: "20px" }}>
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="tag">Step inside / 05</p>
            <h2>Experiences</h2>
          </motion.div>
          <motion.div
            className="ex-grid"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <article className="card ex">
              <span className="tag c">01 / Robotics</span>
              <h3>Live robot showcase</h3>
              <p>Machines built to move, sense and respond.</p>
            </article>
            <article className="card ex">
              <span className="tag c">02 / Intelligence</span>
              <h3>Generative AI studio</h3>
              <p>Create with AI tools hands-on.</p>
            </article>
            <article className="card ex">
              <span className="tag c">03 / Immersion</span>
              <h3>Immersive tech lab</h3>
              <p>Mixed-reality demos you can step into.</p>
            </article>
            <article className="card ex">
              <span className="tag c">04 / Spatial</span>
              <h3>Holographic displays</h3>
              <p>Information made spatial and alive.</p>
            </article>
            <article className="card ex">
              <span className="tag c">05 / Interaction</span>
              <h3>AI humanoids</h3>
              <p>Natural interaction at the edge of possibility.</p>
            </article>
            <article className="card ex">
              <span className="tag c">06 / Play</span>
              <h3>Game Bot</h3>
              <p>Challenge an AI-powered bot in live games.</p>
            </article>
            <article className="card ex feat">
              <span className="tag c">07 / Featured experience</span>
              <h3>AI Dome</h3>
              <p>Step inside an immersive AI world experience.</p>
            </article>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
