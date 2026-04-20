import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Wholesale } from "@/components/Wholesale";
import { LocalSection } from "@/components/LocalSection";
import { Shipping } from "@/components/Shipping";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Wholesale />
        <LocalSection />
        <Shipping />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
