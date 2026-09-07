


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

<section
  className="
    relative
    overflow-hidden
    bg-gradient-to-br
    from-lime-50
    via-white
    to-emerald-50

    pt-24
    pb-16

    sm:pt-28
    sm:pb-20

    lg:pt-36
    lg:pb-24
  "
>
  {/* Background Blur */}

  <div className="absolute inset-0 overflow-hidden">

    <div
      className="
        absolute
        -left-24
        top-10
        h-56
        w-56
        rounded-full
        bg-lime-300/20
        blur-[100px]

        sm:h-72
        sm:w-72

        lg:h-80
        lg:w-80
        lg:blur-[120px]
      "
    />

    <div
      className="
        absolute
        -right-20
        top-32
        h-[280px]
        w-[280px]
        rounded-full
        bg-green-200/20
        blur-[110px]

        sm:h-[350px]
        sm:w-[350px]

        lg:right-0
        lg:h-[420px]
        lg:w-[420px]
        lg:blur-[140px]
      "
    />

    <div
      className="
        absolute
        bottom-0
        left-1/2
        h-52
        w-52
        -translate-x-1/2
        rounded-full
        bg-emerald-200/20
        blur-[100px]

        sm:h-64
        sm:w-64

        lg:h-72
        lg:w-72
        lg:blur-[120px]
      "
    />

    <div
      className="
        absolute
        inset-0
        opacity-[0.04]
        [background-image:radial-gradient(#65a30d_1px,transparent_1px)]
        [background-size:24px_24px]

        sm:[background-size:28px_28px]
      "
    />

  </div>


  {/* ====================================================== */}
  {/* MAIN CONTAINER */}
  {/* ====================================================== */}

  <div
    className="
      relative
      mx-auto
      max-w-7xl

      px-4

      sm:px-6

      lg:px-10
    "
  >

    {/* ====================================================== */}
    {/* TOP / BREADCRUMB */}
    {/* ====================================================== */}

    <div
      className="
        flex
        flex-col
        gap-4

        sm:gap-6

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >

      <nav
        aria-label="Breadcrumb"
        className="
          flex
          flex-wrap
          items-center
          gap-1.5

          text-xs
          text-slate-500

          sm:gap-2
          sm:text-sm
        "
      >

        <Link
          href="/"
          className="transition hover:text-lime-600"
        >
          Home
        </Link>

        <ChevronRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />

        <Link
          href="/#process"
          className="transition hover:text-lime-600"
        >
          Process
        </Link>

        <ChevronRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />

        <span className="max-w-[180px] truncate font-semibold text-slate-900 sm:max-w-none">
          {process.title}
        </span>

      </nav>

    </div>


    {/* ====================================================== */}
    {/* MAIN GRID */}
    {/* ====================================================== */}

    <div
      className="
        grid
        items-center

        gap-10

        sm:gap-12
        md:gap-14

        lg:gap-16
        lg:grid-cols-[1.05fr_.95fr]
      "
    >

      {/* ====================================================== */}
      {/* LEFT */}
      {/* ====================================================== */}

      <div className="flex flex-col justify-center lg:pr-10">

        {/* Step Badge */}

        <div
          className="
            mt-6
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-lime-200
            bg-lime-100

            px-3
            py-2

            sm:mt-8
            sm:px-4

            lg:mt-10
          "
        >

          <span className="h-2 w-2 rounded-full bg-lime-600" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[2px]
              text-lime-700

              sm:text-xs
              sm:tracking-[3px]
            "
          >
            Step {process.number}
          </span>

        </div>


        {/* Heading */}

        <h1
          className="
            mt-5
            max-w-xl

            text-3xl
            font-black
            leading-tight
            text-slate-900

            sm:mt-6
            sm:text-[38px]

            lg:text-4xl
          "
        >
          {process.title}
        </h1>


        {/* Description */}

        <p
          className="
            mt-3
            max-w-xl

            text-base
            leading-7
            text-slate-600

            sm:text-lg
            sm:leading-8

            lg:mt-2
          "
        >
          {process.short}
        </p>


        {/* Divider */}

        <div
          className="
            mt-5
            h-px
            w-full
            max-w-md
            bg-gradient-to-r
            from-lime-400
            via-lime-200
            to-transparent

            sm:mt-6
          "
        />


        {/* ====================================================== */}
        {/* DURATION */}
        {/* ====================================================== */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-4

            rounded-2xl
            border
            border-lime-200
            bg-white

            px-4
            py-4

            shadow-sm

            sm:mt-8
            sm:gap-5
            sm:rounded-3xl
            sm:px-5

            lg:mt-8
          "
        >

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-lime-100

              sm:h-12
              sm:w-12
              sm:rounded-2xl
            "
          >
            <svg
              className="h-5 w-5 text-lime-600 sm:h-6 sm:w-6"
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

            <p
              className="
                text-[10px]
                uppercase
                tracking-[1.5px]
                text-slate-500

                sm:text-xs
                sm:tracking-[2px]
              "
            >
              Estimated Duration
            </p>

            <h3
              className="
                mt-1
                text-xl
                font-bold
                text-slate-900

                sm:text-2xl
              "
            >
              {process.duration}
            </h3>

          </div>

        </div>


        {/* ====================================================== */}
        {/* HIGHLIGHTS */}
        {/* ====================================================== */}

        <div
          className="
            mt-8

            sm:mt-10
          "
        >

          <h3
            className="
              mb-4

              text-xs
              font-semibold
              uppercase
              tracking-[2px]
              text-slate-500

              sm:mb-5
              sm:text-sm
              sm:tracking-[3px]
            "
          >
            Key Activities
          </h3>


          <div
            className="
              grid
              grid-cols-2
              gap-3

              sm:grid-cols-2
              sm:gap-4
            "
          >

            {process.highlights.map((item) => (

              <div
                key={item}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-0.5
                  py-0.5

                  transition-all
                  duration-300

                  hover:bg-white
                  hover:shadow-md

                  sm:px-3
                "
              >

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-lime-100

                    sm:h-9
                    sm:w-9
                  "
                >
                  <CheckCircle2
                    className="
                      h-4
                      w-4
                      text-lime-600

                      sm:h-5
                      sm:w-5
                    "
                  />
                </div>

                <span
                  className="
                    text-[13px]
                    font-medium
                    leading-6
                    text-slate-700

                    sm:text-base
                  "
                >
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ====================================================== */}
      {/* RIGHT */}
      {/* ====================================================== */}

      <div
        className="
          relative
          mx-auto
          mt-2
          w-full
          max-w-xl

          sm:mt-4

          lg:mt-16
          lg:max-w-none
        "
      >

        {/* Decorative Circle */}

        <div
          className="
            absolute
            -left-4
            -top-4
            h-28
            w-28
            rounded-full
            bg-lime-300/20
            blur-3xl

            sm:-left-8
            sm:-top-8
            sm:h-40
            sm:w-40
          "
        />

        <div
          className="
            absolute
            -right-5
            bottom-4
            h-32
            w-32
            rounded-full
            bg-emerald-300/20
            blur-3xl

            sm:-right-10
            sm:bottom-8
            sm:h-48
            sm:w-48
          "
        />


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


        {/* ====================================================== */}
        {/* MAIN IMAGE */}
        {/* ====================================================== */}

        <div
          className="
            relative
            overflow-hidden

            rounded-[24px]
            bg-white
            p-2

            shadow-[0_25px_60px_rgba(15,23,42,0.16)]

            sm:rounded-[30px]
            sm:p-3

            lg:rounded-[36px]
            lg:shadow-[0_35px_80px_rgba(15,23,42,0.18)]
          "
        >

          <div
            className="
              overflow-hidden
              rounded-[18px]

              sm:rounded-[24px]

              lg:rounded-[28px]
            "
          >

            <Image
              src={process.image}
              alt={process.title}
              width={900}
              height={700}
              priority
              className="
                h-[240px]
                w-full
                object-cover

                transition-transform
                duration-700

                hover:scale-105

                sm:h-[300px]
                md:h-[350px]

                lg:h-[440px]
              "
            />

          </div>

        </div>


        {/* ====================================================== */}
        {/* FLOATING BADGE */}
        {/* ====================================================== */}

        <div
          className="
            absolute
            top-5
            -left-2
            hidden

            rounded-xl
            bg-lime-600

            px-4
            py-3

            text-white
            shadow-xl

            sm:block

            lg:top-8
            lg:-left-5
            lg:rounded-2xl
            lg:px-5
            lg:py-4
          "
        >

          <p
            className="
              text-[10px]
              uppercase
              tracking-[1.5px]
              text-lime-100

              lg:text-xs
              lg:tracking-[2px]
            "
          >
            Project Phase
          </p>

          <h4
            className="
              mt-1
              text-lg
              font-bold

              lg:text-xl
            "
          >
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

  
 <section className="relative overflow-hidden bg-gradient-to-b from-white via-lime-50/40 to-white py-16 sm:py-20 lg:py-24">

  {/* Background Blur */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -left-32 top-0 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-lime-300/20 blur-[100px] sm:blur-[120px]" />

    <div className="absolute -right-20 bottom-0 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-emerald-300/20 blur-[110px] sm:blur-[140px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10">

    {/* ====================================================== */}
    {/* PROCESS DETAILS */}
    {/* ====================================================== */}

    <div>

      {/* Badge */}
      <span
        className="
          inline-flex
          rounded-full
          bg-lime-100
          px-3
          py-1.5
          sm:px-4
          sm:py-2
          text-[10px]
          sm:text-xs
          font-bold
          tracking-[2px]
          sm:tracking-[3px]
          uppercase
          text-lime-700
        "
      >
        Overview
      </span>

      {/* Heading */}
      <h2
        className="
          mt-4
          sm:mt-5
          text-3xl
          sm:text-4xl
          lg:text-4xl
          font-black
          leading-tight
          text-slate-900
        "
      >
        Why This Step Matters
      </h2>

      {/* Underline */}
      <div className="mt-4 h-1 w-16 sm:w-24 rounded-full bg-linear-to-r from-lime-500 to-green-600" />

    </div>

    {/* Description */}
    <p
      className="
        mt-6
        sm:mt-8
        max-w-4xl
        text-base
        sm:text-lg
        leading-7
        sm:leading-9
        text-slate-600
      "
    >
      {process.description}
    </p>


    {/* ====================================================== */}
    {/* MAIN GRID */}
    {/* ====================================================== */}

    <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">

      {/* ====================================================== */}
      {/* LEFT CONTENT */}
      {/* ====================================================== */}

      <div>

        {/* Timeline Card */}
        <div
          className="
            rounded-2xl
            sm:rounded-[30px]
            border
            border-slate-200
            bg-white
            p-5
            sm:p-8
            shadow-xl
          "
        >

          <h3
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-slate-900
            "
          >
            Timeline
          </h3>


          {/* Timeline Steps */}
          <div className="mt-6 sm:mt-8 space-y-7 sm:space-y-9">

            {[
              "Requirement Discussion",
              "Technical Analysis",
              "Implementation Planning",
              "Approval & Next Step",
            ].map((stepItem, index) => (

              <div
                key={stepItem}
                className="relative flex gap-3 sm:gap-5"
              >

                {/* Timeline Line */}

                {index !== 3 && (

                  <div
                    className="
                      absolute
                      left-4
                      sm:left-5
                      top-9
                      sm:top-10
                      h-14
                      sm:h-16
                      w-[2px]
                      bg-lime-200
                    "
                  />

                )}


                {/* Step Number */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-8
                    w-8
                    shrink-0
                    sm:h-10
                    sm:w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-lime-500
                    text-xs
                    sm:text-sm
                    font-bold
                    text-white
                  "
                >
                  {index + 1}
                </div>


                {/* Step Content */}

                <div className="min-w-0 pb-1">

                  <h4
                    className="
                      text-base
                      sm:text-lg
                      font-semibold
                      leading-snug
                      text-slate-900
                    "
                  >
                    {stepItem}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-sm
                      sm:text-base
                      leading-6
                      text-slate-500
                    "
                  >
                    Executed by our engineering team.
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ====================================================== */}
      {/* RIGHT SIDEBAR */}
      {/* ====================================================== */}

      <div className="space-y-6">

        {/* Need Help Card */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            sm:rounded-[32px]
            bg-gradient-to-br
            from-slate-900
            via-slate-800
            to-slate-900
            p-6
            sm:p-8
            text-white
          "
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              bg-lime-500/20
              px-3
              py-1.5
              sm:px-4
              sm:py-2
              text-[10px]
              sm:text-xs
              font-bold
              uppercase
              tracking-[2px]
              sm:tracking-[3px]
              text-lime-300
            "
          >
            Need Assistance?
          </span>


          {/* Heading */}

          <h3
            className="
              mt-5
              sm:mt-6
              text-2xl
              sm:text-3xl
              font-black
              leading-tight
            "
          >
            Talk to Our Experts
          </h3>


          {/* Description */}

          <p
            className="
              mt-4
              sm:mt-5
              text-sm
              sm:text-base
              leading-6
              sm:leading-7
              text-slate-300
            "
          >
            Have questions about this stage of the project?
            Our EV charging specialists are available to guide
            you through every step of the implementation process.
          </p>


          {/* Quick Info */}

          <div className="mt-6 sm:mt-7 space-y-3">

            <div className="flex items-start sm:items-center gap-3">

              <CheckCircle2 className="mt-0.5 sm:mt-0 h-5 w-5 shrink-0 text-lime-400" />

              <span className="text-sm sm:text-base text-slate-200">
                Free Technical Consultation
              </span>

            </div>


            <div className="flex items-start sm:items-center gap-3">

              <CheckCircle2 className="mt-0.5 sm:mt-0 h-5 w-5 shrink-0 text-lime-400" />

              <span className="text-sm sm:text-base text-slate-200">
                Expert Engineering Support
              </span>

            </div>


            <div className="flex items-start sm:items-center gap-3">

              <CheckCircle2 className="mt-0.5 sm:mt-0 h-5 w-5 shrink-0 text-lime-400" />

              <span className="text-sm sm:text-base text-slate-200">
                Customized Project Planning
              </span>

            </div>

          </div>


          {/* Contact Button */}

          <Link
            href="/contact"
            className="
              mt-7
              sm:mt-8
              inline-flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              sm:rounded-2xl
              bg-lime-500
              px-5
              sm:px-6
              py-3
              sm:py-3.5
              text-sm
              sm:text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-lime-600
              active:scale-[0.98]
            "
          >

            Contact Our Team

            <ArrowRight className="h-5 w-5 shrink-0" />

          </Link>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ====================================================== */}
{/* PROCESS NAVIGATION */}
{/* ====================================================== */}

<section
  className="
    py-10

    sm:py-14

    lg:py-16
  "
>
  <div
    className="
      mx-auto
      max-w-7xl

      px-4

      sm:px-6
    "
  >
    <div
      className="
        rounded-[22px]
        border
        border-slate-200
        bg-white

        px-4
        py-5

        shadow-lg

        sm:rounded-[28px]
        sm:px-6
        sm:py-6

        lg:rounded-[32px]
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          gap-4

          sm:gap-6
        "
      >
        {/* ================= PREVIOUS ================= */}

        <div
          className="
            min-w-0
            flex-1

            sm:min-w-[150px]
            sm:flex-none
          "
        >
          {previousSlug && (
            <Link
              href={`/process/${previousSlug}`}
              className="
                group
                inline-flex
                max-w-full
                items-center
                gap-2

                font-semibold
                text-slate-700
                transition

                hover:text-lime-600

                sm:gap-3
              "
            >
              <ArrowLeft
                className="
                  h-4
                  w-4
                  shrink-0
                  transition

                  group-hover:-translate-x-1

                  sm:h-5
                  sm:w-5
                "
              />

              <div className="min-w-0">
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[1.5px]
                    text-slate-400

                    sm:text-xs
                    sm:tracking-[2px]
                  "
                >
                  Previous
                </p>

                <span
                  className="
                    block
                    truncate
                    capitalize

                    text-sm

                    sm:text-base
                  "
                >
                  {previousSlug.replace("-", " ")}
                </span>
              </div>
            </Link>
          )}
        </div>


        {/* ================= CENTER PROGRESS ================= */}

        <div
          className="
            hidden

            md:flex
            md:flex-col
            md:items-center

            lg:flex
          "
        >
          <span className="text-sm font-semibold text-slate-500">
            Step {process.number} of 06
          </span>

          <div className="mt-4 flex items-center gap-4">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div
                key={step}
                className={`
                  h-3
                  w-3
                  rounded-full
                  transition-all

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


        {/* ================= NEXT ================= */}

        <div
          className="
            min-w-0
            flex-1
            text-right

            sm:min-w-[150px]
            sm:flex-none
          "
        >
          {nextSlug && (
            <Link
              href={`/process/${nextSlug}`}
              className="
                group
                inline-flex
                max-w-full
                items-center
                justify-end
                gap-2

                font-semibold
                text-slate-700
                transition

                hover:text-lime-600

                sm:gap-3
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[1.5px]
                    text-slate-400

                    sm:text-xs
                    sm:tracking-[2px]
                  "
                >
                  Next
                </p>

                <span
                  className="
                    block
                    truncate
                    capitalize

                    text-sm

                    sm:text-base
                  "
                >
                  {nextSlug.replace("-", " ")}
                </span>
              </div>

              <ArrowRight
                className="
                  h-4
                  w-4
                  shrink-0
                  transition

                  group-hover:translate-x-1

                  sm:h-5
                  sm:w-5
                "
              />
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

<section
  className="
    pb-14

    sm:pb-20

    lg:pb-24
  "
>
  <div
    className="
      mx-auto
      max-w-7xl

      px-4

      sm:px-6

      lg:px-6
    "
  >
    <div
      className="
        relative
        overflow-hidden

        rounded-[24px]

        bg-linear-to-r
        from-lime-600
        via-green-600
        to-emerald-600

        p-6

        text-white

        sm:rounded-[32px]
        sm:p-10

        md:p-12

        lg:rounded-[40px]
        lg:p-14
      "
    >
      {/* Decorative Blur */}

      <div
        className="
          absolute
          -left-24
          -top-24

          h-48
          w-48

          rounded-full
          bg-white/10
          blur-[80px]

          sm:h-60
          sm:w-60

          lg:-left-20
          lg:-top-20
          lg:h-72
          lg:w-72
          lg:blur-[100px]
        "
      />

      <div
        className="
          absolute
          -right-24
          -bottom-10

          h-48
          w-48

          rounded-full
          bg-white/10
          blur-[80px]

          sm:h-60
          sm:w-60

          lg:-right-20
          lg:bottom-0
          lg:h-72
          lg:w-72
          lg:blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10

          grid
          items-center

          gap-8

          sm:gap-10
          md:gap-12

          lg:gap-10
          lg:grid-cols-[1fr_auto]
        "
      >
        {/* ================= LEFT CONTENT ================= */}

        <div>
          <h2
            className="
              text-3xl
              font-black
              leading-tight

              sm:text-[34px]
              md:text-4xl

              lg:text-4xl
            "
          >
            Ready to Build Your EV Charging Infrastructure?
          </h2>

          <p
            className="
              mt-4
              max-w-2xl

              text-base
              leading-7
              text-lime-50

              sm:mt-5
              sm:text-[17px]
              sm:leading-8

              md:mt-6
              md:text-lg

              lg:mt-6
              lg:text-lg
              lg:leading-8
            "
          >
            Whether you're planning a residential, commercial,
            fleet or public charging network, our experts are
            ready to guide you from consultation to commissioning.
          </p>
        </div>

        {/* ================= BUTTONS ================= */}

        <div
          className="
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:flex-wrap
            sm:gap-4

            lg:flex
            lg:flex-wrap
            lg:gap-4
          "
        >
          <Link
            href="/contact"
            className="
              rounded-2xl
              bg-white

              px-6
              py-3

              text-center
              font-bold
              text-lime-700

              transition
              hover:scale-105

              max-sm:w-full

              sm:w-auto
            "
          >
            Contact Us
          </Link>

          <Link
            href="/solutions"
            className="
              inline-flex
              items-center
              justify-center
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

              max-sm:w-full

              sm:w-auto
            "
          >
            Explore Solutions

            <ArrowRight className="h-5 w-5 shrink-0" />
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