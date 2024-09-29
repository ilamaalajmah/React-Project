
const StatsSection = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-around py-12 bg-gray-100 text-center">
      <div className="text-center">
        <i className="text-[#be7c68] fab fa-youtube"></i>
        <p className="text-2xl font-bold text-gray-900">1.2M+</p>
        <p className="text-gray-600">Subscribers</p>
      </div>
      <div className="text-center">
        <i className="text-[#be7c68] fab fa-instagram"></i>
        <p className="text-2xl font-bold text-gray-900">1.8M+</p>
        <p className="text-gray-600">Followers</p>
      </div>
      <div className="text-center">
        <i className="text-[#be7c68] fas fa-rss"></i>
        <p className="text-2xl font-bold text-gray-900">800K+</p>
        <p className="text-gray-600">Readers</p>
      </div>
    </section>
  );
};

export default StatsSection;
