import React from "react";
import Navbar from "./Navbar"
import Hero from "./HeroSection";
import Appsection from "./AppSection";
import Card from "./CardSection";
import Footer from "./Footer";



const App = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Card/>
            <Appsection/>
            <Footer/> 
        </div>
    )
}

export default App;