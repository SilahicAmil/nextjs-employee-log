import LoginForm from "@/components/HomePage/LoginForm/LoginForm";

const HomePage = ({}) => {
  return (
    <>
      <div>
        <h1 className="text-xl bg-red-500">Home Page</h1>
        <LoginForm />
      </div>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
