import CreateContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_BLOG':
			return [...state, { title: `title blog #${state.length}`, id: Math.floor(Math.random() * 999) }];
		case 'DELETE_BLOG':
			return state.filter((item) => item.id !== action.payload);
		default:
			return state;
	}
};

const addBlog = (dispatch) => {
	return () => dispatch({ type: 'ADD_BLOG' });
};
const deleteBlog = (dispatch) => {
	return (id) => dispatch({ type: 'DELETE_BLOG', payload: id });
};

export const { Provider, Context } = CreateContext(blogReducer, { addBlog, deleteBlog }, []);
