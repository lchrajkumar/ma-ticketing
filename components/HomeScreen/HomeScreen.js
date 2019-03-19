import React, { Component } from 'react';
import { StatusBar, Image } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
export default class HomeScreen extends Component {
	render() {
		return (
				<Container>
					<Header style={{paddingTop:18}}>
						<Left>
							{/*<Button transparent onPress={ () => this.props.navigation.navigate("DrawerOpen") }>
								<Icon name="menu" />
							</Button>*/}
							<Button transparent onPress={ () => this.props.navigation.openDrawer()}>
								<Icon name="menu" />
							</Button>
						</Left>
						<Body>
							<Title>Home Screen</Title>
						</Body>
						<Right />
					</Header>
					<Content padder>
						<Card>
				            <CardItem header>
				              <Text>Jesus Christ</Text>
				            </CardItem>
				            <CardItem>
				              <Body>
				                <Text>
				                  Jesus(c. 4 BC – c. AD 30 / 33), also referred to as Jesus of Nazareth and Jesus Christ, was a first-century Jewish preacher and religious leader.
				                </Text>
				                <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Cefal%C3%B9_Pantocrator_retouched.jpg/220px-Cefal%C3%B9_Pantocrator_retouched.jpg"}} style={{height: 250, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }} />
				              </Body>
				            </CardItem>
				            <CardItem footer button onPress={() => this.props.navigation.navigate("Profile")}>
				              <Text>Click here!</Text>
				              <Right>
				                <Icon name="arrow-forward" />
				              </Right>
				            </CardItem>
			         	</Card>
			         	<Card>
			         		<CardItem header>
			         			<Text>Chonda Pierce</Text>
			         		</CardItem>
			         		<CardItem>
			         			<Body>
			         				<Text>
			         					Chonda Courtney Pierce is an American comedian often billed as “The Queen of Clean.” She is the RIAA’s most-awarded female comic in history. Billboard magazine dubbed her “the country comic, ” as she has been making audiences laugh for decades simply by sharing stories about her southern upbringing.
			         				</Text>
			         				<Image source={{ uri: "http://www.gstatic.com/tv/thumb/persons/584572/584572_v9_ba.jpg"}}  style={{height: 250, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }}/>
			         			</Body>
			         		</CardItem>
			         		<CardItem footer button onPress={() => this.props.navigation.navigate("ShowConcerts")}>
			         			<Text>Show Concerts</Text>
			         			<Right>
			         				<Icon name="arrow-forward" />
			         			</Right>
			         		</CardItem>
			         	</Card>
			         	{/*<Card>
			         		<CardItem header>
			         			<Text>Lowa</Text>
			         		</CardItem>
			         		<CardItem>
			         			<Body>
			         				<Text>
			         				</Text>
			         				<Image />
			         			</Body>
			         		</CardItem>
			         		<CardItem footer>
			         			<Text>Click here!</Text>
			         			<Right>
			         				<Icon name="arrow-forward" />
			         			</Right>
			         		</CardItem>
			         	</Card>
			         	<Card>
			         		<CardItem header>
			         			<Text></Text>
			         		</CardItem>
			         		<CardItem>
			         			<Body>
			         				<Text>
			         				</Text>
			         				<Image />
			         			</Body>
			         		</CardItem>
			         		<CardItem footer>
			         			<Text>Click here!</Text>
			         			<Right>
			         				<Icon name="arrow-forward" />
			         			</Right>
			         		</CardItem>
			         	</Card>*/}
						<Button full rounded success style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate("Profile")}>
							<Text>GoTo Profile</Text>
						</Button>
					</Content>
				</Container>								

			);
	}
}