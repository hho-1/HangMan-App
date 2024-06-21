
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import PopUp from './components/PopUp';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />
        <Word />
        
      </div>
    </div>
  );
}

export default App;
