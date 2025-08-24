import React from 'react';

const FavoritesCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="card w-full border-2 border-slate-500/20 text-white shadow-xl rounded-lg overflow-hidden">
      <figure className="relative h-64">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-6 ">
        <h2 className="card-title text-2xl font-semibold mb-2">{title}</h2>
        <p
          className=" mb-4"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          }}
        >
          {description}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary w-full">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
