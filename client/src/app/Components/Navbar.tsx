const Navbar = () => {
     const navItems = [
    { name: 'Product',
         dropdown: [
        { name: 'Profile'},
        { name: 'Settings'},
        { name: 'Sign Out'},
      ],},
    { name: 'Solutions',
        dropdown: [
        { name: 'Profile'},
        { name: 'Settings'},
        { name: 'Sign Out'},
      ],
    },
    { name: 'Learn',
        dropdown: [
        { name: 'Profile'},
        { name: 'Settings'},
        { name: 'Sign Out'},
      ],
    },
    { name: 'Pricing',
        dropdown: [
        { name: 'Profile'},
        { name: 'Settings'},
        { name: 'Sign Out'},
      ],
    },
     { name: 'Watch',
        dropdown: [
        { name: 'Profile'},
        { name: 'Settings'},
        { name: 'Sign Out'},
      ],
    },
  ];

  return (<>
  <nav className="bg-white text-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <a href="#" className="text-xl font-bold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="50" height="50">
  <circle cx="100" cy="100" r="80" fill="#4CAF50" stroke="#388E3C" strokeWidth="10"/>
  
  <text x="50%" y="50%" font-size="70" text-anchor="middle" fill="white" font-family="Arial, sans-serif" dy=".3em">CVV</text>
  
  <circle cx="100" cy="100" r="90" fill="none" stroke="#2C6B2F" strokeWidth="5"/>
</svg>
</a>
 <ul className="flex space-x-6 p-3 py-3 ">
          {navItems.map((item) =>
            item.dropdown ? (
              <li key={item.name} className="relative group">
                {/* Dropdown Toggle */}
        <button className="flex items-center hover:text-gray-300">
  {item.name}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

</button>
                {/* Dropdown Menu (Visible on hover) */}
                <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 rounded-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200">
                  {item.dropdown.map((dropdownItem) => (
                    <li key={dropdownItem.name}>
                        <a className="block px-4 py-2 text-sm hover:bg-gray-700">
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
        <a href="#" className="hover:text-gray-300">Contact Sales</a>
        <a href="#" className="hover:text-gray-300">Login</a>
        <a href="#" className="hover:text-gray-300"><button className="bg-green-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600">  Go
  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</button>
</a>
      </div>
      <div className="flex items-center md:hidden">
        <button id="menu-btn" className="text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div id="mobile-menu" className="md:hidden hidden">
    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
    <a href="#" className="block px-4 py-2 hover:bg-gray-700">About</a>
    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Services</a>
    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
  </div>
</nav>

  </> );
}

export default Navbar