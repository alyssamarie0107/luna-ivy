import './App.css';
import './variables.css';
import Home from './sections/home/Home';
import Videos from './sections/videos/Videos';
import HorizontalLine from './components/horizontal-line/HorizontalLine';

function App() {
  return (
    <div className="App">
      <Home />
      <HorizontalLine />
      <Videos embedId="L_bkwHCTjqA"/>
    </div>
  );
}

export default App;
