import { useStore as useLoginStore } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isLoginOpen, toggleLogin, authenticateUser, isAuthenticated } =
    useLoginStore();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authenticateUser();
    navigate('/');
  };

  const Register = () => {
    return (
      <div
        className="register-container flex flex-col gap-2 justify-between items-center min-h-[200px] max-w-md
         rounded-xl shadow-2xl p-12 font-sans border border-orange-500 font-bold"
      >
        {' '}
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
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </form>
        </div>
        <div
          className=" hover:text-orange-500/80 text-white hover:cursor-pointer"
          onClick={toggleLogin}
        >
          Go Back to Login
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
        {' '}
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

            <button className="btn btn-primary">Login</button>
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
      <div className="">Hello</div>
    </>
  );
};

export default Login;
