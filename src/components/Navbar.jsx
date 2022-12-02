import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <header className='d-flex justify-content-center py-3'>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-link px-2 link-primary'
              aria-current='page'
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/superheroes' className='nav-link `px-2 link-dark'>
              Superheroes
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/rqsuperheroes' className='nav-link px-2 link-dark'>
              RQ Superheroes
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Navbar;
