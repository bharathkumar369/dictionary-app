import React from "react";
import { View,Text,StyleSheet } from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";
import Search from "./Search";
import Desctription from "./Description";

const Dictionary = () => {
    return(
        <View>
            <Search/>
            <Desctription />
        </View>
    )
}
export default Dictionary;