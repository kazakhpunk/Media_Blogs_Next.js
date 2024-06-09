import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://dummyjson.com',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

// instance.interceptors.request.use(
// 	config => {
// 		let token;
// 		if (typeof window !== 'undefined') {
// 			token = localStorage.getItem('authToken');
// 		}

// 		if (token) {
// 			config.headers['Authorization'] = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error);
// 	}
// );

// instance.interceptors.response.use(
// 	response => {
// 		return response;
// 	},
// 	error => {
// 		console.error('API error:', error);
// 		return Promise.reject(error);
// 	}
// );

// export default instance;





export const getPosts = async () => {
	try {
		const response = await instance('/posts');
		return response.data.posts;
	} catch (error) {
		console.error('Error fetching posts:', error);
		throw error;
	}
};

export const getPost = async (id: number) => {
	try {
		const response = await instance(`/posts/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching post:', error);
		throw error;
	}
};

export const addPost = async (postData: { title: string; body: string }) => {
	try {
		const response = await instance.post('/posts/add', postData);
		return response.data;
	} catch (error) {
		console.error('Error adding post:', error);
		throw error;
	}
};

export const updatePost = async (id: number, postData: { title: string; body: string }) => {
	try {
		const response = await instance.put(`/posts/${id}`, postData);
		return response.data;
	} catch (error) {
		console.error('Error updating post:', error);
		throw error;
	}
};

export const deletePost = async (id: number) => {
	try {
		const response = await instance.delete(`/posts/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error deleting post:', error);
		throw error;
	}
};