

import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import CMSPlatform from "@/components/cms/cms_platform";

export default function cms_platform() {
  return (
    <>
      <Navbar />
      <CMSPlatform />
      <Footer />
    </>
  );
}