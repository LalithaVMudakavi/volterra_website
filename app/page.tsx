import Navbar from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Process } from "@/components/process";
import { FAQ } from "@/components/faq";
import { CompanyOverview } from "@/components/CompanyOverview";

export default function Page() {
  return (
    <main className="bg-white">
      <Navbar />

      <Hero />

      {/* <CompanyOverview /> */}

      <Process />

      <FAQ />

      <Footer />
      
    </main>
  );
}