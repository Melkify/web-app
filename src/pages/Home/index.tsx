import { Blog, Faqs, Hero } from "../../components/landing";
import { Footer, Navbar } from "../../components/common";
import SectionTitle from "../../components/landing/SectionTitle";

const HomePage = () => {
  return (
    <div className="bg-custom-background bg-cover">
      <Navbar />
      <Hero />
      <SectionTitle pretitle="" title="بلاگ">
        <Blog />
      </SectionTitle>
      <SectionTitle pretitle="" title="درباره بات‌بازار">
        <Faqs />
      </SectionTitle>
      <Footer />
    </div>
  );
};

export default HomePage;
