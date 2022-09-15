import "./hero.css";
import { NavLink } from "react-router-dom";
import HeroBackdropImg from "../../assets/images/hero-bg.svg";

export const Hero = () => {
    return(
        <div className="hero-wrapper">
            <img 
                src={HeroBackdropImg} 
                alt="girl-rading-a-book-hero" 
                className="hero-img img-100pr"
            />
            <section className="hero-cta flex-col flex_align-middle">
                <p className="hero-txt">Find your book,</p>
                <p className="hero-txt">and loose yourself.</p>
                <NavLink 
                    to="/bookstore"
                    className="btn btn-primary btn-sq hero-cta-btn link-noDecoration"
                >
                    Visit Bookstore
                </NavLink>
            </section>
        </div>
    );
}