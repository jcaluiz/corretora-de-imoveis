import FiltersSearch from "./components/FiltersSearch";
import PropertiesRender from "./components/PropertiesRender";

export default function HomePage() {
    return (
        <main className="flex flex-col">
            <FiltersSearch />
            <PropertiesRender />
        </main>
    )
}