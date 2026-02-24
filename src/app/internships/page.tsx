"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ACCRA_INTERNSHIPS } from "@/lib/internships";

export default function InternshipsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [applied, setApplied] = useState<Set<string>>(new Set());

  const sectors = ["all", ...Array.from(new Set(ACCRA_INTERNSHIPS.map((i) => i.sector)))];
  const filtered =
    filter === "all"
      ? ACCRA_INTERNSHIPS
      : ACCRA_INTERNSHIPS.filter((i) => i.sector === filter);

  function handleApply(id: string) {
    setApplied((prev) => new Set(prev).add(id));
    alert("Application submitted! (Demo – no backend)");
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-stone-800 font-serif">
            Internships in Accra
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-stone-600 hover:text-stone-800"
            >
              ← Pathfinder
            </Link>
            <Link
              href="/admin"
              className="text-sm text-stone-600 hover:text-stone-800"
            >
              Admin →
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <p className="text-stone-600 mb-6">
          Browse and apply to internship opportunities at businesses in Accra. Demo listings.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {sectors.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === s
                  ? "bg-amber-600 text-white"
                  : "bg-white border border-stone-200 text-stone-600 hover:border-amber-400"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filtered.map((internship, i) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs font-medium">
                      {internship.sector}
                    </span>
                    <span className="text-xs text-stone-500">{internship.type}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-stone-900">
                    {internship.role}
                  </h2>
                  <p className="text-amber-700 font-medium">{internship.company}</p>
                  <p className="text-sm text-stone-500 mt-1">
                    {internship.location} · {internship.duration}
                  </p>
                  <p className="text-stone-600 mt-4">{internship.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {internship.requirements.map((r, j) => (
                      <li
                        key={j}
                        className="text-xs px-2 py-1 rounded bg-stone-100 text-stone-600"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleApply(internship.id)}
                  disabled={applied.has(internship.id)}
                  className={`shrink-0 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                    applied.has(internship.id)
                      ? "bg-stone-200 text-stone-500 cursor-default"
                      : "bg-amber-600 text-white hover:bg-amber-700"
                  }`}
                >
                  {applied.has(internship.id) ? "Applied" : "Apply"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
