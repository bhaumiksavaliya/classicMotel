import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./enquiry.scss";
import toast from 'react-hot-toast';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default function Enquiry() {
    const [position, setPosition] = useState([21.1702, 72.8311]); // Surat, Gujarat
    const [zoom, setZoom] = useState(13);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submissionStatus === "submitting") return;

        setSubmissionStatus("submitting");

        try {
            const response = await fetch(
                "https://classic-motel-backend.vercel.app/api/v1/user/enquiry",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                setSubmissionStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                toast.success("Enquiry submitted successfully!");
            } else {
                const errorData = await response.json();
                setSubmissionStatus("error");
                console.log("Error:", errorData);
                toast.error(errorData.message || "Failed to submit enquiry. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting enquiry:", error);
            setSubmissionStatus("error");
            toast.error("An error occurred. Please try again later.");
        }
    };

    return (
        <section className="enquiry-section">
            <div className="map-container">
                <MapContainer center={position} zoom={zoom}>
                    <ChangeView center={position} zoom={zoom} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Surat, Gujrat'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Surat, Gujarat</Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className="enquiry">
                <div className="enquiry-container">
                    <div className="enquiry-image"></div>
                    <div className="enquiry-content">
                        <h2>Contact Information</h2>
                        <div className="contact-details">
                            <p className="border-up">
                                Address: Skylight, Ayodhyachowk, Surat, Gujarat
                            </p>
                            <p className="border-up-down">
                                Phone Number: +91 22 345 67 88
                            </p>
                            <p className="border-down">
                                Email: info@classicmotel.com
                            </p>
                        </div>
                        <h3>Let's start a conversation</h3>
                        <div className="enquiry-form">
                            <label htmlFor="name">Name</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                        <button 
                            onClick={handleSubmit}
                            disabled={submissionStatus === "submitting"}
                        >
                                {submissionStatus === "submitting" ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
