import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import TripsScreen from './src/screens/TripsScreen';
import TripScreen from './src/screens/TripScreen';
import AddTripScreen from './src/screens/AddTripScreen';
import AddPointScreen from './src/screens/AddPointScreen'


const AppNavigator = createStackNavigator({

  Home: HomeScreen,
  Trips: TripsScreen,
  Trip: TripScreen,
  AddPointScreen: AddPointScreen,
  Addtrip: AddTripScreen

}, { initialRouteName: 'Addtrip' });

export default createAppContainer(AppNavigator);
