import { Outlet } from 'react-router-dom'
import { Navigation, Footer } from './components'
import './App.css'
import { useState } from 'react'

function App() {

  return (
    <>
      <Navigation />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
