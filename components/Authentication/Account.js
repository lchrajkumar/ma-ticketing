import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Left, Right, Body, Title, Text } from 'native-base';
import UserProfileBasicInfo from './UserProfile/UserProfileBasicInfo';
export default class FooterTabsIconExample extends Component {
	render() {
		return (
			<Container>
			<Header>
				<Left>
				<Button transparent onPress={ () => this.props.navigation.openDrawer()}>
					<Icon name="menu" />
				</Button>
				</Left>
				<Body>
					<Title>User Account</Title>
					<Text style={{paddingTop: 30, alignItems: 'stretch', justifyContent: "center"}}>
						<Icon name='information-circle' />
						This section showcases your personal profile & its settings
					</Text>
				</Body>
				<Right />
			</Header>
			<Content />
				<Footer>
					<FooterTab>
						<Button onPress={ () => this.props.navigation.navigate("UserProfileBasicInfo")}>
							<Icon name="person" />
						</Button>
					</FooterTab>
				</Footer>
			</Container>
			);
	}
}