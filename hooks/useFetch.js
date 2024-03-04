import React, { useEffect } from "react";
import { View } from "react-native";
import axios from "axios";

const UseFetch = () => {

    const [data,setData] = React.useState("")
    const [isLoading,setIsLoading]  = React.useState(false)
    const [error,setError] = React.useState(null)

    const fetchData = async(word) => {
        setIsLoading(true)
        try {
            const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            setData(res.data);
            setIsLoading(false)
        } catch (error) {
            setError(error);
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        fetchData();
    },[])

    console.log(data)

    return {data, fetchData,isLoading,error}
}
export default UseFetch;