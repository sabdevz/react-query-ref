import axios from 'axios';
import { useQuery } from 'react-query';

const UserList = () => {
  const queryInfo = useQuery('users', () => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.data);
  });

  return queryInfo.isLoading ? (
    'Loading....'
  ) : queryInfo.isError ? (
    <h2>{queryInfo.error.message}</h2>
  ) : (
    <>
      <div>
        {queryInfo.data.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </>
  );
};
export default UserList;
