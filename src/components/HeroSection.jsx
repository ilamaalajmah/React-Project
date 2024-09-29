
const HeroSection = () => {
  return (
    <>
   
   <section className="flex flex-col-reverse md:flex-row  items-center justify-between md:mt-20">
            <div className="md:w-1/2 p-12 ">
                <p className="text-[#be7c68] text-xl mb-12 block">── Welcome</p>
                <h1 className="text-4xl md:text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Im Dianna Adams</h1>
                <h2 className="text-xl md:text-4xl sm:text-2xl font-medium text-gray-900 mb-6">Food Critic / Influencer / Blogger</h2>
                <p className="text-gray-500 mb-8">
                    Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
                </p>
                <button className="font-bold text-[#be7c68] text-xs m-3 px-8 py-3 border-2 border-[#be7c68] bg-white hover:bg-[#be7c68] hover:text-white transition duration-150 ease-out tracking-widest">
  JOIN INSIDER
</button>
                <section className="flex  flex-row justify-around  md:justify-between space-y-6 sm:space-y-0 sm:space-x-8 py-2 md:py-12 text-center">
                    <div className="text-center mt-6 md:mt-0">
                        <i aria-hidden="true" className="text-[#be7c68] text-4xl fab fa-youtube"></i>
                        <p className="text-2xl font-bold text-gray-900">1.2M+</p>
                        <p className="text-gray-600">Subscribers</p>
                    </div>
                    <div className="text-center">
                        <i aria-hidden="true" className="text-[#be7c68] text-4xl fab fa-instagram"></i>
                        <p className="text-2xl font-bold text-gray-900">1.8M+</p>
                        <p className="text-gray-600">Followers</p>
                    </div>
                    <div className="text-center">
                        <i aria-hidden="true" className="text-[#be7c68] text-4xl fas fa-rss"></i>
                        <p className="text-2xl font-bold text-gray-900">800K+</p>
                        <p className="text-gray-600">Readers</p>
                    </div>
                </section>
            </div>
            <div className="md:w-1/2 p-4 bg-[#be7c68] flex justify-center">
                <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg" alt="Dianna Adams" className="w-full h-auto rounded-lg shadow-md md:w-[80%]" />
            </div>
        </section>

<div className='py-20'>
  <p className='text-center font-bold	 text-md'>As Featured in</p>
    <section className=" bg-white flex flex-wrap justify-around ">
  
 
             <div className="">
             <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg"
            className="attachment-full h-24"/>
        </div>
        <div className="">
            <img decoding="async" width="177" height="100"
                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg"
                className="attachment-full size-full wp-image-21" alt=""/>
        </div>
        <div className="">
            <img loading="lazy" decoding="async" width="177" height="100" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg" className="attachment-full size-full wp-image-23" alt=""/>
          </div>
          <div className="">
            <img loading="lazy" decoding="async" width="177" height="100" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg" className="attachment-full size-full wp-image-23" alt=""/>
          </div>

        <div className="elementor-widget-container">
            <img loading="lazy" decoding="async" width="177" height="100"
                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg"
                className="attachment-full size-full wp-image-22" alt=""/>
        </div>

    </section>
</div>

    </>
   
    
  );
};

export default HeroSection;
