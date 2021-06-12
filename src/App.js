import './App.css';
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
      <Lottery 
        numBalls={6}
        title="Lotto"
      />
    </div>
  );
}

export default App;
