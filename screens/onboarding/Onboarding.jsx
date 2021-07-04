import React, { useState } from 'react';
import { useAnimatedRef } from 'react-native-reanimated'
import { StyleSheet, View, Dimensions, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import { MMKV } from 'react-native-mmkv';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Onboarding = ({ navigation }) => {
    const scrollRef = useAnimatedRef();
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');
    const insets = useSafeAreaInsets();

    const setSliderPage = (event) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.round(x / width);
        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            });
        }
    };

    const { currentPage: pageIndex } = sliderState;

    const handleDotPress = (index) => {
        scrollRef.current.scrollTo({ x: ((index)*width), y: 0 });
        setSliderState({
            ...sliderState,
            currentPage: index,
        });
    }

    const handleScroll = () => {
        if (pageIndex !== 2) {
            scrollRef.current.scrollTo({x: ((pageIndex+1) * width), y: 0});
        } else {
            MMKV.set('show-login-only', true);
            navigation.navigate('Login');
        }
    }

    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : insets.top }}>
            <ScrollView
                style={{ flex: 1 }}
                horizontal={true}
                scrollEventThrottle={16}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    setSliderPage(event);
                }}
                ref={scrollRef}
            >
                <Screen1 width={width} height={height} />
                <Screen2 width={width} height={height} />
                <Screen3 width={width} height={height} navigation={navigation} />
            </ScrollView>
            <View style={styles.paginationWrapper}>
                {Array.from(Array(3).keys()).map((key, index) => (
                    <TouchableOpacity 
                        key={index} 
                        onPress={() => handleDotPress(index)}
                    >
                        <View 
                            style={[
                                styles.paginationDots, 
                                { 
                                    opacity: pageIndex === index ? 1 : 0.2 
                                }
                            ]} 
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <Icon 
                style={{ 
                    position: "absolute", 
                    top: 60, 
                    right: 30 
                }} 
                name="angle-right" 
                size={30} 
                color="#E3AC57" 
                onPress={() => handleScroll()}
            />
            <StatusBar style='light' backgroundColor="#4B38D3"/>
        </View>
    );
}

export default Onboarding;

const styles = StyleSheet.create({
    paginationWrapper: {
        position: 'absolute',
        top: 70,
        left: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#E3AC57',
        marginRight: 10,
    },
});