import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

import Auth0 from "react-native-auth0";
import Config from "react-native-config";
import SInfo from "react-native-sensitive-info";

/*const auth0 = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID
});*/

/*const auth0 = new Auth0({
  domain: 'watermelonapps.au.auth0.com',
  clientId: 'BNzhSMsrdlwnMXPv9nuRpfZ4Ug2FmES5'
});
*/
import {
  headerColorStyle,
  headerTextColorStyle,
  buttonStyle
} from "./styles/colors";

import styles from "./styles/Account";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from 'react-native-dotenv';
const auth0 = new Auth0.init(AUTH0_DOMAIN, AUTH0_CLIENT_ID);
console.log(AUTH0_DOMAIN);
export default class Account extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Account",
      headerStyle: {
        backgroundColor: headerColorStyle
      },
      headerTitleStyle: {
        color: headerTextColorStyle
      }
    };
  };

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");
    const picture = navigation.getParam("picture");

    return (
      <View style={styles.container}>
        {name && (
          <View style={styles.profileContainer}>
            <Image style={styles.picture} source={{ uri: picture }} />

            <Text style={styles.usernameText}>{name}</Text>
            <Button onPress={this.logout} title="Logout" color={buttonStyle} />
          </View>
        )}
      </View>
    );
  }

  logout = () => {
    console.log("logging out...");

    SInfo.deleteItem("accessToken", {});
    SInfo.deleteItem("refreshToken", {});

    this.gotoLogin();

    auth0.webAuth
      .clearSession()
      .then(res => {
        console.log("clear session ok");
        console.log(res);
      })
      .catch(err => {
        console.log("error clearing session.");
        console.log(err);
      });
  };

  gotoLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: "Login"
        })
      ]
    });

    this.props.navigation.dispatch(resetAction);
  };
}