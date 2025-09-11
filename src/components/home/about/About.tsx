import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import aboutImg from '../../../assets/images/about/aboutImg.jpg';

const aboutContent = [
  {
    type: 'image',
    src: aboutImg,
  },
  {
    type: 'text',
    title: "About Uncle J's",
    content:
      "Uncle J's started the way most great meals do—around a family table. Back in the day, “Uncle J” was the relative everyone knew would put too much food on your plate, tell you to “eat first, talk later,” and make you laugh until your stomach hurt. His kitchen was a gathering place, not just for family but for neighbors, friends, and anyone who needed a good meal and good company. When Uncle J decided to open a restaurant, he brought that same spirit with him. The recipes? Family-tested and soul-approved.",
  },
  {
    type: 'text',
    title: 'Our Vibe',
    content:
      "The vibe? Like walking into your favorite cousin's house on a Sunday afternoon. As a Black-owned restaurant, Uncle J's is proud to carry forward a tradition of resilience, flavor, and hospitality. Every dish has a story—passed down, remixed, and served with love. It's more than food; it's culture on a plate. Today, Uncle J's isn't just a restaurant—it's a community hub. A place where people gather to celebrate, connect, and keep the legacy of good food and family alive. Because at Uncle J's, you're never just a customer… you're family.",
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === aboutContent.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? aboutContent.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 text-white overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-6">
        Welcome to Uncle J's
      </h2>
      <div className="relative h-[500px] flex items-center justify-center">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex items-center justify-center p-4"
          >
            {aboutContent[index].type === 'image' ? (
              <img
                src={aboutContent[index].src}
                alt="About Uncle J's"
                className="rounded-xl border-2 border-orange-500 object-cover h-full"
              />
            ) : (
              <div className="text-center flex flex-col justify-center h-full  bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  {aboutContent[index].title}
                </h3>
                <p className="text-lg leading-relaxed">
                  {aboutContent[index].content}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition"
      >
        <FaChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {aboutContent.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-orange-500' : 'bg-gray-400'
            } cursor-pointer`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
