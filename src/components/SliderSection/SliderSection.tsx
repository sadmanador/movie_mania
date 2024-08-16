import { MasterContext } from "@/context/MasterContext";
import { useContext, useEffect, useState } from "react";
import SingleSlide from "@/components/SingleSlide/SingleSlide";

const SliderSection = () => {
  const { sliderData } = useContext(MasterContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderData.length]);

  return (
    <div className="my-10">
      <div className="carousel carousel-end rounded-box">
        {sliderData.map((movie, index) => {
          return <SingleSlide key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SliderSection;
