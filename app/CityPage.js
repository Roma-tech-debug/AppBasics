import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityPage from './CityPage'; 

const Tab = createBottomTabNavigator();

const SignInScreen = () => {
  return (
    <View style={styles.signInContainer}>
      <Text style={styles.signInTitle}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign In" color="#007bff" />
    </View>
  );
};

const BottomTabs = () => (
  <Tab.Navigator 
    screenOptions={{
      tabBarStyle: styles.tabBar,
      tabBarActiveTintColor: '#ff6347', // Active tab color
      tabBarInactiveTintColor: '#ffffff', // Inactive tab color
      tabBarLabelStyle: styles.tabLabel,
      tabBarActiveBackgroundColor: '#4682b4', // Active background color
      tabBarInactiveBackgroundColor: '#1e90ff', // Inactive background color
    }}
  >
    <Tab.Screen 
      name="Sign In"
      component={SignInScreen}
      options={{ tabBarLabelStyle: styles.tabLabel }}
    />
    <Tab.Screen 
      name="Calgary"
      options={{ tabBarLabelStyle: styles.tabLabel }}
    >
      {() => (
        <CityPage 
          city="Calgary" 
          link="https://www.calgary.ca/home.html" 
          imageUri={require('../img/Calgary.jpg')} 
          description="Calgary is the largest city in Alberta." 
        />
      )}
    </Tab.Screen>
    <Tab.Screen 
      name="Edmonton"
      options={{ tabBarLabelStyle: styles.tabLabel }}
    >
      {() => (
        <CityPage 
          city="Edmonton" 
          link="https://www.edmonton.ca/" 
          imageUri={require('../img/Edmonton.jpg')} 
          description="Edmonton is the capital city of Alberta." 
        />
      )}
    </Tab.Screen>
  </Tab.Navigator>
);

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My App Basics!</Text>
      <Text style={styles.subText}>
        Explore different cities in Alberta by selecting a tab below.
      </Text>
      <View style={styles.bottomTabContainer}>
        <BottomTabs />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7ff', // Light pastel blue background
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  signInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  signInTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  bottomTabContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  tabBar: {
    backgroundColor: '#1e90ff', // Slightly darker blue tab background
    height: 60,
    borderTopWidth: 2,
    borderTopColor: '#4682b4', // Adding border to give separation
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingBottom: 5, // Slight space below label for neatness
  },
  activeTabStyle: {
    backgroundColor: '#ff6347', // Red when active
  },
});

export default CityPage;