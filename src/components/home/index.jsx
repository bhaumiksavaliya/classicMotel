import React from "react";
import Herobanner from "./herobanner";
import Motelservices from "./motelService";
import Outerview from "./outerview";
import Services from "./service";

function Home() {
    return (
        <div>
            <Herobanner />
            <Outerview />
            <Services />
            <Motelservices />
        </div>
    );
}

export default Home;
