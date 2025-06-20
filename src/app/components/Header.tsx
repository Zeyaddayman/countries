import Link from "next/link"
import ThemesSwitcher from "./ThemesSwitcher"

const Header = () => {
    return (
        <header className="py-8 bg-secondary-background shadow-md">
            <div className="container flex justify-between items-center">
                <Link href={"/"} className="heading">
                    Where in the world?
                </Link>
                <ThemesSwitcher />
            </div>
        </header>
    )
}

export default Header