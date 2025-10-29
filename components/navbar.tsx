"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar({ logoSrc = "/images/logo.png" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileClick = () => {
    setMobileMenuOpen(false);
  };

  return (
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
            <span className="text-xl font-bold text-gray-900">TicketFlow</span>
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
            <Button variant="ghost" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Try for free</Link>
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
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-gray-300 bg-white hover:bg-gray-100 hover:text-purple-600 h-10 px-4 py-2 w-full"
                  onClick={handleMobileClick}>
                  Sign up
                </a>
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-purple-600 text-white hover:bg-purple-700 h-10 px-4 py-2 w-full"
                  onClick={handleMobileClick}>
                  Try for free
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
