import {Link, Route, Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Bucket from './pages/Bucket';
import './App.css';

function App() {
  return (
    <div className='flex justify-center p-6 w-screen h-screen bg-gray-300 overflow-y-auto'>
      <div className='w-full'>
        <div className='flex items-center justify-center mb-4 text-xs text-gray-700 font-semibold uppercase tracking-wide'>
          <Link className='mx-2 px-4 py-2 rounded-xl hover:bg-gray-200 transition-all ease-in-out' to="/">
            Home
          </Link>

          <Link className='mx-2 px-4 py-2 rounded-xl hover:bg-gray-200 transition-all ease-in-out' to="/about">
            About
          </Link>

          <Link className='mx-2 px-4 py-2 rounded-xl hover:bg-gray-200 transition-all ease-in-out' to="/bucket">
            Bucket
          </Link>
        </div>
        <br/>
        <div className='p-8 w-full bg-gray-200 rounded-xl'>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/bucket" element={<Bucket />}></Route>
          </Routes>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default App;
