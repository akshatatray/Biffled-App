import React from 'react';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';

const ScreenOne = ({ width, height }) => {
    return (
        <View style={[styles.container, { width, height }]}>
            <View 
                className="ScreenOne"
                style={{flex: 1,}}
            >
                <View
                    className="UpperScreenOne" 
                    style={styles.upperScreen}
                >
                    <View style={{ minHeight: 50, width: "100%" }}></View>
                    <Text style={[styles.text, styles.heading]}>Find new friends</Text>
                    <Text style={[styles.text, styles.description]}>Let’s swipe people with {"\n"}common interests.</Text>
                </View>
                <View 
                    className="LowerScreenOne"
                    style={styles.lowerScreen}
                >
                    <Image style={{ height: "100%", resizeMode: "contain" }} source={require('../../Assets/img/onboarding-1.png')}/>
                </View>
            </View>
        </View>
    );
}

export default ScreenOne;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: Platform.OS === 'ios' ? 60 : 30,
        backgroundColor: "#4B38D3",    
    },
    upperScreen: {
        flex: 2,
        justifyContent: "flex-start",
        alignItems: "flex-start",    
    },
    lowerScreen: {
        flex: 3,
        justifyContent: "flex-end",
        alignItems: "center",    
    },
    text: {
        color: "white",
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