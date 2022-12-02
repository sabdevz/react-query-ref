import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Superheroes from './components/Superheroes';
import RQSuperheros from './components/RQSuperheroes';

import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/superheroes' element={<Superheroes />} />
        <Route path='/rqsuperheroes' element={<RQSuperheros />} />
      </Routes>
    </>
  );
};
export default App;
