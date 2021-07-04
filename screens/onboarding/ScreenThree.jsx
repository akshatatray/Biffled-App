import React from 'react';
import { StyleSheet, View, Text, Image, Platform, TouchableOpacity } from 'react-native';
import { MMKV } from 'react-native-mmkv';

const ScreenThree = ({ width, height, navigation }) => {
    const handleGetStarted = async () => {
        MMKV.set('show-login-only', true);
        navigation.navigate('Login');
    }
    return (
        <View style={[styles.container, { width, height }]}>
            <View 
                className="ScreenThree"
                style={{
                    flex: 1,
                }}
            >
                <View
                    className="UpperScreenThree" 
                    style={styles.upperScreen}
                >
                    <View style={{ minHeight: 50, width: "100%" }}></View>
                    <Text style={[styles.text, styles.heading]}>Get Biffled!</Text>
                    <Text style={[styles.text, styles.description]}>Launch new friendships.</Text>
                </View>
                <View 
                    className="LowerScreenThree"
                    style={styles.lowerScreen}
                >
                    <Image style={{ height: "100%", width: "100%", resizeMode: "contain" }} source={require('../../assets/img/onboarding-3.png')}/>
                    <View style={styles.btnView}>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => {
                                handleGetStarted();
                            }}
                        >
                            <Text style={styles.btnText}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ScreenThree;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 60 : 30,
        paddingBottom: 45,
        backgroundColor: "#4B38D3",
    },
    upperScreen: {
        flex: 2,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    lowerScreen: {
        flex: 7,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        color: "white",
        fontWeight: "300",
        paddingLeft: 30
    },
    heading: {
        fontSize: 36,
        marginBottom: 5,
    },
    description: {
        fontSize: 20,
        color: "#AEA9F0",
    },
    btn: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 25
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#4B38D3",
    },
    btnView: {
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center",
        position: "absolute",
        bottom: 15,
    }
});
