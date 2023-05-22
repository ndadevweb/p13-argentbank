import { Outlet } from 'react-router-dom'
import { Navigation, Footer } from './components'
import './App.css'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({ isLogged: false, token: null })

  return (
    <>
      <Navigation user={ user } />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
