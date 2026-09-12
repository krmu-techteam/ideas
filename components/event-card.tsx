import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Book,
  ClipboardList,
  UserCheck,
  Info,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { EventDetail } from "@/lib/data/all-events-data"

type EventCardProps = {
  event: EventDetail
}

export default function EventCard({ event }: EventCardProps) {
  const { name, department, sessions, guidelines, evaluation, teamType, teamSize, prize } = event

  return (
    <Card className="flex flex-col h-full bg-white/5 border-royal-800 text-white shadow-lg backdrop-blur-sm">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-gold-400">{name}</CardTitle>
          <Badge variant="secondary" className="bg-royal-700 text-royal-200">{department}</Badge>
        </div>
        <CardDescription className="text-royal-300">{teamType}{teamSize && ` (${teamSize})`}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {sessions.map((session, index) => (
          <div key={index} className="p-3 bg-royal-900/50 rounded-lg space-y-2 border border-royal-700">
            <div className="font-semibold text-royal-100">{session.participation}</div>
            <div className="flex items-center text-sm text-royal-300 gap-2">
              <Clock size={14} />
              <span>{session.timeSlot}</span>
            </div>
            <div className="flex items-center text-sm text-royal-300 gap-2">
              <MapPin size={14} />
              <span>{session.venue}</span>
            </div>
            <div className="flex items-center text-sm text-royal-300 gap-2">
              <Users size={14} />
              <span>{session.participants} Participants</span>
            </div>
             <div className="pt-2">
                <h4 className="font-semibold text-xs text-royal-200 mb-1">Coordinators:</h4>
                <div className="flex flex-col text-xs text-royal-400 gap-1">
                {session.coordinators.map(c => <span key={c.name}>{c.name} ({c.contact})</span>)}
                </div>
            </div>
          </div>
        ))}

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="guidelines">
            <AccordionTrigger className="text-sm font-semibold text-gold-500">
              <div className="flex items-center gap-2"><Info size={16}/>Guidelines</div>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-royal-300 whitespace-pre-line">
              {guidelines}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="evaluation">
            <AccordionTrigger className="text-sm font-semibold text-gold-500">
                <div className="flex items-center gap-2"><UserCheck size={16}/>Evaluation Pattern</div>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-royal-300 whitespace-pre-line">
              {evaluation}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
        <div className="flex items-center text-sm text-gold-400 gap-2 w-full pt-4 border-t border-royal-800">
            <Award size={16} />
            <span className="font-semibold">Prize:</span>
            <span>{prize}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
