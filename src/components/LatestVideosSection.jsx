const LatestVideosSection = () => {
  return (
    <section className="py-12" style={{ backgroundColor: '#f2efee' }}>
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">Latest Videos</h2>

        <div className="container mx-auto my-10">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 rounded-lg p-6">
              <div className="relative">
                <img
                  src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-1.jpg"
                  alt="Dianna Adams visits Sooto Restaurant"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-opacity-50">
                  <a href="#" className="text-white bg-gray-500 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-6.296 3.644A1 1 0 017 13.97V10.03a1 1 0 011.456-.884l6.296 3.644a1 1 0 010 1.768z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="mt-4 w-[90%] mt-10">
                  <h3 className="text-4xl font-bold text-gray-800">
                    Dianna Adams visits the Sooto <br /> Restaurant | Uncovered Miami
                  </h3>
                  <p className="text-gray-500 mt-4">
                    A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam
                    mattis ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus
                    placerat
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 pl-4">
              <div className="flex flex-col gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex gap-4">
                    <div>
                      <img
                        src={`https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-${index + 2}.jpg`}
                        alt={`Latest Video ${index + 2}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mt-2">
                        {index === 0 ? "Family Dinner - Latea pulvinar scelerisque diam tempus facilisi" : 
                        index === 1 ? "Lobortis turpis turpis vehicula laoreet egestas enim ornare" :
                        index === 2 ? "Tempus quis ac viverra condimentum sit nulla viverra" :
                        "Quis mauris egestas enim urna dictum"}
                      </h4>
                      <p className="text-gray-500 mt-2">Enim imperdiet fames nisl, purus et diam aliquet.</p>
                    </div>
                  </div>
                ))}
                
                <div className="text-center mt-8 w-full">
                  <a 
                    href="#" 
                    className="inline-block text-[#be7c68] border border-[#be7c68] rounded-none p-3 text-center w-full  hover:bg-[#be7c68] hover:text-white  "
                    style={{ borderRadius: '0' }} 
                  >
                    View All Videos →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestVideosSection;