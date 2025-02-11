import React from "react";
import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from "react-native";

const CityPage = ({ city, link, imageUri, description }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />

      <Text style={styles.name}>{city}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity onPress={() => Linking.openURL(link)} style={styles.button}>
        <Text style={styles.buttonText}>Visit {city} Website</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CityPage;