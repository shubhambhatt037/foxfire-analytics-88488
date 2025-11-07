import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PartnersRow } from "@/components/PartnersRow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PartnersRow />
    </div>
  );
};

export default Index;
