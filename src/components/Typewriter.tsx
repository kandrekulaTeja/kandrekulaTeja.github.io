"use client";

import { useEffect, useState } from "react";

type Props = {
  prefix: string;
  words: string[];
  suffix: string;
};

export default function Typewriter({ prefix, words, suffix }: Props) {
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
        } else if (text === word) {
          setDeleting(true);
          setPaused(true);
        } else {
          setText(word.slice(0, text.length + 1));
        }
      },
      deleting ? 45 : 90,
    );
    return () => clearTimeout(t);
  }, [text, deleting, paused, index, words]);

  // Width of the longest word, so the suffix never moves.
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="block">
      <span className="block">{prefix}</span>
      <span className="flex flex-wrap items-baseline gap-x-3">
        <span className="relative inline-block whitespace-nowrap text-accent">
          {/* invisible copy of the longest word reserves the space */}
          <span className="invisible" aria-hidden>
            {longest}
          </span>
          <span className="absolute inset-y-0 left-0">
            {text}
            <span
              className="caret ml-0.5 inline-block h-[0.9em] w-[3px] -mb-1 bg-accent align-baseline"
              aria-hidden
            />
          </span>
        </span>
        {suffix && <span>{suffix}</span>}
      </span>
    </span>
  );
}
