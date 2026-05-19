import { useState } from "react";

function App() {
  const icons = [
    {
      title: "LinkedIn",
      icon: "/linkedin_black.png",
    },
    {
      title: "GitHub",
      icon: "/github_black.svg",
    },
    {
      title: "X",
      icon: "/x_black.png",
    },
    {
      title: "ChatGPT",
      icon: "/openai_black.svg",
    },
  ];

  const handleThemeChange = () => {
    const currentTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";

    document.documentElement.classList.toggle("dark");

    localStorage.setItem("theme", currentTheme)
  }

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-neutral-200 dark:bg-black">
      <div className="relative z-10 flex h-100 w-80 flex-col items-center rounded-xl border bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700  shadow-2xl">
        <div className="relative mask-r-from-50% mask-l-from-50%">
          <div className="animate-marquee flex items-center justify-center gap-4 py-20">
            {icons.map((icon, index) => (
              <div
                key={icon.title}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-50"
              >
                <img
                  src={icon.icon}
                  alt={icon.title}
                  className="h-7 w-7 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-center text-lg font-bold text-neutral-900 dark:text-neutral-50">
          What I did today?
        </h2>
        <p className="text-md mt-5 max-w-70 text-center font-semibold text-neutral-900 dark:text-neutral-50">
          Spend half of my day in revising animations and applying dark mode.
        </p>
      <button onClick={handleThemeChange} className="px-4 py-1 rounded-xl bg-black dark:bg-neutral-50 text-[12px] font-bold mt-2 text-white dark:text-neutral-900 hover:px-5 hover:py-1.25 cursor-pointer transition-all duration-200 ease-in-out">Switch</button>
      </div>
    </div>
  );
}

export default App;
