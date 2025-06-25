import Link from "next/link";

export default function NotFound() {
    return (
        <div className="py-10 container text-center">
            <h1 className="font-bold text-4xl">404</h1>
            <h1 className="font-bold text-4xl my-5">Page Not Found</h1>
            <p className="text-secondary-text-color font-semibold mb-5">The page you are looking for does not exist.</p>
            <Link href="/" className="px-6 py-3 bg-secondary-background rounded shadow-md cursor-pointer">
                Go to Home
            </Link>
        </div>
    )
}