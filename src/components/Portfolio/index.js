import React from 'react';
import Project from "../Project";
import heroImage from "../../assets/images/hero.jpg"

function Portfolio() {
    return (
        <main className="bg-gray-50 pt-16">
            <div className="relative bg-gray-800">
                <div className="h-56 bg-gray-800 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                    <img className="w-full h-full object-cover"
                         src={heroImage}
                         alt=""/>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="md:ml-auto md:w-1/2 md:pl-10">
                        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                            updated 4.13.21
                        </h2>
                        <p className="mt-2 text-white text-3xl font-bold tracking-tight sm:text-4xl">
                            My Portfolio
                        </p>
                        <p className="mt-3 text-lg text-gray-300">
                            I have always seized the opportunity to leverage new technologies to aid in my creative and professional pursuits. Over the years I have had occasion to create and be a part of some unique and interesting projects. Here are just a few of my favorites...
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:py-4 sm:px-6 lg:px-8">
                <Project/>
            </div>
        </main>
    )
}

export default Portfolio;