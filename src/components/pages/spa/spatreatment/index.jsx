import React from "react";
import "./spatreatment.scss";

export default function SpaTreatment() {
    return (
        <div className="container">
            <div className="spa-treatment">
                <div className="spa-treatment-content">
                    <span >
                        SPA & WELLNESS
                    </span>
                    <h1 >Spa Treatment</h1>
                    <p>
                        Body Care, Facial Treatment, Hand & Foot Care, Day Spa.
                    </p>
                    <div className="spa-treatment-pricing">
                        <p>50 minutes | 180 USD</p>
                        <p>1h 20 minutes | 250 USD</p>
                    </div>
                    <div className="spa-treatment-btn">
                        <button>
                            Make An Appointment <div className="border"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
