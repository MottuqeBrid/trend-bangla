"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      const isThemeDark = savedTheme === "dark";
      setIsDark(isThemeDark);
      setTheme(savedTheme);
    } else {
      // Use system preference as default
      const defaultTheme = systemPrefersDark ? "dark" : "light";
      setIsDark(systemPrefersDark);
      setTheme(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    console.log("Theme changed to:", theme);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="toggle toggle-primary"
        checked={isDark}
        onChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <div className="ml-2 flex items-center">
        {isDark ? (
          <FiMoon className="h-4 w-4 text-base-content" />
        ) : (
          <FiSun className="h-4 w-4 text-base-content" />
        )}
      </div>
    </div>
  );
}
