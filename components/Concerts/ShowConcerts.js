import React, { Component } from 'react';
import { StatusBar, Image } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
export default class ShowConcerts extends Component {
	render() {
		return (
				<Container>
					<Header style={{paddingTop:18}}>
						<Left>
							<Button transparent onPress={ () => this.props.navigation.openDrawer()}>
								<Icon name="arrow-back" />
							</Button>
						</Left>
						<Body>
							<Title>Concerts</Title>
						</Body>
						<Right />
					</Header>
					<Content padder>
						<Card>
			         		<CardItem header>
			         			<Text>Chonda Pierce: Still Laughing Tour</Text>    			
			         		</CardItem>
			         		<CardItem>
			         			<Body>
			         				<Image source={{ uri: "http://c.kloveair1.com/common/thumbnail.aspx?w=325&h=99999&f=/art/events/386219.jpg"}} style={{height: 250, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }} />
			         				<Text>
			         					<Icon name="time" /> Saturday, Apr 6 2019, 6:00 PM.
			         				</Text>
			         				<Text>
			         					<Icon name="navigate" /> Hoyt Sherman Place,
			         				</Text>
			         				<Text>	
										1501 Woodland Ave, 
									</Text>
									<Text>	
										Des Moines, Iowa 50309
			         				</Text>

			         			</Body>
			         		</CardItem>
			         		<CardItem footer button onPress={() => alert("Success!")}>

			         			<Text>Get Tickets</Text>
			         			<Right>
			         				<Icon name="arrow-forward" />
			         			</Right>
			         		</CardItem>
			         	</Card>
					</Content>
				</Container>
			)
	}
} 