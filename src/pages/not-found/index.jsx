import "./not-found.css"
import { Link } from "react-router-dom";

export const NotFound = () => {
    return(
        <div className="nf-404-wrapper">
            <div className="nf-404-container flex-col flex_align-middle">
                <i class="fa-solid fa-circle-exclamation icon-404-pri"></i>
                <div>
                    <div className="icons-404 flex-row">
                        <i className="fa-solid fa-4"></i>
                        <i className="fa-solid fa-0"></i>
                        <i className="fa-solid fa-4"></i>
                    </div>
                    <p className="txt-center txt-404">Page Not Found</p>
                </div>

                <Link
                    to={"/bookstore"}
                    className="btn-404 link-noDecoration btn btn-outline btn-sq btn-wt-icon"
                >
                    <span>Go to Bookstore</span>
                    <i className="fa-solid fa-book-open"></i>
                </Link>
            </div>
        </div>
    );
}