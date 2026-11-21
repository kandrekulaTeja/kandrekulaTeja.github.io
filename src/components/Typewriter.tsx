"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(true);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const word = words[index];
    if (paused) {
      const t = setTimeout(() => setPaused(false), 1600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => {
        if (deleting) {
          if (text.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          } else {
            setText(word.slice(0, text.length - 1));
          }
        } else {
          if (text === word) {
            setDeleting(true);
            setPaused(true);
          } else {
            setText(word.slice(0, text.length + 1));
          }
        }
      },
      deleting ? 45 : 90,
    );
    return () => clearTimeout(t);
  }, [text, deleting, paused, index, words]);

  return (
    <span
      className="inline-block text-accent"
      style={{ minWidth: `${Math.max(...words.map((w) => w.length)) * 0.62}em` }}
    >
      {text}
      <span className="caret ml-0.5 inline-block w-[3px] -mb-1 h-[0.9em] bg-accent align-baseline" aria-hidden />
    </span>
  );
}
