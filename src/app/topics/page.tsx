"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "career-dreamer-ai-topics";

interface Topic {
  id: string;
  text: string;
  createdAt: number;
}

function loadTopics(): Topic[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Topic[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveTopics(topics: Topic[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(topics));
}

export default function TopicsPage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setTopics(loadTopics());
  }, []);

  useEffect(() => {
    saveTopics(topics);
  }, [topics]);

  function addTopic() {
    const text = input.trim();
    if (!text) return;
    const topic: Topic = {
      id: crypto.randomUUID(),
      text,
      createdAt: Date.now(),
    };
    setTopics((prev) => [topic, ...prev]);
    setInput("");
  }

  function removeTopic(id: string) {
    setTopics((prev) => prev.filter((t) => t.id !== id));
    if (editingId === id) setEditingId(null);
  }

  function startEdit(id: string, text: string) {
    setEditingId(id);
    setEditText(text);
  }

  function saveEdit() {
    if (!editingId) return;
    const text = editText.trim();
    if (!text) {
      removeTopic(editingId);
    } else {
      setTopics((prev) =>
        prev.map((t) => (t.id === editingId ? { ...t, text } : t))
      );
    }
    setEditingId(null);
    setEditText("");
  }

  async function copyToClipboard(topic: Topic) {
    const prompt = `I want to discuss: ${topic.text}`;
    await navigator.clipboard.writeText(prompt);
    setCopiedId(topic.id);
    setTimeout(() => setCopiedId(null), 1500);
  }

  return (
    <main className="min-h-screen bg-[#fdf8ff] overflow-hidden relative">
      {/* Background gradients */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 50% at 50% 0%, rgba(249, 232, 254, 0.6), transparent 55%),
            radial-gradient(ellipse 70% 40% at 90% 60%, rgba(243, 208, 252, 0.3), transparent 45%),
            radial-gradient(ellipse 60% 35% at 10% 80%, rgba(219, 114, 239, 0.15), transparent 45%)
          `,
        }}
      />

      <header className="relative z-10 border-b border-stone-200/60 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-stone-800 font-serif hover:text-dream-600 transition-colors">
            Pathfinder
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/internships"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Internships →
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Home →
            </Link>
          </div>
        </div>
      </header>

      <section className="relative z-10 max-w-2xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-2xl font-bold text-stone-900 font-serif mb-2">
            Topics to discuss with AI
          </h1>
          <p className="text-stone-600 text-sm">
            Save ideas you want to explore in conversation. Copy any topic and paste it into Cursor or your favorite AI chat.
          </p>
        </motion.div>

        {/* Add topic input */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTopic()}
              placeholder="e.g. How do I pivot from marketing to product management?"
              className="flex-1 px-4 py-3.5 text-sm rounded-xl border-2 border-stone-200 bg-white/90 focus:border-dream-500 focus:ring-2 focus:ring-dream-200 outline-none transition-all placeholder:text-stone-400"
            />
            <button
              onClick={addTopic}
              disabled={!input.trim()}
              className="px-5 py-3.5 text-sm font-semibold rounded-xl bg-dream-600 text-white hover:bg-dream-700 transition-all shadow-lg shadow-dream-300/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none shrink-0"
            >
              Add
            </button>
          </div>
        </motion.div>

        {/* Topics list */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {topics.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 rounded-2xl border-2 border-dashed border-stone-200 bg-white/50"
              >
                <span className="text-4xl mb-4 block">💭</span>
                <p className="text-stone-500 text-sm font-medium">No topics yet</p>
                <p className="text-stone-400 text-xs mt-1">Add your first idea above</p>
              </motion.div>
            ) : (
              topics.map((topic, i) => (
                <motion.div
                  key={topic.id}
                  layout
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: i * 0.03,
                  }}
                  className="group relative"
                >
                  {editingId === topic.id ? (
                    <div className="rounded-2xl border-2 border-dream-300 bg-white p-4 shadow-lg shadow-dream-200/30">
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            saveEdit();
                          }
                          if (e.key === "Escape") setEditingId(null);
                        }}
                        rows={3}
                        autoFocus
                        className="w-full px-3 py-2 text-sm rounded-xl border border-stone-200 focus:border-dream-500 focus:ring-2 focus:ring-dream-100 outline-none resize-none"
                      />
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={saveEdit}
                          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-dream-600 text-white hover:bg-dream-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-800"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="rounded-2xl border border-stone-200/80 bg-white/95 backdrop-blur p-4 pr-24 shadow-sm hover:shadow-md hover:border-dream-200/60 transition-all duration-200"
                    >
                      <p className="text-sm text-stone-800 leading-relaxed pr-2">
                        {topic.text}
                      </p>
                      <div className="absolute top-3 right-3 flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => copyToClipboard(topic)}
                          title="Copy to clipboard"
                          className="p-2 rounded-lg text-stone-400 hover:text-dream-600 hover:bg-dream-50 transition-colors"
                        >
                          {copiedId === topic.id ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                        <button
                          onClick={() => startEdit(topic.id, topic.text)}
                          title="Edit"
                          className="p-2 rounded-lg text-stone-400 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => removeTopic(topic.id)}
                          title="Remove"
                          className="p-2 rounded-lg text-stone-400 hover:text-rose-500 hover:bg-rose-50 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {topics.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center text-xs text-stone-400"
          >
            Topics are saved locally in your browser. Hover a card to copy or edit.
          </motion.p>
        )}
      </section>
    </main>
  );
}
