import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "ShopZen",
    para: "Discover ShopZen - Your serene shopping sanctuary. Explore curated collections, unbeatable prices, and endless possibilities. Find your style, revel in the joy of shopping today!",
  };
  return (
    <>
      <HeroSection myData={data} />;
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
