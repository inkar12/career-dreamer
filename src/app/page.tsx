"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import IntakeQuestionnaire from "@/components/IntakeQuestionnaire";
import InterestSpace from "@/components/InterestSpace";

export default function Home() {
  const [phase, setPhase] = useState<"questionnaire" | "explorer">("questionnaire");
  const [initialMatchedIds, setInitialMatchedIds] = useState<string[]>([]);

  function handleQuestionnaireSubmit(answers: Record<string, string>) {
    fetch("/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionnaire: answers }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.matched_career_ids?.length) {
          setInitialMatchedIds(data.matched_career_ids);
        }
        setPhase("explorer");
      })
      .catch(() => setPhase("explorer"));
  }

  return (
    <AnimatePresence mode="wait">
      {phase === "questionnaire" ? (
        <motion.div
          key="questionnaire"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-stone-50"
        >
          <header className="border-b border-stone-200 bg-white/80 backdrop-blur">
            <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
              <h1 className="text-lg font-bold text-stone-800 font-serif">Pathfinder</h1>
              <div className="flex items-center gap-4">
                <Link
                  href="/topics"
                  className="text-sm text-stone-500 hover:text-stone-700"
                >
                  AI Topics
                </Link>
                <Link
                  href="/internships"
                  className="text-sm text-stone-500 hover:text-stone-700"
                >
                  Internships →
                </Link>
                <button
                  onClick={() => setPhase("explorer")}
                  className="text-sm text-stone-500 hover:text-stone-700"
                >
                  Skip for now →
                </button>
              </div>
            </div>
          </header>
          <IntakeQuestionnaire onSubmit={handleQuestionnaireSubmit} />
        </motion.div>
      ) : (
        <motion.div
          key="explorer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <InterestSpace
            initialMatchedIds={initialMatchedIds}
            onStartOver={() => {
              setPhase("questionnaire");
              setInitialMatchedIds([]);
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
