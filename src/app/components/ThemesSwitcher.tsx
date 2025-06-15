"use client"

import { useTheme } from "next-themes";

const ThemesSwitcher = () => {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme((prev) => prev === "dark" ? "light" : "dark")
    }

    return (
        <div>
            {theme === "light" ? (
                <p onClick={toggleTheme} className='bg-element-bg'>Enable Dark Mode</p>
            ): (
                <p onClick={toggleTheme} className='bg-element-bg'>Enable Light Mode</p>
            )}
        </div>
    )
}

export default ThemesSwitcher