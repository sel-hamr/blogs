import React from 'react';
import { Context } from '../context/BlogContext';
import BlogsPostForm from '../components/BlogsPostForm';

export default function EditScreen({ navigation, route }) {
	const { state, editBlog } = React.useContext(Context);
	const res = state.find((item) => item.id === route.params.id);
	return (
		<BlogsPostForm
			onSubmit={(title, content) =>
				editBlog(route.params.id, title, content, () => {
					navigation.pop();
				})
			}
			InitialValue={{ title: res.title, content: res.content }}
		/>
	);
}
