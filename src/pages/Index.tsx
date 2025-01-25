import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { NewsGrid } from "@/components/NewsGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default Index;