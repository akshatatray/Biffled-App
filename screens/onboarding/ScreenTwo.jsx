import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, Platform } from 'react-native';

const ScreenTwo = ({ width, height }) => {
    return (
        <View style={[styles.container, { width, height }]}>
            <View 
                className="ScreenTwo"
                style={{
                    flex: 1,
                }}
            >
                <View
                    className="UpperScreenTwo" 
                    style={styles.upperScreen}
                >
                    <View style={{ minHeight: 50, width: "100%" }}></View>
                    <Text style={[styles.text, styles.heading]}>Enjoy endless {"\n"}meetups</Text>
                    <Text style={[styles.text, styles.description]}>Let’s swipe people with {"\n"}common interests.</Text>
                </View>
                <View 
                    className="LowerScreenTwo"
                    style={styles.lowerScreen}
                >
                    <Image style={{width: "100%", resizeMode: "contain"}} source={require('../../Assets/img/onboarding-2.png')}/>
                </View>
            </View>
        </View>
    );
}

export default ScreenTwo;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: Platform.OS === 'ios' ? 60 : 30,
        paddingBottom: 30,
        backgroundColor: "#FFFFFF",    
    },
    upperScreen: {
        flex: 2,
        justifyContent: "flex-start",
        alignItems: "flex-start",    
    },
    lowerScreen: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",    
    },
    text: {
        color: "#4B38D3",
        fontWeight: "300",
    },
    heading: {
        fontSize: 36,
        marginBottom: 10,
    },
    description: {
        fontSize: 20,
        color: "#AEA9F0",
    },
});