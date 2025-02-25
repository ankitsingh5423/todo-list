const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Login
        </h2>

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
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Login
        </button>

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
