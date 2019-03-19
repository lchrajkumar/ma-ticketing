import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from "expo";
import HomeScreen from "./components/HomeScreen/index.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    
      if(!this.state.isReady) {
        return (
            <AppLoading
              startAsync={this._cacheResourcesAsync}
              onFinish={() => this.setState({ isReady: true })}
              onError={console.warn}
            />
          );
      }
    
    return <HomeScreen />;
  }
}

