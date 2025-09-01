import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import { useStore } from './store/store';

const HomeLayout = () => {
  return (
    <div
      className="flex bg-background w-full flex-col"
      style={{ fontFamily: 'MyCustomFont, sans-serif' }}
    >
      <div className="fixed w-screen z-50">
        <NavBar />
      </div>
      <div className="overflow-hidden flex-grow flex justify-center pt-24">
        {/* Header Component */}
        <main className="overflow-y-auto flex flex-col justify-center items-center w-full">
          <Outlet />
        </main>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

function App() {
  const { count, increment, decrement } = useStore();
  return (
    <>
      {/* You can remove this example counter */}
      <div className='flex gap-4 items-center justify-center'>
        <h1>Count: {count}</h1>
        <button className='p-2 border' onClick={increment}>Increment</button>
        <button className='p-2 border' onClick={decrement}>Decrement</button>
      </div>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          {/* Other routes */}
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
