import { Outlet } from 'react-router-dom'
import { Navigation, Footer } from './components';
import './App.css'

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
