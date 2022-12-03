import { useHero } from '../hooks/useHero';
import HeroCounter from './HeroCounter';

const Superheroes = () => {
  const queryInfo = useHero();

  return queryInfo.isLoading ? (
    <h2>loading...</h2>
  ) : queryInfo.isError ? (
    <h2>{queryInfo.error.message}</h2>
  ) : (
    <>
      <div className='d-flex justify-content-center align-content-center'>
        <h2>Superheros</h2>
        <HeroCounter />
      </div>
      <div className='d-flex justify-content-center .align-items-center'>
        {queryInfo.data.map((hero) => (
          <div
            className='card ms-2 mt-3'
            style={{ width: '18rem' }}
            key={hero.id}
          >
            <div className='card-body'>
              <h5 className='card-title'>{hero.name}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>{hero.alterEgo}</h6>
              <p className='card-text'>{hero.info}</p>
            </div>
          </div>
        ))}

        <br />
      </div>
      {queryInfo.isFetching ? 'Updating .....' : null}
      <br />
    </>
  );
};
export default Superheroes;
