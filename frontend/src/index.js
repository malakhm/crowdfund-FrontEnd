import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import { AdminAuthProvider } from './Context/AdminContext';
import { AuthProvider } from '../src/Context/AuthContext.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
        <AdminAuthProvider>
        <AuthProvider>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            <App />

        </AuthProvider>
        </AdminAuthProvider>

    </Router>


);