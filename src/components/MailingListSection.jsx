const MailingListSection = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container border border-8 mx-auto flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg">
        <div className="md:w-1/2 flex-shrink-0">
          <img 
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg" 
            alt="Join Mailing List" 
            className="rounded-lg relative top-[-70px]"
          />
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Mailing List</h2>
          <p className="text-gray-500 mb-6">
            Sign up and get all the latest, ad-free reviews, recipes 
            <br />and news sent to your inbox.
          </p>
          <form className="flex flex-col md:flex-row">
            <input 
              type="email" 
              placeholder="Email address" 
              className="p-4 border border-[#be7c68] rounded-none w-full bg-[#f3f4f6] mb-4 md:mb-0 md:mr-4"
            />
            <button 
              className="px-12 py-2 border border-[#be7c68] text-[#be7c68] rounded-none uppercase hover:bg-[#be7c68] hover:text-white transition duration-300" 
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailingListSection;