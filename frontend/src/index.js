import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { AuthContext } from '../src/Context/AuthContext.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContext.Provider>
<ToastContainer/>
    <App />

</AuthContext.Provider>
    

);