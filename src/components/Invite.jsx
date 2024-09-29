const Invite = () => {
  return (
    <section className="py-24 bg-[#be7c68]">
      <div className="container mx-auto text-center px-4"> {/* إضافة px-4 لإضافة مسافة من الجانبين */}
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
          className="bg-white text-[#be7c68] py-3 px-8 rounded-none hover:bg-[#be7c68] hover:text-white hover:border-white border border-[#be7c68] transition duration-300" // تعديل الكلاسات لتغيير الألوان عند الهوفر
        >
          Lets Talk
        </a>
      </div>
    </section>
  );
};

export default Invite;