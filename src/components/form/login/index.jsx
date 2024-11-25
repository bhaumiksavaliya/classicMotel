import React, { useState } from "react";
import "../form.scss"
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Login() {
    const [login, setLogin] = useState({})
    const navigate = useNavigate();
    const handelchange = (e) => {
        const {name ,value} = e.target;
        setLogin({...login , [name]: value})
    }

    const handelSubmite = () => {
        const userList = JSON.parse(localStorage.getItem("user")) || [];
        const userfound = userList.find(
            (el) => el.email === login.email && el.password === login.password
        )
        if (userfound) {
            navigate("/")
            toast.success("Success fully Login",{
                style: {
                  border: '1px solid #b99d75',
                  padding: '16px',
                  color: '#b99d75',
                },
                iconTheme: {
                  primary: '#b99d75',
                  secondary: '#FFFAEE',
                },
              });
        }
        else{
            toast.error("User not found ",{
                style: {
                  border: '1px solid #b99d75',
                  padding: '16px',
                  color: '#b99d75',
                },
                iconTheme: {
                  primary: '#b99d75',
                  secondary: '#FFFAEE',
                },
              });
        }
    }
    return (
        <div className="signup">
            <div className="motel-info"></div>
            <div className="signup-form">
                <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={login.email}
                            onChange={handelchange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={login.password}
                            onChange={handelchange}
                        />
                    </div>
                    <button type="submit" className="submit-btn" onClick={handelSubmite} >
                        Login
                    </button>
                    <p>already have an account? <span><Link to="/signup" >Sign Up</Link></span></p>
            </div>
        </div>
    );
}

export default Login;
