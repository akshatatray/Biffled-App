import React, { useState, useEffect } from 'react';
import OnboardingStack from "./OnboardingStack";
import AuthStack from "./AuthStack";

import { MMKV } from 'react-native-mmkv';

const Routes = () => {
    const [loading, setLoading] = useState(true);
    const [showLoginOnly, setShowLoginOnly] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const res = MMKV.getBoolean('show-login-only');
                setShowLoginOnly(res);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return null;
    }

    return (
        showLoginOnly === true ? (<AuthStack />) : (<OnboardingStack />)
    );
}

export default Routes;