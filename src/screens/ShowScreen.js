import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

export default function ShowScreen({ navigation, route }) {
	const { state } = React.useContext(Context);
	const res = state.find((item) => item.id === route.params.id);
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
					<EvilIcons name='pencil' size={30} color='black' style={{ marginRight: 12 }} />
				</TouchableOpacity>
			),
		});
	}, [navigation]);
	return (
		<View>
			<Text>{res.title}</Text>
			<Text>{res.content}</Text>
		</View>
	);
}
