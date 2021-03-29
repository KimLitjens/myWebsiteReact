import React from 'react';
import { HeaderContainer } from './containers/header'
import { ContactContainer } from './containers/contact'




function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <section id="start">
        <h1>Hey, I am Kim. I'm a web developer</h1>
      </section>
      <section id="whatIdo"></section>
      <section id="aboutMe">
        <h1>About Me</h1>
        <p>I am looking for a challenging job as a front-end developer at a company where I can show my programming talents and develop myself even more.</p>
      </section>
      <section id="work"></section>
      <section id="contact">
        <ContactContainer />
      </section>
    </div>
  );
}

export default App;
