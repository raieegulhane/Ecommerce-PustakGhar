import "./genre-display.css";
import { NavLink } from "react-router-dom";
import { genreDisplayList } from "./genre-list";

export const GenreDisplay = () => {
    
    return(
        <div className="genre-wrapper flex-col flex_align-middle">
            <h1 className="genre-heading">Genre</h1>

            <section className="genre-container flex-row flex_justify-sa flex_align-middle">
                {
                    genreDisplayList.map(({ _id, genreName, genreImg, alt }) => {
                        return(
                            <div 
                                key={_id}
                                className="flex-col flex_align-middle"
                            >
                                <img 
                                    className="genre-img img-100pr img-rd"
                                    src={genreImg} 
                                    alt={alt}
                                />
                                <button 
                                    className="genre-name btn-link"
                                >
                                    {genreName}
                                </button>
                            </div>
                        );
                    })
                }
            </section>

            <NavLink 
                to="/bookstore"
                className="genre-btn btn btn-wt-icon btn-outline btn-sq link-noDecoration"
            >
                <span>Discover All Categories</span>
                <i className="fa-solid fa-angles-right"></i>
            </NavLink>
        </div>
    );
}

