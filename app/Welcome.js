import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityPage from './CityPage'; 

const Tab = createBottomTabNavigator();

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
      <View style={styles.signInContainer}>
        <Text style={styles.label}>Sign In</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <Button title="Sign In" color="#4682b4" />
      </View>
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
  signInContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
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

export default Welcome;
