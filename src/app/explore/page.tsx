"use client";
import { useState } from "react";
import CardGroup from "@/components/CardGroup/CardGroup";
import BannerContext from "@/context/BannerContext";

const Page = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<string>("top_rated");

  // Function to handle tab clicks
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Determine the streaming type based on the active tab
  const streamingType = "movie"; // Adjust based on your needs

  return (
    <BannerContext>
      <h2 className="text-2xl text-yellow-500 font-bold ml-16 mb-8">
        Explore Movies
      </h2>
      <div role="tablist" className="tabs tabs-lifted tabs-md my-10 text-xl">
        <a
          role="tab"
          className={`tab hover:text-yellow-500 ${
            activeTab === "popular" ? "tab-active text-yellow-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick("popular")}
        >
          Popular
        </a>
        <a
          role="tab"
          className={`tab hover:text-yellow-500 ${
            activeTab === "upcoming" ? "tab-active text-yellow-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick("upcoming")}
        >
          Up Coming
        </a>
        <a
          role="tab"
          className={`tab hover:text-yellow-500 ${
            activeTab === "top_rated" ? "tab-active text-yellow-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick("top_rated")}
        >
          Top Rated
        </a>
        <a
          role="tab"
          className={`tab hover:text-yellow-500 ${
            activeTab === "latest" ? "tab-active text-yellow-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick("latest")}
        >
          Latest
        </a>
      </div>
      <CardGroup streamingType={streamingType} />
    </BannerContext>
  );
};

export default Page;
