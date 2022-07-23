import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HashRouter>
		<AuthProvider>
			{/* <React.StrictMode> */}
			<App />
			{/* </React.StrictMode> */}
		</AuthProvider>
	</HashRouter>
);
