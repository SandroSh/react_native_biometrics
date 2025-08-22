import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'




export default function ProtectedScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.buttonText}>This is protected info. </Text>
      <Link href={'/protected/second'} asChild>
        <TouchableOpacity style={styles.button}>
          <Text >Go to Inner Protected Screen</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}


export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: 'orange',
    padding: 30,
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 18,
    color: 'orange'
  }
})