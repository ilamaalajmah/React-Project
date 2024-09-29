import HeroSection from "./HeroSection";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg border p-6">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="md:w-1/2 md:pr-6"> 
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-gray-700 mb-6">
              Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra، pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus، mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor.
            </p>
          </div>
  
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img 
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg" 
              alt="About Me"
              className="rounded-lg shadow-lg max-w-xs" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard iconClass="fa-solid fa-utensils" title="Food Critic" description="Diam nulla blandit urna tristique sit etiam amet adipiscing." />
          <InfoCard iconClass="fa-regular fa-face-smile-beam" title="Influencer" description="Et volutpat lacinia enim، purus et rhoncus nibh egestas habitant elit." />
          <InfoCard iconClass="fa-brands fa-blogger" title="Blogger" description="Venenatis egestas lectus interdum enim orci intege." />
        </div>
      </div>

      <Invite />
    </div>
  );
};

const InfoCard = ({ iconClass, title, description }) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
      <i className={`${iconClass} text-3xl`} style={{ color: '#be7c68' }}></i>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Invite = () => {
  return (
    <section className="py-24 bg-[#be7c68]">
      <div className="container mx-auto text-center px-4"> 
        <h2 className="text-5xl font-bold text-white md:text-4xl sm:text-3xl">
          Invite me to your restaurant
        </h2>
        <h2 className="text-5xl font-bold text-white mt-4 mb-8 md:text-4xl sm:text-3xl">
          Get exposure to millions of food lovers.
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-8 text-lg md:text-base sm:text-sm">
          Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing 
          integer amet eget blandit phasellus est natoque blandit facilisi 
          eleifend.
        </p>
        <a 
          href="#" 
          className="bg-white text-[#be7c68] py-3 px-8 rounded-none hover:bg-[#be7c68] hover:text-white hover:border-white border border-[#be7c68] transition duration-300"
        >
          Lets Talk
        </a>
      </div>
    </section>
  );
};

export default About;