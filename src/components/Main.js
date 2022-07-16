import React from "react";
import "../components/Main.css"
import Footer from "../pages/Footer/Footer";
import Section1 from "../pages/Section1/Section1";
import Section2 from "../pages/Section2/Section2";
import Section3 from "../pages/Section3/Section3";
import Section4 from "../pages/Section4/Section4";

export function Main(){
    return(
        <div className="main">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Footer/>
        </div>
    )
}