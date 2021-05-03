import React from 'react';


export function ContactContainer({ children }) {
    return (
        <section class="container" id="contact">
            <div class="formBx">
                <form
                    data-netlify="true"
                    class="needs-validation"
                    method="post"
                    name="contact"
                    data-netlify-recaptcha="true"
                    action="/dist/index.html?succesfull"
                    novalidate
                >
                    <h2>Contact me</h2>
                    <div class="form-group inputBox">
                        <input
                            type="text"
                            class="form-control"
                            id="nameForm"
                            name="name"
                            required
                        />
                        <span>Full Name</span>
                        <div class="invalid-feedback">
                            Please fill in your name.
                        </div>
                    </div>
                    <div class="form-group inputBox">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="form-control"
                            required
                        />
                        <span>Email Address</span>
                        <div class="invalid-feedback">
                            Please fill in your email.
                        </div>
                    </div>
                    <div class="form-group inputBox">
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            class="form-control"
                            required
                        />
                        <span>Subject</span>
                        <div class="invalid-feedback">
                            Please fill in the subject.
                        </div>
                    </div>
                    <div class="form-group inputBox">
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="5"
                            required
                            class="form-control"
                        ></textarea>
                        <span>Type Your Message Here...</span>
                        <div class="invalid-feedback">
                            Please fill in your message.
                        </div>
                    </div>
                    <div data-netlify-recaptcha="true"></div>
                    <button
                        type="submit"
                        class="btn"
                        value="SEND MES"
                        name="submit"
                    >
                        SEND
                    </button>
                </form>
            </div>
        </section>
    )
}