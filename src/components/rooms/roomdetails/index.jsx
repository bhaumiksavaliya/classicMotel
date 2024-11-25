import React from "react";
import "./roomdetails.scss";

export default function RoomDetails() {
    return (
        <div className="room-details">
            <div className="container">
                <div className="room-details-content">
                    <div className="welcome-text">WELCOME TO CLASSIC MOTEl</div>
                    <h1 className="main-title">
                        Enjoy Mountain Views from Our Lovely Private Chalets
                    </h1>
                    <p className="description">
                        Classic Motel offers a variety of lodging options for
                        groups of all sizes. Whether you're interested in
                        accommodation in a corporate or family resort, a
                        romantic room for two or a self- contained cabin
                        getaway, we've got the perfect accommodation for you.
                        Our team is dedicated to providing service and
                        accommodations that are as spectacular as the views.
                    </p>
                    <div className="button-group">
                        <button className="btn btn-outline" onClick={() => {
                            window.location.href = "#lodges";
                        }}> 
                            Chalets & Lodges
                        </button>
                        <button className="btn btn-outline" onClick={() => {
                                window.location.href = "#suits";
                            }}
                        >
                            Rooms & Suites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
