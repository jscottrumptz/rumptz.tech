import Contact from "./components/Contact";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
        <Nav/>
        <Resume/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
