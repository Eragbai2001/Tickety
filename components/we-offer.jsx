import React from "react";
import { Calendar, Briefcase, Scale } from "lucide-react";
import Reveal from "@/components/reveal";

export default function WeOffer() {
  const features = [
    {
      icon: Calendar,
      title: "Consultancy",
      description:
        "Get expert guidance tailored to your business needs — from process setup to customer engagement strategy.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Briefcase,
      title: "Partnership Deals",
      description:
        "Collaborate with trusted partners to expand your reach, improve support delivery, and drive mutual growth.",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Scale,
      title: "Client Relations",
      description:
        "Build long-term customer trust through quick responses, transparent communication, and dedicated service.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            We Offer
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-gray-600">
            Simplify your workflow with tools built for modern support teams.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center">
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full ${feature.bgColor}`}>
                  <Icon className={`h-12 w-12 ${feature.iconColor}`} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
