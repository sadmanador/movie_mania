"use client";
import Banner from "@/components/Banner/Banner";
import CardGroup from "@/components/CardGroup/CardGroup";
import Slider from "@/components/Slider/Slider";
import MainContext from "@/context/MasterContext";
import BannerContext from "@/context/MasterContext";

export default function Home() {
  return (
    <MainContext>
      <div className="">
        <Banner />
        <Slider />
        <h2 className="text-2xl text-yellow-500 font-bold ml-16 mb-8">
          Top Rated Movies
        </h2>
        <CardGroup streamingType={"movie"} activeTab={"top_rated"} />
      </div>
    </MainContext>
  );
}
