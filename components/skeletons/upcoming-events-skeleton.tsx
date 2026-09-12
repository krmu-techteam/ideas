import { Card, CardContent } from "@/components/ui/card"

export default function UpcomingEventsSkeleton() {
  return (
    <section className="py-8 sm:py-16 bg-gray-50 animate-pulse" aria-hidden>
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <div className="h-8 sm:h-10 w-64 mx-auto bg-gray-200 rounded" />
          <div className="h-4 w-80 mx-auto mt-4 bg-gray-200 rounded" />
        </div>
        <div className="md:hidden space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="border-0 shadow-md bg-white overflow-hidden">
              <div className="flex flex-row h-28">
                <div className="w-28 h-28 bg-gray-200" />
                <CardContent className="flex-1 p-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-4 w-40 bg-gray-200 rounded" />
                    <div className="h-3 w-24 bg-gray-200 rounded" />
                    <div className="h-3 w-32 bg-gray-200 rounded" />
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded" />
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        <div className="hidden md:grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="h-full border-0 shadow bg-white flex flex-col">
              <div className="h-48 bg-gray-200" />
              <CardContent className="p-4 flex flex-col flex-grow space-y-3">
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="space-y-2">
                  <div className="h-3 w-1/2 bg-gray-200 rounded" />
                  <div className="h-3 w-2/3 bg-gray-200 rounded" />
                  <div className="h-3 w-1/3 bg-gray-200 rounded" />
                </div>
                <div className="h-3 w-full bg-gray-200 rounded mt-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
