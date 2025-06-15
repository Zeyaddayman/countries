import ThemesSwitcher from "./ThemesSwitcher"

const Header = () => {
    return (
        <header className="py-8 bg-element-bg">
            <div className="container flex justify-between items-center">
                <h2 className="heading">
                    Where in the world?
                </h2>
                <ThemesSwitcher />
            </div>
        </header>
    )
}

export default Header