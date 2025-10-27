"use client";

import { useState } from "react";
import React from "react";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    // Add newsletter signup logic here
    setEmail("");
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div
          className="rounded-3xl px-8 py-16 text-center"
          style={{
            background: "linear-gradient(135deg, #6425D3 5%, #A259FF 100%)",
          }}>
          <h2 className="font-archivo text-4xl font-bold text-white mb-4">
            Join our Newsletter
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Enter your Email address to get started for free with our
            newsletter.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-[320px] mx-auto items-center justify-center">
            <div className="relative flex-1 w-full max-w-[320px]">
              <Input
                type="email"
                placeholder="Your e-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pr-34 bg-white border-0 h-12 px-6 rounded-xl text-gray-900 placeholder:text-gray-400"
              />

              <Button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-purple-600 text-white border-0 h-10 px-4 rounded-xl hover:bg-purple-700 shadow-md">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
