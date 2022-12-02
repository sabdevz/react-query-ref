import { Routes, Route, Link } from 'react-router-dom';

import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Home from './components/Home';
import Superheroes from './components/Superheroes';
import RQSuperheros from './components/RQSuperheroes';
import Navbar from './components/Navbar';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/superheroes' element={<Superheroes />} />
        <Route path='/rqsuperheroes' element={<RQSuperheros />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
