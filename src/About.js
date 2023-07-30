import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "ShopZen Ecommerce",
    para: "Welcome to Our Story. At ShopZen, we're driven by a passion for delightful shopping experiences. Join us on our journey of offering curated collections, quality products, and exceptional service.",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />;
    </>
  );
};

export default About;
