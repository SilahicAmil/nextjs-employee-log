import NavBar from "../Navigation/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <main className="font-roboto">{children}</main>
      </div>
    </>
  );
};

export default Layout;
