import "./address.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserDetails } from "../../contexts";

export const Address = () => {
    const navigate = useNavigate();
    const { userDetailsDispatch } = useUserDetails();
    const [ addDetails, setAddDetails ] = useState({
        fullName: "",
        mobileNo: "",
        flatNo: "",
        area: "",
        town: "",
        pinCode: "",
        state: "",
        country: ""
    });

    const {
        fullName,
        mobileNo,
        flatNo,
        area,
        town,
        pinCode,
        state,
        country
    } = addDetails;

    const updateAddDetailsFunction = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setAddDetails({ ...addDetails, [name]: value });
    }

    const currAddHandler = (event) => {
        event.preventDefault();

        if ( 
            !fullName ||
            !mobileNo ||
            !flatNo ||
            !area ||
            !town ||
            !pinCode ||
            !state ||
            !country
        ) {
            toast.warning("Please fill all the details.");
            return;
        }

        userDetailsDispatch({ type: "SET_CURRENT_ADDRESS", payload: addDetails });
        navigate("/checkout");
    }

    const continueWtDummyAddFunction = () => {
        userDetailsDispatch({ 
            type: "SET_CURRENT_ADDRESS", 
            payload: {
                fullName: "Harry Potter",
                mobileNo: "987654321",
                flatNo: "No. 4",
                area: "Private Drive",
                town: "Surrey",
                pinCode: "123456",
                state: "Maharashtra",
                country: "India"
            } });
        navigate("/checkout");
    }

    return(
        <div className="main-wrapper">
            <div className="main-container container-fit address-container">
            
                <div className="main-header flex-row flex_justify-start">
                    <p className="address-txt">
                        Enter your delivery details:
                    </p>
                </div>

                <form className="auth-form flex-col">
                    <label
                        className="flex-col"
                        htmlFor="fullName"
                    >
                        <span className="auth-label-txt">Full name:</span> 
                        <input 
                            id="fullName"
                            className="auth-inp"
                            name="fullName"
                            type="text"
                            required
                            onChange={updateAddDetailsFunction}
                            value={fullName}
                        />
                    </label>
                    <label
                        className="flex-col"
                        htmlFor="mobileNo"
                    >
                        <span className="auth-label-txt">Mobile number:</span> 
                        <input 
                            id="mobileNo"
                            className="auth-inp"
                            name="mobileNo"
                            type="text"
                            required
                            onChange={updateAddDetailsFunction}
                            value={mobileNo}
                        />
                    </label>
                    <label
                        className="flex-col"
                        htmlFor="flatNo"
                    >
                        <span className="auth-label-txt">Flat, House no., Building, Company, Apartment:</span>
                        <input 
                            id="flatNo"
                            className="auth-inp"
                            name="flatNo"
                            type="text"
                            required
                            onChange={updateAddDetailsFunction}
                            value={flatNo}
                        />
                    </label>
                    <label
                        className="flex-col"
                        htmlFor="area"
                    >
                        <span className="auth-label-txt">Area, Street, Sector, Village:</span>
                        <input 
                            id="area"
                            className="auth-inp"
                            name="area"
                            type="text"
                            required
                            onChange={updateAddDetailsFunction}
                            value={area}
                        />
                    </label>
                    <div className="address-row flex-row">
                        <label
                            className="flex-col"
                            htmlFor="town"
                        >
                            <span className="auth-label-txt">Town/City:</span>
                            <input 
                                id="town"
                                className="auth-inp"
                                name="town"
                                type="text"
                                required
                                onChange={updateAddDetailsFunction}
                                value={town}
                            />
                        </label>
                        <label
                            className="flex-col"
                            htmlFor="pinCode"
                        >
                            <span className="auth-label-txt">Pin code:</span> 
                            <input 
                                id="pinCode"
                                className="auth-inp"
                                name="pinCode"
                                type="text"
                                required
                                onChange={updateAddDetailsFunction}
                                value={pinCode}
                            />
                        </label>
                    </div>
                    <div className="address-row flex-row">
                        <label
                            className="flex-col"
                            htmlFor="state"
                        >
                            <span className="auth-label-txt">State:</span>
                            <input 
                                id="state"
                                className="auth-inp"
                                name="state"
                                type="text"
                                required
                                onChange={updateAddDetailsFunction}
                                value={state}
                            />
                        </label>
                        <label
                            className="flex-col"
                            htmlFor="country"
                        >
                            <span className="auth-label-txt">Country:</span>
                            <input 
                                id="country"
                                className="auth-inp"
                                name="country"
                                type="text"
                                required
                                onChange={updateAddDetailsFunction}
                                value={country}
                            />
                        </label>
                    </div>

                    <div className="form-btn-container flex-col">
                        <button
                            className="btn btn-primary btn-wt-icon btn-sq"
                            onClick={currAddHandler}
                        >
                            <span>Proceed to Payment</span>
                            <i className="fa-solid fa-angles-right"></i>
                        </button>
                        <button
                            className="btn btn-outline btn-sq"
                            onClick={continueWtDummyAddFunction}
                        >
                            Proceed with dummy address
                        </button>

                        <button 
                            className="add-back-link btn-link btn-wt-icon"
                            onClick={() => navigate(-1)}
                        >
                            <i className="fa-solid fa-angles-left"></i>
                            Back
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}