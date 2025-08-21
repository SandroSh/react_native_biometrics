import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";




export default function Index() {

  return (
    <View style={styles.mainContainer} >
      <Link href="/protected" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Authenticate</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
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
  }
})