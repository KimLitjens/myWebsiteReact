import React from 'react';
import { HeaderContainer } from './containers/header'
import { ContactContainer } from './containers/contact'
import { IntroContainer } from './containers/intro'
import { AboutMeContainer } from './containers/aboutMe'
import { WhatIDo } from './containers/whatIDo'
import { MyWork } from './containers/myWork'
import { FooterContainer } from './containers/footer'





function App() {
  return (
    <div className="App body">
      <HeaderContainer />
      <section id="intro">
        <IntroContainer />
      </section>
      <section id="whatIdo">
        <WhatIDo />
      </section>
      <section id="aboutMe">
        <AboutMeContainer />
      </section>
      <section id="work">
        <MyWork />
      </section>
      <section id="contact">
        <ContactContainer />
      </section>
      <section id="footer">
        <FooterContainer />
      </section>
    </div>
  );
}

export default App;
