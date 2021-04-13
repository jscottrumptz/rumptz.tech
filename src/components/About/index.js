import React, {useState} from 'react';
import headshot from "../../assets/images/j-scott-rumptz.jpg";

function About(props) {
    const {
        setPage
    } = props;


    const [hidden, setHidden] = useState('hidden')


    return (
        <main className="lg:relative bg-gray-50">
            <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 pt-10 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span className="block">experienced</span>
                        <span className="block text-indigo-600">motivated</span>
                        <span className="block">accountable</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        Full stack web developer with graphic design, 3D modeling, and unity game development experience. Marketing, product development, and business operations background. Currently undertaking a full stack web development program through Vanderbilt University.
                    </p>
                    <div className={hidden} >
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            A reputation for perfectionism and out the box thinking when problem solving. Ready to lead and work as a team, leveraging 5 years of business operations and 15 years of upper management experience in a highly competitive work environment. Positioned to provide unique perspectives on how executive end users interact with websites and software platforms by leveraging a background in business operations.
                        </p>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            I am excited by thoughtful design and fascinated by cutting edge productivity tools. I am looking to bring my extensive business background along with my recently refined full stack skill set to an engaged, quality driven team with an eye on innovation.
                        </p>
                    </div>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a href="#" onClick={() => setPage('resume')}
                               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                View Resume
                            </a>
                        </div>
                        {hidden === 'hidden' &&
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                            <a onClick={() => setHidden('')}
                               className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                Learn More
                            </a>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div
                className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                <img className="absolute inset-0 w-full h-full object-cover"
                     src={headshot}
                     alt="Headshot of J. Scott Rumptz"/>
            </div>
        </main>
    )
}

export default About;