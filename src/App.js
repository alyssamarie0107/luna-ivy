import './App.css';
import './variables.css';
import Home from './sections/home/Home';
import Videos from './sections/videos/Videos';
import HorizontalLine from './components/horizontal-line/HorizontalLine';
import Music from './sections/music/Music';
import Contact from './sections/contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <HorizontalLine />
      <Videos embedId="L_bkwHCTjqA" />
      <HorizontalLine />
      <Music />
      <HorizontalLine />
      <Contact />
      <HorizontalLine />
    </div>
  );
}

export default App;
