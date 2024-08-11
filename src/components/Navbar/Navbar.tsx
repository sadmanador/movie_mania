import ThemeToggleButton from "../DarkMode/DarkMode";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-20">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Movie Mania</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div className="mx-auto ">
              <div>
                <div className="group relative">
                  <input
                    type="text"
                    id="example9"
                    className="block w-full rounded-md border-gray-300 px-10 py-2 shadow-sm transition-all hover:bg-gray-50 focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                    placeholder="Quick search..."
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5">
                    <span className="rounded border px-1.5 text-sm text-gray-400 shadow-sm transition-all group-hover:border-primary-500 group-hover:text-primary-500">
                      <kbd>⌘</kbd> <kbd>K</kbd>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a>TV shows</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Navbar;
