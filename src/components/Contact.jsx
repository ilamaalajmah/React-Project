const Contact = () => {
    return (
      <div className="container mx-auto p-6 ">
        <h1 className="text-5xl font-bold mb-6 pt-20 text-left">Contact</h1> 
  
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 mb-6 lg:mr-6">
            <p className="text-lg text-gray-700 mb-6">
              Massa urna magnis dignissim id euismod porttitor vitae etiam viverra at adipiscing sit morbi aliquet mauris porttitor nisi، senectus pharetra، ac porttitor orci.
            </p>
  
            <div className="mb-6">
              <InfoCard iconClass="fa-solid fa-map-location-dot" title="ADDRESS" description="1234 N Spring St, Los Angeles, CA 90012, United States." />
              <InfoCard iconClass="fa-solid fa-phone" title="PHONE" description="+01 - 123 456 7890" />
              <InfoCard iconClass="fa-solid fa-envelope" title="EMAIL" description="mail@example.com" />
            </div>
          </div>
  
          <div className="flex-1 bg-[#f9f9f9] rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">Let's Talk</h2>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input type="text" className="border border-gray-300 p-2 w-full rounded" />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input type="email" className="border border-gray-300 p-2 w-full rounded" />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700">Subject:</label>
                <input type="text" className="border border-gray-300 p-2 w-full rounded" />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700">Comment or Message:</label>
                <textarea className="border border-gray-300 p-2 w-full rounded" rows="4" />
              </div>
  
              <button 
                type="submit"
                className="bg-[#be7c68] text-white font-bold py-2 px-4 rounded hover:opacity-80"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
  
        <Invite />
      </div>
    );
  };
  
  const InfoCard = ({ iconClass, title, description }) => {
    return (
      <div className="flex items-center mb-4 border rounded-lg p-4 bg-white shadow-md">
        <i className={`${iconClass} text-[#be7c68] mr-2 text-3xl`} />
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-gray-700">{description}</p>
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
  
  export default Contact;