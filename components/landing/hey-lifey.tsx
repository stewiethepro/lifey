import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WordRotate from "@/components/magicui/word-rotate";

const tasks = [
  "book a doctor's appointment",
  "book a table for 4 at Cassia",
  "reserve tickets for the Blues game at Eden Park",
  "book a ferry to Waiheke for wine tasting",
  "find parking in the CBD for Saturday",
  "schedule a WOF for my car in Newmarket",
  "book a table at Depot for Friday night",
  "get tickets for a show at the Civic Theatre",
  "book a lane at Metrolanes for bowling night",
  "find a GP accepting new patients in Mt Eden",
  "book tickets for the Auckland Art Gallery exhibition",
  "schedule a visit to the Sky Tower observation deck",

];

export default function CallToAction() {
  return (
    <section id="cta" className="pt-40">
      <div className="px-5 py-14 lg:px-0">
        <div className="mx-auto grid max-w-5xl items-center justify-between rounded-xl border px-0 md:grid-cols-2">
          <div className="order-2 flex flex-col gap-y-5 p-7 md:order-1 lg:p-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl/tight">
                Hey Lifey, 
                <WordRotate
                  className="text-orange-400 dark:text-white"
                  words={tasks}
                />
              </h2>
            </div>

            <Button className="w-48" size="lg">
              Get Lifey in your Lifey
            </Button>
          </div>
          <div className="relative order-1 mx-auto h-full min-h-[350px] overflow-hidden rounded-t-xl border bg-red-500 sm:w-full md:order-2 md:rounded-r-xl md:rounded-tl-none lg:aspect-video">
            <img
              alt="alt_image"
              className="h-full w-full object-cover object-center"
              src="/girl-in-bath.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

