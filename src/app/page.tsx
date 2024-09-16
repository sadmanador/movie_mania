'use client';
import CardContainer from '@/components/CardGroup/CardContainer/CardContainer';
import SliderSection from '@/components/SliderSection/SliderSection';
import Banner from '@/components/BannerSection/Banner/Banner';
import MainContext from '@/context/MasterContext';

export default function Home() {
  return (
    <MainContext>
      <div className="">
        <Banner />
        <SliderSection />
        <h2 className="section-heading">Top Rated Movies</h2>
        <CardContainer streamingType={'movie'} activeTab={'top_rated'} />
      </div>
    </MainContext>
  );
}
