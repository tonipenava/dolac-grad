import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
