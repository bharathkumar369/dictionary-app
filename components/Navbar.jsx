import React from "react";
import { View,Image,StyleSheet } from "react-native";
// import dictionary from "../assets/dictionary"


const Navbar = () => {
    return(
        <View style={styles.container}>
            <View>
                <Image
                    source={require("./images/dictionary.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.align}>
                <View>
                    <Image
                        source={require("./images/toggle-off-white.png")}
                        style={styles.sideImage}
                    />
                </View>
                <View>
                    <Image
                            source={require("./images/moon.png")}
                            style = {styles.sideImage}
                        />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height:60,
        width:60,
    },
    sideImage:{
        height:40,
        width:40
    },
    container:{
        paddingHorizontal:20,

        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between" ,
        alignItems:"center"
    },
    align:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between" ,
        gap:20
    }
})
export default Navbar;