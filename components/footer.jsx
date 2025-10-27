import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="TicketFlow Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-archivo text-xl font-bold text-gray-900">
                TicketFlow
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6 max-w-xs">
              Streamline support, boost efficiency, and keep every request
              organized with our powerful ticket management platform.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
                aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
                aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-archivo font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Socials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Activity
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-archivo font-semibold text-gray-900 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-archivo font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-purple-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">
              Cookies
            </Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">
              Refunds
            </Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
