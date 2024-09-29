import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <footer className="bg-white p-6 mt-4 mx-20">
            <div className="container py-6 mx-auto flex flex-col gap-4 md:gap-2 md:flex-row justify-between items-center">
                <div className="flex justify-between">
                    <img
                        src="https://websitedemos.net/food-blogger-02/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
                        className="w-full h-10 object-cover rounded-lg"
                        alt=""
                    />
                </div>

                <div>
                    <nav>
                        <ul className="flex space-x-4 text-gray-600">
                            <li><a href="#" className="hover:text-gray-800">Home</a></li>
                            <li><a href="#" className="hover:text-gray-800">About</a></li>
                            <li><a href="#" className="hover:text-gray-800">Reviews</a></li>
                            <li><a href="#" className="hover:text-gray-800">Videos</a></li>
                            <li><a href="#" className="hover:text-gray-800">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800"><i className="text-[#be7c68] fab fa-facebook-f"></i></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800"><i className="text-[#be7c68] fab fa-twitter"></i></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800"><i className="text-[#be7c68] fab fa-youtube"></i></a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row pt-2 pb-12 justify-center text-gray-500 text-sm text-center mt-4">
                <p className="md:mr-4 px-30">© 2024 Food Blogger & Influencer</p>
                <p className='px-0'>Powered by Food Blogger & Influencer</p>
            </div>
        </footer>
    );
};

export default Footer;