import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import Stanovi from './pages/Stanovi';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Stanovi />
      <About />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
