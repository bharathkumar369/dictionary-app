import React from "react";
import { View,Image,StyleSheet,TouchableOpacity } from "react-native";
// import dictionary from "../assets/dictionary"
import {useSelector,useDispatch} from "react-redux"
import { actions } from "../store/store";


const Navbar = () => {

    const toggle = useSelector((state)=>state.toggle)

    const dispatch = useDispatch();

    const handleToggle = () => {
        if(toggle){
            dispatch(actions.on());
        } else {
            dispatch(actions.off())
        }
    }

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
                    <TouchableOpacity onPress={()=>handleToggle}>
                        {
                            toggle ? (
                                <Image 
                                    source={require("./images/toggle-off-black.png")}
                                    style={styles.sideImage}
                                />
                            ) : (
                                <Image 
                                    source={require("./images/toggle-on-black.png")}
                                    style={styles.sideImage}
                                />
                            )
                        }
                    </TouchableOpacity>
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