import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Register = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.upper}>
                    {/* <Image style={{ height: "100%", resizeMode: "contain" }} source={require('../../Assets/img/register.png')}/> */}
            </View>
            <View style={styles.lower}>
                <TextInput
                    placeholder="Full Name"
                    style={styles.input}
                    keyboardType="email-address"
                    placeholderTextColor="#707376"
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    keyboardType="email-address"
                    placeholderTextColor="#707376"
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    keyboardType="default"
                    secureTextEntry={true}
                    placeholderTextColor="#707376"
                />
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{ 
                        position: "absolute", 
                        bottom: 50, 
                        flexDirection: "row" 
                    }}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Text style={{ fontWeight: "bold", color: "#404040" }}>Already have an account? </Text>
                    <Text style={{ fontWeight: "bold", color: "#4B38D3" }}>Login!</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" backgroundColor="#4B38D3" />
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 20,
    },
    lower: {
        flex: 3,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: 20,
    },
    input: {
        width: "100%",
        backgroundColor: "#E9EFF5",
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 7,
        borderRadius: 5
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#4B38D3",
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginTop: 21,
        marginBottom: 14,
        borderRadius: 5
    },
    btnText: {
        color: "white",
        fontWeight: "bold"
    }
})
