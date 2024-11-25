import React, { useEffect, useState } from "react";
import "./roomavailability.scss";
export default function RoomAavailability() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        // const options = { day: 'numeric' , month: 'numeric',year: 'numeric' };
        const formattedDate = today.toLocaleDateString();
        const formattedDateTomorow = tomorrow.toLocaleDateString();

        setCheckIn(formattedDate);
        setCheckOut(formattedDateTomorow);
    }, []);
    return (
        <div className="room-availability">
            <div className="room-container">
                <div className="room-heroabanner-sub-details">
                    <div className="room-heroabanner-sub-detail border-right">
                        <div className="room-heroabanner-sub-detail-svg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                viewBox="0 0 30 30"
                            >
                                <path d="M7.11.06c-.22.1-.41.31-.49.52-.04.09-.06.52-.06.95v.78l-1.71.02c-1.68.02-1.73.02-2.17.18C1.45 2.95.6 3.79.17 5L0 5.47v21.42l.16.47c.43 1.21 1.27 2.05 2.5 2.48l.45.16h23.77l.47-.16c1.21-.43 2.05-1.27 2.48-2.5l.16-.45V5.47l-.16-.45c-.43-1.23-1.27-2.07-2.48-2.5-.46-.16-.48-.16-2.18-.18l-1.71-.02-.02-.87C23.42.5 23.39.41 23.02.14c-.23-.17-.78-.17-1.01 0-.38.28-.4.36-.42 1.32l-.02.87H8.44l-.02-.87C8.4.51 8.37.42 8.01.15c-.2-.15-.66-.19-.9-.08Zm-.55 4.78c.02.69.07.83.42 1.09.23.17.78.17 1.01 0 .35-.26.4-.39.42-1.09l.02-.64h13.12l.02.64c.02.69.07.83.42 1.09.23.17.78.17 1.01 0 .35-.26.4-.39.42-1.09l.02-.65 1.59.02 1.6.02.33.16c.42.21.76.55.97.97.16.33.16.34.18 1.7l.02 1.37H1.85V7.18c0-.93.02-1.33.08-1.54.18-.59.69-1.13 1.29-1.33.26-.09.52-.1 1.81-.11h1.5l.02.64Zm21.57 13.63-.02 8.18-.16.32c-.21.42-.57.78-.98.99l-.33.16H3.35l-.32-.16c-.42-.21-.78-.57-.99-.98l-.16-.33-.02-8.18V10.3h26.28v8.17Z"></path>
                            </svg>
                        </div>
                        <div className="motel-detail">
                            <p>Check In</p>
                            <span>{checkIn}</span>
                        </div>
                    </div>
                    <div className="room-heroabanner-sub-detail  border-right">
                        <div className="room-heroabanner-sub-detail-svg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                viewBox="0 0 30 30"
                            >
                                <path d="M7.11.06c-.22.1-.41.31-.49.52-.04.09-.06.52-.06.95v.78l-1.71.02c-1.68.02-1.73.02-2.17.18C1.45 2.95.6 3.79.17 5L0 5.47v21.42l.16.47c.43 1.21 1.27 2.05 2.5 2.48l.45.16h23.77l.47-.16c1.21-.43 2.05-1.27 2.48-2.5l.16-.45V5.47l-.16-.45c-.43-1.23-1.27-2.07-2.48-2.5-.46-.16-.48-.16-2.18-.18l-1.71-.02-.02-.87C23.42.5 23.39.41 23.02.14c-.23-.17-.78-.17-1.01 0-.38.28-.4.36-.42 1.32l-.02.87H8.44l-.02-.87C8.4.51 8.37.42 8.01.15c-.2-.15-.66-.19-.9-.08Zm-.55 4.78c.02.69.07.83.42 1.09.23.17.78.17 1.01 0 .35-.26.4-.39.42-1.09l.02-.64h13.12l.02.64c.02.69.07.83.42 1.09.23.17.78.17 1.01 0 .35-.26.4-.39.42-1.09l.02-.65 1.59.02 1.6.02.33.16c.42.21.76.55.97.97.16.33.16.34.18 1.7l.02 1.37H1.85V7.18c0-.93.02-1.33.08-1.54.18-.59.69-1.13 1.29-1.33.26-.09.52-.1 1.81-.11h1.5l.02.64Zm21.57 13.63-.02 8.18-.16.32c-.21.42-.57.78-.98.99l-.33.16H3.35l-.32-.16c-.42-.21-.78-.57-.99-.98l-.16-.33-.02-8.18V10.3h26.28v8.17Z"></path>
                            </svg>
                        </div>
                        <div className="motel-detail">
                            <p>Check Out</p>
                            <span>{checkOut}</span>
                        </div>
                    </div>
                    <div className="room-heroabanner-sub-detail">
                        <div className="room-heroabanner-sub-detail-svg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                viewBox="0 0 30 30"
                            >
                                <path d="M7.11.06c-.22.1-.41.31-.49.52-.04.09-.06.52-.06.95v.78l-1.71.02c-1.68.02-1.73.02-2.17.18C1.45 2.95.6 3.79.17 5L0 5.47v21.42l.16.47c.43 1.21 1.27 2.05 2.5 2.48l.45.16h23.77l.47-.16c1.21-.43 2.05-1.27 2.48-2.5l.16-.45V5.47l-.16-.45c-.43-1.23-1.27-2.07-2.48-2.5-.46-.16-.48-.16-2.18-.18l-1.71-.02-.02-.87C23.42.5 23.39.41 23.02.14c-.23-.17-.78-.17-1.01 0-.38.28-.4.36-.42 1.32l-.02.87H8.44l-.02-.87C8.4.51 8.37.42 8.01.15c-.2-.15-.66-.19-.9-.08Zm-.55 4.78c.02.69.07.83.42 1.09.23.17.78.17 1.01 0 .35-.26.4-.39.42-1.09l.02-.64h13.12l.02.64c.02.69.07.83.42 1.09.23.17.78.17 1.01 0 .35-.26.4-.39.42-1.09l.02-.65 1.59.02 1.6.02.33.16c.42.21.76.55.97.97.16.33.16.34.18 1.7l.02 1.37H1.85V7.18c0-.93.02-1.33.08-1.54.18-.59.69-1.13 1.29-1.33.26-.09.52-.1 1.81-.11h1.5l.02.64Zm21.57 13.63-.02 8.18-.16.32c-.21.42-.57.78-.98.99l-.33.16H3.35l-.32-.16c-.42-.21-.78-.57-.99-.98l-.16-.33-.02-8.18V10.3h26.28v8.17Z"></path>
                            </svg>
                        </div>
                        <div className="motel-detail">
                            <p>Guest</p>
                            <span>1 Room,1 Adult</span>
                        </div>
                    </div>
                    <button>Check Availability</button>
                </div>
            </div>
        </div>
    );
}
