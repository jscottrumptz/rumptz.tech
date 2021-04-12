import logo from './logo.svg';
import './App.css';

import Contact from "./components/Contact";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
        <Nav/>
        <About/>
        <Contact/>
    </div>
  );
}

export default App;
