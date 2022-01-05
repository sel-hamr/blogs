import React, { useState, useContext } from 'react';
import BlogsPostForm from '../components/BlogsPostForm';
import { Context } from '../context/BlogContext';

export default function CreateScreen({ navigation }) {
	const { addBlog } = useContext(Context);
	return <BlogsPostForm onSubmit={(title, content) => addBlog(title, content, () => navigation.navigate('Home'))} />;
}
