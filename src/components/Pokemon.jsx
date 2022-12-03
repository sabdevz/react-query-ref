import axios from 'axios';
import { useState } from 'react';
import { isError, useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
  const queryInfo = useQuery(
    ['pokemon', pokemon],
    () => {
      return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res.data);
    },
    {}
  );

  console.log(queryInfo);

  return (
    <>
      <div className='d-flex justify-content-center align-content-center'>
        <h2>Pokemon</h2>
      </div>
      {queryInfo.isLoading ? (
        'loading....'
      ) : isError ? (
        <h2> {queryInfo.error.message}</h2>
      ) : (
        <div>
          {queryInfo.data?.sprites?.front_default ? (
            <img src={queryInfo.data.sprites.front_default} alt='pokemon' />
          ) : (
            'Pokemon not found'
          )}
          {pokemon}
        </div>
      )}
    </>
  );
};
export default Pokemon;
