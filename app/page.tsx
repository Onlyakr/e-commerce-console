import CategoriesSection from "@/components/landing-page/categories-section";
import FeaturedSection from "@/components/landing-page/feature-section";
import HeroSection from "@/components/landing-page/hero-section";
import NewsletterSection from "@/components/landing-page/news-section";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-svh bg-muted">
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <CategoriesSection />
        <FeaturedSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
