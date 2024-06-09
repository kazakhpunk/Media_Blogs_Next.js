'use client';

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '@/context/AuthContext';

const Logout: React.FC = () =>{
    const { isAuthenticated, logout } = useAuth();
	const authContext = useContext(AuthContext);
    const router = useRouter();

	const handleLogout = () => {
		if (authContext) {
			authContext.logout();
			router.push('/');
		}
	};

    return (
        <nav className="flex justify-end mt-8 mx-8">
            {isAuthenticated ? (
                <button onClick={handleLogout} className="text-sm bg-red-500 px-3 py-1 rounded">
                    Logout
                </button>
            ) : (
                <button onClick={() => router.push('/login')} className="text-sm bg-blue-500 px-3 py-1 rounded">
                    Login
                </button>
            )}
        </nav>
    ); };

    export default Logout;