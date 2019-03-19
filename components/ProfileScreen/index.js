import React, { Component } from "react";
import Profile from "./Profile.js";
import { createAppContainer, createStackNavigator } from "react-navigation";
import EditScreenOne from "./EditScreenOne.js";
export default DrawNav = createStackNavigator({
	Profile: { screen: Profile },
	EditScreenOne: { screen: EditScreenOne },
});