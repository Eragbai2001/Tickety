import React from "react";
import Reveal from "@/components/reveal";

export default function TrustedCompanies() {
  const companies = [
    { name: "Uber", logo: "/provider-logos/uber.png" },
    { name: "Google", logo: "/google-logo.png" },
    { name: "PayPal", logo: "/paypal-logo.png" },
    { name: "Microsoft", logo: "/microsoft-logo.png" },
    { name: "Dribbble", logo: "/dribbble-logo.jpg" },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl mt-10">
            Trusted Companies From Around{" "}
            <span className="block">the World</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-gray-600">
            Thousands of teams rely on TicketFlow to manage customer requests
            efficiently. From startups to global enterprises, our platform
            powers fast, reliable support every day.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="w-24 flex items-center justify-center">
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="h-6 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
