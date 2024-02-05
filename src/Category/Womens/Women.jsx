import React from 'react'
import NewArrivals from "./NewArrivals/NewArrivals";
import Banner from "./Banner/Banner";
import BannerBottom from "./Banner/BannerBottom";
import BestSellers from "./BestSellers/BestSellers";
import Sale from "./Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";

function Women() {
  return (
    <div>
      <Banner/>
      <BannerBottom/>
      <NewArrivals/>
      <BestSellers/>
      <Sale/>
      <SpecialOffers/>
     
    </div>
  )
}

export default Women