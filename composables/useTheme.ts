import { ref, watchEffect } from "vue";

export function useTheme() {
  const theme = ref<"light" | "dark">("light");

  // Load saved theme from localStorage
  if (process.client) {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") theme.value = saved;
  }

  // Apply theme to <html> and save preference
  watchEffect(() => {
    if (process.client) {
      document.documentElement.classList.toggle("dark", theme.value === "dark");
      localStorage.setItem("theme", theme.value);
    }
  });

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  return { theme, toggleTheme };
}