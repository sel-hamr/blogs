import CreateContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_BLOG':
			return [...state, { title: action.payload.title, content: action.payload.content, id: Math.floor(Math.random() * 999) }];
		case 'DELETE_BLOG':
			return state.filter((item) => item.id !== action.payload);
		case 'EDIT_BLOG':
			return state.map((item) => (item.id === action.payload.id ? action.payload : item));
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

const editBlog = (dispatch) => {
	return (id, title, content, callBack = null) => {
		dispatch({ type: 'EDIT_BLOG', payload: { id, title, content } });
		if (callBack) callBack();
	};
};

export const { Provider, Context } = CreateContext(blogReducer, { addBlog, deleteBlog, editBlog }, []);
