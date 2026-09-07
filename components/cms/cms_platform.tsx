"use client";

import CMSHero from "./CMSHero";
import TechnologyCapabilities from "./TechnologyCapabilities";
import TechnologySection from "./TechnologySection";


export default function CMSPlatform() {
  return (
    <section
      id="cms-platform"
      className="relative overflow-hidden bg-[#f7f9fc]"
    >

      <CMSHero />

      <TechnologySection />

      <TechnologyCapabilities />

    </section>
  );
}