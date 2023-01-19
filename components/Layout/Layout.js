import NavBar from "../Navigation/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <main className="w-screen mt-6">{children}</main>
      </div>
    </>
  );
};

export default Layout;
