import "./checkout.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart, useUserDetails } from "../../contexts";
import { CartPriceDetails, CheckoutHrCardListing } from "../../components";
import { getCartPricingDetails, scriptLoader } from "../../utility-functions";
import { clearCartService } from "../../services";
import Logo from "../../assets/logos/pg-favicon-main.svg";

export const Checkout = () => {
    const navigate = useNavigate();
    const { authState: { authToken, userData } } = useAuth();
    const { firstName, lastName, email } = userData;
    const { cartState: { cart }, cartDispatch } = useCart();
    const { userDetailsState: { currentAddress } } = useUserDetails();
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
    const { cartTotal } = getCartPricingDetails(cart);

    const paymentHandler = async () => {
        const response = await scriptLoader("https://checkout.razorpay.com/v1/checkout.js");
        if (!response) {
            toast.error("Error occured while loading payment gateway. Please try again.");
            return;
        }

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID,
            amount: cartTotal * 100,
            currency: "INR",
            name: "PustakGhar",
            description: "Thankyou for shopping with us!",
            image: Logo,

            handler: async (response) => {
                const paymentId = response.razorpay_payment_id;
                try {
                    const {data: { cart }} = await clearCartService(authToken);
                    cartDispatch({ type: "SET_CART", payload: cart });
                } catch (error) {
                    console.log("ERROR__CLEAR_CART: ", error);
                }
                toast.success("Payment successful");
                navigate("/order-confirmation");
            },

            modal: {
                onDismiss: () => {
                    toast.info("Transaction was not completed.")
                }
            },

            prefill: {
                name: `${firstName} ${lastName}`,
                email: email,
                contact: "987654321"
            },

            theme: { color: "#000000"}
        }
        
        const paymentModal = new window.Razorpay(options);
		paymentModal.open();
        paymentModal.on(() => {
            toast.error("Payment failed.")
        });
    }

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
                        paymentHandler={paymentHandler}
                    />
                </div>
            </div>
        </div>
    );
}