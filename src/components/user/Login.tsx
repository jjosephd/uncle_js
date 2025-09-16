import { useStore as useLoginStore } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loading from './Loading';

const Login = () => {
  const { isLoginOpen, toggleLogin, authenticateUser, isAuthenticated } =
    useLoginStore();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    authenticateUser();
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  const Header = () => {
    return (
      <div className="container flex justify-center sm:justify-center">
        <h1
          className="text-2xl sm:text-4xl text-orange-500 font-extrabold 
          uppercase max-w-sm [text-shadow:_4px_4px_0_rgb(0_0_0)] text-center
          "
        >
          Uncle J's Restaurant
        </h1>
      </div>
    );
  };

  const Register = () => {
    return (
      <div
        className="register-container flex flex-col gap-2 justify-between items-center min-h-[200px] max-w-md
         rounded-xl shadow-2xl p-12 font-sans border border-orange-500 font-bold"
      >
        <header>
          <Header />
        </header>{' '}
        <div className="text-white">Register</div>
        <div className="register-form">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs text-black"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs text-black"
            />
            <button
              className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <span className="loading loading-spinner"></span>}
              Register
            </button>
          </form>
        </div>
        <div
          className=" hover:text-orange-500/80 text-white hover:cursor-pointer"
          onClick={toggleLogin}
        >
          Already have an account? Login
        </div>
      </div>
    );
  };

  const LoginPage = () => {
    return (
      <div
        className="register-container flex flex-col justify-between items-center min-h-[200px] max-w-md
         rounded-xl shadow-2xl p-12 gap-4 font-sans border-2 border-orange-500/40  font-bold"
      >
        <header>
          <Header />
        </header>{' '}
        <div className="text-white">Login</div>
        <div className="register-form">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs text-black"
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs text-black"
            />

            <button
              className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <span className="loading loading-spinner"></span>}
              Login
            </button>
          </form>
        </div>
        <div
          className=" hover:text-orange-500 hover:cursor-pointer text-white"
          onClick={toggleLogin}
        >
          Register Today!
        </div>
      </div>
    );
  };
  return !isAuthenticated ? (
    <>
      {/* Render LoginPage or Register based on isLoginOpen state */}
      {isLoginOpen ? <LoginPage /> : <Register />}
    </>
  ) : (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Previous Page
        </button>
      )}
    </>
  );
};

export default Login;
