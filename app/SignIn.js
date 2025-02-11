import React, { useState } from 'react';
import { 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View, 
  Alert, 
  StyleSheet 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';  // Import LinearGradient

// Regular expressions for validation
const usernameRegex = /^.{5,}$/;  
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleSignIn = () => {
    if (!usernameRegex.test(username)) {
      Alert.alert('Invalid Username', 'Username must be at least 5 characters long.');
      return;
    }
    if (!passwordRegex.test(password)) {
      Alert.alert('Invalid Password', 'Password must have 8+ characters, an uppercase, a lowercase, a number, and a special character.');
      return;
    }

    const credentials = require('./credentials.json');  
    const user = credentials.users.find((cred) => cred.username === username);

    if (!user) {
      Alert.alert('Error', 'Username not found.');
      return;
    }

    if (user.password !== password) {
      Alert.alert('Error', 'Incorrect password.');
      return;
    }

    navigation.navigate('Welcome');
  };

  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']}  // Gradient from purple to blue
      style={styles.container}
    >
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
      />

      <TouchableOpacity 
        style={[styles.button, isButtonPressed && styles.buttonPressed]} 
        onPress={handleSignIn} 
        onPressIn={() => setIsButtonPressed(true)} 
        onPressOut={() => setIsButtonPressed(false)}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    elevation: 5,  // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonPressed: {
    backgroundColor: '#0056b3',  // Darker shade on press
    elevation: 2,  // Reduced shadow on press
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignIn;