import NavBar from "@/components/Navbar/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <div className="min-h-screen ">
      <NavBar />
      <main className="max-w-7xl mx-auto mt-18">{children}</main>
    </div>
  );
};

export default HomeLayout;
