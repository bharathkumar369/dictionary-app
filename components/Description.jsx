import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { useSelector } from "react-redux"

const Description = () => {

    const data = useSelector((state)=>state.search)

    return (
        <View>
            {data ? (
                <View>
                    {data && data.length > 0 && data[0].word && (
                        <Text>{data[0].word}</Text>
                    )}
                    {/* <Text>{data[0].meanings[0]?.partOfSpeech}</Text>
                    <Text>{data[0].meanings[0]?.definitions[0]?.definition}</Text> */}
                </View>
            ) : (
                <Text>No data Available</Text>
            )}
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