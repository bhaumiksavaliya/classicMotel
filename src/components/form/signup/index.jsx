import React, { useState } from "react";
import "../form.scss"; // Import the SCSS file
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function SignUpForm() {
    const [user, setUser] = useState({ fullname: "", email: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const toastdesign = {
        style: {
          border: '1px solid #b99d75',
          padding: '16px',
          color: '#b99d75',
        },
        iconTheme: {
          primary: '#b99d75',
          secondary: '#FFFAEE',
        },
      }

    const navigate = useNavigate()
    const formValid = () => {
        let isValid = true;

        if (user.fullname === "" || user.email === "" || user.password === "") {
            toast.error("All fields is required",toastdesign);
            isValid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        if (user.email === "") {
            // toast.error("Email is required");
            isValid = false;
        } else if (!emailRegex.test(user.email)) {
            toast.error("Invalid email format",toastdesign);
            isValid = false;
        }

        if (user.password === "") {
            // toast.error("Password is required");
            isValid = false;
        } else if (user.password.length < 8) {
            toast.error("Password required 8 characters long",toastdesign);
            isValid = false;
        }

        return isValid;
    };

    

    const handleSubmit = () => {
        if (formValid()) {
            const userList = JSON.parse(localStorage.getItem("user")) || [];

            if (
                userList.find(
                    (el) =>
                        el.email === user.email 
                )
            ) {
                toast.error("email is alredy exist",toastdesign);
                } else {
                    userList.push({ ...user });
                    localStorage.setItem("user", JSON.stringify(userList));
                    setUser({
                        fullname: "",
                        password: "",
                        email: "",
                    });
                    toast.success("Successfully registered",toastdesign); 
                navigate("/login");
            }
        }
    };

    return (
        <div className="signup">
            <div className="motel-info"></div>
            <div className="signup-form">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Enter your Fullname"
                        value={user.fullname}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="submit-btn"
                    onClick={handleSubmit}
                >
                    Sign Up
                </button>
                <p>
                    already have an account?{" "}
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default SignUpForm;
