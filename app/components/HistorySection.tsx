"use client";

import { useState } from "react";
import { SCHOOL } from "@/lib/school";

export function HistorySection() {
  const [expanded, setExpanded] = useState(false);
  const { intro, sections } = SCHOOL.history;

  if (!intro) return null;

  return (
    <section id="history" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-4">Our History</h2>
      <p className="text-gray-600 leading-relaxed mb-2 whitespace-pre-line">{intro}</p>

      {sections.length > 0 && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="text-blue-700 font-medium text-sm hover:underline mt-2"
        >
          Read the full history →
        </button>
      )}

      {expanded && (
        <div className="mt-6 space-y-6">
          {sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{section.heading}</h3>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-600 leading-relaxed text-sm mb-3">
                  {p}
                </p>
              ))}
            </div>
          ))}
          <button
            onClick={() => setExpanded(false)}
            className="text-blue-700 font-medium text-sm hover:underline"
          >
            ← Show less
          </button>
        </div>
      )}
    </section>
  );
}