import React, {useState} from 'react';
import logo from "../../assets/images/logo.svg";

function Nav(props) {
    const {
        page = '',
        setPage
    } = props;

    const [toggleHidden, setToggle] = useState(true)
    const [hidden, setHidden] = useState('hidden')

    if (!toggleHidden && hidden === 'hidden') {
        setHidden('px-2 pt-2 pb-3 space-y-1 sm:px-3')
    }

    if (toggleHidden && hidden === 'px-2 pt-2 pb-3 space-y-1 sm:px-3') {
        setHidden('hidden')
    }

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="-ml-2 mr-2 flex items-center md:hidden">
                            <a onClick={() => setToggle(!toggleHidden)}>
                            <button type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                            </a>
                        </div>
                        <div className="flex-shrink-0 flex items-center z-50">
                            <img className="block lg:hidden pt-3 h-28 w-auto"
                                 src={logo} alt="J. Scott Rumptz"/>
                                <img className="hidden lg:block pt-3 h-28 w-auto"
                                     src={logo}
                                     alt="J. Scott Rumptz"/>
                        </div>
                        <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">

                            { page === 'about' &&  <a href="#"  onClick={() => setPage('about')}
                               className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                                About
                            </a> }
                            { page != 'about' &&  <a href="#"  onClick={() => setPage('about')}
                                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                About
                            </a> }

                            { page === 'portfolio' &&  <a href="#"  onClick={() => setPage('portfolio')}
                                                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                                Portfolio
                            </a> }
                            { page != 'portfolio' &&  <a href="#"  onClick={() => setPage('portfolio')}
                                                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Portfolio
                            </a> }

                            { page === 'resume' &&  <a href="#"  onClick={() => setPage('resume')}
                                                          className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                                Resume
                            </a> }
                            { page != 'resume' &&  <a href="#"  onClick={() => setPage('resume')}
                                                         className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Resume
                            </a> }
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="#" onClick={() => setPage('contact')}>
                                <button type="button"
                                        className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">

                                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <span>Contact</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="md:hidden" id="mobile-menu">
                <div className={hidden}>

                    { page === 'about' &&  <a href="#" onClick={function() {setPage('about'); setToggle(!toggleHidden);}}
                        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page">About</a> }

                    { page != 'about' &&  <a href="#" onClick={function() {setPage('about'); setToggle(!toggleHidden);}}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >About</a> }

                    { page === 'portfolio' &&  <a href="#" onClick={function() {setPage('portfolio'); setToggle(!toggleHidden);}}
                        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page">Portfolio</a> }

                    { page != 'portfolio' &&  <a href="#" onClick={function() {setPage('portfolio'); setToggle(!toggleHidden);}}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >Portfolio</a> }

                    { page === 'resume' &&  <a href="#" onClick={function() {setPage('resume'); setToggle(!toggleHidden);}}
                        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page">Resume</a> }

                    { page != 'resume' &&  <a href="#" onClick={function() {setPage('resume'); setToggle(!toggleHidden);}}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >Resume</a> }

                </div>
            </div>
        </nav>
    )
}

export default Nav;