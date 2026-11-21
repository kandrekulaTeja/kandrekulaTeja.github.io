"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Wrench,
  FolderGit2,
  GraduationCap,
  Mountain,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { profile } from "@/data/profile";

const NAV = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "beyond", label: "Beyond Work", icon: Mountain },
  { id: "contact", label: "Contact", icon: Mail },
];

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

function ThemeToggle() {
  const toggle = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle light or dark theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:text-accent hover:border-accent"
    >
      <Moon size={16} className="dark:hidden" />
      <Sun size={16} className="hidden dark:block" />
    </button>
  );
}

function Monogram({ size = "lg" }: { size?: "lg" | "sm" }) {
  const box = size === "lg" ? "h-24 w-24 text-3xl" : "h-9 w-9 text-sm";
  return (
    <div
      className={`${box} grid place-items-center rounded-2xl border-2 border-ink font-extrabold tracking-tight`}
      aria-hidden
    >
      <span>
        S<span className="text-accent">K</span>
      </span>
    </div>
  );
}

export default function Sidebar() {
  const active = useActiveSection();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r-4 border-accent bg-sidebar lg:flex">
        <div className="flex flex-col items-center gap-3 px-6 pt-12 pb-10">
          <Monogram />
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-muted">
            {profile.name.split(" ").slice(0, 2).join(" ")}
          </p>
        </div>
        <nav className="flex-1 px-3">
          <ul className="space-y-1">
            {NAV.map(({ id, label, icon: Icon }) => {
              const on = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`flex items-center gap-3 rounded-lg border-l-2 px-4 py-2.5 text-[15px] transition ${
                      on
                        ? "border-accent bg-accent-soft font-semibold text-accent"
                        : "border-transparent text-muted hover:bg-accent-soft/60 hover:text-ink"
                    }`}
                  >
                    <Icon size={18} strokeWidth={on ? 2.25 : 1.75} />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center justify-between px-6 py-6">
          <span className="text-xs text-muted">Theme</span>
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <Monogram size="sm" />
            <span className="font-bold">{profile.shortName}</span>
          </a>
          <ThemeToggle />
        </div>
        <nav className="overflow-x-auto px-2 pb-2 [scrollbar-width:none]">
          <ul className="flex gap-1">
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block whitespace-nowrap rounded-full px-3 py-1.5 text-sm ${
                    active === id ? "bg-accent text-accent-ink font-semibold" : "text-muted"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
