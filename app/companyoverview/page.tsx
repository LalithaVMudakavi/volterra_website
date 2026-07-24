

import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CompanyOverview } from "@/components/CompanyOverview";

export default function cms_platform() {
  return (
    <>
      <Navbar />
      <CompanyOverview />
      <Footer />
    </>
  );
}