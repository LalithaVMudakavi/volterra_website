
"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Cpu,
  Handshake,
  Leaf,
  MonitorSmartphone,
  Target,
  Eye,
  Brain,
  Network,
  Radar,
  Landmark,
  Route,
} from "lucide-react";

export function About() {
const features = [
  {
    no: "01",
    title: "End-to-End Infrastructure",
    desc: "From site assessment and engineering to deployment, technology, operations, and maintenance.",
    icon: Network,
  },

  {
    no: "02",
    title: "Technology-Driven",
    desc: "Built around AI, IoT, cloud infrastructure, CMS, and data analytics.",
    icon: MonitorSmartphone,
  },

  {
    no: "03",
    title: "Connected Operations",
    desc: "Real-time visibility and remote management of charging infrastructure.",
    icon: Radar,
  },

  {
    no: "04",
    title: "Flexible Partnership Models",
    desc: "FOCO, COCO, EPC, CaaS, and strategic revenue-sharing opportunities.",
    icon: Handshake,
  },

  {
    no: "05",
    title: "Investor-Focused Approach",
    desc: "Structured models designed to create transparent and scalable participation opportunities.",
    icon: Landmark,
  },

  {
    no: "06",
    title: "Sustainability at the Core",
    desc: "Building infrastructure that supports India's transition towards electric mobility and cleaner energy.",
    icon: Leaf,
  },

  {
    no: "07",
    title: "City-to-Highway Network Vision",
    desc: "Beginning with Bengaluru and strategically expanding across South India before building a broader national footprint.",
    icon: Route,
  },
];

const businessmodels = [

{
no:"01",
title:"Franchise Owned, Company Operated",
icon:Brain,
},

{
no:"02",
title:"Company Owned, Company Operated",
icon:MonitorSmartphone,
},

{
no:"03",
title:"Engineering, Procurement & Construction",
icon:Cpu,
},

{
no:"04",
title:"Charging-as-a-Service ",
icon:Handshake,
},

{
no:"05",
title:"strategic revenue-sharing partnerships",
icon:Building2,
}
]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8FAFC] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-lime-400/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-slate-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-375 px-6 lg:px-12">

        {/* Section Header */}

       <div className="relative overflow-hidden rounded-[36px] shadow-2xl mt-3">

    <img
        src="/images/about.png"
        className="w-full h-[520px] object-cover"
    />

</div>

<div className="mx-auto max-w-5xl -mt-22 relative z-10">

    <div className="rounded-[32px] bg-white p-8 shadow-2xl">

        <span className="text-lime-600 font-semibold tracking-widest uppercase">
            About Volterra Energy
        </span>

        <h2 className="mt-3 text-5xl font-black">
            Powering Intelligent
            <span className="text-lime-600"> Mobility</span>
        </h2>

        <p className="mt-3 text-lg leading-8 text-slate-600">
           We are building an intelligent, scalable, and future-ready energy network that integrates 
           EV charging with renewable energy, digital innovation, and smart infrastructure.
        </p>

    </div>

</div>


       {/* Main Content */}

<div className="mx-auto mt-12 max-w-7xl">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="space-y-10"
  >

    {/* Section 1 */}

    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-4 flex items-center gap-3">
        <div className="h-10 w-1 rounded-full bg-lime-500"></div>

        <h3 className="text-2xl font-bold text-slate-900">
          AI-Powered EV Charging Infrastructure
        </h3>
      </div>

      <p className="text-lg leading-8 text-slate-600">
        <strong>VOLTERRA Energy</strong> is an AI-powered EV charging and
        energy infrastructure company committed to accelerating India's
        transition to sustainable mobility. We design, deploy, operate,
        and manage intelligent EV charging networks that connect electric
        vehicles, businesses, investors, and property owners through
        advanced technology and reliable infrastructure.
      </p>

    </div>

    {/* Section 2 */}

    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-4 flex items-center gap-3">
        <div className="h-10 w-1 rounded-full bg-lime-500"></div>

        <h3 className="text-2xl font-bold text-slate-900">
          Intelligent Technology Platform
        </h3>
      </div>

      <p className="text-lg leading-8 text-slate-600">
        As a technology-driven Charge Point Operator (CPO), we offer
        end-to-end EV charging solutions across residential communities,
        corporate campuses, commercial establishments, fleet operators,
        hospitality, public infrastructure, and highway corridors.
      </p>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Our integrated platform leverages Artificial Intelligence (AI),
        IoT, cloud-based Charge Management Systems (CMS), and data
        analytics to deliver smart charging, real-time monitoring,
        predictive maintenance, seamless digital payments, and an
        exceptional customer experience.
      </p>

    </div>

  </motion.div>

</div>



                {/* ========================================= */}
        {/* VISION & MISSION */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28"
        >
          {/* Section Title */}

          <div className="text-center mb-10">

          <div
              className="
              inline-flex
              items-center
              rounded-full
              border
              border-lime-500/20
              bg-lime-500
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-white
              shadow-[0_20px_50px_rgba(132,204,22,.35)]
              "
            >
              Our Purpose
            </div>

            <h2
              className="
               mt-4
            text-4xl
            lg:text-5xl
              font-black
              text-slate-900
              "
            >
              Vision &
              <span className="text-lime-600"> Mission</span>
            </h2>

            <p
              className="
              mx-auto
              mt-3
              max-w-3xl
              text-lg
              leading-7
              text-slate-600
              "
            >
              Every charger we install, every software platform we build,
              and every partnership we create moves India one step closer
              to a sustainable electric future.
            </p>

          </div>

          {/* Cards */}

          <div className="grid gap-10 xl:grid-cols-2 items-stretch">

            {/* Vision */}

         <motion.div
  whileHover={{
    y: -8,
    scale: 1.02,
  }}
  transition={{ duration: 0.3 }}
  className="
    relative
    overflow-hidden
    rounded-[32px]
    bg-slate-900
    p-10
    text-white
    shadow-[0_20px_60px_rgba(0,0,0,.15)]
    border
    border-slate-800
    transition-all
    duration-300
    hover:border-lime-500/40
  "
>
  {/* Glow */}
  <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lime-500/20 blur-[120px]" />

  {/* Icon */}
  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-500/15">
    <Eye className="h-7 w-7 text-lime-400" />
  </div>

  <span className="relative z-10 mt-6 inline-block text-sm font-semibold uppercase tracking-[4px] text-lime-400">
    Our Vision
  </span>

  <h3 className="relative z-10 mt-3 text-3xl font-black">
    Building the Future of Intelligent Mobility
  </h3>

  <div className="relative z-10 mt-6 space-y-4">
    <p className="text-lg leading-8 text-slate-300">
      To build one of India's most trusted, intelligent and sustainable EV
      charging networks—creating a connected energy ecosystem where
      electric mobility, Artificial Intelligence, IoT and renewable energy
      work together seamlessly.
    </p>

    <p className="text-lg leading-8 text-slate-300">
      We envision a future where reliable and accessible EV charging is
      available wherever people live, work, travel and connect, enabling
      cleaner transportation and accelerating India's transition toward a
      sustainable energy future.
    </p>
  </div>
</motion.div>

            {/* Mission */}
<motion.div
  whileHover={{
    y: -8,
    scale: 1.02,
  }}
  transition={{ duration: 0.3 }}
  className="
  relative
    overflow-hidden
    rounded-[32px]
    border
    border-slate-200
    bg-white
    p-10
    shadow-[0_20px_60px_rgba(0,0,0,.08)]
    hover:border-lime-400
    transition-all
  "
>
  <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-lime-500/20 blur-[120px]" />

  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-500/15">
    <Target className="h-7 w-7 text-lime-400" />
  </div>

  <span className="relative z-10 mt-6 inline-block text-sm font-semibold uppercase tracking-[4px] text-lime-400">
    Our Mission
  </span>

  <h3 className="relative z-10 mt-3 text-3xl font-black">
    Driving Sustainable Mobility
  </h3>

  <div className="relative z-10 mt-6 space-y-2 text-lg">
    {[
      "Building a robust network of AC & DC fast-charging infrastructure.",
      "Leveraging AI, IoT, cloud technology and data analytics.",
      "Delivering high charger availability through predictive maintenance.",
      "Creating opportunities for investors and franchise partners.",
      "Expanding charging accessibility across cities and highways.",
      "Integrating renewable energy and intelligent energy management.",
      "Providing a seamless charging experience for every EV user.",
    ].map((item) => (
      <div key={item} className="flex items-start gap-4">
        <div className="mt-3 h-2.5 w-2.5 rounded-full bg-lime-400" />
        <p className="flex-1 leading-8 text-slate-600">{item}</p>
      </div>
    ))}
  </div>
</motion.div>
          </div>

        </motion.div>

                {/* ========================================= */}
        {/* WHY CHOOSE VOLTERRA */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-28"
        >

          {/* Heading */}

          <div className="text-center">

            <div
              className="
              inline-flex
              items-center
              rounded-full
              border
              border-lime-500/20
              bg-lime-500
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-white
              shadow-[0_20px_50px_rgba(132,204,22,.35)]

              "
            >

              Why Choose Volterra

            </div>

            <h2
              className="
                  mt-4
            text-4xl
            lg:text-5xl
              font-black
              text-slate-900
              "
            >

              Complete EV Charging
              <span className="text-lime-600">

                {" "}Solutions

              </span>

            </h2>

            <p
              className="
              mx-auto
              mt-3
              max-w-4xl
              text-lg
              leading-7
              text-slate-600
              "
            >

              From smart charging hardware to intelligent software,
              installation, maintenance and nationwide support,
              Volterra delivers end-to-end EV charging ecosystems.

            </p>

          </div>

          {/* Features */}

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
      }}
      whileHover={{
        y: -10,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-slate-200
      bg-white
      p-6
      shadow-[0_15px_45px_rgba(0,0,0,.05)]
      transition-all
      duration-500
      hover:border-lime-400
      hover:shadow-[0_25px_60px_rgba(132,204,22,.18)]
      "
    >

      {/* Glow */}

      <div
        className="
        absolute
        -right-20
        -top-20
        h-10
        w-10
        rounded-full
        bg-lime-500/10
        blur-[90px]
        opacity-0
        transition-all
        duration-300
        group-hover:opacity-100
        "
      />

      {/* Top */}

      <div className="flex items-start justify-between">

        <span
          className="
          text-2xl
          font-black
          text-slate-200
          transition
          group-hover:text-lime-500/30
          "
        >
          {item.no}
        </span>

        <div
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          bg-lime-500/10
          transition-all
          duration-500
         
          group-hover:bg-lime-500
          "
        >

          <Icon
            className="
            h-6
            w-6
            text-lime-600
            transition-all
            duration-500
            group-hover:text-white
            "
          />

        </div>

      </div>

      {/* Title */}

      <h3
        className="
        mt-5
        text-xl
        font-bold
        text-slate-900
        "
      >
        {item.title}
      </h3>

      {/* Description */}

      <p
        className="
        mt-3
        leading-7
        text-slate-600
        "
      >
        {item.desc}
      </p>

      {/* Divider */}

      {/* <div className="my-6 h-px bg-slate-200 " /> */}

      {/* Footer */}

      {/* <button
        className="
        flex
        items-center
        gap-3
        font-semibold
        text-lime-600
        transition-all
        group-hover:gap-5
        "
      >

        Learn More

        <ArrowUpRight
          className="
          h-5
          w-5
          transition-transform
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
          "
        />

      </button> */}

    </motion.div>
  );
})}

          </div>

        </motion.div>


      </div>

    </section>
  );
}