import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const processData = {
  consultation: {
    number: "01",
    title: "Consultation",
    image: "/images/consultation.png",
    short:
      "Understanding your EV charging goals, infrastructure requirements and business objectives.",

    description:
      "Every successful EV charging project starts with a detailed consultation. During this stage, our experts understand your requirements, discuss available charging technologies, identify your operational goals, and recommend the most suitable solution based on your budget and future expansion plans.",

    duration: "1-2 Days",

    highlights: [
      "Requirement Analysis",
      "Business Discussion",
      "Charging Capacity Planning",
      "Initial Cost Estimation",
    ],
  },

  "site-survey": {
    number: "02",
    title: "Site Survey",
    image: "/images/sitesurvey.png",
    short:
      "Technical inspection of the proposed installation site.",

    description:
      "Our engineering team visits your location to inspect the electrical infrastructure, parking layout, cable routing, transformer capacity and overall feasibility before preparing the implementation plan.",

    duration: "2-3 Days",

    highlights: [
      "Electrical Inspection",
      "Parking Assessment",
      "Power Availability",
      "Safety Verification",
    ],
  },

  proposal: {
    number: "03",
    title: "Proposal",
    image: "/images/praposal.png",
    short:
      "Customized commercial proposal with complete project scope.",

    description:
      "After the survey, we prepare a comprehensive proposal including recommended chargers, electrical work, commercial quotation, implementation schedule and project deliverables.",

    duration: "2 Days",

    highlights: [
      "Detailed Quotation",
      "Project Timeline",
      "Commercial Proposal",
      "Technical Documentation",
    ],
  },

  installation: {
    number: "04",
    title: "Installation",
    image: "/images/installation.png",
    short:
      "Professional installation by certified EV charging engineers.",

    description:
      "Certified technicians install the charging infrastructure, electrical panels, safety equipment and communication network while following industry standards and quality guidelines.",

    duration: "3-7 Days",

    highlights: [
      "Electrical Installation",
      "Civil Work",
      "Charger Mounting",
      "Quality Inspection",
    ],
  },

  "go-live": {
    number: "05",
    title: "Go Live",
    image: "/images/golive.png",
    short:
      "Commissioning and activation of the charging station.",

    description:
      "After testing and verification, chargers are activated, integrated with the CMS platform and made ready for daily operations.",

    duration: "1 Day",

    highlights: [
      "Testing",
      "CMS Integration",
      "User Training",
      "Commissioning",
    ],
  },

  support: {
    number: "06",
    title: "AMC & Support",
    image: "/images/amcandsupport.png",
    short:
      "24×7 monitoring and preventive maintenance.",

    description:
      "Our relationship continues after deployment with continuous monitoring, preventive maintenance, remote diagnostics and dedicated customer support.",

    duration: "Ongoing",

    highlights: [
      "Remote Monitoring",
      "AMC",
      "Software Updates",
      "Customer Support",
    ],
  },
};

export default async function ProcessDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const process =
    processData[slug as keyof typeof processData];

    const processOrder = [
  "consultation",
  "site-survey",
  "proposal",
  "installation",
  "go-live",
  "support",
];

const currentIndex = processOrder.indexOf(slug);

const previousSlug =
  currentIndex > 0 ? processOrder[currentIndex - 1] : null;

const nextSlug =
  currentIndex < processOrder.length - 1
    ? processOrder[currentIndex + 1]
    : null;

  if (!process) {
    notFound();
  }

  return (
    <main className="bg-white">
        <Navbar />
      {/* ================================= */}

      {/* HERO */}

      {/* ================================= */}

      <section className="relative overflow-hidden mt-10">

        {/* Background */}

        <div className="absolute inset-0 bg-linear-to-b from-lime-50 via-white to-white" />

    
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">

         {/* Breadcrumb + Back Button */}

<div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

  {/* Breadcrumb */}

  <nav
    aria-label="Breadcrumb"
    className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
  >
    <Link
      href="/"
      className="transition-colors hover:text-lime-600"
    >
      Home
    </Link>

    <ChevronRight className="h-4 w-4" />

    <Link
      href="/#process"
      className="transition-colors hover:text-lime-600"
    >
      Process
    </Link>

    <ChevronRight className="h-4 w-4" />

    <span className="font-semibold text-slate-900">
      {process.title}
    </span>
  </nav>

  {/* Back Button */}

  <Link
    href="/#process"
    className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-slate-200
    bg-white
    px-5
    py-3
    text-sm
    font-medium
    text-slate-700
    shadow-sm
    transition-all
    duration-300
    hover:-translate-x-1
    hover:border-lime-400
    hover:bg-lime-50
    hover:text-lime-600
    "
  >
    <ArrowLeft className="h-4 w-4" />
    <span>Back to Process</span>
  </Link>

</div>

          
          {/* Grid */}

          <div className="mt-12 grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span
                className="
                inline-flex
                rounded-full
                bg-lime-100
                px-4
                py-2
                text-xs
                font-bold
                tracking-[3px]
                uppercase
                text-lime-700
                "
              >
                Step {process.number}
              </span>

              <h1
                className="
                mt-6
                text-5xl
                font-black
                leading-tight
                text-slate-900
                lg:text-6xl
                "
              >
                {process.title}
              </h1>

              <p
                className="
                mt-6
                text-xl
                leading-9
                text-slate-600
                "
              >
                {process.short}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div
                  className="
                  rounded-2xl
                  border
                  border-lime-200
                  bg-lime-50
                  px-6
                  py-4
                  "
                >
                  <p className="text-sm text-slate-500">
                    Estimated Duration
                  </p>

                  <h3 className="text-xl font-bold text-lime-700">
                    {process.duration}
                  </h3>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <div className="overflow-hidden rounded-[32px]">

                <Image
                  src={process.image}
                  alt={process.title}
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================= */}

      {/* CONTENT */}

      {/* ================================= */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

      {/* ====================================================== */}
{/* PROCESS DETAILS */}
{/* ====================================================== */}

<div className="grid gap-20 lg:grid-cols-[1.2fr_.8fr]">

  {/* LEFT CONTENT */}

  <div>

    {/* Section Heading */}

    <div>

      <span
        className="
        inline-flex
        rounded-full
        bg-lime-100
        px-4
        py-2
        text-xs
        font-bold
        tracking-[3px]
        uppercase
        text-lime-700
        "
      >
        Overview
      </span>

      <h2
        className="
        mt-5
        text-4xl
        font-black
        text-slate-900
        "
      >
        Why This Step Matters
      </h2>

      <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-lime-500 to-green-600" />

    </div>

    {/* Description */}

    <p
      className="
      mt-8
      text-lg
      leading-9
      text-slate-600
      "
    >
      {process.description}
    </p>

    {/* ================================= */}

    {/* WHAT WE DO */}

    {/* ================================= */}

    <div className="mt-16">

      <h3
        className="
        text-2xl
        font-bold
        text-slate-900
        "
      >
        What We Do
      </h3>

      <p className="mt-3 text-slate-600">
        Our experienced EV infrastructure specialists carefully execute
        every activity to ensure your charging project is delivered with
        maximum efficiency, safety and long-term reliability.
      </p>

      <div className="mt-8 grid gap-5">

        {process.highlights.map((item) => (

          <div
            key={item}
            className="
            group
            flex
            items-start
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            transition
            duration-300
            hover:border-lime-300
            hover:shadow-lg
            "
          >

            <div
              className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-lime-100
              transition
              group-hover:bg-lime-500
              "
            >

              <CheckCircle2
                className="
                h-6
                w-6
                text-lime-700
                transition
                group-hover:text-white
                "
              />

            </div>

            <div>

              <h4
                className="
                text-lg
                font-semibold
                text-slate-900
                "
              >
                {item}
              </h4>

              <p
                className="
                mt-1
                text-slate-600
                "
              >
                Our team ensures this activity is completed following
                industry standards and best engineering practices.
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

  {/* RIGHT SIDEBAR */}

  <div className="space-y-8">

    {/* Timeline */}

    <div
      className="
      rounded-[30px]
      border
      border-slate-200
      bg-white
      p-8
      shadow-xl
      "
    >

      <h3
        className="
        text-2xl
        font-bold
        text-slate-900
        "
      >
        Timeline
      </h3>

      <div className="mt-8 space-y-8">

        {[
          "Requirement Discussion",
          "Technical Analysis",
          "Implementation Planning",
          "Approval & Next Step",
        ].map((stepItem, index) => (

          <div
            key={stepItem}
            className="relative flex gap-5"
          >

            {/* Line */}

            {index !== 3 && (

              <div
                className="
                absolute
                left-4
                top-10
                h-16
                w-px
                bg-lime-200
                "
              />

            )}

            {/* Circle */}

            <div
              className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-lime-500
              text-sm
              font-bold
              text-white
              "
            >
              {index + 1}
            </div>

            <div>

              <h4
                className="
                font-semibold
                text-slate-900
                "
              >
                {stepItem}
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Executed by our engineering team.
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

    {/* Deliverables */}

    <div
      className="
      rounded-[30px]
      border
      border-slate-200
      bg-gradient-to-br
      from-lime-50
      to-white
      p-8
      "
    >

      <h3
        className="
        text-2xl
        font-bold
        text-slate-900
        "
      >
        Deliverables
      </h3>

      <div className="mt-6 space-y-4">

        {[
          "Detailed Documentation",
          "Engineering Report",
          "Project Recommendations",
          "Implementation Strategy",
          "Quality Assurance",
        ].map((item) => (

          <div
            key={item}
            className="
            flex
            items-center
            gap-3
            "
          >

            <CheckCircle2 className="h-5 w-5 text-lime-600" />

            <span className="text-slate-700">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>

    {/* Need Help */}

    <div
      className="
      rounded-[30px]
      bg-slate-900
      p-8
      text-white
      "
    >

      <h3
        className="
        text-2xl
        font-bold
        "
      >
        Need Expert Guidance?
      </h3>

      <p
        className="
        mt-4
        leading-8
        text-slate-300
        "
      >
        Speak with our EV charging specialists and receive
        personalized recommendations for your project.
      </p>

      <button
        className="
        mt-8
        inline-flex
        items-center
        gap-3
        rounded-2xl
        bg-lime-500
        px-6
        py-4
        font-semibold
        text-white
        transition
        hover:bg-lime-600
        "
      >
        Contact Our Team

        <ArrowRight className="h-5 w-5" />

      </button>

    </div>

  </div>

</div>

      </section>

      {/* ====================================================== */}
{/* FAQ SECTION */}
{/* ====================================================== */}

<section className="bg-slate-50 py-24">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <div className="max-w-3xl">

      <span
        className="
        rounded-full
        bg-lime-100
        px-4
        py-2
        text-xs
        font-bold
        uppercase
        tracking-[3px]
        text-lime-700
        "
      >
        FAQs
      </span>

      <h2
        className="
        mt-6
        text-4xl
        font-black
        text-slate-900
        "
      >
        Frequently Asked Questions
      </h2>

    </div>

    <div className="mt-14 space-y-6">

      {[
        {
          q: "How long does this stage usually take?",
          a: "The duration depends on project size, site readiness and electrical infrastructure. Our team provides a clear timeline before execution.",
        },
        {
          q: "Will I receive documentation?",
          a: "Yes. Every phase includes detailed documentation, reports and recommendations for complete transparency.",
        },
        {
          q: "Can this process be customized?",
          a: "Absolutely. Every EV charging project is unique, and our workflow adapts to your technical and business requirements.",
        },
      ].map((faq) => (

        <div
          key={faq.q}
          className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          "
        >

          <h3
            className="
            text-xl
            font-bold
            text-slate-900
            "
          >
            {faq.q}
          </h3>

          <p
            className="
            mt-4
            leading-8
            text-slate-600
            "
          >
            {faq.a}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ====================================================== */}
{/* PREVIOUS / NEXT */}
{/* ====================================================== */}

<section className="py-20">

  <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6 px-6 lg:px-10">

    {previousSlug ? (

      <Link
        href={`/process/${previousSlug}`}
        className="
        group
        flex
        items-center
        gap-4
        rounded-3xl
        border
        border-slate-200
        bg-white
        px-8
        py-6
        transition
        hover:border-lime-400
        hover:shadow-xl
        "
      >

        <ArrowLeft className="transition group-hover:-translate-x-1" />

        <div>

          <p className="text-sm text-slate-500">
            Previous Step
          </p>

          <h4 className="font-bold capitalize">
            {previousSlug.replace("-", " ")}
          </h4>

        </div>

      </Link>

    ) : (
      <div />
    )}

    {nextSlug && (

      <Link
        href={`/process/${nextSlug}`}
        className="
        group
        ml-auto
        flex
        items-center
        gap-4
        rounded-3xl
        border
        border-slate-200
        bg-white
        px-8
        py-6
        transition
        hover:border-lime-400
        hover:shadow-xl
        "
      >

        <div className="text-right">

          <p className="text-sm text-slate-500">
            Next Step
          </p>

          <h4 className="font-bold capitalize">
            {nextSlug.replace("-", " ")}
          </h4>

        </div>

        <ArrowRight className="transition group-hover:translate-x-1" />

      </Link>

    )}

  </div>

</section>

{/* ====================================================== */}
{/* CTA */}
{/* ====================================================== */}

<section className="pb-24">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <div
      className="
      relative
      overflow-hidden
      rounded-[40px]
      bg-linear-to-r
      from-lime-600
      via-green-600
      to-emerald-600
      p-14
      text-white
      "
    >

      {/* Decorative Blur */}

      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">

        <div>

          <h2
            className="
            text-4xl
            font-black
            leading-tight
            "
          >
            Ready to Build Your EV Charging Infrastructure?
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-lime-50
            "
          >
            Whether you're planning a residential, commercial,
            fleet or public charging network, our experts are
            ready to guide you from consultation to commissioning.
          </p>

        </div>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/contact"
            className="
            rounded-2xl
            bg-white
            px-8
            py-4
            font-bold
            text-lime-700
            transition
            hover:scale-105
            "
          >
            Book Consultation
          </Link>

          <Link
            href="/solutions"
            className="
            rounded-2xl
            border
            border-white/30
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:bg-white/10
            "
          >
            Explore Solutions
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>
    <Footer />

    </main>
  );
}