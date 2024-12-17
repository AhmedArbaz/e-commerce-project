import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SliderFeatured from "./components/SliderFeatured";
import CardsWithFourPictures from "./components/CardsWithFourPictures";
import ProductAdvertis from "./components/ProductAdvertis";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <main>
        <Hero />
        <SliderFeatured />
        <CardsWithFourPictures />
        <ProductAdvertis />
        <FeaturedProducts/>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
