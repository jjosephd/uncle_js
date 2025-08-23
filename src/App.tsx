import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';

const HomeLayout = () => {
  return (
    <div className="flex h-screen bg-background w-full flex-col">
      <NavBar />
      <div className="overflow-hidden flex-grow flex justify-center">
        {/* Header Component */}
        <main className="overflow-y-auto flex flex-col justify-center items-center max-w-xl w-full">
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
  return (
    <>
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
