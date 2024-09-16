import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { StarFilledIcon } from "@radix-ui/react-icons";

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-cyan-600/20 p-1 py-0.5 font-bold text-cyan-600 dark:bg-cyan-600/20 dark:text-cyan-600",
        className,
      )}
    >
      {children}
    </span>
  );
};

interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <StarFilledIcon className="size-4 text-yellow-500" />
        <StarFilledIcon className="size-4 text-yellow-500" />
        <StarFilledIcon className="size-4 text-yellow-500" />
        <StarFilledIcon className="size-4 text-yellow-500" />
        <StarFilledIcon className="size-4 text-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <img
        src={img}
        className="h-10 w-10 rounded-full  ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Luke Amundson",
    role: "Head of Sales ANZ",
    img: "/luke-amundson.jpeg",
    description: (
      <p>
        Am I
        <Highlight>
          NotBali
        </Highlight>{" "}
        ?
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>{" "}
        .
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>{" "}
        .
      </p>
    ),
  },
  {
    name: "Luke Amundson",
    role: "Head of Sales ANZ",
    img: "/luke-amundson.jpeg",
    description: (
      <p>
        Am I
        <Highlight>
          NotBali
        </Highlight>{" "}
        ?
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>{" "}
        .
      </p>
    ),
  },
  {
    name: "Emmie Hwang",
    role: "Community & Engagement Lead",
    img: "/emmie-hwang.jpeg",
    description: (
      <p>
        This landing page is so
        <Highlight>
          painfully millenial
        </Highlight>{" "}
        I can&apos;`t even bring myself to doom scroll it.
      </p>
    ),
  },
  {
    name: "Emmie Hwang",
    role: "Community & Engagement Lead",
    img: "/emmie-hwang.jpeg",
    description: (
      <p>
        This landing page is so
        <Highlight>
          wildly millenial
        </Highlight>{" "}
        but the concept slays 💅
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>{" "}
        .
      </p>
    ),
  },
  {
    name: "Jess Negus",
    role: "Senior Insights Analyst",
    img: "/jess-negus.png",
    description: (
      <p>
        I had such a 
        <Highlight>
          wholesome
        </Highlight>weekend, honestly it was just so 
        <Highlight>
          wholesome
        </Highlight>, so NotBali 💜
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>
        .
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>
        .
      </p>
    ),
  },
  {
    name: "Hamish Mathieson",
    role: "Head of Growth",
    img: "/hamish-mathieson.png",
    description: (
      <p>
        NotBali is an 
        <Highlight>
          insight in itself
        </Highlight>
        .
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>
        .
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>{" "}
        .
      </p>
    ),
  },
];

export default function SocialProofTestimonials() {
  return (
    <section id="testimonials">
      <div className="py-40">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            TESTIMONIALS
          </h3>
          <div className="relative mt-6 max-h-[650px] overflow-hidden">
            <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
              {Array(Math.ceil(testimonials.length / 3))
                .fill(0)
                .map((_, i) => (
                  <Marquee
                    vertical
                    key={i}
                    className={cn({
                      "[--duration:60s]": i === 1,
                      "[--duration:30s]": i === 2,
                      "[--duration:70s]": i === 3,
                    })}
                  >
                    {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                      <TestimonialCard {...card} key={idx} />
                    ))}
                  </Marquee>
                ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-white from-20% dark:from-black"></div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-white from-20% dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
