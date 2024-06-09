'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface AuthContextType {
	isAuthenticated: boolean;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
	token: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [token, setToken] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			setToken(storedToken);
			setIsAuthenticated(true);
		}
	}, []);

	const login = async (username: string, password: string) => {
		try {
			const response = await axios.post('https://dummyjson.com/auth/login', { username, password });
			const authToken = response.data.token;
			localStorage.setItem('token', authToken);
			setToken(authToken);
			setIsAuthenticated(true);
			router.push('/posts');
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	const logout = () => {
		localStorage.removeItem('token');
		setToken(null);
		setIsAuthenticated(false);
		router.push('/');
	};

	return <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};