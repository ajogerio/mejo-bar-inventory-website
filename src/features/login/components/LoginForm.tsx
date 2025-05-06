export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-auto w-full px-20 gap-5 py-10 rounded-md">
      {/* Login text */}
      <div>
        <h1 className="text-4xl font-bold">Welcome</h1>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-1 w-full">
        {/* User Name text */}
        <div className="flex justify-between w-full">
          <p>User Name</p>
          <div className="w-1/2 h-auto"></div>
        </div>

        {/* User Name input */}
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full border-b-2 border-b-gray-100"
          />
        </div>

        {/* Password text */}
        <div className="flex justify-between w-full">
          <p>Password</p>
          <div className="w-1/2 h-auto"></div>
        </div>

        {/* Password input */}
        <div className="flex justify-center w-full">
          <input
            type="password"
            placeholder="Password"
            className="w-full border-b-2 border-b-gray-100"
          />
        </div>
      </div>

      {/* Forgot Password text */}
      <div className="flex justify-between w-full">
        <div className="w-1/2 h-auto"></div>
        <p className="text-xs">Forgot Password?</p>
      </div>

      {/* Login button */}
      <div className="flex justify-center w-full">
        <button className="w-full bg-black text-white mx-2 rounded-full p-4 text-lg">
          Login
        </button>
      </div>

      <div className="flex flex-col w-full gap-2">
        {/* Not a Member text */}
        <div className="flex justify-center w-full">
          <p className="text-xs">New Member?</p>
        </div>

        {/* Sign up text */}
        <div className="flex justify-center w-full">
          <p>Sign up</p>
        </div>
      </div>
    </div>
  );
}
