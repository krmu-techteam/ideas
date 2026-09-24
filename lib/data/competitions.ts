import { rawRows } from "./events";

export interface EventSession {
  participation?: string;
  timeSlot?: string;
  venue?: string;
  capacity?: string;
  coordinator?: string;
  contact?: string;
}

export interface CompetitionEvent {
  name: string;
  department?: string;
  guidelines?: string;
  evaluation?: string;
  prize?: string;
  teamMode?: string;
  teamSize?: string;
  sessions: EventSession[];
}

function normalizeCompetitions(): CompetitionEvent[] {
  const events: CompetitionEvent[] = [];
  let current: CompetitionEvent | null = null;

  rawRows.forEach((row) => {
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
    if (!current) return;
    // Session info
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
