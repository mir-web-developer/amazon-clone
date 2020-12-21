import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1212121212"
          title="I am learning programming "
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
        />
        <Product
          id="1212121212"
          title="I am learning programming "
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1212121212"
          title="I am learning programming "
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
        />
        <Product
          id="1212121212"
          title="I am learning programming "
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
        />
        <Product
          id="1212121212"
          title="I am learning programming "
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1212121212"
          title="I am learning programming "
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
