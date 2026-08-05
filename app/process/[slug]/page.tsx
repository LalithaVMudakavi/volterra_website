


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


<section className="relative overflow-hidden bg-gradient-to-br from-lime-50 via-white to-emerald-50 pt-36 pb-24">

  {/* Background Blur */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-lime-300/20 blur-[120px]" />

    <div className="absolute right-0 top-32 h-[420px] w-[420px] rounded-full bg-green-200/20 blur-[140px]" />

    <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/20 blur-[120px]" />

    <div
      className="
      absolute
      inset-0
      opacity-[0.04]
      [background-image:radial-gradient(#65a30d_1px,transparent_1px)]
      [background-size:28px_28px]
      "
    />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* Top */}

    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      {/* Breadcrumb */}

      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
      >

        <Link
          href="/"
          className="transition hover:text-lime-600"
        >
          Home
        </Link>

        <ChevronRight className="h-4 w-4" />

        <Link
          href="/#process"
          className="transition hover:text-lime-600"
        >
          Process
        </Link>

        <ChevronRight className="h-4 w-4" />

        <span className="font-semibold text-slate-900">
          {process.title}
        </span>

      </nav>

    </div>

    {/* Main Grid */}

    <div className=" grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">

      {/* ====================================================== */}
      {/* LEFT */}
      {/* ====================================================== */}

<div className="flex flex-col justify-center lg:pr-10">

  {/* Step Badge */}

  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-lime-200 bg-lime-100 px-4 py-2 mt-10">

    <span className="h-2 w-2 rounded-full bg-lime-600" />

    <span className="text-xs font-bold uppercase tracking-[3px] text-lime-700">
      Step {process.number}
    </span>

  </div>

  {/* Heading */}

  <h1 className="mt-6 max-w-xl text-3xl font-black leading-tight text-slate-900 lg:text-4xl">

    {process.title}

  </h1>

  {/* Description */}

  <p className="mt-2 max-w-xl text-lg leading-8 text-slate-600">

    {process.short}

  </p>

  {/* Divider */}

  <div className="mt-6 h-px w-full max-w-md bg-gradient-to-r from-lime-400 via-lime-200 to-transparent" />

  {/* Duration */}

 <div
  className="
  mt-8
  flex
  items-center
  gap-5
  rounded-3xl
  border
  border-lime-200
  bg-white
  px-5
  py-4
  shadow-sm
  max-w-md
  "
>

  <div
    className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-2xl
    bg-lime-100
    "
  >
    <svg
      className="h-6 w-6 text-lime-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v5l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>

  <div>

    <p className="text-xs uppercase tracking-[2px] text-slate-500">
      Estimated Duration
    </p>

    <h3 className="mt-1 text-2xl font-bold text-slate-900">
      {process.duration}
    </h3>

  </div>

</div>

  {/* Highlights */}
<div className="mt-10">

  <h3 className="mb-5 text-sm font-semibold uppercase tracking-[3px] text-slate-500">
    Key Activities
  </h3>

  <div className="grid gap-4 sm:grid-cols-2">

    {process.highlights.map((item) => (

      <div
        key={item}
        className="
group
flex
items-center
gap-3
rounded-xl
px-3
py-2
transition-all
duration-300
hover:bg-white
hover:shadow-md
"
      >

        <div
          className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-lime-100
          "
        >
          <CheckCircle2 className="h-5 w-5 text-lime-600" />
        </div>

        <span className="font-medium text-slate-700">
          {item}
        </span>

      </div>

    ))}

  </div>

</div>
  
  {/* Button */}

  {/* <div className="mt-8">

    <Link
      href="/#process"
      className="
      inline-flex
      items-center
      gap-3
      rounded-2xl
      bg-slate-900
      px-6
      py-3
      font-semibold
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-lime-600
      "
    >

      <ArrowLeft className="h-5 w-5" />

      Back to Process

    </Link>

  </div> */}

</div>

   {/* ====================================================== */}
{/* RIGHT */}
{/* ====================================================== */}

<div className="relative mx-auto w-full max-w-xl lg:max-w-none mt-16">

  {/* Decorative Circle */}

  <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-lime-300/20 blur-3xl" />

  <div className="absolute -right-10 bottom-8 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl" />

  {/* Decorative Border */}

  <div
    className="
    absolute
    -top-6
    -right-6
    hidden
    h-full
    w-full
    rounded-[36px]
    border-2
    border-dashed
    border-lime-200
    lg:block
    "
  />

  {/* Main Image */}

  <div
    className="
    relative
    overflow-hidden
    rounded-[36px]
    bg-white
    p-3
    shadow-[0_35px_80px_rgba(15,23,42,0.18)]
    "
  >

    <div className="overflow-hidden rounded-[28px]">

      <Image
        src={process.image}
        alt={process.title}
        width={900}
        height={700}
        priority
        className="
        h-[280px]
        w-full
        object-cover
        transition-transform
        duration-700
        hover:scale-105
        sm:h-[260px]
        md:h-[350px]
        lg:h-[440px]
        "
      />

    </div>

  </div>

  {/* Floating Badge */}

  <div
    className="
    absolute
    top-8
    -left-5
    hidden
    rounded-2xl
    bg-lime-600
    px-5
    py-4
    text-white
    shadow-xl
    md:block
    "
  >

    <p className="text-xs uppercase tracking-[2px] text-lime-100">
      Project Phase
    </p>

    <h4 className="mt-1 text-xl font-bold">
      {process.number}/06
    </h4>

  </div>

</div>

</div>

</div>

</section>

      {/* ================================= */}

      {/* CONTENT */}

      {/* ================================= */}

  
  <section className="relative overflow-hidden bg-gradient-to-b from-white via-lime-50/40 to-white py-24">

  {/* Background Blur */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-lime-300/20 blur-[120px]" />

    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-[140px]" />

  </div>
    <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

      {/* ====================================================== */}
{/* PROCESS DETAILS */}
{/* ====================================================== */}
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


<div className="mt-12 grid gap-8 lg:grid-cols-2">

  {/* LEFT CONTENT */}

  <div>

    {/* ================================= */}

    {/* WHAT WE DO */}

    {/* ================================= */}

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

      <div className="mt-8 space-y-9">

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
                left-5
                top-10
                h-16
                w-[2px]
                bg-lime-200
                "
              />

            )}

            {/* Circle */}

            <div
              className="
              flex
              h-10
              w-10
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
                text-lg
                text-slate-900
                "
              >
                {stepItem}
              </h4>

              <p className="mt-1 text-base text-slate-500">
                Executed by our engineering team.
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

  {/* RIGHT SIDEBAR */}

  <div className="space-y-6">

    {/* Need Help */}

     <div
    className="
    overflow-hidden
    rounded-[32px]
    bg-gradient-to-br
    from-slate-900
    via-slate-800
    to-slate-900
    p-8
    text-white
    "
  >

    <span
      className="
      inline-flex
      rounded-full
      bg-lime-500/20
      px-4
      py-2
      text-xs
      font-bold
      uppercase
      tracking-[3px]
      text-lime-300
      "
    >
      Need Assistance?
    </span>

    <h3
      className="
      mt-6
      text-3xl
      font-black
      leading-tight
      "
    >
      Talk to Our Experts
    </h3>

    <p
      className="
      mt-5
      leading-7
      text-slate-300
      "
    >
      Have questions about this stage of the project?
      Our EV charging specialists are available to guide
      you through every step of the implementation process.
    </p>

    {/* Quick Info */}

    <div className="mt-7 space-y-3">

      <div className="flex items-center gap-3">

        <CheckCircle2 className="h-5 w-5 text-lime-400" />

        <span className="text-slate-200">
          Free Technical Consultation
        </span>

      </div>

      <div className="flex items-center gap-3">

        <CheckCircle2 className="h-5 w-5 text-lime-400" />

        <span className="text-slate-200">
          Expert Engineering Support
        </span>

      </div>

      <div className="flex items-center gap-3">

        <CheckCircle2 className="h-5 w-5 text-lime-400" />

        <span className="text-slate-200">
          Customized Project Planning
        </span>

      </div>

    </div>

    {/* Button */}

    <Link
      href="/contact"
      className="
      mt-8
      inline-flex
      w-full
      items-center
      justify-center
      gap-3
      rounded-2xl
      bg-lime-500
      px-6
      py-3
      font-semibold
      text-white
      transition-all
      duration-300
      hover:bg-lime-600
      "
    >

      Contact Our Team

      <ArrowRight className="h-5 w-5" />

    </Link>

  </div>

  </div>

</div>
</div>
      </section>

      {/* ====================================================== */}
{/* FAQ SECTION */}
{/* ====================================================== */}
{/* 
<section className="bg-slate-50 py-24 text">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

  
<div className="mx-auto max-w-7xl text-center">

  <div className="flex justify-center">

    <span
      className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-lime-200
      bg-lime-100
      px-5
      py-2
      text-xs
      font-bold
      uppercase
      tracking-[3px]
      text-lime-700
      "
    >

      <span className="h-2.5 w-2.5 rounded-full bg-lime-600" />

      FAQs

    </span>

  </div>

  <h2
    className="
    mt-7
    text-3xl
    font-black
    leading-tight
    text-slate-900
    sm:text-4xl
    lg:text-5xl
    "
  >
    Frequently Asked Questions
  </h2>

  <p
    className="
    mx-auto
    mt-3
    max-w-4xl
    text-base
    leading-8
    text-slate-600
    sm:text-lg
    "
  >
    Find answers to the most common questions about this
    stage of our EV charging implementation process and
    understand what to expect before moving forward.
  </p>

</div>

   <div className="mt-14 mx-auto max-w-4xl space-y-5">

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

    <details
      key={faq.q}
className="
group
overflow-hidden
rounded-[28px]
border
border-slate-200
bg-white/90
backdrop-blur
shadow-sm
transition-all
duration-300
hover:border-lime-300
hover:shadow-xl
open:border-lime-300
open:shadow-xl
"
    >

      <summary
        className="
flex
cursor-pointer
list-none
items-center
justify-between
gap-6
px-7
py-6
"
      >

        <h3 className="text-lg font-bold text-slate-900">
          {faq.q}
        </h3>

      <div
  className="
  flex
  h-8
  w-8
  shrink-0
  items-center
  justify-center
  rounded-full
  border
  border-lime-200
  bg-lime-100
  text-xl
  font-bold
  text-lime-700
  transition-all
  duration-300
  group-hover:bg-lime-500
  group-hover:text-white
  group-open:rotate-45
  group-open:bg-lime-500
  group-open:text-white
  "
>
  +
</div>

      </summary>

      <div className="px-7 pb-7">

        <p className="leading-8 text-slate-600">
          {faq.a}
        </p>

      </div>

    </details>

  ))}

</div>

  </div>

</section> */}

{/* ====================================================== */}
{/* PROCESS NAVIGATION */}
{/* ====================================================== */}

<section className="py-16">

  <div className="mx-auto max-w-7xl px-6">

    <div
      className="
      rounded-[32px]
      border
      border-slate-200
      bg-white
      px-6
      py-6
      shadow-lg
      "
    >

      <div className="flex items-center justify-between">

        {/* Previous */}

        <div className="min-w-[150px]">

          {previousSlug && (

            <Link
              href={`/process/${previousSlug}`}
              className="
              group
              inline-flex
              items-center
              gap-3
              font-semibold
              text-slate-700
              transition
              hover:text-lime-600
              "
            >

              <ArrowLeft className="h-5 w-5 transition group-hover:-translate-x-1" />

              <div>

                <p className="text-xs uppercase tracking-[2px] text-slate-400">
                  Previous
                </p>

                <span className="capitalize">

                  {previousSlug.replace("-", " ")}

                </span>

              </div>

            </Link>

          )}

        </div>

        {/* Center */}

        <div className="hidden flex-col items-center lg:flex">

          <span className="text-sm font-semibold text-slate-500">

            Step {process.number} of 06

          </span>

          <div className="mt-4 flex items-center gap-4">

            {[1,2,3,4,5,6].map((step)=>(
              <div
                key={step}
                className={`
                  h-3 w-3 rounded-full transition-all
                  ${
                   step <= Number(process.number)
                      ? "bg-lime-600"
                      : "bg-slate-300"
                  }
                `}
              />
            ))}

          </div>

        </div>

        {/* Next */}

        <div className="min-w-[150px] text-right">

          {nextSlug && (

            <Link
              href={`/process/${nextSlug}`}
              className="
              group
              inline-flex
              items-center
              gap-3
              font-semibold
              text-slate-700
              transition
              hover:text-lime-600
              "
            >

              <div>

                <p className="text-xs uppercase tracking-[2px] text-slate-400">
                  Next
                </p>

                <span className="capitalize">

                  {nextSlug.replace("-", " ")}

                </span>

              </div>

              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />

            </Link>

          )}

        </div>

      </div>

    </div>

  </div>

</section>

{/* ====================================================== */}
{/* CTA */}
{/* ====================================================== */}

<section className="pb-24">

    <div className="mx-auto max-w-7xl px-6">


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
            px-6
            py-3
            font-bold
            text-lime-700
            transition
            hover:scale-105
            "
          >
           Contact Us
          </Link>

          <Link
            href="/solutions"
            className="
              inline-flex
               items-center
            gap-2
            rounded-2xl
            border
            border-white/30
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-white/10
            "
          >
            Explore Solutions
                <ArrowRight className="h-5 w-5" />
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