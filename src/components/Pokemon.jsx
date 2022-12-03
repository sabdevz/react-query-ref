import axios, { CancelToken } from 'axios';
import { useState } from 'react';
import { isError, useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
  const queryInfo = useQuery(
    ['pokemon', pokemon],
    () => {
      const source = CancelToken.source();
      const promise = axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
          cancelToken: source.token,
        })
        .then((res) => res.data);

      promise.cancel = () => {
        source.cancel('Query was cancelled by RQ');
      };

      return promise;
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
        <h2> {'queryInfo.error.message'}</h2>
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
