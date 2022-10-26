import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import History from '@/utils/history';

const NavigateSetter = () => {
  History.navigate = useNavigate();
  History.location = useLocation();

  return null;
};

export default NavigateSetter;
