import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Left, Button, Body, Title, Icon, Right, Text } from 'native-base';
export default class FloatingLabelExample extends Component {
	render() {
		return (
			<Container>
				<Header style={{paddingTop:18}}>
					<Left>
						<Button transparent onPress={ () => this.props.navigation.openDrawer()}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Login Screen</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input />
						</Item>
						<Item floatingLabel last>
							<Label>Password</Label>
							<Input />
						</Item>
						<Button full rounded info style={{marginTop: 10}} onPress={() => this.props.navigation.navigate("Profile")}>
							<Text>Login</Text>
						</Button>
					</Form>
				</Content>
			</Container>
			);
	}
}