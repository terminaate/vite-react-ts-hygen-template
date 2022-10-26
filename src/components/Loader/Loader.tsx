import React from 'react';
import BasicPage from '@/components/BasicPage';
import cl from './Loader.module.scss';

const Loader = () => {
  return <BasicPage className={cl.loaderPage}>Loading</BasicPage>;
};

export default Loader;
