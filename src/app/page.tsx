"use client";
import Banner from "@/components/Banner/Banner";
import CardGroup from "@/components/CardGroup/CardGroup";
import Slider from "@/components/Slider/Slider";
import BannerContext, { BannerMovieContext } from "@/context/BannerContext";
import { useContext } from "react";

export default function Home() {

  return (
    <BannerContext>
      <div className="relative">
        <Banner />
        <Slider />
        <h2 className="text-2xl text-yellow-500 font-bold ml-16 mb-8">
          Top Rated Movies
        </h2>
        <CardGroup streamingType={"home"} activeTab={'top_rated'}/>
      </div>
    </BannerContext>
  );
}
