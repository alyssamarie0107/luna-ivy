import './App.css';
import './variables.css';
import { useState, useEffect } from 'react';
import CustomNavbar from './components/navbar/Navbar';
import Home from './sections/home/Home';
import Shows from './sections/shows/Shows';
import Videos from './sections/videos/Videos';
import Music from './sections/music/Music';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';
import HorizontalLine from './components/horizontal-line/HorizontalLine';
import ScaleLoader from "react-spinners/ScaleLoader";
import TopScrollBtn from './components/buttons/top-scroll-btn/TopScrollBtn';


const App = () => {
  const [loading, setLoading] = useState(false);

  // going to server as lifecycle method
  // passing in a '[]' meaning function will run one time when the page is rendered
  // when the page is rendered, set loading to true 
  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <div className="App">
      {/* display loader if loading is true, else display app */}
      {
        loading ? (
          <ScaleLoader
          color={"red"}
          loading={loading}
          width={"10"}
          height={"50"}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        ) : (
          <div>
            <CustomNavbar />
            <Home />
            <HorizontalLine />
            <Shows />
            <TopScrollBtn />
            <HorizontalLine />
            <Videos embedId="L_bkwHCTjqA" />
            <HorizontalLine />
            <Music />
            <HorizontalLine />
            <Contact />
            <Footer />
          </div>
        )
      }
    </div>
  );
}

export default App;
