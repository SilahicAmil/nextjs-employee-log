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
      <div>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="employee-id">Employee ID:&nbsp;</label>
            <input type="text" name="employee-id" />
          </div>
          <div>
            <label htmlFor="password">Password:&nbsp;</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
