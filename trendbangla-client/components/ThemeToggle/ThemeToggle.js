"use client";
export default function ThemeToggle() {
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    console.log("Theme changed to:", theme);
  };
  return (
    <div className="flex gap-2">
      <button className="btn cursor-pointer" onClick={() => setTheme("light")}>
        Light
      </button>
      <button className="btn cursor-pointer" onClick={() => setTheme("dark")}>
        Dark
      </button>
    </div>
  );
}
