import Card from './Card'; 

const BestRestaurantsSection = ({ restaurants }) => {
    return (
        <section className="py-16 bg-[#f2efee]"> 
            <div className="container mx-auto">
                <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold text-center text-gray-900 mb-8"> 
                    Best in Class Restaurants
                </h2>
                <p className='mb-6 text-center w-3/4 mx-auto text-gray-500 text-lg md:text-base sm:text-sm'> 
                    Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {restaurants && restaurants.map((restaurant, index) => (
                        <Card
                            key={index}
                            title={restaurant.name}
                            description={restaurant.description}
                            imageUrl={restaurant.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestRestaurantsSection;
