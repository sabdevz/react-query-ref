import { useState } from 'react';
import Pokemon from './Pokemon';
import UserList from './UserList';

const Home = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <UserList />

      <br />
      <div className='form-group'>
        <label style={{ fontWeight: 'bold', marginBottom: '22px' }}>
          Search Pokemon
        </label>
        <input
          type='text'
          className='form-control'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <Pokemon pokemon={value} />
    </>
  );
};
export default Home;
