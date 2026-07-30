
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
  ArrowRight,
  Factory,
  Building,
  MapPinned,
  Store,
  Truck,
  Hotel,
  Home,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function About() {
   const router = useRouter();
   
const solutions = [
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
];

 const industries = [
    {
      icon: <Home className="h-5 w-5" />,
      title: "Residential",
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Corporate",
    },
    {
      icon: <Hotel className="h-5 w-5" />,
      title: "Hospitality",
    },
    {
      icon: <Store className="h-5 w-5" />,
      title: "Retail",
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Fleet",
    },
    {
      icon: <MapPinned className="h-5 w-5" />,
      title: "Highways",
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Real Estate",
    },
    {
      icon: <Landmark className="h-5 w-5" />,
      title: "Public",
    },
  ];

    const features = [
      {
        icon: <Leaf className="h-6 w-6" />,
        title: "Clean Energy",
        description:
          "Building sustainable EV charging infrastructure across India.",
      },
      {
        icon: <Zap className="h-6 w-6" />,
        title: "Smart Charging",
        description:
          "Reliable AC & DC charging solutions for every application.",
      },
      {
        icon: <Cpu className="h-6 w-6" />,
        title: "AI Powered CMS",
        description:
          "Real-time monitoring, analytics and intelligent charger management.",
      },
      {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "End-to-End Services",
        description:
          "Planning, installation, commissioning and lifetime support.",
      },
    ];


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
        className="w-full h-130 object-cover"
    />

</div>

<div className="mx-auto max-w-5xl -mt-22 relative z-10">

    <div className="rounded-[32px] bg-white p-8 shadow-2xl">

        <span className="text-2xl text-lime-600  font-black tracking-widest uppercase">
            About Volterra Energy
        </span>

        {/* <h2 className="mt-3 text-5xl font-black">
            Powering Intelligent
            <span className="text-lime-600"> Mobility</span>
        </h2> */}

        <p className="mt-3 text-lg leading-8 text-slate-600">
          Volterra Energy, a brand of Vayutattva Ventures LLP, is a clean-energy and electric mobility infrastructure company committed to accelerating India’s transition toward sustainable transportation.

        </p>

        <p className="mt-3 text-lg leading-8 text-slate-600">
          We deliver intelligent, reliable, and scalable EV charging solutions for residential communities, corporate workplaces, commercial properties, hotels and restaurants, malls and supermarkets, highways, fleet operators, real estate developments, and public charging networks.

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
      Comprehensive EV Charging Solutions
    </h3>
  </div>

  <p className="text-lg leading-8 text-slate-600">
    <strong>VOLTERRA Energy</strong> provides a comprehensive portfolio of
    intelligent AC and DC EV charging solutions, supporting everything from
    convenient destination charging to high-speed DC fast-charging corridors.
  </p>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Our solutions are designed for <strong>residential communities, real
    estate developments, corporate workplaces, hospitality venues, retail
    destinations, fleet operators, highways, and public charging
    networks</strong>, delivering reliable and scalable infrastructure for
    every charging ecosystem.
  </p>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Whether for homes, businesses, or public infrastructure, we enable
    seamless EV charging experiences through future-ready technology,
    intelligent hardware, and integrated software platforms.
  </p>
</div>

{/* Section 2 */}

<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
  <div className="mb-4 flex items-center gap-3">
    <div className="h-10 w-1 rounded-full bg-lime-500"></div>

    <h3 className="text-2xl font-bold text-slate-900">
      End-to-End Deployment & Smart Infrastructure
    </h3>
  </div>

  <p className="text-lg leading-8 text-slate-600">
    We manage the complete lifecycle of EV charging infrastructure—from
    <strong> site assessment, feasibility analysis, and solution design{" "}</strong>
    to <strong>installation, commissioning, software integration, and ongoing
    operations</strong>, ensuring a seamless experience for every client.
  </p>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Our intelligent platform enables user authentication, billing, energy
    monitoring, remote diagnostics, and performance optimization while helping
    businesses maximize uptime and operational efficiency.
  </p>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    By deploying accessible, connected, and scalable charging infrastructure,
    VOLTERRA Energy is building a smarter, greener, and future-ready
    transportation ecosystem that grows alongside India's accelerating EV
    adoption.
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

<p className="relative z-10 mt-6 text-lg leading-8 text-slate-300">
  To become India's most trusted EV charging infrastructure company by
  building an intelligent, connected, and sustainable charging ecosystem
  that accelerates the transition to clean mobility.
</p>
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

<p className="relative z-10 mt-6 text-lg leading-8 text-slate-600">
  Our mission is to simplify EV charging through intelligent,
  accessible, and end-to-end solutions for homes, businesses, fleets,
  and public charging networks while enabling a smarter, greener, and
  more connected transportation ecosystem.
</p>
</motion.div>
          </div>

        </motion.div>

        {/* ========================================= */}
        {/* WHY CHOOSE VOLTERRA */}
        {/* ========================================= */}

      </div>

    </section>
  );
}