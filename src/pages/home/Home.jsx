import Blog from "./Blog";
import Hero from "./Hero";
import PlantShop from "./PlantShop";
import Posts from "./Posts";

const Home = () => {
  return (
    <div>
      <Hero />
      <PlantShop />
      <Blog />
      <Posts />
    </div>
  );
};

export default Home;