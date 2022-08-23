import "./product-card-hr.css";

export const ProductCardHr = ({ inCart, inWishlist }) => {
    return(
        <div className="card-hr-wrapper">
            <div className="card-hr-container flex-row">
                <img
                    className="card-img image-100pr" 
                    src="https://m.media-amazon.com/images/I/5179mrE+WWL.jpg" 
                />

                <div className="flex-col flex_justify-sb">
                    <div>
                        <h2>Elon Musk</h2>
                        <p>Ashley Vancee</p>
                        <p className="txt-bold txt-sm">Paperback</p>
                    </div>

                    <p className="price-container flex-row flex_align-middle">
                        <span className="price">₹150</span> 
                        <span className="off-price txt-gray txt-linethrough">₹599</span> 
                        <span className="off-price txt-green">74% off</span>
                    </p>
                    
                    {
                        inCart &&
                        <div className="flex-row flex_align-middle">
                            <div className="qt-container flex-row flex_align-middle">
                                <button className="qt-btn txt-sm btn btn-primary flex flex_justify-center flex_align-middle">
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <span>5</span>
                                <button className="qt-btn txt-sm btn btn-primary flex flex_justify-center flex_align-middle">
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                            </div>

                            <button className="del-btn btn btn-link btn-wt-icon">
                                <i className="fa-solid fa-trash"></i>
                                <span>Delete</span>
                            </button>  
                        </div>  
                    }

                    {
                        inWishlist &&
                        <button className="cart-btn btn btn-primary btn-wt-icon btn-sq">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="">Add to Cart</span>
                        </button>  
                    }
                </div>

                {
                    inCart &&
                    <button className="wl-btn btn btn-outline btn-wt-icon btn-sq">
                        <i className="fa-solid fa-heart"></i>
                        <span className="">Move to Wishlist</span>
                    </button>  
                }

                {
                    inWishlist &&
                    <button className="del-btn-wl btn btn-link btn-wt-icon">
                        <i className="fa-solid fa-trash"></i>
                        <span>Delete</span>
                    </button>  
                }

            </div>
        </div>
    );
}