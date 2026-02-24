"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function IntakeForm() {
  const [dreamText, setDreamText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    submissionId: string;
    archetypes: { id: string; title: string; description: string; score: number }[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    if (dreamText.trim().length < 10) {
      setError("Share at least 10 characters about your dreams");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dream_text: dreamText.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setResult(data);
      setDreamText("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="dream" className="block text-sm font-medium text-dream-700 mb-2">
            What are your career dreams?
          </label>
          <textarea
            id="dream"
            value={dreamText}
            onChange={(e) => setDreamText(e.target.value)}
            placeholder="e.g. I want to build software that helps nonprofits scale their impact..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border-2 border-dream-200 focus:border-dream-500 focus:ring-2 focus:ring-dream-200 outline-none transition-all resize-none"
            disabled={loading}
          />
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-sm"
          >
            {error}
          </motion.p>
        )}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 bg-gradient-to-r from-dream-500 to-dream-600 text-white font-semibold rounded-xl shadow-lg shadow-dream-300/50 hover:shadow-dream-400/50 transition-shadow disabled:opacity-60"
        >
          {loading ? "Dreaming..." : "Share my dream"}
        </motion.button>
      </form>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 rounded-2xl bg-white/80 border border-dream-200 shadow-lg"
        >
          <p className="text-sm text-dream-600 mb-4">Your dream is saved. Here&apos;s what resonates:</p>
          <div className="space-y-3">
            {result.archetypes.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-3 rounded-xl bg-dream-50 border border-dream-100"
              >
                <h4 className="font-semibold text-dream-800">{a.title}</h4>
                <p className="text-sm text-dream-600 mt-0.5">{a.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-dream-500 mt-4">Submission ID: {result.submissionId}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
