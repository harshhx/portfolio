import './App.css';
import Header from './components/header';
import Top from './components/top';
import Confetti from './components/confetti';
import NavbarT from './components/navbar';
import Skills from './components/skills';
function App() {
  return (
    <div className="App">
      <NavbarT />
      {/* <Confetti /> */}
      {/* <Header className="App-header" /> */}
      <Top />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
