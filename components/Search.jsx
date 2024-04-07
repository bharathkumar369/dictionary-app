import React from "react";
import { View,Text,StyleSheet,Image, TextInput,TouchableOpacity } from "react-native"


const Search = () => {
    return(
        <View >
            <View style={styles.input}>
                <TextInput
                    placeholder="Search word"
                    
                />
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image
                            source={require("./images/search-color.png")}
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>
                </View>
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
        borderRadius:10,
        position:"relative"
    },
    searchIcon:{
        height:25,
        width:25
    },
    imageContainer:{
        position:"absolute",
        right:10,
        top:5
    }
})

export default Search;

