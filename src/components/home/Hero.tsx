import React from 'react';
import heroImg from '../../assets/images/heroImg.jpg';
import HeroBar from './HeroBar';

const Hero = () => {
  return (
    <div className="h-screen">
      <section
        className="relative h-[350px] sm:min-h-[450px] bg-cover bg-center flex flex-col w-full min-w-screen items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="w-full">
          <div className="container flex justify-center sm:justify-end">
            <h1
              className="text-6xl text-orange-500 font-extrabold 
          uppercase max-w-sm [text-shadow:_4px_4px_0_rgb(0_0_0)]
          "
            >
              Uncle J's Restaurant
            </h1>
          </div>
        </div>
      </section>
      <HeroBar />
    </div>
  );
};

export default Hero;
