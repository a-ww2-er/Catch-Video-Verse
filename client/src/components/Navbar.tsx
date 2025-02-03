import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import LoginModal from "./LoginPage/LoginModal";

const Navbar = () => {
  const router = useRouter();

  const navigateToAuth = () => {
    router.push("/auth");
  };

  const navItems = [
    {
      name: "Product",
      dropdown: [
        { name: "Profile" },
        { name: "Settings" },
        { name: "Sign Out" },
      ],
    },
    {
      name: "Solutions",
      dropdown: [
        { name: "Profile" },
        { name: "Settings" },
        { name: "Sign Out" },
      ],
    },
    {
      name: "Learn",
      dropdown: [
        { name: "Profile" },
        { name: "Settings" },
        { name: "Sign Out" },
      ],
    },
    {
      name: "Pricing",
      dropdown: [
        { name: "Profile" },
        { name: "Settings" },
        { name: "Sign Out" },
      ],
    },
    {
      name: "Watch",
      dropdown: [
        { name: "Profile" },
        { name: "Settings" },
        { name: "Sign Out" },
      ],
    },
  ];

  return (
    <>
      <nav className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-3 lg:px-3">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-3">
              <a href="#" className="text-xl  ">
                <p className="font-yesterYear">
                  {" "}
                  Catch video{" "}
                  <span className="text-green-600 text-2xl">verse</span>
                </p>
              </a>
              <ul className="flex space-x-1 ">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <li key={item.name} className="relative group">
                      {/* Dropdown Toggle */}
                      <button className="flex items-center gap-2 font-medium hover:bg-gray-300 rounded-xl  px-4 py-3">
                        <span>{item.name}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                      {/* Dropdown Menu (Visible on hover) */}
                      <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 rounded-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <a className="block px-4 py-2  text-sm hover:bg-gray-700">
                              {dropdownItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <a className="hover:text-gray-300">{item.name}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:bg-gray-300 rounded-xl  px-4 py-3">
                Contact Sales
              </a>
              <Link
                href={"/login"}
                // onClick={navigateToAuth}
                className="hover:bg-gray-300 rounded-xl  px-4 py-3"
              >
                Login
              </Link>
              <LoginModal />
            </div>
            <div className="flex items-center md:hidden">
              <Button id="menu-btn" className="text-gray-300 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div id="mobile-menu" className="md:hidden hidden">
          <a href="#" className="block px-4 py-2  hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block px-4 py-2  hover:bg-gray-700">
            About
          </a>
          <a href="#" className="block px-4 py-2  hover:bg-gray-700">
            Services
          </a>
          <a href="#" className="block px-4 py-2  hover:bg-gray-700">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
