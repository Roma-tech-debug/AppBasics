import React from "react";
import {View, Text, Linking, StyleSheet, Image, TouchableOpacity} from "react-native";

const CityPage = ({city, link, imageUri, description}) => {
 return(
    <View style={style.container}>
        <Image source={imageUri} style={style.Image} />

        <Text style={StyleSheet.Name}>{city}</Text>
        <Text style={style.description}>{description}</Text>
        <Text style={style.link}>Go to city page: {link}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <Text style={style.linkText}>Go to {city} Website </Text>
        </TouchableOpacity>
        
    </View>
 )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
     Image: {
        width: 200,
        height: 200,
        margin: 20,
        },
    Name: {
        fontSize: 30,
        fontWeight: 'bold',
         },
    description: {
        fontSize: 20,
        },
    link: {
        fontSize: 15,
        },
    linkText: {
        fontSize: 15,
        color: 'blue',
        },
    });
                            
export default CityPage;