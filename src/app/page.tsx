"use client"
import Banner from "@/components/Banner/Banner";
import CardGroup from "@/components/CardGroup/CardGroup";
import Navbar from "@/components/Navbar/Navbar";
import Pagination from "@/components/Pagination/Pagination";
import Slider from "@/components/Slider/Slider";
import BannerContext from "@/context/BannerContext";

export default function Home() {
  return (
    <BannerContext>
      <div className="relative">
        <Navbar />
        <Banner />
        <Slider />
        <CardGroup />
        <Pagination />
      </div>
    </BannerContext>
  );
}
