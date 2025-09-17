import { useStore as useLoginStore } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loading from './Loading';

// Login component handles user authentication and registration
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
      // Simulate API call or authentication process
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

  // Register component for new user registration
  const Register = () => {
    return (
      <div
        className="register-container flex flex-col gap-2 justify-between items-center min-h-[200px] max-w-md
         rounded-xl shadow-2xl  my-4 p-12 font-sans bg-slate-900 border border-orange-500/20 font-bold"
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
              className="input input-bordered w-full max-w-xs text-black dark:text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs text-black dark:text-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs text-black dark:text-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs text-black dark:text-white focus:outline-none"
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

  // LoginPage component for existing user login
  const LoginPage = () => {
    return (
      <div
        className="register-container flex flex-col gap-2 justify-between items-center min-h-[200px] max-w-md
         rounded-xl shadow-2xl  my-4 p-12 font-sans bg-slate-900 border border-orange-500/20 font-bold"
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
              className="input input-bordered w-full max-w-xs text-black dark:text-white focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs text-black dark:text-white focus:outline-none"
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

  // Render different components based on authentication status and login/register state
  return !isAuthenticated ? (
    <>{isLoginOpen ? <LoginPage /> : <Register />}</>
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
