"use client"

import { useTheme } from "next-themes";
import { IoMoonOutline } from "react-icons/io5";

const ThemesSwitcher = () => {

    const { setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme((prev) => prev === "dark" ? "light" : "dark")
    }

    return (
        <button onClick={toggleTheme} className="px-3 py-2 md:px-6 md:py-4 flex items-center gap-2 cursor-pointer hover:bg-primary-background rounded">
            <IoMoonOutline />
            Dark Mode
        </button>
    )
}

export default ThemesSwitcher