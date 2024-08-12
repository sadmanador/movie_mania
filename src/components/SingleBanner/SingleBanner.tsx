import React from 'react';

const SingleBanner = () => {
    return (
        <div
          id="item1"
          className={`carousel-item w-full ${
            currentItem === 1 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
        </div>
    );
};

export default SingleBanner;