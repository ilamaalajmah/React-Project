import { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
// import StatsSection from './components/StatsSection';
import LatestReviewsSection from './components/LatestReviewsSection';
import BestRestaurantsSection from './components/BestRestaurantsSection';
import MailingListSection from './components/MailingListSection';
import LatestVideosSection from './components/LatestVideosSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Invite from './components/Invite';


function App() {
  const restaurants = [
    {
      name: "Bern's Steak House",
      description: "Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet.",
      imageUrl: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg",
    },
    {
      name: "Eewak Korean Restaurant",
      description: "Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui.",
      imageUrl: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg",
    },
    {
      name: "The Ramban Vegan House",
      description: "Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo.",
      imageUrl: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg",
    },
    {
      name: "Maniest Bake & Cake",
      description: "Diam lacus nunc est commodo nunc, velit et amet eu vitae sem.",
      imageUrl: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg",
    },
    {
      name: "Crush Los Angeles",
      description: "Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique.",
      imageUrl: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg",
    },
    {
      name: "The Mike Winery",
      description: "Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis.",
      imageUrl: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg",
    },
  ];

  const reviews = [
    {
      title: "Grilled Flank Steak with Chimichurri",
      description: "Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque.",
      imageUrl: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg",
    },
    {
      title: "Mushroom Penne with Walnut Pesto",
      description: "Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus.",
      imageUrl: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg",
    },
    {
      title: "Garlic Butter White Wine Shrimp Linguine",
      description: "Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis.",
      imageUrl: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg",
    },
  ];

  const [expand, setExpand] = useState("none");

  const handleExpand = (status) => {
    setExpand(status);
  };

  return (
    <div>
      <Navbar SetExpand={handleExpand} />
      <HeroSection />
      {/* <StatsSection /> */}
      <LatestReviewsSection reviews={reviews} />
      <BestRestaurantsSection restaurants={restaurants} />
      <MailingListSection />
      <LatestVideosSection />
      <Invite />
      <Footer />
    </div>
  );
}

export default App;