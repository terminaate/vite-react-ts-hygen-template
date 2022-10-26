import { Location, NavigateFunction } from 'react-router-dom';

interface IHistory {
  navigate: null | NavigateFunction;
  location: null | Location;
  push: (to: string) => void;
}

const History: IHistory = {
  navigate: null,
  location: null,
  push: (to: string) => History.navigate!(to),
};

export default History;
