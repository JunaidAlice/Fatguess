import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/grandstander"; // Defaults to weight 400
import "@fontsource/grandstander/400.css"; // If you want a specific weight
import "@fontsource/grandstander/700.css"; // Example for bold text


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
