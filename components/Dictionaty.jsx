import React from "react";
import { View,Text,StyleSheet } from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";
import Search from "./Search";
import Desctription from "./Description";
import Navbar from "./Navbar";


const Dictionary = () => {
    return(
        <View>
            <Navbar/>
            <Search/>
            <Desctription />
        </View>
    )
}
export default Dictionary;