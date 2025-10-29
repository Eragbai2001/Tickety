"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X } from "lucide-react";

export default function HeroHeader({
  logoSrc = "/images/logo.png",
  illustrationSrc = "/images/Rectangle 305.png",
  onGetStarted = (email) => console.log("Get started with:", email),
}) {
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onGetStarted(email);
    }
  };

  const handleMobileClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo with brand name */}
            <div className="flex items-center gap-3">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="TicketFlow Logo"
                width={40}
                height={40}
                priority
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">Tickety</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              <a
                href="#platform"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Platform
              </a>
              <a
                href="#solutions"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Solutions
              </a>
              <a
                href="#plans"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Plans
              </a>
              <a
                href="#resources"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Resources
              </a>
              <a
                href="#company"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Company
              </a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 lg:flex">
              <Button
                variant="ghost"
                onClick={() => (window.location.href = "/sign-in")}
                className="text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-purple-600">
                Sign up
              </Button>
              <Button
                variant="ghost"
                onClick={() => (window.location.href = "/sign-in")}
                className="bg-purple-600 text-white hover:bg-purple-700">
                Try for free
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-4">
                <a
                  href="#platform"
                  onClick={handleMobileClick}
                  className="text-sm font-medium text-gray-700 hover:text-purple-600">
                  Platform
                </a>
                <a
                  href="#solutions"
                  onClick={handleMobileClick}
                  className="text-sm font-medium text-gray-700 hover:text-purple-600">
                  Solutions
                </a>
                <a
                  href="#plans"
                  onClick={handleMobileClick}
                  className="text-sm font-medium text-gray-700 hover:text-purple-600">
                  Plans
                </a>
                <a
                  href="#resources"
                  onClick={handleMobileClick}
                  className="text-sm font-medium text-gray-700 hover:text-purple-600">
                  Resources
                </a>
                <a
                  href="#company"
                  onClick={handleMobileClick}
                  className="text-sm font-medium text-gray-700 hover:text-purple-600">
                  Company
                </a>
                <div className="mt-4 flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:bg-gray-100"
                    asChild>
                    <Link href="/sign-in">Sign up</Link>
                  </Button>
                  <Button 
                    className="bg-purple-600 text-white hover:bg-purple-700"
                    asChild>
                    <Link href="/sign-in">Try for free</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="relative pt-12 min-h-[420px] overflow-hidden">
        {/* SVG wavy background using requested gradient colors */}
        <div className="absolute inset-0 -z-10">
          <svg
            viewBox="0 0 1440 420"
            preserveAspectRatio="none"
            className="w-full h-full">
            <defs>
              <linearGradient id="heroGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#6425D3" />
                <stop offset="100%" stopColor="#A259FF" />
              </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#heroGrad)" />

            {/* soft subtle waves for depth */}
            <path
              d="M0,300 C240,360 360,240 720,300 C1080,360 1320,220 1440,260 L1440,420 L0,420 Z"
              fill="#ffffff08"
            />
            <path
              d="M0,320 C260,380 420,260 720,320 C1020,380 1180,240 1440,300 L1440,420 L0,420 Z"
              fill="#ffffff06"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 pt-8 pb-0 lg:grid-cols-2 lg:gap-8 lg:pt-16 lg:pb-0">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                TicketFlow — Support Ticket
              </h1>

              <p className="mt-4 text-pretty leading-relaxed text-white/90">
                Manage tickets easily and respond faster. Streamline support,
                boost efficiency, and keep every request organized.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-5  sm:flex-row">
                <div className="relative flex items-center">
                  <Input
                    type="email"
                    placeholder="your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-lg border-0 bg-white px-4 pr-10 text-gray-900 shadow-lg placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-[320px]"
                    aria-label="email"
                    required
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-black font-bold text-lg pointer-events-none">
                    @
                  </span>
                </div>
                <Button
                  type="submit"
                  className="h-12 bg-gray-900 px-8 text-white hover:bg-gray-800 w-[118px] rounded-2xl">
                  Get Started
                </Button>
              </form>

              <div className="mt-4">
                <Button
                  variant="link"
                  className="text-white underline hover:text-white/80"
                  onClick={() => (window.location.href = "/auth/login")}>
                  Already have an account? Log in
                </Button>
              </div>

              {/* Small feature boxes inside hero (box-shaped sections with shadow & rounded corners) */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md">
                <div className="bg-white/95 rounded-xl p-4 shadow-lg">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Fast Setup
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Get started in minutes with prebuilt templates.
                  </p>
                </div>
                <div className="bg-white/95 rounded-xl p-4 shadow-lg">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Collaboration
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Assign and track tickets across teams.
                  </p>
                </div>
                <div className="bg-white/95 rounded-xl p-4 shadow-lg">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Reporting
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Insights to improve response times.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Illustration positioned to align with background edge */}
            <div className="relative flex items-end justify-center lg:justify-end">
              {/* Decorative floating circles behind the illustration */}
              <div
                className="absolute z-0 pointer-events-none"
                style={{
                  right: "-60px",
                  bottom: "-60px",
                }}>
                {/* Large circle: soft and partially off-screen for balance */}
                <div
                  style={{
                    width: 210,
                    height: 210,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.98)",
                    position: "absolute",
                    right: 30,
                    bottom: -20,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.08)",

                    transform: "translateY(20px)",
                  }}
                />

                {/* Medium circle: sits slightly above and left of the large one */}
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "rgba(230,220,255,0.65)",
                    position: "absolute",
                    right: 0,
                    bottom: 140,
                    boxShadow: "0 14px 30px rgba(0,0,0,0.05)",
                  }}
                />

                {/* Small circle: near the shoulder, adds diagonal flow */}
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(230,220,255,0.45)",
                    position: "absolute",
                    right: 140,
                    bottom: 250,
                  }}
                />
              </div>

              <Image
                src={illustrationSrc || "/placeholder.svg"}
                alt="Customer support representative illustration showing live chat and ticket handling"
                width={600}
                height={600}
                priority
                quality={90}
                className="relative z-10 max-w-full h-auto max-h-[600px] object-contain block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}