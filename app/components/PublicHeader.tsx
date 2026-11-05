"use client";

import { useState } from "react";
import Link from "next/link";
import { SCHOOL } from "@/lib/school";

type NavLink = { href: string; label: string };

const navLinks = [
  SCHOOL.history.intro ? { href: "#history", label: "About" } : null,
  SCHOOL.director.speech
    ? { href: "#director", label: SCHOOL.director.title || "Leadership" }
    : null,
  SCHOOL.galleryCount > 0 ? { href: "#gallery", label: "Gallery" } : null,
  SCHOOL.anthem.lyrics ? { href: "#anthem", label: "Anthem" } : null,
  { href: "#contact", label: "Contact" },
].filter((l): l is NavLink => l !== null);

export function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SCHOOL.logo}
            alt={`${SCHOOL.name} logo`}
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-900 text-sm sm:text-base">{SCHOOL.name}</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-blue-700">
              {link.label}
            </a>
          ))}
          <Link
            href="/login"
            className="bg-blue-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Login
          </Link>
        </nav>

        <button
          className="sm:hidden text-gray-700"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="sm:hidden border-t bg-white px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/login"
            className="bg-blue-700 text-white text-sm px-4 py-2 rounded-lg text-center hover:bg-blue-800 transition-colors"
          >
            Login
          </Link>
        </nav>
      )}
    </header>
  );
}