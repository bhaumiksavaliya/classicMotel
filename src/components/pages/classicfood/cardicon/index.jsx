import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import "./cardicon.scss";
import { Link } from "react-router-dom";

export default function CardIcon() {
    const [count, setCount] = useState(() => {
        const cartData = localStorage.getItem("CartData");
        return cartData ? JSON.parse(cartData).length : 0;
    });
    
    useEffect(() => {
        const handleStorageChange = () => {
            const cartData = localStorage.getItem("CartData");
            setCount(cartData ? JSON.parse(cartData).length : 0);
        };

        // Check for changes every 100ms
        const intervalId = setInterval(handleStorageChange, 100);

        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <div className="cardicon">
            <Link to="/cart">
                <IoCartOutline className="icon" />
                <div className="cart-count">{count}</div>
            </Link>
        </div>
    );
}
