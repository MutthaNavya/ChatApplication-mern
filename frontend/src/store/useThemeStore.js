import { create } from "zustand";

export const useThemeStore = create((set) => {
  // Check for a saved theme in localStorage
  const savedTheme = localStorage.getItem("theme") || "dark";

  // Apply the saved theme on load
  document.documentElement.setAttribute("data-theme", savedTheme);

  return {
    theme: savedTheme,
    setTheme: (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme); // persist the theme
      set({ theme });
    },
  };
});
