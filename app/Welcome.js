import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityPage from './CityPage'; 

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Calgary">
      {() => <CityPage city="Calgary" link="https://www.calgary.ca/home.html" imageUri={require('../img/Calgary.jpg')} description="Calgary is the largest city in Alberta." />}
    </Tab.Screen>
    <Tab.Screen name="Edmonton">
      {() => <CityPage city="Edmonton" link="https://www.edmonton.ca/" imageUri={require('../img/Edmonton.jpg')} description="Edmonton is the capital city of Alberta." />}
    </Tab.Screen>
  </Tab.Navigator>
);

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My App Basics!</Text>
      <View style={styles.bottomTabContainer}>
        <BottomTabs />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomTabContainer: {
    flex: 1,
  }
});

export default Welcome;
