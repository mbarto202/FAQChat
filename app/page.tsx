import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TryChatting from './components/TryChatting';
import CreateYourOwn from './components/CreateYourOwn';
import HowItWorks from './components/HowItWorks';
import UsersLoveIt from './components/UsersLoveIt';
import CustomAgent from './components/CustomAgent';
import YouCanAlso from './components/YouCanAlso';

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <main>
        <TryChatting />
        <CreateYourOwn />
        <HowItWorks />
        <UsersLoveIt />
        <CustomAgent />
        <YouCanAlso />
      </main>
      
      <Footer />
    </div>
  );
}
