
import './App.css';
import Marks from './component/Marks/Marks';
import NavBar from './component/NavBar/NavBar';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <Marks></Marks>
    </div>
  );
}

export default App;
