import "./home.css";
import { DiscountDisplay, GenreDisplay, Hero } from "../../components";

export const Home = () => {
    return(
        <div className="home-wrapper">
            <Hero />
            <GenreDisplay />
            <DiscountDisplay />
        </div>
    );
}