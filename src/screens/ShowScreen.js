import React from 'react';
import { View, Text } from 'react-native';
import { Context } from '../context/BlogContext';

export default function ShowScreen({ navigation, route }) {
	const { state } = React.useContext(Context);
	const res = state.find((item) => item.id === route.params.id);
	return (
		<View>
			<Text>{res.title}</Text>
			<Text>{res.content}</Text>
		</View>
	);
}
