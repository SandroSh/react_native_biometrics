import { FontAwesome5 } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '.'

const InnerSecuredPage = () => {
    return (
        <View>
            <Text>InnerSecuredPage</Text>
            <Link href={'/protected'} asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}><FontAwesome5 name='arrow-left' size={54} color='white' /></Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default InnerSecuredPage