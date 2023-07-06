import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { LangContextProvider } from './utilities/languageContext.jsx';
import { PhoneContextProvider } from './utilities/phoneContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PhoneContextProvider>
        <LangContextProvider>
            <BrowserRouter>
                <App />,
            </BrowserRouter>
        </LangContextProvider>
    </PhoneContextProvider>
)
