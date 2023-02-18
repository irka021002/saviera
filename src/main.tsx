import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './index.css'
import 'tw-elements';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <main className='max-w-[1440px] m-auto'>
      <App />
    </main>
    <Footer />
  </React.StrictMode>,
)
