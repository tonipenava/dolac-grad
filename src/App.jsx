import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import Stanovi from './pages/Stanovi';
import Vision from './pages/Vision';
import Vision2 from './pages/Vision2';
import BackgroundElements from './pages/BackgroundElements';
import Gallery from './pages/Gallery';
import Parking from './pages/Parking';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Vision />
      <Parking />
      <Vision2 />
      <Gallery />
      <BackgroundElements />
      <Stanovi />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
