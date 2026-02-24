"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CareerNode } from "@/lib/careers";

interface Props {
  career: CareerNode;
  onClose: () => void;
}

export default function CareerDetailPanel({ career, onClose }: Props) {
  const [activeGrowthIndex, setActiveGrowthIndex] = useState(0);
  const [regenerating, setRegenerating] = useState(false);

  async function handleRegenerate() {
    setRegenerating(true);
    await new Promise((r) => setTimeout(r, 800));
    setRegenerating(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(career.title + " jobs near me")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-14 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            Find jobs near you
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* A day in the life */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              <h2 className="text-xl font-bold text-slate-900">A day in the life</h2>
            </div>
            <p className="text-slate-600 mb-4">
              Here&apos;s what a day in the life of a(n){" "}
              <span className="font-semibold text-amber-700">{career.title}</span> might look like.
            </p>
            <button
              onClick={handleRegenerate}
              disabled={regenerating}
              className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-60"
            >
              {regenerating ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Re-generating...
                </>
              ) : (
                <>
                  <span>✨</span> Re-generate
                </>
              )}
            </button>
            <div className="space-y-3">
              {career.dayInLife.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-4 rounded-xl border-2 ${
                    i < 2
                      ? "border-amber-200 bg-amber-50/50 text-slate-800"
                      : "border-stone-100 bg-stone-50/50 text-slate-600"
                  }`}
                >
                  {task}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Polymath intersection (when available) */}
          {career.polymathMeta && (
            <div className="mb-10 p-5 rounded-2xl border-2 border-amber-200 bg-amber-50/40">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-2">Intersection role · {career.polymathMeta.intersection}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-1">Why it fits</p>
                  <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                    {career.polymathMeta.whyFit.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-1">Proof task (1–2 hours)</p>
                  <p className="text-slate-600 text-sm">{career.polymathMeta.proofTask}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-1">2-week experiment</p>
                  <p className="text-slate-600 text-sm">{career.polymathMeta.twoWeekExperiment}</p>
                </div>
              </div>
            </div>
          )}

          {/* Areas for growth */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </span>
              <h2 className="text-xl font-bold text-slate-900">Areas for growth</h2>
            </div>
            <p className="text-slate-600 mb-4">
              Every career presents opportunities to learn and specialize. Here&apos;s what that could look like as a(n){" "}
              <span className="font-semibold text-amber-700">{career.title}</span>.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {career.growthAreas.map((area, i) => (
                <button
                  key={i}
                  onClick={() => setActiveGrowthIndex(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeGrowthIndex === i
                      ? "border-2 border-amber-500 text-amber-800 bg-amber-50"
                      : "border border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {area.skill}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGrowthIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="p-5 rounded-xl border-2 border-amber-200 bg-amber-50/30"
              >
                <p className="text-slate-700 leading-relaxed">
                  {career.growthAreas[activeGrowthIndex]?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
