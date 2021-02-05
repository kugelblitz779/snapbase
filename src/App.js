import './App.css';
import ImageGrid from './components/ImageGrid';
import Main from './components/Main';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <ImageGrid />
    </div>
  );
}

export default App;
