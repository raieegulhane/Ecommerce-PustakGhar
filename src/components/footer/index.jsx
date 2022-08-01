import "./footer.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/pg-logo-main.svg";

export const Footer = () => {
    return(
        <footer className="footer flex-col flex_align-middle">
            <Link to="./home">
                <img src={Logo} alt="pustakghar logo" />
            </Link>
            
            <div class="foot-copy flex-col flex_align-middle">
                <p>Made with &lt;/&gt; by Raiee</p>
                <p>&copy; 2022, PustakGhar</p>
                <div className="container-social flex-row">
                    <a 
                        className="btn-icon link-noDecoration" 
                        href="https://twitter.com/RaieeGulhane"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a 
                        className="btn-icon link-noDecoration" 
                        href="https://github.com/raieegulhane"
                    >
                        <i className="fa-brands fa-github-alt"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}