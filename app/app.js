import React, { Component } from 'react';
import List from './list';

import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Dimensions,
	TextInput,
	Button
} from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  term: '',
		  items: [
		  ]
		};
	  }

	  onChange = (text) => {
	  	// alert(text)
		this.setState({term: text});
	  }

	  onSubmit = (event) => {
		event.preventDefault()

		if (this.state.term == '') {
			return;
		};

		const array = [...this.state.items]
		array.push(this.state.term)

		this.setState({
			term: '',
			items: array
		});
	  }

	render() {
		return (
			<View style={localStyles.container}>
				<StatusBar hidden = {true}/>
				<View>
					<TextInput
					value={this.state.term} onChangeText={this.onChange}
					style={localStyles.entree}
					/>	
				</View>	
				<View>
					<List items={this.state.items} />
				</View>
				<View style={localStyles.buttonContainer}>
					<Button title="Add Todo"
					onPress={this.onSubmit}
					/>	
				</View>
			</View>
		)

	}
}

const localStyles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	entree: {
		padding: 15,
		width: 350,
		height: 50,
		backgroundColor: '#edbc74'
	  },
	  buttonContainer: {
		width: 400,
		height: 50,
		borderRadius: 30,	
		justifyContent: 'center',		
		backgroundColor: '#edbc74',
		alignItems: 'center'
		
		
	  }

});
