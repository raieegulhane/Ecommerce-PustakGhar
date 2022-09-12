import "./checkout.css";
import { Link } from "react-router-dom";
import { useUserDetails } from "../../contexts";
import { CartPriceDetails, CheckoutHrCardListing } from "../../components";

export const Checkout = () => {
    const { userDetailsState: { currentAddress }} = useUserDetails();
    const { 
        fullName,
        mobileNo,
        flatNo,
        area,
        town,
        pinCode,
        state,
        country
    } = currentAddress;

    return(
        <div className="main-wrapper">
            <div className="cart-container grid grid-21layout">
                <div className="main-container co-container">
                    <div className="main-header flex-row flex_justify-center">
                        <h1 className="main-heading txt-underline">Checkout</h1>
                    </div>
                    <div className="co-add-container flex-col">
                        <h2 className="co-heading">Shipping Address</h2>
                        <div>
                            <p className="txt-bold">{fullName}</p>
                            <p>{flatNo},</p>
                            <p>{area}</p>
                            <p>{town}, {state} - {pinCode}</p>
                            <p>{country}</p>
                            <p className="txt-bold">Contact no.: {mobileNo}</p>
                        </div>
                    </div>
                    <div className="co-items">
                        <h2 className="co-item-heading co-heading">Order Summary</h2>
                        <CheckoutHrCardListing />
                    </div>
                </div>
                
                <div className="co-details flex-col">
                    
                    <CartPriceDetails 
                        inCart={false}
                        inCheckout={true}
                    />
                </div>
            </div>
        </div>
        // <div className="main-wrapper">
        //     <div className="cart-container grid grid-21layout">
        //         <div className="co-container main-container">
                    
        //         </div>
        //         <div className="co-det-wrapper">
        //             <div className="co-det-container flex-col">
                      

        //                 <CartPriceDetails 
        //                     inCart={false}
        //                     inCheckout={true}
        //                 />
        //             </div>
                    
                    

                    
        //         </div>
        //     </div>
        // </div>
    );
}