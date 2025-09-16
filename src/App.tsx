import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from './components/user/Login';

const HomeLayout = () => {
  return (
    <div
      className="flex bg-background w-full flex-col min-h-screen"
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
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          {/* Other routes */}
          <Route index element={<Home />}></Route>
          <Route path={'/menu'} element={<Menu />}></Route>
          <Route path={'/login'} element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
