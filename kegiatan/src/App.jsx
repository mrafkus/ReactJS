import {Link, Route, Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Event from './pages/Event';
import './App.css';

function App() {
  return (
    <div className='flex justify-center p-6 w-screen h-screen bg-green-400 overflow-y-auto'>
      <div className='w-full'>
        <div className='flex items-center justify-center mb-4 text-xs text-gray-700 font-semibold uppercase tracking-wide'>
          <Link className='mx-2 px-4 py-2 rounded-xl hover:bg-green-200 transition-all ease-in-out' to="/">
            Home
          </Link>

          <Link className='mx-2 px-4 py-2 rounded-xl hover:bg-green-200 transition-all ease-in-out' to="/contact">
            Contact
          </Link>

          <Link className='mx-2 px-4 py-2 rounded-xl hover:bg-green-200 transition-all ease-in-out' to="/event">
            Event
          </Link>
        </div>
        <br/>
        <div className='p-8 w-full bg-green-200 rounded-xl'>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/event" element={<Event />}></Route>
          </Routes>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default App;
