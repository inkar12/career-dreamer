"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CAREER_PATHS, DEFAULT_EXPLORE_IDS, getFallbackPositions, getPositionsByDomain, type CareerNode } from "@/lib/careers";
import CareerDetailPanel from "./CareerDetailPanel";

const EMOJIS = [
  { id: "growth", emoji: "🌱", label: "Growth", dim: "growth" as const },
  { id: "strength", emoji: "💪", label: "Strength", dim: "strength" as const },
  { id: "passion", emoji: "💖", label: "Passion", dim: "passion" as const },
];

interface Props {
  initialMatchedIds?: string[];
  onStartOver?: () => void;
}

export default function InterestSpace({ initialMatchedIds = [], onStartOver }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputText, setInputText] = useState("");
  const [showExplain, setShowExplain] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [activeEmoji, setActiveEmoji] = useState<"growth" | "strength" | "passion" | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(
    () => new Set(initialMatchedIds)
  );
  const [positions, setPositions] = useState<{ x: number; y: number }[]>(() =>
    getFallbackPositions(CAREER_PATHS.length)
  );
  const [positionsLoading, setPositionsLoading] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<CareerNode | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);

  // Fetch UMAP positions in background (optional upgrade)
  useEffect(() => {
    let cancelled = false;
    fetch("/api/career-positions")
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        if (data.positions && data.positions.length === CAREER_PATHS.length) {
          setPositions(data.positions);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Strict niche filter: when user has matched a niche, show ONLY those careers (capped). When no input (skip), show small curated set.
  const displayCareers = useMemo(() => {
    if (matchedIds.size > 0) {
      return CAREER_PATHS.filter((c) => matchedIds.has(c.id));
    }
    return CAREER_PATHS.filter((c) => DEFAULT_EXPLORE_IDS.includes(c.id));
  }, [matchedIds]);

  const displayPositions = useMemo(() => getPositionsByDomain(displayCareers), [displayCareers]);

  // Position map for displayed careers (filtered by niche)
  const positionMap = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    displayCareers.forEach((c, i) => {
      map.set(c.id, displayPositions[i] ?? { x: 50, y: 50 });
    });
    return map;
  }, [displayCareers, displayPositions]);

  // Emoji filter: when active, we emphasize careers high in that dimension
  const dimensionScores = useMemo(() => {
    if (!activeEmoji) return null;
    const map = new Map<string, number>();
    displayCareers.forEach((c) => map.set(c.id, c.dimensions[activeEmoji] ?? 0));
    return map;
  }, [activeEmoji, displayCareers]);

  async function handleSearch() {
    if (!inputText.trim()) return;
    setSearchLoading(true);
    setMatchedIds(new Set());
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dream_text: inputText.trim() }),
      });
      const data = await res.json();
      if (res.ok && data.matched_career_ids?.length) {
        setMatchedIds(new Set(data.matched_career_ids));
        setIsExpanded(false);
      } else if (res.ok) {
        setMatchedIds(new Set());
      }
    } catch (_) {
      setMatchedIds(new Set());
    } finally {
      setSearchLoading(false);
    }
  }

  function handleRefresh() {
    setInputText("");
    setIsExpanded(false);
    setMatchedIds(new Set());
    setActiveEmoji(null);
    setSelectedCareer(null);
    fetch("/api/career-positions")
      .then((r) => r.json())
      .then((data) => {
        if (data.positions?.length === CAREER_PATHS.length) setPositions(data.positions);
      })
      .catch(() => {});
  }

  function handleEmojiClick(dim: "growth" | "strength" | "passion") {
    setActiveEmoji((prev) => (prev === dim ? null : dim));
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden relative">
      {/* Warm gradient background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 20%, rgba(251, 191, 36, 0.12), transparent 55%),
            radial-gradient(ellipse 80% 50% at 80% 80%, rgba(180, 83, 9, 0.08), transparent 50%),
            radial-gradient(ellipse 60% 40% at 15% 60%, rgba(245, 158, 11, 0.1), transparent 45%)
          `,
        }}
      />

      <header className="relative z-10 border-b border-stone-200/60 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-stone-800 font-serif">Pathfinder</h1>
            <div className="flex items-center gap-4">
            <Link
              href="/topics"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              AI Topics
            </Link>
            <Link
              href="/internships"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Internships →
            </Link>
            {onStartOver && (
              <button
                onClick={onStartOver}
                className="text-sm text-amber-700 hover:text-amber-800 font-medium"
              >
                Start over
              </button>
            )}
            <Link
              href="/admin"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Admin →
            </Link>
          </div>
        </div>
      </header>

      <section className="relative h-[calc(100vh-180px)] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          <AnimatePresence mode="popLayout">
          {displayCareers.map((career, i) => {
            const pos = positionMap.get(career.id) ?? { x: 50, y: 50 };
            const dimScore = dimensionScores?.get(career.id) ?? 1;
            const emojiEmphasis = activeEmoji ? 0.5 + dimScore * 0.6 : 1;

            return (
              <motion.button
                key={career.id}
                layout
                initial={{ opacity: 0, scale: 0.1, y: -40 }}
                animate={{
                  opacity: emojiEmphasis,
                  scale: 0.95 + dimScore * 0.15,
                  y: 0,
                  filter: "none",
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  delay: i * 0.04,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.15,
                  zIndex: 10,
                  transition: { duration: 0.15 },
                }}
                whileTap={{ scale: 0.95 }}
                className="absolute cursor-pointer select-none text-left"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setSelectedCareer(career)}
              >
                <motion.div
                  className="flex items-center gap-1.5 group max-w-[120px] rounded-lg px-2 py-1 -m-2 hover:bg-amber-50/80"
                  title={career.title}
                  animate={{
                    y: [0, -4, 0],
                    transition: {
                      duration: 2.5 + (i % 4) * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <motion.span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 mt-0.5 ${
                      career.source === "database" ? "bg-blue-500" : "bg-emerald-500"
                    }`}
                    animate={{
                      opacity: [1, 0.6, 1],
                      scale: [1, 1.25, 1],
                      transition: {
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.12,
                        ease: "easeInOut",
                      },
                    }}
                  />
                  <span className="text-[11px] font-medium truncate text-slate-700 group-hover:text-slate-900 transition-colors">
                    {career.title}
                  </span>
                </motion.div>
              </motion.button>
            );
          })}
          </AnimatePresence>
        </div>

        {/* Central hub */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-20"
        >
          <div
            className="relative w-48 h-48 rounded-full flex flex-col items-center justify-center cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.97)",
              boxShadow: `
                0 0 80px rgba(251, 191, 36, 0.25),
                0 0 120px rgba(245, 158, 11, 0.15),
                inset 0 0 60px rgba(255,255,255,0.9)
              `,
              border: "1px solid rgba(214, 211, 209, 0.5)",
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <p className="text-slate-500 text-sm mb-2">Explore paths based on...</p>
            <div className="flex gap-2 mb-3">
              {EMOJIS.map((e) => (
                <button
                  key={e.id}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    handleEmojiClick(e.dim);
                  }}
                    className={`text-2xl p-1.5 rounded-xl transition-all ${
                    activeEmoji === e.dim
                      ? "bg-amber-100 ring-2 ring-amber-500 scale-110"
                      : "hover:bg-stone-100"
                  }`}
                  title={`Filter by ${e.label}`}
                >
                  {e.emoji}
                </button>
              ))}
            </div>
            {activeEmoji && (
              <p className="text-xs text-amber-700 font-medium mb-1">
                Showing {EMOJIS.find((e) => e.dim === activeEmoji)?.label}
              </p>
            )}
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-72"
                >
                  <div
                    className="p-5 rounded-2xl bg-white shadow-2xl border border-slate-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      placeholder="e.g. software, robotics, data science..."
                      className="w-full px-4 py-3 text-sm rounded-xl border-2 border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                    />
                    <button
                      onClick={handleSearch}
                      disabled={searchLoading}
                      className="mt-4 w-full py-3 text-sm font-semibold rounded-xl bg-amber-600 text-white hover:bg-amber-700 transition-all shadow-lg shadow-amber-200 disabled:opacity-60"
                    >
                      {searchLoading ? "Finding paths..." : "Explore paths"}
                    </button>
                    <p className="text-xs text-slate-500 mt-3">
                      Tell us your interests to highlight matching careers
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-slate-200/60 bg-white/80 backdrop-blur-xl px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="text-sm text-slate-600">Database result</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-sm text-slate-600">AI result</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowExplain(!showExplain)}
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Why am I seeing these results?
            </button>
            <button
              onClick={handleRefresh}
              className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-lg shadow-amber-200"
              title="Refresh"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>

        {showExplain && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto mt-4 p-4 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-600"
          >
            <strong>Database results</strong> come from curated campus opportunities.{" "}
            <strong>AI results</strong> are career paths matched to your interests. Click emoji filters
            to emphasize Growth 🌱, Strength 💪, or Passion 💖. Click a career to see details.
          </motion.div>
        )}
      </footer>

      <AnimatePresence>
        {selectedCareer && (
          <CareerDetailPanel career={selectedCareer} onClose={() => setSelectedCareer(null)} />
        )}
      </AnimatePresence>

      {!cookieAccepted && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 text-white px-6 py-3 flex items-center justify-between gap-4"
        >
          <p className="text-sm">
            Pathfinder uses cookies from Google to deliver and enhance the quality of its services
            and to analyze traffic.{" "}
            <a href="#" className="underline">
              Learn more
            </a>
          </p>
          <button
            onClick={() => setCookieAccepted(true)}
            className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors shrink-0"
          >
            Understood
          </button>
        </motion.div>
      )}
    </main>
  );
}
