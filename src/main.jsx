import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AIConsultingLanding from "./AIConsultingLanding.jsx";
import MainLayout from "./Layout/MainLayout.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>,
)
