import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import axiosInstance from '../axiosInstance';

const Test = () => {
    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post('auth/login', {
                email: 'test@gmail.com',
                password: 'test'
            });
            console.log(response,"login response");
            const cookie = response.headers['set-cookie'];
            Cookies.set('myCookie', cookie);
            // console.log('Login successful:', response);
            const setCookieHeader = response.headers;
            console.log('Set-Cookie header:', setCookieHeader);
            // Additional logic after successful login
        } catch (error) {
            console.error('Error during login:', error);
            // Handle login error
        }
    };

    const handleCheckSession = async () => {
        try {
            const response = await axiosInstance.get('auth/check-session');
            console.log('Session check successful:', response.data);
            // Additional logic after successful session check
        } catch (error) {
            console.error('Error checking session:', error);
            // Handle session check error
        }
    };
    

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleCheckSession}>Check Session</button>
        </div>
    );
};

export default Test;
