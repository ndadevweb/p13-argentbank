import { Outlet } from 'react-router-dom'
import { Navigation, Footer } from './components';
import './App.css'

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
