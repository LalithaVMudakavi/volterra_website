

"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  MessageCircle,
  MapPinned,
  FileText,
  Wrench,
  Zap,
  Headphones,
  Leaf,
  Route,
  Landmark,
  Handshake,
  Radar,
  MonitorSmartphone,
  Network,
} from "lucide-react";

   
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



export function Whychoosevolterra() {

    const router = useRouter()

  return (

<section
id="process"
className="
relative
overflow-hidden
bg-white
py-32
"
>

{/* Background Glow */}

<div
className="
absolute
left-0
top-0
h-112.5
w-112.5
rounded-full
bg-lime-500/10
blur-[140px]
"
/>

<div
className="
absolute
right-0
bottom-0
h-112.5
w-112.5
rounded-full
bg-green-500/10
blur-[140px]
"
/>

{/* Engineering Grid */}

<div
className="
absolute
inset-0
opacity-[0.04]
bg-[linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
bg-size-[60px_60px]
"
/>


<div
className="
relative
z-10
mx-auto
max-w-375
px-6
lg:px-10
-mt-10
"
>

    {/* ========================================= */}
        {/* WHY CHOOSE VOLTERRA */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
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
            font-black
            tracking-[3px]
            uppercase
          text-white
          shadow-[0_20px_50px_rgba(132,204,22,.35)]

          "
        >

              Why Choose Volterra

            </div>

           <h2
className="
mt-3
text-3xl
lg:text-4xl
font-black
leading-tight
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
mt-2
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

          {solutions.map((item, index) => {
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