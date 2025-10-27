"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Amari cantu",
    handle: "@AmariCantu",
    avatar: "/images/avatars/avatar-1.png",
    text: "Sit ut diam bibendum dolor. Ullamcorper ph eget . Mauris dolor vestibulum et lacus a ante orci.",
  },
  {
    id: 2,
    name: "Nathanael burgess",
    handle: "@NathanaelBurgess",
    avatar: "/images/avatars/avatar-4.png",
    text: "Business should be nominated for service of the year. No matter where you go, Business is the coolest, most happening thing around",
  },
  {
    id: 3,
    name: "Emory Hendricksoy",
    handle: "@EmoryHendricks",
    avatar: "/images/avatars/avatar-2.png",
    text: "I would gladly pay over 600 dollars for Business. I'd be lost without Business. Business has got everything I need.",
  },
  {
    id: 4,
    name: "Lucia Koch",
    handle: "@LuciaKoch",
    avatar: "/images/avatars/avatar-3.png",
    text: "Definitely worth the investment. I couldn't have asked for more than this. Thank you so much for your help.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - itemsPerPage))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(testimonials.length - itemsPerPage, prev + itemsPerPage))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-[family-name:var(--font-archivo)]">
          What our happy clients say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg border border-[#FBFDFE]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`${testimonial.name} avatar`}
                    fill
                    className="rounded-full object-cover"
                    sizes="64px"
                  />
                </div>
                <h3 className="font-semibold text-base mb-1">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.handle}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="rounded-full w-10 h-10 bg-transparent"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            size="icon"
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - itemsPerPage}
            className="rounded-full w-10 h-10 bg-black hover:bg-gray-800"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
