import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import Stanovi from './pages/Stanovi';
import Vision from './pages/Vision';
import BackgroundElements from './pages/BackgroundElements';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Vision />
      <BackgroundElements />
      <Stanovi />
      <About />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
