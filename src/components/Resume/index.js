import React, {useState} from 'react';
import headshot from "../../assets/images/j-scott-rumptz_2.jpg";
import background from "../../assets/images/background.jpg"
import resume from "../../assets/J_Scott_Rumptz_Resume.pdf"
import rdjLogo from "../../assets/images/projects/RDJ_Logo.png"
import dverseLogo from "../../assets/images/projects/D-verse_Logo.png"
import devuLogo from "../../assets/images/projects/devu_logo.png"
import vandyLogo from "../../assets/images/projects/Vandebilt_Logo.png"
import memphisLogo from "../../assets/images/projects/Memphis_logo.png"
import comptiaLogo from "../../assets/images/projects/Comptia_logo.png"

function Resume() {

    const [tab, setTab] = useState('overview')

    let overviewContent = '';
    let professionalContent = '';
    let educationContent = '';
    let overviewTab = '';
    let professionalTab = '';
    let educationTab = '';

    if (tab === 'overview') {
        overviewContent = 'mt-6 pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';
        professionalContent = 'hidden';
        educationContent = 'hidden';
        overviewTab = 'border-indigo-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        professionalTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        educationTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
    }

    if (tab === 'professional') {
        overviewContent = 'hidden';
        professionalContent = 'mt-6 pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';
        educationContent = 'hidden';
        overviewTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        professionalTab = 'border-indigo-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        educationTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
    }

    if (tab === 'education') {
        overviewContent = 'hidden';
        professionalContent = 'hidden';
        educationContent = 'mt-6 pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';
        overviewTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        professionalTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        educationTab = 'border-indigo-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
    }


    return (
        <main className="bg-gray-50 pt-16">
            <article>

                <div>
                    <div>
                        <img className="h-32 w-full object-cover lg:h-48"
                             src={background}
                             alt=""/>
                    </div>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div className="flex">
                                <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                     src={headshot}
                                     alt="Headshot of J. Scott Rumptz"/>
                            </div>
                            <div
                                className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                                        J. Scott Rumptz
                                    </h1>
                                </div>
                                <div
                                    className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                    <a href="mailto:jscott@rumptz.tech">
                                        <button type="button"
                                            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                 aria-hidden="true">
                                                <path
                                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                            </svg>
                                            <span>Email</span>
                                        </button>
                                    </a>
                                    <a href="tel:19013382186">
                                        <button type="button"
                                                className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                 aria-hidden="true">
                                                <path
                                                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                            </svg>
                                            <span>Call</span>
                                        </button>
                                    </a>
                                    <a href={resume} target="_blank" rel="noreferrer">
                                        <button type="button"
                                                className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                 aria-hidden="true">
                                                <path
                                                    d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"/>
                                            </svg>
                                            <span>Download Resume</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                            <h1 className="text-2xl font-bold text-gray-900 truncate">
                                J. Scott Rumptz
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:mt-2 2xl:mt-5">
                    <div className="border-b border-gray-200">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">

                                <a onClick={() => setTab('overview')}
                                   className={overviewTab}
                                   aria-current="page">
                                    Overview
                                </a>

                                <a onClick={() => setTab('professional')}
                                   className={professionalTab}>
                                    Professional Experience
                                </a>

                                <a onClick={() => setTab('education')}
                                   className={educationTab}>
                                    Education
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>


                <div className={overviewContent}>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Phone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                (901) 338-2186
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                jscott@rumptz.tech
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Location
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Memphis
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Birthday
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                January 22, 1977
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Current Roles
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                CEO RDJ Specialties, Inc.<br/>
                                Founder D-Verse Publishing, LLC <br/>
                                Full-Stack Web Developer
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Management Skills
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                increasing profits & leading company expansion<br/>
                                making decisions from a financial perspective<br/>
                                business records control & corporate reporting<br/>
                                strategic goal setting & long-term planning
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Sales & Marketing Skills
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                key account development<br/>
                                positioning companies as market dominate<br/>
                                improving effectiveness of sales teams<br/>
                                building customer alliances and partnerships
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Technical Skills
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                MERN & MEVN stacks<br/>
                                Proficient with Adobe Creative Suite<br/>
                                Proficient with Microsoft Office 365<br/>
                                Proficient with 3ds Max
                            </dd>
                        </div>

                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                                Executive Summary
                            </dt>
                            <dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
                                <p>
                                    Background includes a career track in executive management with an emphasis in operations/divisional
                                    management, national account management, and corporate orchestration of sales and marketing
                                    programs.
                                </p>
                                <p>
                                    Areas of expertise include business development, strategic sales planning, promotional event
                                    planning, marketing program development, and sales leadership within the B2B service industry.
                                </p>
                                <p>
                                    Have implemented strategies to: (1) Guide the reorganization of sales divisions/programs; and (2) Improve
                                    internal and external customer service resulting in increased client satisfaction. Have been instrumental
                                    in contributing significant revenue growth as well as profitability at the corporate level.
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className={professionalContent}>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
                        <div className="sm:col-span-1">
                            <dd>
                                <img src={rdjLogo} alt="rdj specialties, inc logo"/>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500">
                                RDJ Specialties, Inc.
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                1996 - Present
                            </dd>
                        </div>

                        <div className="sm:col-span-3">
                            <dt className="text-sm font-medium text-gray-500">
                                Owner/CEO
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Established a record of sales and marketing accomplishments as well as business and
                                financial planning success for this nationally recognized telemarketing advertising
                                specialty company. Analyze market factors in this highly competitive field; develop
                                product-specific and territory-specific marketing plans; and direct aggressive effort
                                to build and maintain market share. <br/>
                                • Develop sales plans and provide senior market leadership to empower Client Service
                                Representatives to achieve sales growth, business retention, and profitability goals.<br/>
                                • Spearhead marketing activities including: development of sales materials, website
                                management, innovation of promotional campaigns, and compilation of market profile and
                                statistics for each market.<br/><br/>
                                <span className="font-medium text-gray-500">• Involved with all aspects of:</span><br/>
                                - website design / e-commerce strategies <br/>
                                - new product development <br/>
                                - marketing/branding<br/>
                                - secondary product development <br/>
                                - vendor sourcing/selection <br/>
                                - event planning/management<br/><br/>
                                <span className="font-medium text-gray-500">Achievements:</span><br/>
                                - Executive negotiation and communication skills have positioned RDJ as a preferred service provider
                                resulting in securing of multi-million-dollar accounts.<br/>
                                - Implemented a new telecommunications technology program reducing operational costs by $100k annually.<br/>
                                - Produced and spearheaded a safety and education program that increased customer loyalty by 800%.<br/>
                                - Increased productivity by designing and overseeing the creation of customized business software reducing
                                administrative costs by over $184k.<br/>
                                - Rebuilt sales team which included raising hiring standards; providing coaching; and outlined and
                                implemented aggressive market development strategy which has increased employee retention.<br/><br/>
                                • Have built high-level client relationships and created major sales opportunities through the development of
                                client specific advertising programs, assisting with client’s co-op advertising product/service re-branding, new
                                audience strategies and implementing goal oriented/track able telemarketing programs.
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dd>
                                <img src={dverseLogo} alt="d-verse publishing, llc logo"/>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500">
                                D-Verse Publishing, LLC
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                2016 - Present
                            </dd>
                        </div>

                        <div className="sm:col-span-3">
                            <dt className="text-sm font-medium text-gray-500">
                                Founder
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Established a small, relatively successful, tabletop board game publishing company centered around
                                an in-house intellectual property called NEXUS. Working with artists and writers located all across
                                the globe, maintain all aspects of the company's operations.
                                <br/>
                                • Develop innovative board game and table top role playing mechanics.<br/>
                                • Spearhead marketing activities including: social media, website management, innovation
                                of promotional campaigns, and market branding.<br/><br/>
                                • Involved with all aspects of:<br/>
                                - website design / e-commerce strategies<br/>
                                - game development<br/>
                                - social media marketing/branding<br/>
                                - art direction<br/>
                                - vendor sourcing/selection <br/>
                                - convention planning/management<br/><br/>
                                Achievements:<br/>
                                - Raised over $50,000 in initial Kickstarter campaign.<br/>
                                - Successfully funded and shipped multiple Kickstarters.<br/>
                                - Created an intellectual property that now features its own board game, tabletop RPG, and novel.<br/>
                                - Exhibited at Gen Con every year since 2017.<br/>
                                - Grown a social media following of 5,000+.<br/>
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className={educationContent}>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
                        <div className="sm:col-span-1">
                            <dd>
                                <img src={vandyLogo} alt="vanderbilt logo"/>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500">
                                Vanderbilt University
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Nashville, TN
                            </dd>
                        </div>

                        <div className="sm:col-span-3">
                            <dt className="text-sm font-medium text-gray-500">
                                Full Stack Web Development Bootcamp
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Currently Enrolled
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dd>
                                <img src={memphisLogo} alt="university of memphis logo"/>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500">
                                University of Memphis
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Memphis, TN
                            </dd>
                        </div>

                        <div className="sm:col-span-3">
                            <dt className="text-sm font-medium text-gray-500">
                                Associates Degree in Philosophy
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                5/98
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dd>
                                <img src={comptiaLogo} alt="comptia logo"/>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500">
                                A+ Certification, CompTIA
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Memphis, TN
                            </dd>
                        </div>

                        <div className="sm:col-span-3">
                            <dt className="text-sm font-medium text-gray-500">
                                Professional Certification
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">

                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dd>
                                <img src={devuLogo} alt="DevU logo"/>
                            </dd>
                            <dt className="text-sm font-medium text-gray-500">
                                DEVU C#
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Online
                            </dd>
                        </div>

                        <div className="sm:col-span-3">
                            <dt className="text-sm font-medium text-gray-500">
                                Professional Certification
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">

                            </dd>
                        </div>
                    </dl>
                </div>
            </article>
        </main>
    )
}

export default Resume;