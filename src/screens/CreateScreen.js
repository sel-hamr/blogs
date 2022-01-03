import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CreateScreen() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	return (
		<View>
			<Text style={styles.title}>Entre Title</Text>
			<TextInput value={title} onChangeText={(value) => setTitle(value)} style={styles.input} />
			<Text style={styles.title}>Entre Content</Text>
			<TextInput value={content} onChangeText={(value) => setContent(value)} style={styles.input} />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderColor: 'black',
		borderWidth: 1,
	},
	title: {
		fontSize: 17,
		fontWeight: '700',
	},
});
