import axios from 'axios';
import { useEffect, useState } from 'react';

const Superheroes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:4000/superheroes`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return;
  }

  return (
    <>
      <h2>Superheros</h2>
      <div className='d-flex justify-content-center .align-items-center'>
        {data.map((hero) => (
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
      </div>
    </>
  );
};
export default Superheroes;
