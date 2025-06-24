"use client"

import { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTop = () => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2000) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 ${showButton ? "right-8" : "-right-10"} p-3 rounded bg-secondary-background shadow-md cursor-pointer transition-all`}
            aria-label="Scroll to top"
        >
            <FaLongArrowAltUp/>
        </button>
    );
}

export default ScrollToTop