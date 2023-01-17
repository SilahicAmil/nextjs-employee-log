import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("done");
    // handle data here eventually
    router.push("/employee-dash");
  };

  return (
    <>
      <div className="flex justify-center items-center  bg-red-50 text-black h-screen w-screen font-mono">
        <div>
          <div className="flex justify-center mb-10 text-2xl">
            <h1>COMPANY NAME</h1>
          </div>
          <form onSubmit={formSubmitHandler}>
            <div className="flex flex-col items-center">
              <label htmlFor="employee-id">Employee ID</label>
              <input
                type="text"
                name="employee-id"
                className="bg-black text-white"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="bg-black text-white"
              />
            </div>
            <div className="flex items-center justify-center mt-5 rounded-xl h-8 text-black bg-red-500 text-lg">
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
