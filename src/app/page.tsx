import Nav from "@/components/blocks/Nav";
import Hero from "@/components/blocks/Hero";
import ServicesOverview from "@/components/blocks/ServicesOverview";
import WebDev from "@/components/blocks/WebDev";
import GBPCallout from "@/components/blocks/GBPCallout";
import Automation from "@/components/blocks/Automation";
import WhyCova from "@/components/blocks/WhyCova";
import Pricing from "@/components/blocks/Pricing";
import FAQ from "@/components/blocks/FAQ";
import FinalCTA from "@/components/blocks/FinalCTA";
import Footer from "@/components/blocks/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ServicesOverview />
        <WebDev />
        <GBPCallout />
        <Automation />
        <WhyCova />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
