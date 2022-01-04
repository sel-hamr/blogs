import CreateContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_BLOG':
			return [...state, { title: action.payload.title, content: action.payload.content, id: Math.floor(Math.random() * 999) }];
		case 'DELETE_BLOG':
			return state.filter((item) => item.id !== action.payload);
		default:
			return state;
	}
};

const addBlog = (dispatch) => {
	return (title, content, callBack) => {
		dispatch({ type: 'ADD_BLOG', payload: { title, content } });
		callBack();
	};
};
const deleteBlog = (dispatch) => {
	return (id) => dispatch({ type: 'DELETE_BLOG', payload: id });
};

export const { Provider, Context } = CreateContext(blogReducer, { addBlog, deleteBlog }, []);
