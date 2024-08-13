"use client";
import CardGroup from "@/components/CardGroup/CardGroup";
import BannerContext, { BannerMovieContext } from "@/context/BannerContext";
import React, { useContext, useState } from "react";

const TVshowPage = () => {
  const { setDetailsType, setTrendingOptions } = useContext(BannerMovieContext);
  const [activeTab, setActiveTab] = useState<string>("top_rated");


  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setDetailsType("tv");
  };



  return (
    <>
      <BannerContext>
        <h2 className="text-2xl text-yellow-500 font-bold ml-16 mb-8">
          Explore TV Shows
        </h2>
        <div role="tablist" className="tabs tabs-lifted tabs-md my-10 text-xl">
          <a
            role="tab"
            className={`tab hover:text-yellow-500 ${
              activeTab === "popular"
                ? "tab-active text-yellow-500 font-bold"
                : ""
            }`}
            onClick={() => handleTabClick("popular")}
          >
            Popular
          </a>
          <a
            role="tab"
            className={`tab hover:text-yellow-500 ${
              activeTab === "upcoming"
                ? "tab-active text-yellow-500 font-bold"
                : ""
            }`}
            onClick={() => handleTabClick("airing_today")}
          >
            Airing Today
          </a>
          <a
            role="tab"
            className={`tab hover:text-yellow-500 ${
              activeTab === "upcoming"
                ? "tab-active text-yellow-500 font-bold"
                : ""
            }`}
            onClick={() => handleTabClick("on_the_air")}
          >
            On The Air
          </a>
          <a
            role="tab"
            className={`tab hover:text-yellow-500 ${
              activeTab === "top_rated"
                ? "tab-active text-yellow-500 font-bold"
                : ""
            }`}
            onClick={() => handleTabClick("top_rated")}
          >
            Top Rated
          </a>
        </div>

        <CardGroup streamingType="tv" activeTab={activeTab} />
      </BannerContext>
    </>
  );
};

export default TVshowPage;
