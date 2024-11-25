import React, { useEffect } from "react";
import "./Fooddetail.scss";
import categoryApi from "../../../../categoryApi/categoryApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from "react-hot-toast";
import CardIcon from "../cardicon";

export default function FoodDetail() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const getdata = JSON.parse(localStorage.getItem("foodindex"));

    const products = categoryApi[2].subPages[0].product;

    const data = products.filter((item) => item.objectId === getdata);
    const navigate = useNavigate(); 

    const handelGoBack = () => {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        navigate(-1);
        if (scrollPosition) {
            setTimeout(() => {
                window.scrollTo(0, parseInt(scrollPosition, 10));
            }, 0); // Restore scroll position after navigation
        }
    };

    const toastdesign = {
        style: {
            border: "1px solid #b99d75",
            padding: "16px",
            color: "#b99d75",
        },
        iconTheme: {
            primary: "#b99d75",
            secondary: "#FFFAEE",
        },
    };

    const handelAddToCart = (id) => {
        const cartData = JSON.parse(localStorage.getItem("CartData")) || [];

        if (cartData.find((el) => el === id)) {
            toast.error("Item already in cart", toastdesign);
        } else {
            cartData.push(id);
            localStorage.setItem("CartData", JSON.stringify(cartData));
            toast.success("Success Fully Add", toastdesign);
        }
    };

    return (
        <div className="food-detail">
            <div className="container">
                <div className="food-detail-back" onClick={handelGoBack}>
                    <button>
                        <IoMdArrowRoundBack className="back-icon" />
                    </button>
                </div>
                <div className="food-detail-grid">
                    {data.map((item, i) => (
                        <>
                            <div className="food-detail-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="food-detail-info">
                                <h5>{item.Foodname}</h5>
                                <p className="price">
                                    <span>Price:</span>
                                    {item.price}
                                </p>
                                <div className="food-detail-other-info">
                                    <ul>
                                        <li><span>Type : </span> {item.details[0].type}</li>
                                        <li><span>Origin : </span>{item.details[1].country}</li>
                                    </ul>
                                </div>
                                <div className="food-detail-description">
                                    <ul>
                                        <li> <span>Description : </span><p>{item.description}</p></li>
                                    </ul>
                                </div>
                                <div className="food-detail-btn">
                                    <button
                                        onClick={() =>
                                            handelAddToCart(item.objectId)
                                        }
                                    >
                                        {item.btn}
                                    </button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <CardIcon />
        </div>
    );
}
