import React from "react";
import { View,Text,StyleSheet,Image, TextInput,TouchableOpacity, } from "react-native"
import { useFormik } from "formik";
import * as Yup from "yup";
//import { data } from "../hooks/useFetch";
import { useSelector,useDispatch} from "react-redux";
import { fetchData } from "../store/store.js";

const Search = () => {

    //const [search,setSearch] = React.useState("keyboard")
    const data = useSelector((state) =>state.data);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            search:data.word || ""
        },
        validationSchema: Yup.object({
            search: Yup.string().required("Required").max(46,"Must be 45 characters or less ")
        }),
        onSubmit: (values) => {
            dispatch(fetchData(values.search));
        }
    });

    return(
        <View >
            <View style={styles.input}>
                <TextInput
                    placeholder="Search word"
                    type="text"
                    id="search"
                    name="search"
                    value={formik.values.search}
                    onChangeText={formik.handleChange('search')}
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
            {formik.errors.search ? <Text style={styles.error}>{formik.errors.search}</Text> : null}
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
    },
    error:{
        paddingHorizontal:20,
        color:"red",
        marginTop:-10
    }
})

export default Search;

