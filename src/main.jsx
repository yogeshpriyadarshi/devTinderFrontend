import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import App from './App.jsx'
import { GOOGLE_CLINET_ID } from './utils/constant.jsx';

createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={GOOGLE_CLINET_ID}>
 <StrictMode>
    <App />
  </StrictMode>
  </GoogleOAuthProvider>
  
)
