import React from 'react'
import NewArrivals from "../Womens/NewArrivals/NewArrivals";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import Sale from "../../components/home/Sale/Sale";
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