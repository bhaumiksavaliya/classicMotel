import React from 'react'
import "./gymdetail.scss"
export default function GymDetails() {
  return (
    <section className="gym-details">
            <div className="container">
                <div className="gym-content">
                    <p className="gym-subtitle">
                        3,000-SQM OASIS FOR WELLNESS & FITNESS
                    </p>
                    <div className="gym-content-flex">
                        <h2 className="gym-title">
                            Wellness & Fitness At Classic Motel
                        </h2>
                        <div className="booking-title">
                            <button>
                                Request More Information
                                <div className="border"></div>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div className="gym-booking">
                    <p className="gym-description">
                        Get away from the hustle and bustle of everyday life and
                        find total relaxation at our resort. Access to a
                        wellness center of over 3,000 square meters including
                        gym, sauna, swimming pool, gym, yoga and pilates classes
                        and more. You'll find everything you need, from a
                        dedicated fitness studio to an extensive range of
                        fitness equipment. All carefully planned to help you
                        achieve a balance of energy, body and mind.
                    </p>
                    <p className="booking-info">
                        For making a reservation or appointment, please call The
                        Hotel Wellness Centre at +91 22 345 67 88 or email
                        gym@classicmotel.com. Out-of-hours appointments must be
                        booked at least 24 hours in advance. A surcharge will
                        apply. Please note that treatments must start no later
                        than 8pm.
                    </p>
                </div>
            </div>
        </section>
  )
}
