import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must include at least 6 characters, an uppercase letter, and a lowercase letter."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        const createdAt = result?.user?.metadata?.creationTime;
        // save userinfo to the database
        const newUser = { name, email, createdAt };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "success!",
                text: "successFully Registred",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <title>Register- My Website</title>

      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
          <h2 className="text-2xl font-semibold text-center">
            Register Your Account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-gray-500 focus:outline-none"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center font-semibold">
            Already Have An Account?{" "}
            <Link className="text-red-500" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default Register;
