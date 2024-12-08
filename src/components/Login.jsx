import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const enteredEmail = e.target.email.value;
    const password = e.target.password.value;
    console.log(enteredEmail, password);
  };

  return (
    <div>
      <title>Login - My Website</title>

      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-6 sm:p-10">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Login to Your Account
          </h2>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link className="label-text-alt link link-hover text-blue-600">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center font-semibold mt-4">
            Don't Have An Account?
            <Link className="text-red-500" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
