import NavBar from "../Navigation/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <main className="w-screen mt-8 ">{children}</main>
      </div>
    </>
  );
};

export default Layout;
