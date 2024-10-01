import  { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-between items-center p-6">
    <div className="flex gap-10">
        <div>
            <img
                src="https://websitedemos.net/food-blogger-02/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
                className="w-full h-10 object-cover rounded-lg"
                alt="Logo"
            />
        </div>
        <div className="hidden md:flex md:mt-2">
    <ul className="flex space-x-8 text-gray-600 font-medium">
        <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
        <li><Link to="/reviews" className="hover:text-gray-900">Reviews</Link></li>
        <li><Link to="/videos" className="hover:text-gray-900">Videos</Link></li>
        <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
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
        <button className="px-8 py-2 text-black border border-[#be7c68] rounded-md">
            Let's Talk
        </button>
    </div>

    {/* Icon for mobile */}
    <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
        <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
    </div>

    {/* Mobile menu */}
    {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 p-4 text-gray-600 font-medium">
                <li><a href="#" className="hover:text-gray-900">Home</a></li>
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Reviews</a></li>
                <li><a href="#" className="hover:text-gray-900">Videos</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
        </div>
    )}
</nav>
  );
}

export default Navbar;