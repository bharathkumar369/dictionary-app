import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { useSelector } from "react-redux"

const Description = () => {

    const data = useSelector((state)=>state.data)

    return (
        <View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Description;