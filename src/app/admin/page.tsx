"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Submission {
  id: string;
  dream_text: string;
  created_at: string;
  embedding?: number[] | null;
}

interface Insights {
  total_submissions: number;
  top_archetypes: { id: string; count: number }[];
  top_keywords: { word: string; count: number }[];
  summary_archetypes: { id: string; title: string; score: number }[];
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [insights, setInsights] = useState<Insights | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function loadData() {
    setLoading(true);
    setError(null);
    Promise.all([
      fetch("/api/admin/submissions").then((r) => (r.ok ? r.json() : r.json().then((j) => { throw new Error(j.error || "Failed to load"); }))),
      fetch("/api/admin/insights").then((r) => (r.ok ? r.json() : r.json().then((j) => { throw new Error(j.error || "Failed to load"); }))),
    ])
      .then(([subData, insData]) => {
        setSubmissions(subData?.submissions ?? []);
        setInsights(insData?.total_submissions !== undefined ? insData : null);
      })
      .catch((err) => {
        setError(err?.message ?? "Could not load admin data. APIs may be unavailable.");
        setSubmissions([]);
        setInsights(null);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => loadData(), []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this submission?")) return;
    const res = await fetch(`/api/admin/submissions/${id}`, { method: "DELETE" });
    if (res.ok) loadData();
  }

  const archetypeLabels: Record<string, string> = {
    tech: "Tech Innovator",
    research: "Research Pioneer",
    impact: "Social Impact",
    creative: "Creative",
    business: "Business Builder",
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-stone-800 font-serif">Pathfinder · Demand Intelligence</h1>
          <Link
            href="/"
            className="text-sm text-stone-600 hover:text-stone-800 transition-colors"
          >
            ← Student intake
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800">
            <p className="font-medium">Could not load dashboard</p>
            <p className="text-sm mt-1">{error}</p>
            <button onClick={loadData} className="mt-3 text-sm font-medium text-amber-700 hover:underline">Retry</button>
          </div>
        )}
        {/* Dashboard - first thing admin sees */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-stone-800 mb-6 font-serif">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <h3 className="text-sm font-medium text-stone-500 mb-1">Total submissions</h3>
            <p className="text-3xl font-bold text-amber-700">{insights?.total_submissions ?? 0}</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <h3 className="text-sm font-medium text-stone-500 mb-3">Top archetypes</h3>
            <div className="space-y-2">
              {insights?.top_archetypes?.length ? (
                insights.top_archetypes.map((a) => (
                  <div key={a.id} className="flex justify-between text-sm">
                    <span className="text-stone-700">{archetypeLabels[a.id] || a.id}</span>
                    <span className="font-semibold text-amber-600">{a.count}</span>
                  </div>
                ))
              ) : (
                <p className="text-stone-400 text-sm">No data yet</p>
              )}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <h3 className="text-sm font-medium text-stone-500 mb-3">Top keywords</h3>
            <div className="flex flex-wrap gap-2">
              {insights?.top_keywords?.length ? (
                insights.top_keywords.map((k) => (
                  <span
                    key={k.word}
                    className="px-2 py-1 rounded-lg bg-amber-50 text-amber-800 text-xs font-medium"
                  >
                    {k.word} ({k.count})
                  </span>
                ))
              ) : (
                <p className="text-stone-400 text-sm">No data yet</p>
              )}
            </div>
          </div>
          </div>
        </motion.section>

        {/* Interest Space placeholder */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 p-8 rounded-2xl bg-white border border-stone-200 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-stone-800 mb-4">Interest Space (UMAP)</h2>
          <div className="h-48 rounded-xl bg-stone-100 flex items-center justify-center border-2 border-dashed border-stone-300">
            <p className="text-stone-500 text-sm">
              {submissions.length >= 2
                ? "Clusters will appear here when UMAP + embeddings are configured"
                : "Submit 2+ dreams from the intake to enable clustering"}
            </p>
          </div>
        </motion.section>

        {/* Submissions list with delete */}
        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-4">
            Submissions ({submissions.length})
          </h2>
          {loading ? (
            <p className="text-stone-500">Loading...</p>
          ) : submissions.length === 0 ? (
            <p className="text-stone-500">No submissions yet. Try the intake form.</p>
          ) : (
            <div className="space-y-4">
              {submissions.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex justify-between items-start gap-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-stone-800 truncate max-w-2xl">{s.dream_text}</p>
                    <p className="text-xs text-stone-500 mt-2">
                      {new Date(s.created_at).toLocaleString()}
                      {s.embedding && " · ✓ embedded"}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="shrink-0 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
