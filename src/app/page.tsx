"use client";
import Banner from "@/components/Banner/Banner";
import CardGroup from "@/components/CardGroup/CardGroup";
import Slider from "@/components/Slider/Slider";
import BannerContext from "@/context/BannerContext";

export default function Home() {
  return (
    <BannerContext>
      <div className="relative">
        <Banner />
        <Slider />
        <CardGroup />
      </div>
    </BannerContext>
  );
}
