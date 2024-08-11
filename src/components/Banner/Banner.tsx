"use client";
import { useEffect, useState } from "react";

const Banner = () => {
  const [currentItem, setCurrentItem] = useState(1);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(5);




  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(0);
      setCountdown(5);
      setCurrentItem((prevItem) => (prevItem === 4 ? 1 : prevItem + 1));
      console.log("Image switched to item:", currentItem);
    }, 5000); // Switch image every 5 seconds

    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + 1);
      setCountdown((prev) => (prev > 1 ? prev - 0.05 : prev)); // Decrease countdown
    }, 50);

    // Cleanup function
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
      console.log("Intervals cleared");
    };
  }, [currentItem]);

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="carousel  w-full">
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
        <div
          id="item2"
          className={`carousel-item w-full ${
            currentItem === 2 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
        </div>
        <div
          id="item3"
          className={`carousel-item w-full ${
            currentItem === 3 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
        </div>
        <div
          id="item4"
          className={`carousel-item w-full ${
            currentItem === 4 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
        </div>
      </div>

      {/* buttons for the slider */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 py-2  w-full">
        <button
          onClick={() => setCurrentItem(1)}
          className={`btn btn-xs ${currentItem === 1 ? "btn-active" : ""}`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentItem(2)}
          className={`btn btn-xs ${currentItem === 2 ? "btn-active" : ""}`}
        >
          2
        </button>
        <button
          onClick={() => setCurrentItem(3)}
          className={`btn btn-xs ${currentItem === 3 ? "btn-active" : ""}`}
        >
          3
        </button>
        <button
          onClick={() => setCurrentItem(4)}
          className={`btn btn-xs ${currentItem === 4 ? "btn-active" : ""}`}
        >
          4
        </button>
      </div>

      {/* Circular progress bar with countdown */}
      <div className="absolute top-6 right-4">
        <svg className="w-12 h-12">
          <circle
            className="text-gray-500"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="18"
            cx="24"
            cy="24"
          />
          <circle
            className="text-base-100"
            strokeWidth="4"
            strokeDasharray="113"
            strokeDashoffset={113 - (113 * progress) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="18"
            cx="24"
            cy="24"
          />
          <text
            x="24"
            y="28"
            textAnchor="middle"
            className="text-sm font-bold fill-current text-base-100"
          >
            {Math.ceil(countdown)}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
