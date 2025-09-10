
import { promotionsData } from '../../../data/promotions';


const Promotion = () => {
  return (
    <>
      {promotionsData.map((promotion, index) => (
        <div
          key={index}
          className={`promotion-container w-full py-6 grid grid-cols-1 lg:grid-cols-2 justify-items-center ${
            index % 2 === 0 ? 'bg-green-900' : 'bg-primary/80'
          }`}
        >
          <img
            src={promotion.imageUrl}
            alt={promotion.title}
            className={`cocktail-img max-h-[400px] w-[600px] mx-auto rounded-2xl border-1 shadow-md border-orange-500 ${
              index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
            }`}
          />
          <div
            className={`promo-container flex flex-col items-center justify-center gap-8 ${
              index % 2 === 0 ? 'lg:order-2' : 'lg:order-1' // Text container order alternates opposite to image
            }`}
          >
            <h1 className="title uppercase max-w-lg text-2xl md:text-4xl text-center text-orange-500 font-bold my-4">
              {promotion.title}
            </h1>
            <p
              className="text-white max-w-lg px-4"
              style={{ fontFamily: 'sans-serif' }}
            >
              {promotion.desc}
            </p>
            <div
              className={`directions-btn btn btn-primary btn-sm rounded-full border-black border-b-4 border-r-4 ${
                index % 2 === 0 ? 'lg:order-2' : 'hidden'
              }`}
            >
              Click Here For Directions
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Promotion;
