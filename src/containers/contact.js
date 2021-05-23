import React, { useState, useEffect } from 'react';


export function ContactContainer({ children }) {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (window.location.search.includes('success=true')) {
            setSuccess(true);
        }
    }, []);

    return (
        <section className="flex justify-center" id="contact">
            <div className="">
                <h2 className="text-accent">Contact me</h2>
                {success && (
                    <p style={{ color: "green" }}>Thanks for your message! </p>
                )}
                <form
                    name="contact"
                    className="needs-validation"
                    method="post"
                    action="#contact/?success=true"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="relative w-full mb-5  ">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            required
                            className="
                            pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 border-gray-200 appearance-none 
                            focus:outline-none 
                            focus:ring-0 
                            focus:border-accent 
                            "
                        />
                    </div>
                    <div className="">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className="
                            pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 border-gray-200 appearance-none 
                            focus:outline-none 
                            focus:ring-0 
                            focus:border-accent 
                            "
                            required
                        />

                    </div>
                    <div className="">
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            className="
                            pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 border-gray-200 appearance-none 
                            focus:outline-none 
                            focus:ring-0 
                            focus:border-accent 
                            "
                            required
                        />

                    </div>
                    <div className=" mb-2">
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="5"
                            required
                            className="
                            pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 border-gray-200 appearance-none 
                            focus:outline-none 
                            focus:ring-0 
                            focus:border-accent 
                            "
                            placeholder="Type Your Message Here..."
                        ></textarea>
                    </div>
                    <div data-netlify-recaptcha="true"></div>
                    <div className="flex  justify-center">
                        <button
                            type="submit"
                            value="SEND MES"
                            name="submit"
                            className="
                            py-2 px-6 bg-accent text-dark rounded-md cursor-pointer text-sm uppercase tracking-widest font-black
                            transition duration-200 ease-in-out 
                            transform 
                            hover:-translate-y-1 
                            hover:scale-110
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