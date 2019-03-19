import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Profile", "Login", "Account", "SignUpView", "ShowConcerts" ];
export default class SideBar extends React.Component {
	render() {
		return (
				<Container>
					<Content>
						<Image source={{ uri: "https://data.whicdn.com/images/141633044/superthumb.jpg?t=1413241192"}} style={{height: 250, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }} />
						<Image square style={{ height: 240, width: 280 }} source={{uri: "https://sayingimages.com/wp-content/uploads/jesus-christ-tomorrow-quotes.jpg"}} />
						<List dataArray={ routes } renderRow={data => {
							return (
										<ListItem button onPress={() => this.props.navigation.navigate(data)}>
											<Text>{ data }</Text>
										</ListItem>
									);
						}}
						/>
					</Content>
				</Container>
			);
	}
}