import React from 'react';
import { createRoot } from 'react-dom/client';
import './Styles/main.scss';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
