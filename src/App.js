import Contact from "./components/Contact";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
        <div className="fixed w-full z-50">
            <Nav/>
        </div>
        <div className="z-0">
            <About/>
            <Portfolio/>
            <Resume/>
            <Contact/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
