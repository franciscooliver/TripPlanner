import React, {Component} from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import TripsScreen from './src/screens/TripsScreen';
import TripScreen from './src/screens/TripScreen';
import Addtrip from './src/screens/AddTrip'


const AppNavigator = createStackNavigator({

  Home: HomeScreen,
  Trips:TripsScreen,
  Trip: TripScreen,
  Addtrip: Addtrip

}, { initialRouteName: 'Trips'});

export default createAppContainer( AppNavigator );
