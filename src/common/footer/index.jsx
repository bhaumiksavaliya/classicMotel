import React from "react";
import "./footer.scss";
import Svgimgone from "../../assets/icons/white-facebook.svg";
import Svgimgtwo from "../../assets/icons/white-insta.svg";
import Svgimgthree from "../../assets/icons/white-message.svg";
import Svgimgfoure from "../../assets/icons/white-twitter.svg";
import Svgimgfive from "../../assets/icons/linkdin.svg";
import Svgimgsix from "../../assets/icons/phone-svgrepo-com (1).svg";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer>
            <div className="footer-color">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-addresh">
                            <h2>CLASIC MOTEL</h2>
                            <p>
                                Founded in 1998, Motel Resort is located on the
                                hills of Zermatt, immersing you in the wonder of
                                the Swiss Alps against the pure sky. Welcome to
                                Clasicic Motel, Zermatt.
                            </p>
                            <div className="social-icons social-icons-close">
                                <img src={Svgimgone} alt="facebook" />
                                <img src={Svgimgtwo} alt="insta" />
                                <img src={Svgimgthree} alt="message" />
                                <img src={Svgimgfoure} alt="twitter" />
                                <img src={Svgimgfive} alt="linkdin" />
                            </div>
                        </div>
                        <div className="footer-details">
                            <div className="footer-sub-detail footer-sub-detail-right">
                                <h3>About Us</h3>
                                {/* <Link>Our Story</Link> */}
                                <Link to="/enquiry">Contact Us</Link>
                                {/* <Link>Premium Services</Link> */}
                                {/* <Link>Careear</Link> */}
                                <Link to="/blog">Blog</Link>
                            </div>
                            <div className="footer-sub-detail ">
                                <h3>Experiences</h3>
                                <Link to="/food">Food</Link>
                                <Link to="/spa">Spa & Wellness</Link>
                                <Link to="/gym">Gym & Yoga</Link>
                                {/* <Link >Careear</Link>
                                <Link >Blog</Link> */}
                            </div>
                            <div className="reachout footer-sub-detail-right">
                                <h3>Reach Out</h3>
                                <div className="reachout-detail">
                                    <svg
                                        width="10"
                                        height="13"
                                        viewBox="0 0 10 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.0856 1.90463C7.44284 1.29673 6.63583 0.890809 5.76458 0.737159C4.89333 0.583508 3.99614 0.688886 3.18421 1.04023C2.37228 1.39158 1.68128 1.97345 1.19687 2.71373C0.712447 3.45402 0.455898 4.32017 0.459012 5.20486C0.459012 7.82563 2.73312 10.5157 4.08511 11.8816C4.2009 12.002 4.3398 12.0977 4.49349 12.1631C4.64717 12.2285 4.81248 12.2623 4.9795 12.2623C5.14653 12.2623 5.31183 12.2285 5.46551 12.1631C5.6192 12.0977 5.7581 12.002 5.87389 11.8816C7.26055 10.4949 9.49999 7.82563 9.49999 5.20486C9.50093 4.58751 9.37599 3.97646 9.13281 3.40902C8.88962 2.84159 8.5333 2.3297 8.0856 1.90463ZM5.0003 6.93124C4.65856 6.93262 4.32411 6.83253 4.03929 6.64367C3.75448 6.45481 3.53213 6.18567 3.4004 5.87034C3.26867 5.555 3.23349 5.20767 3.29932 4.87233C3.36514 4.53699 3.52902 4.22873 3.77018 3.9866C4.01134 3.74446 4.31894 3.57935 4.65401 3.51217C4.98908 3.445 5.33656 3.47878 5.65241 3.60924C5.96827 3.7397 6.23831 3.96097 6.42831 4.24502C6.61832 4.52907 6.71975 4.86312 6.71975 5.20486C6.71975 5.66153 6.53882 6.09959 6.21656 6.42315C5.8943 6.74671 5.45696 6.92941 5.0003 6.93124Z"
                                            fill="#7C8593"
                                        />
                                    </svg>
                                    <p>Surat,Gujrat</p>
                                </div>
                                <div className="reachout-detail">
                                    <img src={Svgimgthree} alt="phone" />
                                    <p
                                        onClick={() =>
                                            (window.location.href =
                                                "mailto:information@motel.com")
                                        }
                                    >
                                        information@motel.com
                                    </p>
                                </div>
                                <div className="reachout-detail">
                                    <img src={Svgimgsix} alt="phone" />
                                    <p
                                        onClick={() =>
                                            (window.location.href =
                                                "tel:+91 98987 77 666")
                                        }
                                    >
                                        +91 98987 77 666
                                    </p>
                                </div>
                                <div className="direction">
                                    <button>
                                        Get Direction
                                        <div className="border"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-footer-color">
                <div className="container">
                    <div className="sub-footer">
                        <div className="copy-right">
                            <p>© Copyright Motel for Booking.</p>
                        </div>
                        <div className="policy">
                            <p>PRIVACY</p>
                            <p>TERMS OF USE</p>
                            <p>POLICY</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
