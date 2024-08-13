"use client";
import CardGroup from "@/components/CardGroup/CardGroup";
import BannerContext from "@/context/BannerContext";
import React from "react";

const Page = () => {
  return (
    <>
      <BannerContext>
        <h2 className="text-2xl text-yellow-500 font-bold ml-16 mb-8">
          Top Rated TV Shows
        </h2>
        <CardGroup streamingType="tv" />
      </BannerContext>
    </>
  );
};

export default Page;
