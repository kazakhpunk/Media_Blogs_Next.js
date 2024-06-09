import axios from 'axios';
import { useAuth } from '@/context/AuthContext';

const instance = axios.create({
	baseURL: 'https://dummyjson.com',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

instance.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => Promise.reject(error)
);

export const getPosts = async () => {
	try {
		const response = await instance('/posts');
		return response.data.posts;
	} catch (error) {
		console.error('Error fetching posts:', error);
		throw error;
	}
};

instance.interceptors.response.use(
	response => response,
	error => {
		if (error.response) {
			console.error('API error:', error.response.data);
		} else {
			console.error('Network error:', error.message);
		}
		return Promise.reject(error);
	}
);

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