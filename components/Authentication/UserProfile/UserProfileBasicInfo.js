import React, { Component } from 'react';
import { Container, Header, Content, SwipeRow, View, Text, Icon, Input, Item, Button, Label, Left, Right, Body, Title, Footer, FooterTab, Card, CardItem } from 'native-base'; 
export default class SwipeRowExample extends Component {
	//constructor for toast
	constructor(props) {
	    super(props);
	    this.state = {
	      showToast: false
	    };
  	}
	render() {
		return (
			<Container>
			<Header>
				<Left>
				<Button transparent onPress={ () => this.props.navigation.openDrawer()}>
					<Icon name="arrow-back" />
				</Button>
				</Left>
				<Body>
					<Title>User Profile</Title>
				</Body>
				<Right />
			</Header>
			<Content scrollEnabled={false}>
				<SwipeRow leftOpenValue={75} rightOpenValue={-75}
				left={
					<Button success onPress={() => alert('Add')}>
						<Icon active name="add" />
					</Button>
				} body={
					<View>
						{/*<Text>SwipeRow Body Text</Text>*/}
						<Card>
							<CardItem header>
								<Text>Basic Info</Text>
							</CardItem>
							<CardItem>
									<Item stackedLabel disabled>
										<Label>Email Address</Label>
										<Input placeholder='' value='jesus@yehovahyireh.com' disabled/>
										<Icon name='information-circle' />
									</Item>
							</CardItem>
							<CardItem>
								<Item stackedLabel>
									<Label>First Name</Label>
									<Input />
									<Icon name="person" />
								</Item>
							</CardItem>
							<CardItem>
								<Item stackedLabel>
									<Label>Last Name</Label>
									<Input />
									<Icon name="person" />
								</Item>
							</CardItem>
							<CardItem>
								<Item stackedLabel last>
									<Label>Phone Number</Label>
									<Input type='number' />
									<Icon name='nutrition' />
								</Item>
							</CardItem>
						</Card>
					</View>
				} right={
					<Button danger onPress={() => alert('Trash')}>
						<Icon active name="trash" />
					</Button>
				} />
			</Content>
			<Footer>
					<FooterTab>
						<Button active onPress={ () => this.props.navigation.navigate("UserProfileBasicInfo")}>
							<Icon active name="person" />
						</Button>
					</FooterTab>
				</Footer>
			</Container>
			);
	}
}