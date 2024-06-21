
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='game-container'>
        <Figure/>
      </div>
    </div>
  );
}

export default App;
