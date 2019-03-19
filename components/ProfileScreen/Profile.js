import React from "react";
import { AppRegistry, Alert, Image } from "react-native";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { StackNavigator, createStackNavigator } from "react-navigation"; 
import EditScreenOne from "./EditScreenOne.js";
import EditScreenTwo from "./EditScreenTwo.js";
export default class Profile extends React.Component { 
	componentDidMount() { 
		Alert.alert("No Users Found", "Oops, Looks like you are not signed in");
	 }
	 render() { 
	 	return ( 
	 		<Container>
	 			<Content padder>
	 				<Card>
	 					<CardItem header>
	 						<Icon active name="paper-plane" />
	 						<Text>About Artist</Text>
	 						{/*<Right>
	 							<Icon name="close" />
	 						</Right>*/}
	 					</CardItem>
	 					<CardItem>
	 						<Body>
	 							<Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/GaudenzioFerrari_StorieCristo_Varallo2.jpg/255px-GaudenzioFerrari_StorieCristo_Varallo2.jpg"}} style={{height: 250, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }} />
	 							<Text>
	 								Canonical gospels: The four canonical gospels (Matthew, Mark, Luke, and John) are the foremost sources for the life and message of Jesus. However, other parts of the New Testament also include references to key episodes in his life, such as the Last Supper in 1 Corinthians 11:23. Acts of the Apostles (Acts 10:37–38 and Acts 19) refers to the early ministry of Jesus and its anticipation by John the Baptist. Acts 1:1–11 says more about the Ascension of Jesus (also mentioned in 1 Timothy 3:16) than the canonical gospels do. In the undisputed Pauline letters, which were written earlier than the gospels, the words or instructions of Jesus are cited several times (1 Corinthians 7:10–11, 9:14, 11:23–25, 2 Corinthians 12:9). 
	 							</Text>
	 						</Body>
	 					</CardItem>
	 					<CardItem footer>
	 						<Button rounded info onPress={() => this.props.navigation.navigate("Home")}>
	 							<Text>Go Back</Text>
	 						</Button>
	 					</CardItem>
	 				</Card>
	 				<Button full rounded primary
	 						style={{ marginTop: 10 }}
	 						onPress={() => this.props.navigation.navigate("EditScreenOne")}>
		 					<Text>Goto EditScreen One</Text>
	 				</Button>
	 			</Content>
	 		</Container>
	 		);
	 	}
}
Profile.navigationOptions = ({ navigation }) => ({
	header: (
		<Header style={{paddingTop:18}}>
			<Left>
				{/*<Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
					<Icon name="menu" />
				</Button>*/}
				<Button transparent onPress={ () => navigation.openDrawer()}>
					<Icon name="menu" />
				</Button>
			</Left>
			<Body>
				<Title>Profile</Title>
			</Body>
			<Right />
		</Header>
		)
}); 