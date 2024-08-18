import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Navbar";
import Testimonials from "../components/Testimonials";


const Home = () => {
  return (
    <div className="overflow-hidden bg-white pb-[30px]">
      <Nav />
      <Hero />
      <AboutUs />
      <ContactUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;