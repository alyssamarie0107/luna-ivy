import './App.css';
import './variables.css';
import CustomNavbar from './components/navbar/Navbar';
import Home from './sections/home/Home';
import Shows from './sections/shows/Shows';
import Videos from './sections/videos/Videos';
import Music from './sections/music/Music';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';
import HorizontalLine from './components/horizontal-line/HorizontalLine';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Home />
      <HorizontalLine />
      <Shows />
      <HorizontalLine />
      <Videos embedId="L_bkwHCTjqA" />
      <HorizontalLine />
      <Music />
      <HorizontalLine />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
