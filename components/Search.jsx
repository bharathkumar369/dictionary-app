import React from "react";
import { View,Text,StyleSheet,Image, TextInput } from "react-native"

import UseFetch from "../hooks/useFetch";

const Search = () => {
    return(
        <View>
            <View style={styles.input}>
                <TextInput
                    placeholder="Search word"
                    
                />
            </View>
            <View>
                <Image
                    source={require("./images/search-color.png")}
                    style={styles.sideImage}
                />
            </View>
        </View>
    )
}   

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:"blue",
        fontWeight:"bold",
        margin:10,
        
    },
    input:{
        padding:10,
        height:40,
        margin:12,
        borderWidth:1,
        borderRadius:10
    }
})

export default Search;

