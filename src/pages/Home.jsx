import React from 'react';
import Hero from "../components/CustomiseHero"
import Category from '../components/Category/Category';
import MedicalFacilities from '../components/MedicalFacilities';
import Custom from '../components/Custom';
import Custom2 from '../components/Custom2';
import ClientData from '../components/ClientData';
import Brand from '../components/Brand';
import Information from '../components/Information';
import CompanyNews from '../components/CompanyNews';
import Location from '../components/Location';
import FooterTop from '../components/FooterTopp';






const Home = () => {
  return (
    <div>           
      <Hero/>
      <Category/>
      <MedicalFacilities/>
      <Custom/>
      <Custom2/>
      <ClientData/>
      <Brand/>
      <Information/>
      <CompanyNews/>
      <Location/>
      <FooterTop/>
    </div>
  );
};

export default Home;

