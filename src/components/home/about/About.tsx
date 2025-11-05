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
    "Uncle J's began like all great meals—around a family table. 'Uncle J' was the one who overfed you, made you laugh, and turned his kitchen into a gathering place for anyone craving good food and good company. When he opened his restaurant, he brought that same warmth and family-tested, soul-approved flavor.",
},
{
  type: 'text',
  title: 'Our Vibe',
  content:
    "Think Sunday at your favorite cousin’s house. As a Black-owned spot, Uncle J’s celebrates resilience, flavor, and community. Every dish tells a story—passed down, remixed, and served with love. It’s more than food; it’s culture on a plate. Here, you’re never just a customer—you’re family.",
}
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
