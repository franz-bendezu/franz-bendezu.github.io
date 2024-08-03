import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-8 w-8 rounded p-1"
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark",
        )
      }
    >
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <SunIcon className="text-yellow-500" />
      ) : (
        <MoonIcon className="text-gray-900" />
      )}
    </button>
  );
};

export default ThemeSwitch;
