"use client"

import { ThemeProvider as Provider } from "next-themes"
import { ReactNode } from "react"

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider attribute={"class"} enableSystem defaultTheme="system">{children}</Provider>
    )
}

export default ThemeProvider