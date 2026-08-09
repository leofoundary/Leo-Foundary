import React from 'react';
import Navbar from '../components/Navbar';
import HomeContent from '../components/HomeContent';

const Home = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <Navbar />
      <HomeContent />

    </div>
  );
};

export default Home;