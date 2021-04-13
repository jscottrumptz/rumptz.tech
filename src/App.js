import React, { useState } from 'react';
import Contact from "./components/Contact";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
    const [page, setPage] = useState('about')

    return (
        <div className="App">
            <div className="fixed w-full z-50">
                <Nav
                    page={page}
                    setPage={setPage}
                />
            </div>
            <div className="z-0">
                { page === 'about' &&  <About
                    setPage={setPage}
                /> }
                { page === 'portfolio' &&  <Portfolio/> }
                { page === 'resume' &&  <Resume/> }
                { page === 'contact' &&  <Contact/> }
            </div>
            <Footer
                setPage={setPage}
            />
        </div>
    );
}

export default App;
