import React from "react";
import "./blogdetail.scss";
import Ig1 from "../../../assets/images/blog/ig-1.jpg";
import Ig2 from "../../../assets/images/blog/ig-2.jpg";
import Ig3 from "../../../assets/images/blog/ig-3.jpg";
import Ig4 from "../../../assets/images/blog/ig-4.jpg";
import { FaRegPaperPlane } from "react-icons/fa6";

function BlogDetails() {
    return (
        <div className="container">
        <div className="blog-details-second">
            <h4>Stay tuned with Clasicmotel</h4>
            <div className="newsletter-section">
                <div>
                    <h2>
                        Sign up for our newsletter to receive our news, deals,
                        and special offers.
                    </h2>
                </div>
                <div className="newsletter-form">
                    <div className="newsletter-input">
                        <input type="email" placeholder="Your Email Address" />
                        <div className="subscribe-btn">
                            <button >
                                Subscribe<FaRegPaperPlane />
                            </button>
                        </div>
                    </div>
                    <div className="policy-agreement">
                        <input type="checkbox" id="privacy-policy" />
                        <label htmlFor="privacy-policy">
                            I agree to the Privacy Policy
                        </label>
                    </div>
                </div>
            </div>

            <div className="images-section">
                <img src={Ig1} alt="Image 1" />
                <img src={Ig2} alt="Image 2" />
                <img src={Ig3} alt="Image 3" />
                <img src={Ig4} alt="Image 4" />
            </div>
            <div className="subscribe-button">
                <button>
                    Subscribe
                </button>
            </div>
        </div>
        </div>
    );
}

export default BlogDetails;
