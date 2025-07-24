import AuthNavBar from "./AuthNavBar";

const HomeLayout = ({ children }) => {
  return (
    <div className="">
      <AuthNavBar />
      <main className="">{children}</main>
    </div>
  );
};

export default HomeLayout;
