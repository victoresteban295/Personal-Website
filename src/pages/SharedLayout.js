import React from "react";
import {Outlet} from "react-router-dom";

import InfoCard from "../components/InfoCard";
import Navbar from "../components/Navbar";

export default function SharedLayout() {
    return(
        <div>
            <Navbar />
            <div className="info-container">
                <InfoCard />
                <Outlet />
            </div>
        </div>
        
    )
}