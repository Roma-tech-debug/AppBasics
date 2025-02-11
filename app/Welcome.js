import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityPage from './CityPage'; 

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ tabBarStyle: styles.tabBar }}>
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
    backgroundColor: '#f0f8ff', // Light blue background
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
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
  },
  tabBar: {
    backgroundColor: '#007bff', // Blue tab background
    height: 60,
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Welcome;