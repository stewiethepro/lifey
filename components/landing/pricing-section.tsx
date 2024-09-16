"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const pricingOptions = [
  {
    name: "Lifeyline",
    price: "$100",
    yearlyPrice: "$1,228",
    description:
      "Stay on top of your life for $25 / week",
    features: [
      "Modern app",
      "Jobs on autopilot",
      "No committment",
    ],
    extraBenefits: "What do you get?",
  },
];

export default function Component() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing">
      <div className="container mx-auto max-w-5xl py-40">
        <div className="mx-auto space-y-4 py-6 text-center">
          <h2 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Pricing
          </h2>
          <h4 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            So affordable it should be <span className="text-orange-400 dark:text-white">illegal</span> 
          </h4>
          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            If we made Lifey any more affordable we'd be living out of our cars.
        </p>
        </div>
        {/* <div className="mt-5 flex items-center justify-center space-x-2">
          <span
            className={`font-bold ${!isYearly ? "" : "text-muted-foreground"}`}
          >
            Monthly
          </span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span
            className={`font-bold ${isYearly ? "" : "text-muted-foreground"}`}
          >
            Yearly
          </span>
        </div> */}
        <div className="mx-auto grid gap-6 px-10 py-8">
          {pricingOptions.map((option, index) => (
            <Card key={index} className="flex flex-col shadow-none">
              <CardHeader>
                <CardTitle>{option.name}</CardTitle>
                <p className="text-muted-foreground">{option.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold">
                  {isYearly ? option.yearlyPrice : option.price}
                  <span className="text-sm font-medium text-muted-foreground">
                    {isYearly ? "/year" : "/month"}
                  </span>
                </div>
                {option.extraBenefits && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    {option.extraBenefits}
                  </p>
                )}
                <ul className="mt-4 space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Try Lifey free for 14 days
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
