import "./home.css";
import { DiscountDisplay, GenreDisplay, Hero } from "../../components";

export const Home = () => {
    return(
        <div>
            <Hero />
            <GenreDisplay />
            <DiscountDisplay />
        </div>
    );
}