import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './assets/img/logo/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
