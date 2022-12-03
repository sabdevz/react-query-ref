import { useQuery } from 'react-query';
import axios from 'axios';

export const useHero = () => {
  return useQuery(
    'superheros',
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return axios
        .get(`http://localhost:4000/superheroes`)
        .then((res) => res.data);
    },

    {
      // refetchOnWindowFocus: true,
      // staleTime: 5000,
      cacheTime: 5000,
    }
  );
};
