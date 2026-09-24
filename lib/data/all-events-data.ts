import { rawRows } from "./events";

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

function normalizeAllEventsData(): EventDetail[] {
  const events: EventDetail[] = [];
  let current: EventDetail | null = null;

  rawRows.forEach((row) => {
    if (row["Name of Events"]?.trim()) {
      current = {
        name: row["Name of Events"].trim(),
        department: row.Department?.trim() || "",
        sessions: [],
        guidelines: row["Guidlines of  the Event"]?.trim() || "",
        evaluation: row["Evaluation Pattern"]?.trim() || "",
        teamType: row["Team Event/Individual"]?.trim() || "SOLO",
        teamSize: row["Team Size"] ? String(row["Team Size"]).trim() : undefined,
        prize: row.Prize?.trim() || "",
      };
      events.push(current);
    }
    if (!current) return;
    current.sessions.push({
      participation: row.Participation?.trim() || "",
      timeSlot: row["Time Slot"]?.trim() || "",
      venue: row["Venue Details"]?.trim() || "",
      participants:
        row["Number of Participant in a Slot"] ??
        (row["Team Size"] ? `Team (${row["Team Size"]})` : row["Team Event/Individual"] || "-"),
      coordinators: [
        {
          name: row["Coordinator Name"]?.trim() || "",
          contact: row["Email ID / Mobile  Number"]?.trim() || "",
        },
      ],
    });
  });

  return events;
}

export const allEventsData: EventDetail[] = normalizeAllEventsData();
