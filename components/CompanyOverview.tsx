// "use client";

// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BadgeCheck,
//   Building2,
//   Cpu,
//   Leaf,
//   ShieldCheck,
//   Zap,
//   Home,
//   Hotel,
//   Store,
//   Truck,
//   MapPinned,
//   Landmark,
//   Factory,
//   Building,
// } from "lucide-react";
// import { useRouter } from "next/navigation";

// export function CompanyOverview() {
//   const router = useRouter();

//   const features = [
//     {
//       icon: <Leaf className="h-7 w-7" />,
//       title: "Clean Energy",
//       description:
//         "Building sustainable EV charging infrastructure across India.",
//     },
//     {
//       icon: <Zap className="h-7 w-7" />,
//       title: "Smart Charging",
//       description:
//         "Reliable AC & DC charging solutions for every application.",
//     },
//     {
//       icon: <Cpu className="h-7 w-7" />,
//       title: "AI Powered CMS",
//       description:
//         "Real-time monitoring, analytics and intelligent charger management.",
//     },
//     {
//       icon: <ShieldCheck className="h-7 w-7" />,
//       title: "End-to-End Services",
//       description:
//         "Planning, installation, commissioning and lifetime support.",
//     },
//   ];

//   const services = [
//     "Smart AC & DC Charging Solutions",
//     "Site Assessment & Planning",
//     "Installation & Commissioning",
//     "AI Powered CMS Platform",
//     "Remote Monitoring & Diagnostics",
//     "Annual Maintenance & Support",
//   ];

//   const industries = [
//     {
//       icon: <Home className="h-5 w-5" />,
//       title: "Residential",
//     },
//     {
//       icon: <Building2 className="h-5 w-5" />,
//       title: "Corporate",
//     },
//     {
//       icon: <Hotel className="h-5 w-5" />,
//       title: "Hospitality",
//     },
//     {
//       icon: <Store className="h-5 w-5" />,
//       title: "Retail",
//     },
//     {
//       icon: <Truck className="h-5 w-5" />,
//       title: "Fleet",
//     },
//     {
//       icon: <MapPinned className="h-5 w-5" />,
//       title: "Highways",
//     },
//     {
//       icon: <Building className="h-5 w-5" />,
//       title: "Real Estate",
//     },
//     {
//       icon: <Landmark className="h-5 w-5" />,
//       title: "Public",
//     },
//   ];

//   const stats = [
//     {
//       value: "AI",
//       label: "Powered Platform",
//     },
//     {
//       value: "24×7",
//       label: "Remote Monitoring",
//     },
//     {
//       value: "AC & DC",
//       label: "Charging Solutions",
//     },
//     {
//       value: "100%",
//       label: "Future Ready",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-white py-32">

//       {/* Background Glow */}

//       <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-lime-500/10 blur-[160px]" />

//       <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[160px]" />

//       {/* Engineering Grid */}

//       <div
//         className="
//           absolute
//           inset-0
//           opacity-[0.04]
//           bg-[linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
//           bg-[size:60px_60px]
//         "
//       />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8 -mt-10">

//         {/* Section Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: .8 }}
//           className="mx-auto max-w-4xl text-center"
//         >
//            <div
//           className="
//           inline-flex
//           items-center
//           rounded-full
//           border
//               border-lime-500/20
//               bg-lime-500
//           px-4
//           py-2
//          text-xs
//             font-semibold
//             tracking-[3px]
//             uppercase
//           text-white
//           shadow-[0_20px_50px_rgba(132,204,22,.35)]

//           "
//         >
//             About Us
//           </div>

//           <h2
// className="
// mt-3
// text-3xl
// lg:text-4xl
// font-black
// leading-tight
// text-slate-900
// "
// >
//             Engineering the Future of {" "}

//             <span className=" text-lime-600">
//               Electric Mobility
//             </span>
//           </h2>

//          <p
// className="
// mx-auto
// mt-2
// max-w-4xl
// text-lg
// leading-7
// text-slate-600
// "
// >
//             <strong>Volterra Energy</strong>, a brand of{" "}
//             <strong>Vayutattva Ventures LLP</strong>, is a clean-energy and
//             electric mobility infrastructure company committed to accelerating
//             India's transition toward sustainable transportation through
//             intelligent, reliable and scalable EV charging solutions.
//           </p>
//         </motion.div>

//         {/* ===== PART 2 STARTS HERE ===== */}

//         <div className="mt-20 grid gap-20 lg:grid-cols-2">
//        {/* ================= LEFT CONTENT ================= */}

// <motion.div
//   initial={{ opacity: 0, x: -60 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.8 }}
// >

//   {/* Small Heading */}

//   <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-50 px-4 py-2">
//     <Cpu className="h-4 w-4 text-lime-600" />
//     <span className="text-xs font-semibold uppercase tracking-[3px] text-lime-700">
//       Intelligent EV Charging Solutions
//     </span>
//   </div>

//   {/* Main Heading */}

//   <h3 className="mt-4 text-2xl font-black leading-tight text-slate-900 lg:text-3xl">
//     Complete EV Charging Infrastructure
//     <span className="block text-lime-600">
//       Designed For Every Destination
//     </span>
//   </h3>

//   {/* Paragraph */}

//   <p className="mt-4 text-lg leading-8 text-slate-600">
//     We deliver intelligent, reliable and scalable EV charging solutions
//     for residential communities, corporate workplaces, commercial
//     properties, hospitality, retail, highways, fleet operators,
//     real estate developments and public charging infrastructure.
//   </p>

//   <p className="mt-4 text-lg leading-8 text-slate-600">
//     From technology selection and site assessment to installation,
//     commissioning, AI-powered software integration and lifetime
//     operational support, VOLTERRA provides complete end-to-end
//     EV charging solutions tailored for every customer.
//   </p>


//   {/* CTA */}

//   <div className="mt-12 flex flex-wrap items-center gap-5">

//     <button
//       onClick={() => router.push("/about")}
//       className="
//       rounded-2xl
//       bg-lime-500
//       px-7
//       py-3.5
//       font-semibold
//       text-white
//       shadow-lg
//       shadow-lime-500/20
//       transition-all
//       duration-300
//       hover:-translate-y-1
//       hover:bg-lime-600
//       "
//     >
//       Learn More
//     </button>

//     <button
//       onClick={() => router.push("/industries")}
//       className="
//       group
//       flex
//       items-center
//       gap-2
//       font-semibold
//       text-slate-900
//       transition
//       hover:text-lime-600
//       "
//     >
//       Explore Industries

//       <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

//     </button>

//   </div>

// </motion.div>

// {/* ================= PART 3 STARTS HERE ================= */}
// {/* ================= RIGHT SIDE ================= */}

// <motion.div
//   initial={{ opacity: 0, x: 60 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.8 }}
//   className="space-y-8"
// >




//   {/* Industries Dashboard */}

//   <div
//     className="
//     overflow-hidden
//     rounded-[34px]
//     bg-slate-900
//     p-8
//     shadow-[0_25px_80px_rgba(15,23,42,.25)]
//     "
//   >

//     <div className="flex items-center justify-between">

//       <div>

//         <span
//           className="
//           inline-flex
//           rounded-full
//           bg-lime-500/20
//           px-4
//           py-2
//           text-xs
//           font-semibold
//           uppercase
//           tracking-[3px]
//           text-lime-300
//           "
//         >
//           Industries
//         </span>

//         <h3 className="mt-4 text-3xl font-black text-white">
//           Industries We Serve
//         </h3>

//       </div>

//       <Factory className="hidden h-12 w-12 text-lime-400 lg:block" />

//     </div>

//     <div className="mt-8 grid grid-cols-2 gap-4">

//       {industries.map((industry, index) => (

//         <motion.div
//           key={industry.title}
//           initial={{
//             opacity: 0,
//             scale: .9,
//           }}
//           whileInView={{
//             opacity: 1,
//             scale: 1,
//           }}
//           viewport={{ once: true }}
//           transition={{
//             delay: index * .05,
//           }}
//           whileHover={{
//             y: -5,
//           }}
//           className="
//           group
//           flex
//           items-center
//           gap-3
//           rounded-2xl
//           border
//           border-white/10
//           bg-white/5
//           px-4
//           py-2
//           backdrop-blur-xl
//           transition-all
//           duration-300
//           hover:bg-lime-500
//           hover:border-lime-400
//           "
//         >

//           <div
//             className="
//             flex
//             h-9
//             w-9
//             items-center
//             justify-center
//             rounded-xl
//             bg-white/10
//             text-lime-400
//             transition-all
//             duration-300
//             group-hover:bg-white
//             group-hover:text-lime-600
//             "
//           >
//             {industry.icon}
//           </div>

//           <span
//             className="
//             text-sm
//             font-semibold
//             text-white
//             transition-colors
//             duration-300
//             "
//           >
//             {industry.title}
//           </span>

//         </motion.div>

//       ))}

//     </div>

//   </div>

// </motion.div>

//       </div>

    
//     </div>
//   </section>
// );
// }





"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Cpu,
  Leaf,
  ShieldCheck,
  Zap,
  Home,
  Hotel,
  Store,
  Truck,
  MapPinned,
  Landmark,
  Factory,
  Building,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function CompanyOverview() {
  const router = useRouter();

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

  const services = [
    "Smart AC & DC Charging Solutions",
    "Site Assessment & Planning",
    "Installation & Commissioning",
    "AI Powered CMS Platform",
    "Remote Monitoring & Diagnostics",
    "Annual Maintenance & Support",
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

  const stats = [
    {
      value: "AI",
      label: "Powered Platform",
    },
    {
      value: "24×7",
      label: "Remote Monitoring",
    },
    {
      value: "AC & DC",
      label: "Charging Solutions",
    },
    {
      value: "100%",
      label: "Future Ready",
    },
  ];

return (
<section className="relative overflow-hidden bg-white py-32">

  {/* ====================================== */}
  {/* Background */}
  {/* ====================================== */}

  <div className="absolute inset-0">

    {/* Grid */}

    <div
      className="
      absolute
      inset-0
      opacity-[0.035]
      bg-[linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
      bg-size-[60px_60px]
      "
    />

    {/* Top Glow */}

    <div
      className="
      absolute
      -left-32
      top-0
      h-112.5
      w-112.5
      rounded-full
      bg-lime-400/10
      blur-[170px]
      "
    />

    {/* Bottom Glow */}

    <div
      className="
      absolute
      -right-32
      bottom-0
      h-112.5
      w-112.5
      rounded-full
      bg-green-500/10
      blur-[170px]
      "
    />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8 -mt-10">

    {/* ====================================== */}
    {/* Heading */}
    {/* ====================================== */}

    <motion.div
      initial={{
        opacity:0,
        y:40
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      viewport={{
        once:true
      }}
      transition={{
        duration:.8
      }}
      className="mx-auto max-w-5xl text-center"
    >

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
            tracking-[3px]
            uppercase
          text-white
          shadow-[0_20px_50px_rgba(132,204,22,.35)]

          "
        >

        About Us

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

        Engineering the Future of {" "}

        <span
          className="
          bg-linear-to-r
          from-lime-500
          via-lime-600
          to-green-600
          bg-clip-text
          text-transparent
          "
        >
          Electric Mobility
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

        <span className="font-semibold">
          Volterra Energy
        </span>
        , a brand of
        <span className="font-semibold ">
          {" "}Vayutattva Ventures LLP
        </span>,
        is building the next generation of intelligent EV charging
        infrastructure to accelerate India's transition toward
        sustainable transportation.

      </p>

    </motion.div>

    {/* ====================================== */}
    {/* Main Layout */}
    {/* ====================================== */}

    <div
      className="
      mt-15
      grid
      items-start
      gap-16
      lg:grid-cols-[1.1fr_.9fr]
      "
    >

      {/* ====================================== */}
      {/* LEFT CONTENT STARTS IN PART 2 */}
      {/* ====================================== */}

      <motion.div
        initial={{
          opacity:0,
          x:-40
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        viewport={{
          once:true
        }}
        transition={{
          duration:.8
        }}
      >

        {/* ====================================== */}
        {/* LEFT CONTENT */}
        {/* ====================================== */}

<div
  className="
  inline-flex
  items-center
  gap-2
  rounded-full
  border
  border-lime-500/20
  bg-lime-50
  px-4
  py-2
  "
>
  <Zap className="h-4 w-4 text-lime-600" />

  <span
    className="
    text-xs
    font-semibold
    uppercase
    tracking-[3px]
    text-lime-700
    "
  >
    Intelligent Charging Infrastructure
  </span>
</div>

<h3
  className="
  mt-6
  text-3xl
  font-black
  leading-tight
  text-slate-900
  lg:text-4xl
  "
>
  Powering Every EV Journey

  <span className="block text-lime-600">
    With Smart Infrastructure
  </span>
</h3>

<p
  className="
  mt-8
  text-lg
  leading-8
  text-slate-600
  "
>
  As electric vehicle adoption continues to grow,
  reliable charging infrastructure is becoming an
  essential part of modern residential,
  commercial and transportation ecosystems.
</p>


{/* ================= AI CARD ================= */}

<motion.div

whileHover={{
y:-5
}}

className="
relative
mt-10
overflow-hidden
rounded-[30px]
border
border-lime-200
bg-linear-to-br
from-lime-50
via-white
to-white
p-8
shadow-lg
"

>

<div
className="
absolute
right-0
top-0
h-44
w-44
rounded-full
bg-lime-300/10
blur-[70px]
"
/>

<div className="relative">

<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-lime-500
text-white
shadow-lg
"
>

<Cpu className="h-7 w-7"/>

</div>

<h4
className="
mt-6
text-2xl
font-bold
text-slate-900
"
>

Building Intelligent
Charging Infrastructure

</h4>

<p
className="
mt-5
leading-8
text-slate-600
"
>

At Volterra Energy, we are building
intelligent charging infrastructure that
connects people, vehicles, businesses,
properties and clean energy to create a
stronger foundation for the future of
electric mobility.

</p>

</div>

</motion.div>

{/* ================= PORTFOLIO ================= */}

<div className="mt-10">

<h4
className="
text-xl
font-bold
text-slate-900
"
>

Our Portfolio

</h4>

<div
className="
mt-6
flex
flex-wrap
gap-4
"
>

{[
"AC Chargers",
"DC Fast Chargers",
"AI Powered CMS",
"Cloud Platform",
"Smart Energy",
"Remote Monitoring"
].map((item)=>(

<div

key={item}

className="
rounded-full
border
border-lime-200
bg-lime-50
px-5
py-3
font-semibold
text-lime-700
transition
duration-300
hover:bg-lime-500
hover:text-white
hover:border-lime-500
cursor-default
"

>

{item}

</div>

))}

</div>

</div>

{/* ================= FINAL CARD ================= */}

<div
className="
mt-12
rounded-[30px]
bg-slate-900
p-8
text-white
shadow-[0_20px_70px_rgba(15,23,42,.25)]
"
>

<h4
className="
text-2xl
font-bold
"
>

Built Around Your Requirements

</h4>

<p
className="
mt-5
leading-8
text-slate-300
"
>

Whether the requirement is for a
single EV charger at a residential
property or a scalable charging
network across multiple locations,
our experts design the right solution
based on power availability,
vehicle requirements,
future scalability and long-term
operational objectives.

</p>

<div className="mt-8 flex flex-wrap gap-4">

<button

onClick={()=>router.push("/about")}

className="
rounded-2xl
bg-lime-500
px-6
py-3
font-semibold
text-white
transition
hover:bg-lime-600
 cursor-pointer
"

>

Learn More

</button>

<button

onClick={()=>router.push("/contact")}

className="
group
flex
items-center
gap-2
font-semibold
text-white
 cursor-pointer
"

>

Contact Us

<ArrowRight
className="
h-5
w-5
transition-transform
group-hover:translate-x-1
"
/>

</button>

</div>

</div>
</motion.div>

{/* ====================================== */}
{/* RIGHT SIDE */}
{/* ====================================== */}

<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .8 }}
  className="relative"
>

  {/* Main Dashboard */}

  <div
    className="
    overflow-hidden
    rounded-[36px]
    border
    border-slate-200
    bg-white
    shadow-[0_30px_80px_rgba(15,23,42,.08)]
    "
  >

    {/* Top */}

    <div
      className="
      border-b
      border-slate-200
      bg-linear-to-r
      from-slate-900
      via-slate-800
      to-slate-900
      p-8
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
        font-semibold
        uppercase
        tracking-[3px]
        text-lime-300
        "
      >
        Technology Platform
      </span>

      <h3
        className="
        mt-5
        text-3xl
        font-black
        text-white
        "
      >
        Smart EV Ecosystem
      </h3>

      <p
        className="
        mt-1
        leading-6
        text-slate-300
        "
      >
        Intelligent hardware,
        AI powered software,
        cloud connectivity
        and smart energy management.
      </p>

    </div>

    {/* Technologies */}

    <div className="grid grid-cols-2 gap-5 p-5">

      {features.map((item,index)=>(

        <motion.div

          key={item.title}

          whileHover={{
            y:-6
          }}

          transition={{
            delay:index*.08
          }}

          className="
          group
          rounded-3xl
          border
          border-slate-200
          bg-slate-50
          p-6
          transition-all
          duration-300
          hover:border-lime-400
          hover:bg-white
          hover:shadow-xl
          "

        >

          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-2xl
            bg-lime-100
            text-lime-600
            transition-all
            duration-300
            group-hover:bg-lime-500
            group-hover:text-white
            "
          >

            {item.icon}

          </div>

          <h4
            className="
            mt-3
            text-[17px]
            font-bold
            text-slate-900
            "
          >

            {item.title}

          </h4>

          <p
            className="
            mt-1
            text-sm
            leading-6
            text-slate-600
            "
          >

            {item.description}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

  <div
    className="
    overflow-hidden
    rounded-[34px]
    bg-slate-900
    p-8
    shadow-[0_25px_80px_rgba(15,23,42,.25)]
    mt-6
    "
  >

    <div className="flex items-center justify-between">

      <div>

        <span
          className="
          inline-flex
          rounded-full
          bg-lime-500/20
          px-3
          py-1
          text-xs
          font-semibold
          uppercase
          tracking-[3px]
          text-lime-300
          "
        >
          Industries
        </span>

        <h3 className="mt-4 text-3xl font-black text-white">
          Industries We Serve
        </h3>

      </div>

      <Factory className="hidden h-12 w-12 text-lime-400 lg:block" />

    </div>

    <div className="mt-6 grid grid-cols-2 gap-4">

      {industries.map((industry, index) => (

        <motion.div
          key={industry.title}
          initial={{
            opacity: 0,
            scale: .9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * .05,
          }}
          whileHover={{
            y: -5,
          }}
          className="
          group
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-4
          py-2
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-lime-500
          hover:border-lime-400
          "
        >

          <div
            className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            bg-white/10
            text-lime-400
            transition-all
            duration-300
            group-hover:bg-white
            group-hover:text-lime-600
            "
          >
            {industry.icon}
          </div>

          <span
            className="
            text-sm
            font-semibold
            text-white
            transition-colors
            duration-300
            "
          >
            {industry.title}
          </span>

        </motion.div>

      ))}

    </div>


<div className="mt-5 border-t border-white/10 pt-6 flex justify-end -mb-3">
  <button
    onClick={() => router.push("/industries")}
    className="
      group
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-lime-500/30
      bg-white/5
      px-6
      py-2
      text-sm
      font-semibold
      text-white
      transition-all
      duration-300
      hover:bg-lime-500
      hover:border-lime-500
      -mt-2
      cursor-pointer
    "
  >
    Explore All Industries

    <ArrowRight
      className="
        h-4
        w-4
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </button>
</div>
  </div>

 
</motion.div>
</div>


    </div>
  </section>
);
}