import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

export default function IndexScreens({ navigation }) {
	const { state, addBlog, deleteBlog } = useContext(Context);
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => navigation.navigate('Create')}>
					<Feather name='plus' size={28} color='black' style={{ marginRight: 12 }} />
				</TouchableOpacity>
			),
		});
	}, [navigation]);
	return (
		<View>
			{console.log('3')}
			<Button onPress={() => addBlog()} title='Add Blog' />
			<FlatList
				data={state}
				keyExtractor={(value) => value.title}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
						<View style={style.row}>
							<Text style={style.title}>{item.title}</Text>
							<TouchableOpacity onPress={() => deleteBlog(item.id)}>
								<Feather name='trash' size={26} color='black' />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 10,
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		paddingRight: 10,
		paddingLeft: 10,
		// flex: 1,
	},
	title: {
		fontSize: 19,
		fontWeight: '700',
	},
});
