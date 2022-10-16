import "./genre-display.css";
import { Link, useNavigate } from "react-router-dom";
import { genreDisplayList } from "./genre-list";
import { useFilter } from "../../contexts";

export const GenreDisplay = () => {
    const navigate = useNavigate();
    const { filterDispatch } = useFilter();

    const genreOnClickHandler = (event, filterAction) => {
        event.preventDefault();

        filterDispatch({ type: filterAction });
        navigate("/bookstore");
    }

    return(
        <div className="genre-wrapper flex-col flex_align-middle">
            <h1 className="genre-heading">Genre</h1>

            <section className="genre-container flex-row flex_justify-sa flex_align-middle">
                {
                    genreDisplayList.map(({ 
                        _id, 
                        genreName, 
                        genreImg, 
                        alt, 
                        actionType 
                    }) => {
                        return(
                            <div 
                                key={_id}
                                className="flex-col flex_align-middle"
                            >
                                <button 
                                    className="home-genre-btn"
                                    onClick={(e) => genreOnClickHandler(e, actionType)}
                                >
                                    <img 
                                        className="genre-img img-100pr img-rd"
                                        src={genreImg} 
                                        alt={alt}
                                    />
                                </button>
                                <h4 
                                    className="home-genre-name"
                                >
                                    {genreName}
                                </h4>
                            </div>
                        );
                    })
                }
            </section>

            <Link 
                to="/bookstore"
                className="genre-btn btn btn-wt-icon btn-outline btn-sq link-noDecoration"
            >
                <span>Discover all categories</span>
                <i className="fa-solid fa-angles-right"></i>
            </Link>
        </div>
    );
}

