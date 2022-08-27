import "./auth.css";
import { Link } from "react-router-dom";
import { PasswordInput } from "../../components";


export const Signup = () => {
    return(
        <div className="auth-wrapper">
            <div className="auth-container">
        <       div className="prod-list-header flex-row flex_justify-center">
                    <h1 className="product_heading txt-underline">Sign Up</h1>
                </div>

                <form className="auth-form flex-col">
                    <label
                        className="flex-col"
                        htmlFor="firstName"
                    >
                        <span className="auth-label-txt">First Name:</span> 
                        <input 
                            id="firstName"
                            className="auth-inp"
                            name="firstName"
                            type="text"
                            placeholder="Jane"
                            required
                            // onChange={updateUserDetails}
                            // value={firstName}
                        />
                    </label>
                    <label
                        className="flex-col"
                        htmlFor="lastName"
                    >
                        <span className="auth-label-txt">Last Name:</span>
                        <input 
                            id="lastName"
                            className="auth-inp"
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                            required
                            // onChange={updateUserDetails}
                            // value={lastName}
                        />
                    </label>
                    <label
                        className="flex-col"
                        htmlFor="email"
                    >
                        <span className="auth-label-txt">Email:</span> 
                        <input 
                            id="email"
                            className="auth-inp"
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            required
                            // onChange={updateUserDetails}
                            // value={email}
                        />
                    </label>
                    <label
                        className="flex-col"
                        htmlFor="newPassword"
                    >
                        <span className="auth-label-txt">New Password:</span>
                        <PasswordInput 
                            id={"newPassword"}
                            name={"password"}
                            placeholder={"Minimum 6 charachters"}
                            // onChange={updateUserDetails}
                            // value={password}
                        />
                    </label>
                    {/* {
                        password.length !== 0 && 
                        password.length < 6 &&
                        <div className="warning">
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <p>Password should have atleast 6 characters</p>
                        </div>
                    } */}
                    <label
                        className="flex-col"
                        htmlFor="confirmPassword"
                    >
                        <span className="auth-label-txt">Confirm Password:</span>
                        <PasswordInput 
                            id={"confirmPassword"}
                            name={"confirmPassword"}
                            placeholder={"Re-enter password"}
                            // onChange={updateUserDetails}
                            // value={confirmPassword}
                        />
                    </label>
                    {/* {
                        confirmPassword.length > 0 &&
                        password !== confirmPassword &&
                        <div className="warning">
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <p>Passwords do not match.</p>
                        </div>
                    } */}
                    <div className="form-btn-container flex-col">
                        <button
                            className="btn btn-primary btn-wt-icon btn-sq"
                            // onClick={signupHandler}
                        >
                            <span>Continue</span>
                            <i className="fa-solid fa-angles-right"></i>
                        </button>
                    </div>
                </form>

                <p className="alt-auth-cta flex-row flex_justify-center">
                    <span>Already an user?</span> 
                    <Link 
                        to="/login" 
                        className="btn-link link-noDecoration"
                    >
                        Login
                    </Link> 
                    <span>to your account</span>
                    </p>
            </div>
        </div>
    );
}