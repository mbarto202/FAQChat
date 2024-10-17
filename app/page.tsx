import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TryChatting from './components/TryChatting/TryChatting';
import CreateYourOwn from './components/CreateYourOwn/CreateYourOwn';
import HowItWorks from './components/HowItWorks/HowItWorks';
import UsersLoveIt from './components/UsersLoveIt/UsersLoveIt';
import CustomAgent from './components/CustomAgent/CustomAgent';
import YouCanAlso from './components/YouCanAlso/YouCanAlso';

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
