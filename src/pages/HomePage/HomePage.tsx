import React from 'react';
import cl from './HomePage.module.scss';
import BasicPage from "@/components/BasicPage";

const HomePage = () => {
  return (
    <BasicPage className={cl.homePage}>
      Home page ;)
    </BasicPage>
  );
};

export default HomePage;