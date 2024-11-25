import React from "react";
import "./gymother.scss";
export default function GymOther() {
    return (
        <div className="container">
            <div className="gym-other">
                <div className="gym-other-row">
                    <div className="gym-treatment gym-treatment-bg-one">
                        <div className="gym-treatment-content ">
                            <span>GYM & WELLNESS</span>
                            <h5>Infinite Pool</h5>
                            <p>
                                Body Care, Facial Treatment, Hand & Foot Care,
                                Day Spa.
                            </p>
                            <div className="gym-treatment-pricing">
                                <p>50 minutes | 180 USD</p>
                                <p>1h 20 minutes | 250 USD</p>
                            </div>
                        </div>
                    </div>
                    <div className="gym-treatment gym-treatment-bg-two">
                        <div className="gym-treatment-content ">
                            <span>GYM & WELLNESS</span>
                            <h5>Sauna Area at The Spa</h5>
                            <p>Opening Hours: 10:00 until 19:00</p>
                        </div>
                    </div>
                </div>
                <div className="gym-other-row">
                    <div className="gym-treatment gym-treatment-bg-three">
                        <div className="gym-treatment-content ">
                            <span>GYM & WELLNESS</span>
                            <h5>Day Spa</h5>
                            <p>
                                Body Care, Facial Treatment, Hand & Foot Care,
                                Day Spa.
                            </p>
                            <div className="gym-treatment-pricing">
                                <p>50 minutes | 180 USD</p>
                                <p>1h 20 minutes | 250 USD</p>
                            </div>
                            <div className="gym-treatment-btn">
                                <button>
                                    Make An Appointment{" "}
                                    <div className="border"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="gym-treatment gym-treatment-bg-four">
                        <div className="gym-treatment-content ">
                            <span>GYM & WELLNESS</span>
                            <h5>Fitness Center</h5>
                            <p>
                                24-hour gym with cardiovascular equipment and
                                free weights. Opening Hours: 7:00 until 20:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
