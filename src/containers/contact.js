import React from 'react';


export function ContactContainer({ children }) {
    return (
        <section className="" id="contact">
            <div className="formBx flex justify-center">
                <form
                    data-netlify="true"
                    className="needs-validation"
                    method="post"
                    name="contact"
                    data-netlify-recaptcha="true"
                    action="/dist/index.html?succesfull"
                    novalidate
                >
                    <h2>Contact me</h2>
                    <div class="relative z-0 w-full mb-5 form-group ">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name "
                            required
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-accent border-gray-200"
                        />
                        {/* <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label> */}
                        {/* <span class="text-sm text-red-600 hidden" id="error">Name is required</span> */}
                    </div>
                    <div className="form-group inputBox">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Email Address"
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-accent border-gray-200"
                            required
                        />

                    </div>
                    <div className="form-group inputBox">
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="form-control"
                            placeholder="Subject"
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-accent border-gray-200"
                            required
                        />

                    </div>
                    <div className="form-group inputBox mb-2">
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="5"
                            required
                            className="form-control"
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-accent border-gray-200"
                            placeholder="Type Your Message Here..."
                        ></textarea>
                        <span></span>
                    </div>
                    <div data-netlify-recaptcha="true"></div>
                    <div className="flex  justify-center">
                        <button
                            type="submit"
                            value="SEND MES"
                            name="submit"
                            className="
                            btn   py-2 px-6 bg-accent text-dark rounded-md cursor-pointer text-sm uppercase tracking-widest font-black
                            transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110
                        "
                        >
                            SEND
                    </button>
                    </div>

                </form>
            </div>
        </section>
    )
}