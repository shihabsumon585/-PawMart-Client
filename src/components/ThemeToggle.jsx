import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    console.log(theme);
    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
        >
            {theme === "light" ? "Dark" : "Light"}
        </button>
    );
}
