import React from "react";
import { View,Image } from "react-native";
import dictionary from "../assets/dictionary"


const Navbar = () => {
    return(
        <main>
            <Image source={dictionary}/>
        </main>
    )
}
export default Navbar;