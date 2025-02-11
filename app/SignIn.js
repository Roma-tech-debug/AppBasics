import React, { useState } from 'react';
import { Text, TextInput, Button, View, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Regular expressions for validation
const usernameRegex = /^.{5,}$/;  // Username should be at least 5 characters
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password validation

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {

    if (!usernameRegex.test(username)) {
      Alert.alert('Username must be at least 5 characters long');
      return;
    }
    if (!passwordRegex.test(password)) {
      Alert.alert('Password must be at least 8 characters, uppercase, lowercase, number, and special character');
      return;
    }

    const credentials = require('./credentials.json');  

    const user = credentials.users.find((cred) => cred.username === username);

    if (!user) {
      Alert.alert('Username not found');
      return;
    }

    if (user.password !== password) {
      Alert.alert('Incorrect password');
      return;
    }

    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default SignIn;
