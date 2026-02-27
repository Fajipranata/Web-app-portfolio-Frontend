import { motion } from "framer-motion";
import cloud2 from "../assets/cloudwhite.svg";
import mountain2 from "../assets/mountain2.svg";

function Home() {
  return (
    <div className="home-scene">
       <motion.img
        src={cloud2}
        className="cloud4"
        initial={{ x: "90vw" }}
        animate={{ x: "-180vw" }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <img src={mountain2} className="mountain-img" />
      <div className="home-content">
        <h1>Welcome to my Page</h1>
      <p>I am Fahmi, I building my full-stack journey.</p>
    </div>
  </div>
  );
}

export default Home
