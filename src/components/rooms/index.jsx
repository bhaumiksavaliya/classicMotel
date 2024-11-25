import React from "react";
import RoomHeroBanner from "./roomherobanner";
import RoomAavailability from "./roomaavailability";
import RoomDetails from "./roomdetails";
import Lodges from "./lodges";
import Suits from "./suits";
function Rooms() {
    return (
        
          <>
            <RoomHeroBanner/>
            <RoomAavailability/>
            <RoomDetails/>
            <Lodges/>
            <Suits/>
          </>
        
    );
}

export default Rooms;