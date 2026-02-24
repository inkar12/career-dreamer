"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUESTIONNAIRE, SECTION_LABELS } from "@/lib/questionnaire";

interface Props {
  onSubmit: (answers: Record<string, string>) => void;
}

export default function IntakeQuestionnaire({ onSubmit }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const sections = ["experience", "aspiration"];
  const currentSection = sections[step];
  const sectionQuestions = QUESTIONNAIRE.filter((q) => q.section === currentSection);

  const progress = ((step + 1) / sections.length) * 100;

  function handleAnswer(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleNext() {
    if (step < sections.length - 1) {
      setStep((s) => s + 1);
    } else {
      onSubmit(answers);
    }
  }

  const minChars = 15;
  const canProceed = sectionQuestions.every((q) => {
    const val = answers[q.id]?.trim();
    return val && val.length >= minChars;
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-900 mb-2 font-serif">
            Pathfinder
          </h1>
          <p className="text-stone-600">
            Five questions to surface the careers that fit you.
          </p>
          <div className="mt-4 h-1.5 bg-stone-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-lg font-semibold text-amber-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-sm font-bold">
                {step + 1}
              </span>
              {SECTION_LABELS[currentSection]}
            </h2>

            <div className="space-y-6">
              {sectionQuestions.map((q) => (
                <div key={q.id}>
                  <label
                    htmlFor={q.id}
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    {q.label}
                  </label>
                  <textarea
                    id={q.id}
                    value={answers[q.id] ?? ""}
                    onChange={(e) => handleAnswer(q.id, e.target.value)}
                    placeholder={q.placeholder}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-none transition-all resize-none text-stone-800 placeholder:text-stone-400"
                  />
                  {answers[q.id] && answers[q.id].length < minChars && (
                    <p className="text-xs text-amber-600 mt-1">
                      Add a bit more detail (at least {minChars} characters)
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-between">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="px-5 py-2.5 rounded-xl text-stone-600 hover:bg-stone-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className="px-6 py-2.5 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-200"
              >
                {step < sections.length - 1 ? "Continue" : "See my career paths →"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
