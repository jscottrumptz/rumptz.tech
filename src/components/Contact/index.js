import React from 'react';

function Contact() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="relative bg-white shadow-xl">
                    <h2 className="sr-only">Contact me</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3">

                        <div className="relative overflow-hidden py-10 px-6 bg-gray-600 sm:px-10 xl:p-12">
                            <h3 className="text-lg font-medium text-white">Contact information</h3>
                            <p className="mt-6 text-base font-medium text-indigo-50 max-w-3xl">Have questions or comments?<br/>
                                <span className="italic font-normal">I'd love to hear them.</span><br/><br/>
                                Have a project you need help with? <br/>
                                <span className="italic font-normal">I'd love to help.</span><br/><br/>
                                Have a job opportunity for me? <br/>
                                <span className="italic font-normal">Tell me more.</span></p>
                            <dl className="mt-8 space-y-6">
                                <dt><span className="sr-only">Phone number</span></dt>
                                <dd className="flex text-base text-indigo-50">

                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    <a href="tel:19013382186" className="ml-3 hover:text-indigo-300">+1 (901) 338-2186</a>
                                </dd>
                                <dt><span className="sr-only">Email</span></dt>
                                <dd className="flex text-base text-indigo-50">

                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <a href="mailto:jscott@rumptz.tech" className="ml-3 hover:text-indigo-300">jscott@rumptz.tech</a>
                                </dd>
                            </dl>
                            <ul className="mt-8 flex space-x-12">
                                <li>
                                    <a className="text-gray-300 hover:text-indigo-300" target="_blank" rel="noreferrer" href="https://www.facebook.com/jscott.rumptz">
                                        <span className="sr-only">Facebook</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             className="w-6 h-6" aria-hidden="true">
                                            <path
                                                d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                                fill="currentColor"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-300 hover:text-indigo-300"  target="_blank" rel="noreferrer" href="https://github.com/jscottrumptz">
                                        <span className="sr-only">GitHub</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             className="w-6 h-6" aria-hidden="true">
                                            <path
                                                d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                                fill="currentColor"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-300 hover:text-indigo-300"  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jscottrumptz/">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                             aria-hidden="true">
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                clip-rule="evenodd"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                            <h3 className="text-lg font-medium text-gray-900">Send me a message</h3>
                            <p> I'll get back to you as soon as I am able.<br/>
                            <span className="italic">(usually within 24 hrs)</span></p>
                            <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <div>
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-900">First name</label>
                                    <div className="mt-1">
                                        <input type="text" name="first_name" id="first_name" autoComplete="given-name"
                                               className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-900">Last name</label>
                                    <div className="mt-1">
                                        <input type="text" name="last_name" id="last_name" autoComplete="family-name"
                                               className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" autoComplete="email"
                                               className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone</label>
                                        <span id="phone-optional" className="text-sm text-gray-500">Optional</span>
                                    </div>
                                    <div className="mt-1">
                                        <input type="text" name="phone" id="phone" autoComplete="tel"
                                               className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                               aria-describedby="phone-optional"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">Subject</label>
                                    <div className="mt-1">
                                        <input type="text" name="subject" id="subject"
                                               className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                                        <span id="message-max" className="text-sm text-gray-500">Max. 500 characters</span>
                                    </div>
                                    <div className="mt-1">
                      <textarea id="message" name="message" rows="4"
                                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                aria-describedby="message-max"></textarea>
                                    </div>
                                </div>
                                <div className="sm:col-span-2 sm:flex sm:justify-end">
                                    <button type="submit"
                                            className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;