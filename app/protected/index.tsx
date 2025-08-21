import React from 'react'
import { StyleSheet, Text, View } from 'react-native'




export default function ProtectedScreen() {
  return (
    <View  style={styles.mainContainer}>
      <Text style={styles.buttonText}>This is protected info. </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 18,
    color:'orange'
  }
})