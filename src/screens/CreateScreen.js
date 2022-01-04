import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

export default function CreateScreen({ navigation }) {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { addBlog } = useContext(Context);
	return (
		<View>
			<Text style={styles.title}>Entre Title</Text>
			<TextInput value={title} onChangeText={(value) => setTitle(value)} style={styles.input} />
			<Text style={styles.title}>Entre Content</Text>
			<TextInput value={content} onChangeText={(value) => setContent(value)} style={styles.input} />
			<Button onPress={() => addBlog(title, content, () => navigation.navigate('Home'))} title='add blog post' />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderColor: 'black',
		borderWidth: 1,
		marginHorizontal: 10,
		padding: 5,
		borderRadius: 5,
		marginTop: 5,
	},
	title: {
		fontSize: 17,
		marginTop: 15,
		marginLeft: 10,
		fontWeight: '700',
	},
});
