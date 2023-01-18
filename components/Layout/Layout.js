import NavBar from "../Navigation/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <main className="w-screen  ">{children}</main>
      </div>
    </>
  );
};

export default Layout;
