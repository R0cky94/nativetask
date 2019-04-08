import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header = ({title}) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
};

export default Header;
const styles = StyleSheet.create({
    headerContainer: {
        height: 55,
        backgroundColor:"#4953f6",
        paddingHorizontal:15,
        justifyContent:"center"
    },
    headerTitle:{
        fontSize:22,
        color:"#f6ecf9",
    }
});