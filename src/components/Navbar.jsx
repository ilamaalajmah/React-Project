import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6 mt-4 mx-20"> 
      <div className="flex items-center gap-10">
        <div>
          <img
            src="https://websitedemos.net/food-blogger-02/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
            className="w-full h-10 object-cover rounded-lg"
            alt="Logo"
          />
        </div>

        <div className="hidden md:flex flex-col md:flex-row md:mt-0">
          <ul className="md:flex md:space-x-8 text-gray-600 font-medium">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Reviews</a></li>
            <li><a href="#" className="hover:text-gray-900">Videos</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="hidden md:flex gap-4">
        <div className="flex space-x-4 mt-2">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="text-[#be7c68] fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="text-[#be7c68] fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="text-[#be7c68] fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="text-[#be7c68] fab fa-youtube"></i>
          </a>
        </div>
        <button className="font-Montserrat text-xs m-3 px-8 py-3 font-bold border-2 border-[#be7c68] text-[#be7c68] hover:bg-white hover:text-[#be7c68] transition duration-150 ease-out tracking-widest">
  LET'S TALK
</button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 p-4 text-gray-600 font-medium">
            <li>
              <a href="#" className="text-[#be7c68] hover:text-gray-900">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Reviews</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Videos</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;