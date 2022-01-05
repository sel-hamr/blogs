import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function BlogsPostForm({ onSubmit, InitialValue = { title: '', content: '' } }) {
	const [title, setTitle] = useState(InitialValue.title);
	const [content, setContent] = useState(InitialValue.content);
	return (
		<View>
			<Text style={styles.title}>Entre Title</Text>
			<TextInput value={title} onChangeText={(value) => setTitle(value)} style={styles.input} />
			<Text style={styles.title}>Entre Content</Text>
			<TextInput value={content} onChangeText={(value) => setContent(value)} style={styles.input} />
			<Button onPress={() => onSubmit(title, content)} title='save Post' />
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
