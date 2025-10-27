"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Reveal from "@/components/reveal";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* First Feature - Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-32">
          <div className="flex-1 max-w-md">
            <h2 className="font-archivo text-4xl font-bold text-gray-900 mb-4">
              Great customer relationship starts here
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Build trust with fast responses and organized ticket management.
              Keep your customers happy with seamless support.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
              Get Started
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/man-business.png"
              alt="Professional man with coffee representing customer support"
              width={500}
              height={500}
              loading="lazy"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Second Feature - Image Left */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 max-w-md">
            <h2 className="font-archivo text-4xl font-bold text-gray-900 mb-4">
              The biggest business for your clients
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Deliver professional support that scales with your business.
              Track, prioritize, and resolve tickets efficiently.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
              Get Started
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/woman-business.png"
              alt="Professional woman representing business growth"
              width={500}
              height={500}
              loading="lazy"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
