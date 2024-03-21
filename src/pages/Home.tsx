import CarouselSlider from "../components/CarouselSlider";
import Experience from "../components/Experience";
import ExposeInfo from "../components/ExposeInfo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InformativBox from "../components/InformativBox";
import KnowUs from "../components/KnowUs";
import MapsContainer from "../components/MapsContainer";
import Testimonials from "../components/Testimonials";
import Treatments from "../components/Treatments";

const Home = () => {
  return (
    <body>
      <Header />
      <CarouselSlider />
      <KnowUs />
      <Treatments />
      <Experience />
      <InformativBox />
      <Testimonials />
      <ExposeInfo />
      <MapsContainer />
      <Footer />
    </body>
  );
};

export default Home;
