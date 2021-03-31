import React from 'react';
import { HeaderContainer } from './containers/header'
import { ContactContainer } from './containers/contact'
import { HomeContainer } from './containers/home'
import { AboutMeContainer } from './containers/aboutMe'




function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <section id="start">
        <HomeContainer />
      </section>
      <section id="whatIdo"></section>
      <section id="aboutMe">
        <AboutMeContainer />
      </section>
      <section id="work"></section>
      <section id="contact">
        <ContactContainer />
      </section>
    </div>
  );
}

export default App;
