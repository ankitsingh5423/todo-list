import { useState } from "react";
import { account } from "./config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(email, password);
      navigate("/todos");
      toast.success("Login Successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          {" "}
          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
