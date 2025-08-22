import { FontAwesome5 } from '@expo/vector-icons';
import { authenticateAsync } from 'expo-local-authentication';
import { Slot } from 'expo-router';
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function BiometricProtectedLayout() {
    const [unlocked, setUnlocked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const authenticate = async () => {
        setIsLoading(true)
        const res = await authenticateAsync();
        console.log(res)
        if (res.success) {
            setUnlocked(true)
        }
        setIsLoading(false)
    }


    useEffect(() => {
        authenticate();
    }, [])


    const handleRender = () => {
        if (isLoading) return (<ActivityIndicator size={'large'} />)
        if (!unlocked) return (
            <TouchableOpacity style={styles.authPressContainer} onPress={authenticate}>
                <FontAwesome5 name='fingerprint' size={54} color='orange' />
                <Text style={styles.authText}>Try Again</Text>
            </TouchableOpacity>
        )
        return <Slot />
    }



    return (
        <View style={styles.mainContainer}>
            {handleRender()}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    authPressContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 30,
    },
    authText: {
        fontWeight: '800',
        fontSize: 18,
    }

})