import React, { useState } from "react";
import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'react-native-linear-gradient';  // Import LinearGradient

const CityPage = ({ city, link, imageUri, description }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <LinearGradient
      colors={['#00c6ff', '#0072ff']} // Gradient colors
      style={styles.container}
    >
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.name}>{city}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity
        onPress={() => Linking.openURL(link)}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={[styles.button, isPressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>Visit {city} Website</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 15,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonPressed: {
    backgroundColor: "#0056b3",
    transform: [{ scale: 0.95 }],
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CityPage;