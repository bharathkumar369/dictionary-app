import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { useSelector } from "react-redux"


const Description = () => {

    const data = useSelector((state)=>state.search)
   // const isLoading = useSelector((state)=>state.search.loading)

    console.log("Data",data);

    const word = data?.[0]?.word
    return (
        <View>
            {data && (
                <Text>{data[0].word}</Text>
            )}
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Description;