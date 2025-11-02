import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/home/Home';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from './components/user/Login';
import Cart from './components/cart/Cart';
import Reviews from './components/user/Reviews';
import Reservations from './components/user/Reservations';

const HomeLayout = () => {
  return (
    <div
      className="flex bg-background w-full flex-col min-h-screen"
      style={{ fontFamily: 'MyCustomFont, sans-serif' }}
    >
      <div className="fixed w-screen z-50">
        <NavBar />
      </div>
      {/* Toast Container positioned in top-right corner */}
      <div className="fixed top-24 right-4 z-[100] w-auto">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastClassName="!w-auto min-w-[300px]"
        />
      </div>
      
      <div className="overflow-hidden flex-grow flex justify-center pt-24">
        
        {/* Header Component */}
        <main className="overflow-y-auto flex flex-col justify-center items-center w-full">
          <Cart />
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
          <Route path={'/reviews'} element={<Reviews />}></Route>
          <Route path={'/reservations'} element={<Reservations />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
