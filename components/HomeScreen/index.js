import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
/*import MainScreenNavigator from "../ChatScreen/index.js";*/
import Profile from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import Login from "../Authentication/Login.js";
import Account from "../Authentication/Account.js";
import SignUpView from "../Authentication/Signup.js";
import UserProfileBasicInfo from '../Authentication/UserProfile/UserProfileBasicInfo';
import ShowConcerts from '../Concerts/ShowConcerts.js';
import { createDrawerNavigator, createAppContainer } from "react-navigation";

const HomeScreenRouter = createAppContainer(
	createDrawerNavigator({
		Home: { screen: HomeScreen },
		/*Chat: { screen: MainScreenNavigator },*/
    	Profile: { screen: Profile },
    	Login: { screen: Login },
    	Account: { screen: Account },
    	UserProfileBasicInfo: { screen: UserProfileBasicInfo },
    	SignUpView: { screen: SignUpView },
    	ShowConcerts: { screen: ShowConcerts },
	},
	{
	   contentComponent: props => <SideBar {...props} />
	})
);
export default HomeScreenRouter;