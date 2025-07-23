import NavBar from "@/components/Navbar/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
