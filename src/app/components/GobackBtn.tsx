"use client"

import { useRouter } from "next/navigation"
import { FaLongArrowAltLeft } from "react-icons/fa"

const GobackBtn = () => {
    const { back } = useRouter()

    return (
        <button onClick={back} className="flex gap-3 items-center px-6 py-2 bg-secondary-background rounded shadow-md cursor-pointer">
            <FaLongArrowAltLeft /> Back
        </button>
    )
}

export default GobackBtn