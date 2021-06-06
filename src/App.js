import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from "./components/Contact";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const [page, setPage] = useState('about')

    return (
        <Router>
            <ScrollToTop/>
            <div className="App w-full">
                <div className="fixed w-full z-50">
                    <Nav
                        page={page}
                        setPage={setPage}
                    />
                </div>
                <div className="w-full z-0">
                    <Switch>
                        <Route
                            exact path="/"
                            component={() => <About setPage={setPage}/>}
                        />
                        <Route component={() => <About setPage={setPage}/>}
                        />
                        <Route path='/portfolio' component={Portfolio}/>
                        <Route path='/resume' component={Resume}/>
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                </div>
                <Footer
                    setPage={setPage}
                />
            </div>
        </Router>
    );
}

export default App;
