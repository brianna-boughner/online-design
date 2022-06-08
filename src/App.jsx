import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import GetStarted from './components/Get Started/GetStarted';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <GetStarted/>
      <Contact/>
      
    </div>
  );
}

export default App;
