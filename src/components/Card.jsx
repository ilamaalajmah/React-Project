const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="rounded-lg p-6">
            <img src={imageUrl} alt={title} className="w-full h-54 object-cover rounded-lg" />
            <h3 className="text-3xl font-semibold text-gray-900 mt-4">{title}</h3>
            <p className="text-gray-500 mt-2">{description}</p>
        </div>
    );
};
export default Card;