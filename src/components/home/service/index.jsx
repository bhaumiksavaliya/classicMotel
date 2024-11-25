import React from "react";
import "./service.scss";
import Slider from "react-slick";
import Simgone from "../../../assets/images/simg-1.jpg"
import Simgtwo from "../../../assets/images/simg-2.jpg"
import Simgthree from "../../../assets/images/simg-3.jpg"
import Simgfour from "../../../assets/images/simg-4.jpg"
import Simgfive from "../../../assets/images/simg-5.jpg"
import Downsvg from "../../../assets/icons/down-black.svg"
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="rightarrow"
        onClick={onClick}
      >
        <img src={Downsvg} alt="Down svg"/>
      </div>
    );
}
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
      className="leftarrow"
      onClick={onClick}
      >
      <img src={Downsvg} alt="down svg"/>

      </div>
    );
  }
export default function Services(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1081,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
      };
    return(
        <div className="services">
            <div className="container">
                <div className="services-title">
                    <span>ENJOY WORLD-CLASS STAY EXPERIENCE</span>
                    <h2>Select Your Chalet</h2>
                    <p>Escape to the beautiful mountains and valleys where dreams come true. 
                        Culture, nature, streams and gastronomy. Immerse yourself in the restorative 
                        qualities of nature, far from the disturbances of everyday life.</p>
                </div>
                <div className="services-slider">
                    <Slider {...settings}>
                        <div>
                            <div className="slider">
                                <div className="slider-img">
                                    <img src={Simgone} alt="slider"/>
                                    <div className="slider-img-price">
                                        <p>$400/Niight</p>
                                    </div>
                                </div>
                                <div className="slider-detail">
                                    <h3>Meadow Chalet</h3>
                                    <div className="slider-sub-detail">
                                        <div className="slider-svg">
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 82.26"><title>measurement</title>
                                                <path d="M122.88,39.45V79.56a2.7,2.7,0,0,1-.76,1.87l-.08.08a2.67,2.67,0,0,1-1.86.75H2.7A2.74,2.74,0,0,1,.83,81.5l-.12-.13A2.72,2.72,0,0,1,0,79.56V39.45a2.74,2.74,0,0,1,.76-1.87l.13-.12a2.72,2.72,0,0,1,1.81-.71H120.18a2.68,2.68,0,0,1,1.87.76l.07.07a2.68,2.68,0,0,1,.76,1.87ZM107.07,77.2V58.13h5.06V77.2h5.69V41.81H5.06V77.2h5.69V66.69h5.06V77.2h5.64V58.13h5.06V77.2h5.65V66.69h5.05V77.2h5.65V58.13h5V77.2h5.65V66.69h5V77.2h5.65V58.13h5.06V77.2H75V66.69H80V77.2h5.64V58.13h5.06V77.2h5.65V66.69h5V77.2ZM122.31,24a3.2,3.2,0,1,1-6.4-.08l.32-20.74a3.21,3.21,0,0,1,6.41.07L122.31,24ZM6.65,24a3.21,3.21,0,1,1-6.41-.08L.56,3.17A3.21,3.21,0,1,1,7,3.24L6.65,24Zm94.12.27a3.21,3.21,0,0,1-4.2-4.85l3-2.61H23.28l3,2.61a3.21,3.21,0,0,1-4.2,4.85L12.57,16a3.2,3.2,0,0,1-.33-4.52l.3-.3,9.27-8.26a3.22,3.22,0,1,1,4.28,4.8l-3,2.64H99.77l-3-2.64a3.22,3.22,0,0,1,4.28-4.8l9.28,8.26.29.3a3.2,3.2,0,0,1-.33,4.52l-9.54,8.26Z"/>
                                            </svg>
                                            <p>90 m</p>
                                        </div>
                                        <div className="slider-svg">
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 120.05"><defs></defs><title>guest-traveler</title>
                                                <path className="cls-1" d="M90.54,38.25c2.23-.75,4.58.44,6.13,2.3h18.46a.51.51,0,0,1,.51.51v4.86a.51.51,0,0,1-.51.51H111.9V62.62h-3.73V46.43H98.11a9.11,9.11,0,0,1-2.36,3.36V62.62H92V52.41a57.27,57.27,0,0,1-8,3.38,84.35,84.35,0,0,1-9,2.79,18,18,0,0,1-15.71-4,41.48,41.48,0,0,1-3.49-3.35l-.34-.36-3,17.75a62.39,62.39,0,0,0,7.2,4.17c7.78,3.63,14.18,6.63,15.55,18.85.25,2.14.14,14.68,0,20.84H86a1.8,1.8,0,0,1-.67-1.43v-1.89a4.77,4.77,0,0,1-4.71-4.76v-36a4.78,4.78,0,0,1,4.76-4.76h1.09a.91.91,0,0,0,0,.23l1.19,4.54a7.4,7.4,0,0,0,1.79,3.38A4.22,4.22,0,0,0,92.58,73h4.77v2.55c0,.41,1.92.73,2.32.73H106a.72.72,0,0,0,.73-.72V73h5a4.36,4.36,0,0,0,3.16-1.32,6.81,6.81,0,0,0,1.72-3.4l1-4.48a1,1,0,0,0,0-.24h.51a4.78,4.78,0,0,1,4.76,4.76v36.05a4.77,4.77,0,0,1-4.71,4.76V111a1.8,1.8,0,0,1-.67,1.43h5.38v7.58H0v-7.58H19.83c1.41-3.79,2.86-7.83,4.28-11.89,2.93-8.39,5.74-17,7.8-23.84a22,22,0,0,1-3.21-5.06A11.33,11.33,0,0,1,27.82,65l4.33-21.82c-1.55-.08-3.34-.54-4.8.1-2.83,1.24-7,6.52-9.47,9l-3.31,3.35c-2.55,2.58-4.25,5.44-8.15,5.13-4.84-.38-8.3-5.76-4.89-9.89l7.63-7.72c3.67-3.73,7.16-8.12,11.69-10.68C24.49,30.41,28.45,29,35,29.28c2.4,0,4.94.27,7.34.5l2.8.24c11,.71,16.12,6.5,20.12,11,1.77,2,3.29,3.7,4.94,4.49.78.37,2-.15,3.39-.73L83.76,41l6.78-2.72ZM61.15,112.47c.14-6.94.29-16.73.18-18.62-.09-1.35-1-4.92-2.42-5.57a59.35,59.35,0,0,0-5.83-2.17c-2.75-.91-5-1.83-7.72-2.58-2,6.58-4.68,14.52-7.57,22.09l-2.73,6.85Zm52.87,0H89.49a1.77,1.77,0,0,0,.67-1.43v-1.89h23.19V111a1.77,1.77,0,0,0,.67,1.43ZM88.91,100.24a.88.88,0,0,1,0-1.76h25.82a.88.88,0,0,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm26.73-18.75H88.5l.9,3.43a5.63,5.63,0,0,0,1.34,2.58,2.49,2.49,0,0,0,1.83.78h19.17a2.65,2.65,0,0,0,1.92-.81,5.09,5.09,0,0,0,1.24-2.51l.74-3.47ZM44.82.71a13.17,13.17,0,1,1-7.56,6.66A13.13,13.13,0,0,1,44.82.71Z"/>
                                            </svg>
                                            <p>5 Guests</p>
                                        </div>
                                        <div className="slider-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 457.03">
                                                <path fillRule="nonzero" d="M69.24 0h373.51c11.67 0 22.29 4.78 29.96 12.45 7.68 7.68 12.46 18.31 12.46 29.97v194.86c3.52 2.4 6.78 5.07 9.73 8.01l.66.73c10.16 10.47 16.44 24.05 16.44 40.25v159.51c0 6.21-5.04 11.25-11.25 11.25h-19.74c-5.29 0-9.73-3.66-10.93-8.59-7.11-20.29-14.12-31.98-23.44-38.19-9.51-6.32-22.84-7.9-42.23-7.88l-313.54.46c-13.73-.31-22.56 3.56-28.85 10.57-7.19 8.01-12.17 20.58-17.26 35.9-1.54 4.7-5.93 7.68-10.62 7.68l-22.89.05C5.04 457.03 0 451.99 0 445.78V280.95c0-15.17 5.99-27.77 15.6-37.39l.74-.67c3.16-3.06 6.7-5.79 10.53-8.18L26.82 42c0-11.65 4.79-22.15 12.49-29.75A42.525 42.525 0 0 1 69.24 0zm-46.1 328.3-.65-.02v106.26h3.66c5.16-14.51 10.82-26.75 19.17-36.07 10.7-11.93 24.85-18.5 45.98-18.03l313.11-.47c23.76-.02 40.67 2.3 54.61 11.58 12.54 8.35 21.61 21.62 29.81 42.99h.68V328.28l-.66.02H23.14zm-.65-22.47.65-.02h465.71l.66.02v-19.56c0-9.86-3.81-18.14-9.96-24.55l-.56-.52c-4.92-4.92-11.22-8.79-18.31-11.49-12.78-2.73-25.26-5.22-37.48-7.48-13.79-2.15-27.16-4.07-40.18-5.76a11.163 11.163 0 0 1-4.83-.21l-5.04-1.04c-43.12-5.28-82.66-7.96-121.81-7.99-24.01-.02-47.96.96-72.6 2.94-43.39 4.33-88.49 12.09-138.25 23.13-.47.1-.95.18-1.41.22-2.58 1.59-4.96 3.39-7.05 5.39l-.52.56c-5.56 5.55-9.02 12.8-9.02 21.48v24.88zm32.6-81.73c22.5-4.01 43.9-7.38 64.59-10.14l-.03-45.02c0-15.1 6.18-28.85 16.12-38.78l.74-.67c9.89-9.55 23.31-15.44 38.04-15.44h162.9c15.11 0 28.84 6.18 38.77 16.12 9.94 9.94 16.13 23.68 16.13 38.77v45.36c10.97 1.68 22.12 3.55 33.48 5.63 8.4 1.31 16.94 2.7 25.66 4.17 3.81.65 7.55 1.52 11.19 2.61V42.42c0-5.45-2.26-10.44-5.87-14.06-3.61-3.61-8.6-5.87-14.06-5.87H69.24c-5.57 0-10.61 2.19-14.21 5.75-3.53 3.48-5.71 8.34-5.71 13.76v183.34c1.9-.47 3.83-.89 5.77-1.24zm206.77-20.65c29.94.14 59.19 1.78 85.13 4.96 7.55.79 15.18 1.7 22.86 2.7v-42.17c0-8.88-3.66-16.99-9.54-22.87-5.87-5.87-13.97-9.53-22.86-9.53h-162.9c-8.65 0-16.54 3.43-22.37 8.98l-.51.55c-5.87 5.87-9.52 13.98-9.52 22.87v42.15c36.75-5.25 78.88-7.84 119.71-7.64z"/>
                                            </svg>
                                            <p>3 beds</p>
                                        </div>
                                    </div>
                                    <p>The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.</p>
                                    <div className="services-button">
                                        <button aria-label="Discover More">
                                            Discover More
                                            <div className="border"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider">
                                <div className="slider-img">
                                    <img src={Simgtwo} alt="slider"/>
                                    <div className="slider-img-price">
                                        <p>$400/Niight</p>
                                    </div>
                                </div>
                                <div className="slider-detail">
                                    <h3>Meadow Chalet</h3>
                                    <div className="slider-sub-detail">
                                        <div className="slider-svg">
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 82.26"><title>measurement</title>
                                                <path d="M122.88,39.45V79.56a2.7,2.7,0,0,1-.76,1.87l-.08.08a2.67,2.67,0,0,1-1.86.75H2.7A2.74,2.74,0,0,1,.83,81.5l-.12-.13A2.72,2.72,0,0,1,0,79.56V39.45a2.74,2.74,0,0,1,.76-1.87l.13-.12a2.72,2.72,0,0,1,1.81-.71H120.18a2.68,2.68,0,0,1,1.87.76l.07.07a2.68,2.68,0,0,1,.76,1.87ZM107.07,77.2V58.13h5.06V77.2h5.69V41.81H5.06V77.2h5.69V66.69h5.06V77.2h5.64V58.13h5.06V77.2h5.65V66.69h5.05V77.2h5.65V58.13h5V77.2h5.65V66.69h5V77.2h5.65V58.13h5.06V77.2H75V66.69H80V77.2h5.64V58.13h5.06V77.2h5.65V66.69h5V77.2ZM122.31,24a3.2,3.2,0,1,1-6.4-.08l.32-20.74a3.21,3.21,0,0,1,6.41.07L122.31,24ZM6.65,24a3.21,3.21,0,1,1-6.41-.08L.56,3.17A3.21,3.21,0,1,1,7,3.24L6.65,24Zm94.12.27a3.21,3.21,0,0,1-4.2-4.85l3-2.61H23.28l3,2.61a3.21,3.21,0,0,1-4.2,4.85L12.57,16a3.2,3.2,0,0,1-.33-4.52l.3-.3,9.27-8.26a3.22,3.22,0,1,1,4.28,4.8l-3,2.64H99.77l-3-2.64a3.22,3.22,0,0,1,4.28-4.8l9.28,8.26.29.3a3.2,3.2,0,0,1-.33,4.52l-9.54,8.26Z"/>
                                            </svg>
                                            <p>90 m</p>
                                        </div>
                                        <div className="slider-svg">
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 120.05"><defs></defs><title>guest-traveler</title>
                                                <path className="cls-1" d="M90.54,38.25c2.23-.75,4.58.44,6.13,2.3h18.46a.51.51,0,0,1,.51.51v4.86a.51.51,0,0,1-.51.51H111.9V62.62h-3.73V46.43H98.11a9.11,9.11,0,0,1-2.36,3.36V62.62H92V52.41a57.27,57.27,0,0,1-8,3.38,84.35,84.35,0,0,1-9,2.79,18,18,0,0,1-15.71-4,41.48,41.48,0,0,1-3.49-3.35l-.34-.36-3,17.75a62.39,62.39,0,0,0,7.2,4.17c7.78,3.63,14.18,6.63,15.55,18.85.25,2.14.14,14.68,0,20.84H86a1.8,1.8,0,0,1-.67-1.43v-1.89a4.77,4.77,0,0,1-4.71-4.76v-36a4.78,4.78,0,0,1,4.76-4.76h1.09a.91.91,0,0,0,0,.23l1.19,4.54a7.4,7.4,0,0,0,1.79,3.38A4.22,4.22,0,0,0,92.58,73h4.77v2.55c0,.41,1.92.73,2.32.73H106a.72.72,0,0,0,.73-.72V73h5a4.36,4.36,0,0,0,3.16-1.32,6.81,6.81,0,0,0,1.72-3.4l1-4.48a1,1,0,0,0,0-.24h.51a4.78,4.78,0,0,1,4.76,4.76v36.05a4.77,4.77,0,0,1-4.71,4.76V111a1.8,1.8,0,0,1-.67,1.43h5.38v7.58H0v-7.58H19.83c1.41-3.79,2.86-7.83,4.28-11.89,2.93-8.39,5.74-17,7.8-23.84a22,22,0,0,1-3.21-5.06A11.33,11.33,0,0,1,27.82,65l4.33-21.82c-1.55-.08-3.34-.54-4.8.1-2.83,1.24-7,6.52-9.47,9l-3.31,3.35c-2.55,2.58-4.25,5.44-8.15,5.13-4.84-.38-8.3-5.76-4.89-9.89l7.63-7.72c3.67-3.73,7.16-8.12,11.69-10.68C24.49,30.41,28.45,29,35,29.28c2.4,0,4.94.27,7.34.5l2.8.24c11,.71,16.12,6.5,20.12,11,1.77,2,3.29,3.7,4.94,4.49.78.37,2-.15,3.39-.73L83.76,41l6.78-2.72ZM61.15,112.47c.14-6.94.29-16.73.18-18.62-.09-1.35-1-4.92-2.42-5.57a59.35,59.35,0,0,0-5.83-2.17c-2.75-.91-5-1.83-7.72-2.58-2,6.58-4.68,14.52-7.57,22.09l-2.73,6.85Zm52.87,0H89.49a1.77,1.77,0,0,0,.67-1.43v-1.89h23.19V111a1.77,1.77,0,0,0,.67,1.43ZM88.91,100.24a.88.88,0,0,1,0-1.76h25.82a.88.88,0,0,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm26.73-18.75H88.5l.9,3.43a5.63,5.63,0,0,0,1.34,2.58,2.49,2.49,0,0,0,1.83.78h19.17a2.65,2.65,0,0,0,1.92-.81,5.09,5.09,0,0,0,1.24-2.51l.74-3.47ZM44.82.71a13.17,13.17,0,1,1-7.56,6.66A13.13,13.13,0,0,1,44.82.71Z"/>
                                            </svg>
                                            <p>5 Guests</p>
                                        </div>
                                        <div className="slider-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 457.03">
                                                <path fillRule="nonzero" d="M69.24 0h373.51c11.67 0 22.29 4.78 29.96 12.45 7.68 7.68 12.46 18.31 12.46 29.97v194.86c3.52 2.4 6.78 5.07 9.73 8.01l.66.73c10.16 10.47 16.44 24.05 16.44 40.25v159.51c0 6.21-5.04 11.25-11.25 11.25h-19.74c-5.29 0-9.73-3.66-10.93-8.59-7.11-20.29-14.12-31.98-23.44-38.19-9.51-6.32-22.84-7.9-42.23-7.88l-313.54.46c-13.73-.31-22.56 3.56-28.85 10.57-7.19 8.01-12.17 20.58-17.26 35.9-1.54 4.7-5.93 7.68-10.62 7.68l-22.89.05C5.04 457.03 0 451.99 0 445.78V280.95c0-15.17 5.99-27.77 15.6-37.39l.74-.67c3.16-3.06 6.7-5.79 10.53-8.18L26.82 42c0-11.65 4.79-22.15 12.49-29.75A42.525 42.525 0 0 1 69.24 0zm-46.1 328.3-.65-.02v106.26h3.66c5.16-14.51 10.82-26.75 19.17-36.07 10.7-11.93 24.85-18.5 45.98-18.03l313.11-.47c23.76-.02 40.67 2.3 54.61 11.58 12.54 8.35 21.61 21.62 29.81 42.99h.68V328.28l-.66.02H23.14zm-.65-22.47.65-.02h465.71l.66.02v-19.56c0-9.86-3.81-18.14-9.96-24.55l-.56-.52c-4.92-4.92-11.22-8.79-18.31-11.49-12.78-2.73-25.26-5.22-37.48-7.48-13.79-2.15-27.16-4.07-40.18-5.76a11.163 11.163 0 0 1-4.83-.21l-5.04-1.04c-43.12-5.28-82.66-7.96-121.81-7.99-24.01-.02-47.96.96-72.6 2.94-43.39 4.33-88.49 12.09-138.25 23.13-.47.1-.95.18-1.41.22-2.58 1.59-4.96 3.39-7.05 5.39l-.52.56c-5.56 5.55-9.02 12.8-9.02 21.48v24.88zm32.6-81.73c22.5-4.01 43.9-7.38 64.59-10.14l-.03-45.02c0-15.1 6.18-28.85 16.12-38.78l.74-.67c9.89-9.55 23.31-15.44 38.04-15.44h162.9c15.11 0 28.84 6.18 38.77 16.12 9.94 9.94 16.13 23.68 16.13 38.77v45.36c10.97 1.68 22.12 3.55 33.48 5.63 8.4 1.31 16.94 2.7 25.66 4.17 3.81.65 7.55 1.52 11.19 2.61V42.42c0-5.45-2.26-10.44-5.87-14.06-3.61-3.61-8.6-5.87-14.06-5.87H69.24c-5.57 0-10.61 2.19-14.21 5.75-3.53 3.48-5.71 8.34-5.71 13.76v183.34c1.9-.47 3.83-.89 5.77-1.24zm206.77-20.65c29.94.14 59.19 1.78 85.13 4.96 7.55.79 15.18 1.7 22.86 2.7v-42.17c0-8.88-3.66-16.99-9.54-22.87-5.87-5.87-13.97-9.53-22.86-9.53h-162.9c-8.65 0-16.54 3.43-22.37 8.98l-.51.55c-5.87 5.87-9.52 13.98-9.52 22.87v42.15c36.75-5.25 78.88-7.84 119.71-7.64z"/>
                                            </svg>
                                            <p>3 beds</p>
                                        </div>
                                    </div>
                                    <p>The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.</p>
                                    <div className="services-button">
                                        <button aria-label="Discover More">
                                            Discover More
                                            <div className="border"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider">
                                <div className="slider-img">
                                    <img src={Simgthree} alt="slider"/>
                                    <div className="slider-img-price">
                                        <p>$400/Niight</p>
                                    </div>
                                </div>
                                <div className="slider-detail">
                                    <h3>Meadow Chalet</h3>
                                    <div className="slider-sub-detail">
                                        <div className="slider-svg">
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 82.26"><title>measurement</title>
                                                <path d="M122.88,39.45V79.56a2.7,2.7,0,0,1-.76,1.87l-.08.08a2.67,2.67,0,0,1-1.86.75H2.7A2.74,2.74,0,0,1,.83,81.5l-.12-.13A2.72,2.72,0,0,1,0,79.56V39.45a2.74,2.74,0,0,1,.76-1.87l.13-.12a2.72,2.72,0,0,1,1.81-.71H120.18a2.68,2.68,0,0,1,1.87.76l.07.07a2.68,2.68,0,0,1,.76,1.87ZM107.07,77.2V58.13h5.06V77.2h5.69V41.81H5.06V77.2h5.69V66.69h5.06V77.2h5.64V58.13h5.06V77.2h5.65V66.69h5.05V77.2h5.65V58.13h5V77.2h5.65V66.69h5V77.2h5.65V58.13h5.06V77.2H75V66.69H80V77.2h5.64V58.13h5.06V77.2h5.65V66.69h5V77.2ZM122.31,24a3.2,3.2,0,1,1-6.4-.08l.32-20.74a3.21,3.21,0,0,1,6.41.07L122.31,24ZM6.65,24a3.21,3.21,0,1,1-6.41-.08L.56,3.17A3.21,3.21,0,1,1,7,3.24L6.65,24Zm94.12.27a3.21,3.21,0,0,1-4.2-4.85l3-2.61H23.28l3,2.61a3.21,3.21,0,0,1-4.2,4.85L12.57,16a3.2,3.2,0,0,1-.33-4.52l.3-.3,9.27-8.26a3.22,3.22,0,1,1,4.28,4.8l-3,2.64H99.77l-3-2.64a3.22,3.22,0,0,1,4.28-4.8l9.28,8.26.29.3a3.2,3.2,0,0,1-.33,4.52l-9.54,8.26Z"/>
                                            </svg>
                                            <p>90 m</p>
                                        </div>
                                        <div className="slider-svg">
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 120.05"><defs></defs><title>guest-traveler</title>
                                                <path className="cls-1" d="M90.54,38.25c2.23-.75,4.58.44,6.13,2.3h18.46a.51.51,0,0,1,.51.51v4.86a.51.51,0,0,1-.51.51H111.9V62.62h-3.73V46.43H98.11a9.11,9.11,0,0,1-2.36,3.36V62.62H92V52.41a57.27,57.27,0,0,1-8,3.38,84.35,84.35,0,0,1-9,2.79,18,18,0,0,1-15.71-4,41.48,41.48,0,0,1-3.49-3.35l-.34-.36-3,17.75a62.39,62.39,0,0,0,7.2,4.17c7.78,3.63,14.18,6.63,15.55,18.85.25,2.14.14,14.68,0,20.84H86a1.8,1.8,0,0,1-.67-1.43v-1.89a4.77,4.77,0,0,1-4.71-4.76v-36a4.78,4.78,0,0,1,4.76-4.76h1.09a.91.91,0,0,0,0,.23l1.19,4.54a7.4,7.4,0,0,0,1.79,3.38A4.22,4.22,0,0,0,92.58,73h4.77v2.55c0,.41,1.92.73,2.32.73H106a.72.72,0,0,0,.73-.72V73h5a4.36,4.36,0,0,0,3.16-1.32,6.81,6.81,0,0,0,1.72-3.4l1-4.48a1,1,0,0,0,0-.24h.51a4.78,4.78,0,0,1,4.76,4.76v36.05a4.77,4.77,0,0,1-4.71,4.76V111a1.8,1.8,0,0,1-.67,1.43h5.38v7.58H0v-7.58H19.83c1.41-3.79,2.86-7.83,4.28-11.89,2.93-8.39,5.74-17,7.8-23.84a22,22,0,0,1-3.21-5.06A11.33,11.33,0,0,1,27.82,65l4.33-21.82c-1.55-.08-3.34-.54-4.8.1-2.83,1.24-7,6.52-9.47,9l-3.31,3.35c-2.55,2.58-4.25,5.44-8.15,5.13-4.84-.38-8.3-5.76-4.89-9.89l7.63-7.72c3.67-3.73,7.16-8.12,11.69-10.68C24.49,30.41,28.45,29,35,29.28c2.4,0,4.94.27,7.34.5l2.8.24c11,.71,16.12,6.5,20.12,11,1.77,2,3.29,3.7,4.94,4.49.78.37,2-.15,3.39-.73L83.76,41l6.78-2.72ZM61.15,112.47c.14-6.94.29-16.73.18-18.62-.09-1.35-1-4.92-2.42-5.57a59.35,59.35,0,0,0-5.83-2.17c-2.75-.91-5-1.83-7.72-2.58-2,6.58-4.68,14.52-7.57,22.09l-2.73,6.85Zm52.87,0H89.49a1.77,1.77,0,0,0,.67-1.43v-1.89h23.19V111a1.77,1.77,0,0,0,.67,1.43ZM88.91,100.24a.88.88,0,0,1,0-1.76h25.82a.88.88,0,0,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm26.73-18.75H88.5l.9,3.43a5.63,5.63,0,0,0,1.34,2.58,2.49,2.49,0,0,0,1.83.78h19.17a2.65,2.65,0,0,0,1.92-.81,5.09,5.09,0,0,0,1.24-2.51l.74-3.47ZM44.82.71a13.17,13.17,0,1,1-7.56,6.66A13.13,13.13,0,0,1,44.82.71Z"/>
                                            </svg>
                                            <p>5 Guests</p>
                                        </div>
                                        <div className="slider-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 457.03">
                                                <path fillRule="nonzero" d="M69.24 0h373.51c11.67 0 22.29 4.78 29.96 12.45 7.68 7.68 12.46 18.31 12.46 29.97v194.86c3.52 2.4 6.78 5.07 9.73 8.01l.66.73c10.16 10.47 16.44 24.05 16.44 40.25v159.51c0 6.21-5.04 11.25-11.25 11.25h-19.74c-5.29 0-9.73-3.66-10.93-8.59-7.11-20.29-14.12-31.98-23.44-38.19-9.51-6.32-22.84-7.9-42.23-7.88l-313.54.46c-13.73-.31-22.56 3.56-28.85 10.57-7.19 8.01-12.17 20.58-17.26 35.9-1.54 4.7-5.93 7.68-10.62 7.68l-22.89.05C5.04 457.03 0 451.99 0 445.78V280.95c0-15.17 5.99-27.77 15.6-37.39l.74-.67c3.16-3.06 6.7-5.79 10.53-8.18L26.82 42c0-11.65 4.79-22.15 12.49-29.75A42.525 42.525 0 0 1 69.24 0zm-46.1 328.3-.65-.02v106.26h3.66c5.16-14.51 10.82-26.75 19.17-36.07 10.7-11.93 24.85-18.5 45.98-18.03l313.11-.47c23.76-.02 40.67 2.3 54.61 11.58 12.54 8.35 21.61 21.62 29.81 42.99h.68V328.28l-.66.02H23.14zm-.65-22.47.65-.02h465.71l.66.02v-19.56c0-9.86-3.81-18.14-9.96-24.55l-.56-.52c-4.92-4.92-11.22-8.79-18.31-11.49-12.78-2.73-25.26-5.22-37.48-7.48-13.79-2.15-27.16-4.07-40.18-5.76a11.163 11.163 0 0 1-4.83-.21l-5.04-1.04c-43.12-5.28-82.66-7.96-121.81-7.99-24.01-.02-47.96.96-72.6 2.94-43.39 4.33-88.49 12.09-138.25 23.13-.47.1-.95.18-1.41.22-2.58 1.59-4.96 3.39-7.05 5.39l-.52.56c-5.56 5.55-9.02 12.8-9.02 21.48v24.88zm32.6-81.73c22.5-4.01 43.9-7.38 64.59-10.14l-.03-45.02c0-15.1 6.18-28.85 16.12-38.78l.74-.67c9.89-9.55 23.31-15.44 38.04-15.44h162.9c15.11 0 28.84 6.18 38.77 16.12 9.94 9.94 16.13 23.68 16.13 38.77v45.36c10.97 1.68 22.12 3.55 33.48 5.63 8.4 1.31 16.94 2.7 25.66 4.17 3.81.65 7.55 1.52 11.19 2.61V42.42c0-5.45-2.26-10.44-5.87-14.06-3.61-3.61-8.6-5.87-14.06-5.87H69.24c-5.57 0-10.61 2.19-14.21 5.75-3.53 3.48-5.71 8.34-5.71 13.76v183.34c1.9-.47 3.83-.89 5.77-1.24zm206.77-20.65c29.94.14 59.19 1.78 85.13 4.96 7.55.79 15.18 1.7 22.86 2.7v-42.17c0-8.88-3.66-16.99-9.54-22.87-5.87-5.87-13.97-9.53-22.86-9.53h-162.9c-8.65 0-16.54 3.43-22.37 8.98l-.51.55c-5.87 5.87-9.52 13.98-9.52 22.87v42.15c36.75-5.25 78.88-7.84 119.71-7.64z"/>
                                            </svg>
                                            <p>3 beds</p>
                                        </div>
                                    </div>
                                    <p>The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.</p>
                                    <div className="services-button" >
                                        <button aria-label="Discover More">
                                            Discover More
                                            <div className="border"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider">
                                <div className="slider-img">
                                    <img src={Simgfour} alt="slider"/>
                                    <div className="slider-img-price">
                                        <p>$400/Niight</p>
                                    </div>
                                </div>
                                <div className="slider-detail">
                                    <h3>Meadow Chalet</h3>
                                    <div className="slider-sub-detail">
                                        <div className="slider-svg">
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 82.26"><title>measurement</title>
                                                <path d="M122.88,39.45V79.56a2.7,2.7,0,0,1-.76,1.87l-.08.08a2.67,2.67,0,0,1-1.86.75H2.7A2.74,2.74,0,0,1,.83,81.5l-.12-.13A2.72,2.72,0,0,1,0,79.56V39.45a2.74,2.74,0,0,1,.76-1.87l.13-.12a2.72,2.72,0,0,1,1.81-.71H120.18a2.68,2.68,0,0,1,1.87.76l.07.07a2.68,2.68,0,0,1,.76,1.87ZM107.07,77.2V58.13h5.06V77.2h5.69V41.81H5.06V77.2h5.69V66.69h5.06V77.2h5.64V58.13h5.06V77.2h5.65V66.69h5.05V77.2h5.65V58.13h5V77.2h5.65V66.69h5V77.2h5.65V58.13h5.06V77.2H75V66.69H80V77.2h5.64V58.13h5.06V77.2h5.65V66.69h5V77.2ZM122.31,24a3.2,3.2,0,1,1-6.4-.08l.32-20.74a3.21,3.21,0,0,1,6.41.07L122.31,24ZM6.65,24a3.21,3.21,0,1,1-6.41-.08L.56,3.17A3.21,3.21,0,1,1,7,3.24L6.65,24Zm94.12.27a3.21,3.21,0,0,1-4.2-4.85l3-2.61H23.28l3,2.61a3.21,3.21,0,0,1-4.2,4.85L12.57,16a3.2,3.2,0,0,1-.33-4.52l.3-.3,9.27-8.26a3.22,3.22,0,1,1,4.28,4.8l-3,2.64H99.77l-3-2.64a3.22,3.22,0,0,1,4.28-4.8l9.28,8.26.29.3a3.2,3.2,0,0,1-.33,4.52l-9.54,8.26Z"/>
                                            </svg>
                                            <p>90 m</p>
                                        </div>
                                        <div className="slider-svg">
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 120.05"><defs></defs><title>guest-traveler</title>
                                                <path className="cls-1" d="M90.54,38.25c2.23-.75,4.58.44,6.13,2.3h18.46a.51.51,0,0,1,.51.51v4.86a.51.51,0,0,1-.51.51H111.9V62.62h-3.73V46.43H98.11a9.11,9.11,0,0,1-2.36,3.36V62.62H92V52.41a57.27,57.27,0,0,1-8,3.38,84.35,84.35,0,0,1-9,2.79,18,18,0,0,1-15.71-4,41.48,41.48,0,0,1-3.49-3.35l-.34-.36-3,17.75a62.39,62.39,0,0,0,7.2,4.17c7.78,3.63,14.18,6.63,15.55,18.85.25,2.14.14,14.68,0,20.84H86a1.8,1.8,0,0,1-.67-1.43v-1.89a4.77,4.77,0,0,1-4.71-4.76v-36a4.78,4.78,0,0,1,4.76-4.76h1.09a.91.91,0,0,0,0,.23l1.19,4.54a7.4,7.4,0,0,0,1.79,3.38A4.22,4.22,0,0,0,92.58,73h4.77v2.55c0,.41,1.92.73,2.32.73H106a.72.72,0,0,0,.73-.72V73h5a4.36,4.36,0,0,0,3.16-1.32,6.81,6.81,0,0,0,1.72-3.4l1-4.48a1,1,0,0,0,0-.24h.51a4.78,4.78,0,0,1,4.76,4.76v36.05a4.77,4.77,0,0,1-4.71,4.76V111a1.8,1.8,0,0,1-.67,1.43h5.38v7.58H0v-7.58H19.83c1.41-3.79,2.86-7.83,4.28-11.89,2.93-8.39,5.74-17,7.8-23.84a22,22,0,0,1-3.21-5.06A11.33,11.33,0,0,1,27.82,65l4.33-21.82c-1.55-.08-3.34-.54-4.8.1-2.83,1.24-7,6.52-9.47,9l-3.31,3.35c-2.55,2.58-4.25,5.44-8.15,5.13-4.84-.38-8.3-5.76-4.89-9.89l7.63-7.72c3.67-3.73,7.16-8.12,11.69-10.68C24.49,30.41,28.45,29,35,29.28c2.4,0,4.94.27,7.34.5l2.8.24c11,.71,16.12,6.5,20.12,11,1.77,2,3.29,3.7,4.94,4.49.78.37,2-.15,3.39-.73L83.76,41l6.78-2.72ZM61.15,112.47c.14-6.94.29-16.73.18-18.62-.09-1.35-1-4.92-2.42-5.57a59.35,59.35,0,0,0-5.83-2.17c-2.75-.91-5-1.83-7.72-2.58-2,6.58-4.68,14.52-7.57,22.09l-2.73,6.85Zm52.87,0H89.49a1.77,1.77,0,0,0,.67-1.43v-1.89h23.19V111a1.77,1.77,0,0,0,.67,1.43ZM88.91,100.24a.88.88,0,0,1,0-1.76h25.82a.88.88,0,0,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm26.73-18.75H88.5l.9,3.43a5.63,5.63,0,0,0,1.34,2.58,2.49,2.49,0,0,0,1.83.78h19.17a2.65,2.65,0,0,0,1.92-.81,5.09,5.09,0,0,0,1.24-2.51l.74-3.47ZM44.82.71a13.17,13.17,0,1,1-7.56,6.66A13.13,13.13,0,0,1,44.82.71Z"/>
                                            </svg>
                                            <p>5 Guests</p>
                                        </div>
                                        <div className="slider-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 457.03">
                                                <path fillRule="nonzero" d="M69.24 0h373.51c11.67 0 22.29 4.78 29.96 12.45 7.68 7.68 12.46 18.31 12.46 29.97v194.86c3.52 2.4 6.78 5.07 9.73 8.01l.66.73c10.16 10.47 16.44 24.05 16.44 40.25v159.51c0 6.21-5.04 11.25-11.25 11.25h-19.74c-5.29 0-9.73-3.66-10.93-8.59-7.11-20.29-14.12-31.98-23.44-38.19-9.51-6.32-22.84-7.9-42.23-7.88l-313.54.46c-13.73-.31-22.56 3.56-28.85 10.57-7.19 8.01-12.17 20.58-17.26 35.9-1.54 4.7-5.93 7.68-10.62 7.68l-22.89.05C5.04 457.03 0 451.99 0 445.78V280.95c0-15.17 5.99-27.77 15.6-37.39l.74-.67c3.16-3.06 6.7-5.79 10.53-8.18L26.82 42c0-11.65 4.79-22.15 12.49-29.75A42.525 42.525 0 0 1 69.24 0zm-46.1 328.3-.65-.02v106.26h3.66c5.16-14.51 10.82-26.75 19.17-36.07 10.7-11.93 24.85-18.5 45.98-18.03l313.11-.47c23.76-.02 40.67 2.3 54.61 11.58 12.54 8.35 21.61 21.62 29.81 42.99h.68V328.28l-.66.02H23.14zm-.65-22.47.65-.02h465.71l.66.02v-19.56c0-9.86-3.81-18.14-9.96-24.55l-.56-.52c-4.92-4.92-11.22-8.79-18.31-11.49-12.78-2.73-25.26-5.22-37.48-7.48-13.79-2.15-27.16-4.07-40.18-5.76a11.163 11.163 0 0 1-4.83-.21l-5.04-1.04c-43.12-5.28-82.66-7.96-121.81-7.99-24.01-.02-47.96.96-72.6 2.94-43.39 4.33-88.49 12.09-138.25 23.13-.47.1-.95.18-1.41.22-2.58 1.59-4.96 3.39-7.05 5.39l-.52.56c-5.56 5.55-9.02 12.8-9.02 21.48v24.88zm32.6-81.73c22.5-4.01 43.9-7.38 64.59-10.14l-.03-45.02c0-15.1 6.18-28.85 16.12-38.78l.74-.67c9.89-9.55 23.31-15.44 38.04-15.44h162.9c15.11 0 28.84 6.18 38.77 16.12 9.94 9.94 16.13 23.68 16.13 38.77v45.36c10.97 1.68 22.12 3.55 33.48 5.63 8.4 1.31 16.94 2.7 25.66 4.17 3.81.65 7.55 1.52 11.19 2.61V42.42c0-5.45-2.26-10.44-5.87-14.06-3.61-3.61-8.6-5.87-14.06-5.87H69.24c-5.57 0-10.61 2.19-14.21 5.75-3.53 3.48-5.71 8.34-5.71 13.76v183.34c1.9-.47 3.83-.89 5.77-1.24zm206.77-20.65c29.94.14 59.19 1.78 85.13 4.96 7.55.79 15.18 1.7 22.86 2.7v-42.17c0-8.88-3.66-16.99-9.54-22.87-5.87-5.87-13.97-9.53-22.86-9.53h-162.9c-8.65 0-16.54 3.43-22.37 8.98l-.51.55c-5.87 5.87-9.52 13.98-9.52 22.87v42.15c36.75-5.25 78.88-7.84 119.71-7.64z"/>
                                            </svg>
                                            <p>3 beds</p>
                                        </div>
                                    </div>
                                    <p>The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.</p>
                                    <div className="services-button">
                                        <button aria-label="Discover More">
                                            Discover More
                                            <div className="border"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider">
                                <div className="slider-img">
                                    <img src={Simgfive} alt="slider"/>
                                    <div className="slider-img-price">
                                        <p>$400/Niight</p>
                                    </div>
                                </div>
                                <div className="slider-detail">
                                    <h3>Meadow Chalet</h3>
                                    <div className="slider-sub-detail">
                                        <div className="slider-svg">
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 82.26"><title>measurement</title>
                                                <path d="M122.88,39.45V79.56a2.7,2.7,0,0,1-.76,1.87l-.08.08a2.67,2.67,0,0,1-1.86.75H2.7A2.74,2.74,0,0,1,.83,81.5l-.12-.13A2.72,2.72,0,0,1,0,79.56V39.45a2.74,2.74,0,0,1,.76-1.87l.13-.12a2.72,2.72,0,0,1,1.81-.71H120.18a2.68,2.68,0,0,1,1.87.76l.07.07a2.68,2.68,0,0,1,.76,1.87ZM107.07,77.2V58.13h5.06V77.2h5.69V41.81H5.06V77.2h5.69V66.69h5.06V77.2h5.64V58.13h5.06V77.2h5.65V66.69h5.05V77.2h5.65V58.13h5V77.2h5.65V66.69h5V77.2h5.65V58.13h5.06V77.2H75V66.69H80V77.2h5.64V58.13h5.06V77.2h5.65V66.69h5V77.2ZM122.31,24a3.2,3.2,0,1,1-6.4-.08l.32-20.74a3.21,3.21,0,0,1,6.41.07L122.31,24ZM6.65,24a3.21,3.21,0,1,1-6.41-.08L.56,3.17A3.21,3.21,0,1,1,7,3.24L6.65,24Zm94.12.27a3.21,3.21,0,0,1-4.2-4.85l3-2.61H23.28l3,2.61a3.21,3.21,0,0,1-4.2,4.85L12.57,16a3.2,3.2,0,0,1-.33-4.52l.3-.3,9.27-8.26a3.22,3.22,0,1,1,4.28,4.8l-3,2.64H99.77l-3-2.64a3.22,3.22,0,0,1,4.28-4.8l9.28,8.26.29.3a3.2,3.2,0,0,1-.33,4.52l-9.54,8.26Z"/>
                                            </svg>
                                            <p>90 m</p>
                                        </div>
                                        <div className="slider-svg">
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 120.05"><defs></defs><title>guest-traveler</title>
                                                <path className="cls-1" d="M90.54,38.25c2.23-.75,4.58.44,6.13,2.3h18.46a.51.51,0,0,1,.51.51v4.86a.51.51,0,0,1-.51.51H111.9V62.62h-3.73V46.43H98.11a9.11,9.11,0,0,1-2.36,3.36V62.62H92V52.41a57.27,57.27,0,0,1-8,3.38,84.35,84.35,0,0,1-9,2.79,18,18,0,0,1-15.71-4,41.48,41.48,0,0,1-3.49-3.35l-.34-.36-3,17.75a62.39,62.39,0,0,0,7.2,4.17c7.78,3.63,14.18,6.63,15.55,18.85.25,2.14.14,14.68,0,20.84H86a1.8,1.8,0,0,1-.67-1.43v-1.89a4.77,4.77,0,0,1-4.71-4.76v-36a4.78,4.78,0,0,1,4.76-4.76h1.09a.91.91,0,0,0,0,.23l1.19,4.54a7.4,7.4,0,0,0,1.79,3.38A4.22,4.22,0,0,0,92.58,73h4.77v2.55c0,.41,1.92.73,2.32.73H106a.72.72,0,0,0,.73-.72V73h5a4.36,4.36,0,0,0,3.16-1.32,6.81,6.81,0,0,0,1.72-3.4l1-4.48a1,1,0,0,0,0-.24h.51a4.78,4.78,0,0,1,4.76,4.76v36.05a4.77,4.77,0,0,1-4.71,4.76V111a1.8,1.8,0,0,1-.67,1.43h5.38v7.58H0v-7.58H19.83c1.41-3.79,2.86-7.83,4.28-11.89,2.93-8.39,5.74-17,7.8-23.84a22,22,0,0,1-3.21-5.06A11.33,11.33,0,0,1,27.82,65l4.33-21.82c-1.55-.08-3.34-.54-4.8.1-2.83,1.24-7,6.52-9.47,9l-3.31,3.35c-2.55,2.58-4.25,5.44-8.15,5.13-4.84-.38-8.3-5.76-4.89-9.89l7.63-7.72c3.67-3.73,7.16-8.12,11.69-10.68C24.49,30.41,28.45,29,35,29.28c2.4,0,4.94.27,7.34.5l2.8.24c11,.71,16.12,6.5,20.12,11,1.77,2,3.29,3.7,4.94,4.49.78.37,2-.15,3.39-.73L83.76,41l6.78-2.72ZM61.15,112.47c.14-6.94.29-16.73.18-18.62-.09-1.35-1-4.92-2.42-5.57a59.35,59.35,0,0,0-5.83-2.17c-2.75-.91-5-1.83-7.72-2.58-2,6.58-4.68,14.52-7.57,22.09l-2.73,6.85Zm52.87,0H89.49a1.77,1.77,0,0,0,.67-1.43v-1.89h23.19V111a1.77,1.77,0,0,0,.67,1.43ZM88.91,100.24a.88.88,0,0,1,0-1.76h25.82a.88.88,0,0,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm26.73-18.75H88.5l.9,3.43a5.63,5.63,0,0,0,1.34,2.58,2.49,2.49,0,0,0,1.83.78h19.17a2.65,2.65,0,0,0,1.92-.81,5.09,5.09,0,0,0,1.24-2.51l.74-3.47ZM44.82.71a13.17,13.17,0,1,1-7.56,6.66A13.13,13.13,0,0,1,44.82.71Z"/>
                                            </svg>
                                            <p>5 Guests</p>
                                        </div>
                                        <div className="slider-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 457.03">
                                                <path fillRule="nonzero" d="M69.24 0h373.51c11.67 0 22.29 4.78 29.96 12.45 7.68 7.68 12.46 18.31 12.46 29.97v194.86c3.52 2.4 6.78 5.07 9.73 8.01l.66.73c10.16 10.47 16.44 24.05 16.44 40.25v159.51c0 6.21-5.04 11.25-11.25 11.25h-19.74c-5.29 0-9.73-3.66-10.93-8.59-7.11-20.29-14.12-31.98-23.44-38.19-9.51-6.32-22.84-7.9-42.23-7.88l-313.54.46c-13.73-.31-22.56 3.56-28.85 10.57-7.19 8.01-12.17 20.58-17.26 35.9-1.54 4.7-5.93 7.68-10.62 7.68l-22.89.05C5.04 457.03 0 451.99 0 445.78V280.95c0-15.17 5.99-27.77 15.6-37.39l.74-.67c3.16-3.06 6.7-5.79 10.53-8.18L26.82 42c0-11.65 4.79-22.15 12.49-29.75A42.525 42.525 0 0 1 69.24 0zm-46.1 328.3-.65-.02v106.26h3.66c5.16-14.51 10.82-26.75 19.17-36.07 10.7-11.93 24.85-18.5 45.98-18.03l313.11-.47c23.76-.02 40.67 2.3 54.61 11.58 12.54 8.35 21.61 21.62 29.81 42.99h.68V328.28l-.66.02H23.14zm-.65-22.47.65-.02h465.71l.66.02v-19.56c0-9.86-3.81-18.14-9.96-24.55l-.56-.52c-4.92-4.92-11.22-8.79-18.31-11.49-12.78-2.73-25.26-5.22-37.48-7.48-13.79-2.15-27.16-4.07-40.18-5.76a11.163 11.163 0 0 1-4.83-.21l-5.04-1.04c-43.12-5.28-82.66-7.96-121.81-7.99-24.01-.02-47.96.96-72.6 2.94-43.39 4.33-88.49 12.09-138.25 23.13-.47.1-.95.18-1.41.22-2.58 1.59-4.96 3.39-7.05 5.39l-.52.56c-5.56 5.55-9.02 12.8-9.02 21.48v24.88zm32.6-81.73c22.5-4.01 43.9-7.38 64.59-10.14l-.03-45.02c0-15.1 6.18-28.85 16.12-38.78l.74-.67c9.89-9.55 23.31-15.44 38.04-15.44h162.9c15.11 0 28.84 6.18 38.77 16.12 9.94 9.94 16.13 23.68 16.13 38.77v45.36c10.97 1.68 22.12 3.55 33.48 5.63 8.4 1.31 16.94 2.7 25.66 4.17 3.81.65 7.55 1.52 11.19 2.61V42.42c0-5.45-2.26-10.44-5.87-14.06-3.61-3.61-8.6-5.87-14.06-5.87H69.24c-5.57 0-10.61 2.19-14.21 5.75-3.53 3.48-5.71 8.34-5.71 13.76v183.34c1.9-.47 3.83-.89 5.77-1.24zm206.77-20.65c29.94.14 59.19 1.78 85.13 4.96 7.55.79 15.18 1.7 22.86 2.7v-42.17c0-8.88-3.66-16.99-9.54-22.87-5.87-5.87-13.97-9.53-22.86-9.53h-162.9c-8.65 0-16.54 3.43-22.37 8.98l-.51.55c-5.87 5.87-9.52 13.98-9.52 22.87v42.15c36.75-5.25 78.88-7.84 119.71-7.64z"/>
                                            </svg>
                                            <p>3 beds</p>
                                        </div>
                                    </div>
                                    <p>The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.</p>
                                    <div className="services-button">
                                        <button aria-label="Discover More">
                                            Discover More
                                            <div className="border"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}