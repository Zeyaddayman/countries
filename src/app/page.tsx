import Filters from "./components/Filters";

export default async function Home() {
    return (
        <main className="py-10">
            <div className="container">
                <Filters />
            </div>
        </main>
    )
}