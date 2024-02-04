import React from 'react'
import NewArrivals from "../Womens/NewArrivals/NewArrivals";
import Banner from "../Womens/Banner/Banner";
import BannerBottom from "../Womens/Banner/BannerBottom";
import BestSellers from "../Womens/BestSellers/BestSellers";
import Sale from "../Womens/Sale/Sale";
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