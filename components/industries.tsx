"use client";

import { motion } from "framer-motion";

import {
  Hotel,
  MonitorSmartphone,
  Building2,
  ShoppingBag,
  Building,
  Hospital,
  GraduationCap,
  Landmark,
  Plane,
  Truck,
  Fuel,
  UtensilsCrossed,
  Home,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    no: "01",
    title: "Hotels & Resorts",
    desc: "Premium EV charging for hospitality and guest parking.",
    icon: Hotel,
  },
  {
    no: "02",
    title: "IT Parks",
    desc: "Smart workplace charging for employees and visitors.",
    icon: MonitorSmartphone,
  },
  {
    no: "03",
    title: "Corporate Offices",
    desc: "Reliable charging infrastructure for business campuses.",
    icon: Building2,
  },
  {
    no: "04",
    title: "Shopping Malls",
    desc: "Enhance customer experience with destination charging.",
    icon: ShoppingBag,
  },
  {
    no: "05",
    title: "Apartment Communities",
    desc: "Convenient EV charging for residential complexes.",
    icon: Building,
  },
  {
    no: "06",
    title: "Hospitals",
    desc: "24×7 charging solutions for healthcare facilities.",
    icon: Hospital,
  },
  {
    no: "07",
    title: "Educational Institutions",
    desc: "Future-ready campuses with sustainable mobility.",
    icon: GraduationCap,
  },
  {
    no: "08",
    title: "Government Organizations",
    desc: "Scalable public EV charging infrastructure.",
    icon: Landmark,
  },
  {
    no: "09",
    title: "Airports",
    desc: "Fast charging for travelers and airport fleets.",
    icon: Plane,
  },
  {
    no: "10",
    title: "Fleet Operators",
    desc: "High-performance fleet charging with energy management.",
    icon: Truck,
  },
  {
    no: "11",
    title: "Petrol Pumps",
    desc: "Transform fuel stations into EV charging hubs.",
    icon: Fuel,
  },
  {
    no: "12",
    title: "Restaurants",
    desc: "Increase customer dwell time with charging facilities.",
    icon: UtensilsCrossed,
  },
  {
    no: "13",
    title: "Real Estate Developers",
    desc: "Integrate EV charging into modern developments.",
    icon: Home,
  },
];

export function Industries() {

  return (

<section
id="industries"
className="
relative
overflow-hidden
bg-[#F8FAFC]
py-32
"
>

{/* Background Glow */}

<div
className="
absolute
left-0
top-0
h-[450px]
w-[450px]
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
h-[450px]
w-[450px]
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
[background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
[background-size:70px_70px]
"
/>

<div
className="
relative
z-10
mx-auto
max-w-[1500px]
px-6
lg:px-10
"
>

<motion.div

initial={{ opacity: 0, y: 40 }}

whileInView={{ opacity: 1, y: 0 }}

viewport={{ once: true }}

transition={{ duration: .8 }}

className="text-center"

>

<div
className="
inline-flex
rounded-full
border
border-lime-500/20
bg-lime-500/10
px-4
py-2
text-xs
font-bold
uppercase
tracking-[3px]
text-lime-600
"
>

Industries We Serve

</div>

<h2
className="
mt-6
text-5xl
lg:text-6xl
font-black
leading-tight
text-slate-900
"
>

Powering Every

<span className="text-lime-600">

 Industry

</span>

</h2>

<p
className="
mx-auto
mt-7
max-w-3xl
text-lg
leading-9
text-slate-600
"
>

Volterra delivers intelligent EV charging
solutions tailored for commercial,
enterprise, public and residential sectors,
helping businesses embrace sustainable mobility.

</p>

</motion.div>

{/* ====================================== */}
{/* PART 2 STARTS HERE */}
{/* ========================================= */}
{/* INDUSTRY CARDS */}
{/* ========================================= */}

<div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

  {industries.slice(0, 8).map((item, index) => {

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
        p-7
        shadow-[0_15px_45px_rgba(0,0,0,.05)]
        transition-all
        duration-500
        hover:border-lime-400
        hover:shadow-[0_25px_60px_rgba(132,204,22,.18)]
        "
      >

        {/* Background Glow */}

        <div
          className="
          absolute
          -right-24
          -top-24
          h-40
          w-40
          rounded-full
          bg-lime-500/10
          blur-[90px]
          opacity-0
          transition-all
          duration-500
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
            transition-all
            duration-500
            group-hover:text-lime-500/30
            "
          >
            {item.no}
          </span>

          <div
            className="
            flex
            h-14
            w-14
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
              h-7
              w-7
              text-lime-600
              transition-all
              duration-500
              group-hover:rotate-6
              group-hover:text-white
              "
            />

          </div>

        </div>

        {/* Title */}

        <h3
          className="
          mt-6
          text-xl
          font-bold
          leading-snug
          text-slate-900
          "
        >
          {item.title}
        </h3>

        {/* Description */}

        <p
          className="
          mt-4
          leading-7
          text-slate-600
          "
        >
          {item.desc}
        </p>

        {/* Divider */}

        <div className="my-6 h-px bg-slate-200" />

        {/* Footer */}

        <button
          className="
          flex
          items-center
          gap-3
          font-semibold
          text-lime-600
          transition-all
          duration-300
          group-hover:gap-5
          "
        >

          Explore Industry

          <ArrowUpRight
            className="
            h-5
            w-5
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
            "
          />

        </button>

      </motion.div>

    );

  })}

</div>

{/* ========================================= */}
{/* PART 3 STARTS HERE */}
{/* ========================================= */}
{/* REMAINING INDUSTRIES */}
{/* ========================================= */}

<div className="mt-8 flex justify-center">

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-6xl">

    {industries.slice(8).map((item, index) => {

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
          p-7
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
            -right-24
            -top-24
            h-40
            w-40
            rounded-full
            bg-lime-500/10
            blur-[90px]
            opacity-0
            transition-all
            duration-500
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
              h-14
              w-14
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
                h-7
                w-7
                text-lime-600
                transition-all
                duration-500
                group-hover:text-white
                group-hover:rotate-6
                "
              />

            </div>

          </div>

          {/* Title */}

          <h3
            className="
            mt-6
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
            mt-4
            leading-7
            text-slate-600
            "
          >
            {item.desc}
          </p>

          <div className="my-6 h-px bg-slate-200" />

          <button
            className="
            flex
            items-center
            gap-3
            font-semibold
            text-lime-600
            transition-all
            duration-300
            group-hover:gap-5
            "
          >

            Explore Industry

            <ArrowUpRight
              className="
              h-5
              w-5
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              "
            />

          </button>

        </motion.div>

      );

    })}

  </div>

</div>

{/* ========================================= */}
{/* CTA */}
{/* ========================================= */}

<motion.div

  initial={{ opacity: 0, y: 40 }}

  whileInView={{ opacity: 1, y: 0 }}

  viewport={{ once: true }}

  transition={{ duration: .8 }}

  className="
  mt-24
  overflow-hidden
  rounded-[36px]
  bg-gradient-to-r
  from-slate-900
  via-[#111827]
  to-slate-900
  p-12
  shadow-[0_25px_70px_rgba(0,0,0,.18)]
  "

>

  <div
    className="
    relative
    z-10
    grid
    items-center
    gap-10
    lg:grid-cols-[1fr_auto]
    "
  >

    {/* Left */}

    <div>

      <div
        className="
        inline-flex
        rounded-full
        border
        border-lime-500/20
        bg-lime-500/10
        px-5
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-[3px]
        text-lime-400
        "
      >

        Tailored Industry Solutions

      </div>

      <h3
        className="
        mt-6
        text-4xl
        lg:text-5xl
        font-black
        leading-tight
        text-white
        "
      >

        Ready to Electrify

        <span className="text-lime-400">

          {" "}Your Industry?

        </span>

      </h3>

      <p
        className="
        mt-6
        max-w-2xl
        text-lg
        leading-8
        text-slate-300
        "
      >

        Whether you're managing a hotel, corporate campus,
        hospital, shopping mall, residential community,
        airport or fleet operation, Volterra delivers
        customized EV charging infrastructure designed
        for your business.

      </p>

    </div>

    {/* Button */}

    <button
      className="
      inline-flex
      items-center
      gap-3
      rounded-2xl
      bg-gradient-to-r
      from-lime-500
      to-green-600
      px-10
      py-5
      text-lg
      font-semibold
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_20px_50px_rgba(132,204,22,.35)]
      "
    >

      Schedule Consultation

      <ArrowUpRight className="h-5 w-5" />

    </button>

  </div>

</motion.div>

</div>

</section>

);

}