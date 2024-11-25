import React from "react";
import "./outerview.scss";
export default function Outerview(){
    return(
        <div className="outerview">
            <div className="container">
                <div className="outerview-grid">
                    <div className="outerview-first-grid">
                        
                    </div>
                    <div className="outerview-second-grid">
                        <div className="outerview-second-grid-padding">
                            <div className="outerview-second-grid-color">
                                <div className="outerview-second-grid-items">
                                    <p>WELCOME TO MOTEl RESORT</p>
                                    <h1>In the Heart of Banff Park, Outstanding Views</h1>
                                    <div className="outerview-second-grid-items-btn">
                                        <button>
                                            Explore the hotel
                                            <div className="border"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="outerview-third-grid">

                    </div>
                </div>
            </div>
        </div>
    )
}