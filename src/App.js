import React from 'react';
import { HeaderContainer } from './containers/header'
import { ContactContainer } from './containers/contact'
import { HomeContainer } from './containers/home'
import { AboutMeContainer } from './containers/aboutMe'
import { WhatIDo } from './containers/whatIDo'
import { MyWork } from './containers/myWork'





function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <section id="start">
        <HomeContainer />
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
    </div>
  );
}

export default App;
