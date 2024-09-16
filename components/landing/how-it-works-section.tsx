import { FeatureCard8 } from "@/components/features/animated-feature-card-8";
import { FeatureCard9 } from "@/components/features/animated-feature-card-9";

export default function HowItWorksSection() {
    return (
      <section
        id="how-it-works"
        className="mx-auto max-w-[80rem] px-6 md:px-8"
      >
        <div className="mx-auto max-w-5xl text-center">
            <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
                How it works
            </h4>
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
                Simple <span className="text-orange-400 dark:text-white">af</span> 
            </h2>
        </div>
        <div className="py-14">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-4 items-center justify-items-center">
            <FeatureCard9 />
            <FeatureCard8 />
          </div>
        </div>
      </section>
    );
  }
