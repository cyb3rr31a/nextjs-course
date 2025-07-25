"use client";

import { useEffect, useState } from "react";

export const metadata = {
    title: 'Theme Toggle',
    description: 'Dark/Light mode'
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = saved || systemPref;

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <button
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
        className="text-2xl p-2 rounded-full transition-colors duration-300 hover:text-[var(--background)]"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}