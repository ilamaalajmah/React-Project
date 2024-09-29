import Card from './Card'

const LatestReviewsSection = ({ reviews }) => {
    return (
        <section className="py-12 bg-[#f2efee]"> 
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12"> 
                    <h2 className="text-5xl font-bold text-gray-900 mb-4 sm:mb-0">Latest Reviews</h2> 
                    <a 
                        href="#" 
                        className="text-[#be7c68] border-2 border-[#be7c68] px-6 py-2 font-medium rounded hover:bg-[#be7c68] hover:text-white transition duration-300 mt-4 sm:mt-0"> {/* إضافة مسافة بين العنوان والز buttons */}
                        VIEW ALL
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="relative"> 
                            <Card
                                title={review.title}
                                description={review.description}
                                imageUrl={review.imageUrl}
                            />
                            <div className="mt-3 "> 
                                <a 
                                    href="#"
                                    className="absolute bottom-2 left-4 sm:left-6 text-[#be7c68] font-semibold text-md hover:text-black transition duration-300"> {/* READ MORE */}
                                    READ MORE &rarr; 
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestReviewsSection;