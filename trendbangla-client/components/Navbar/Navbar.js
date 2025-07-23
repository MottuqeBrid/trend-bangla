import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "../Logo/Logo";

const navLinks = (
  <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <details>
        <summary>Parent</summary>
        <ul className="p-2">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <Link href="/about">About</Link>
    </li>
  </>
);

const NavBar = () => {
  return (
    <div className="bg-base-100 w-full shadow-sm sticky top-0 z-50">
      <nav className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2 flex items-center">
          <ThemeToggle />
          <Link className="btn btn-primary rounded-xl text-white" href="/login">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
