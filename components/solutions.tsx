"use client";

import { motion } from "framer-motion";

import {
  Landmark,
  HandCoins,
  TrendingUp,
  BadgeCheck,
  Store,
  BatteryCharging,
  CloudLightning,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    no: "01",
    title: "CapEx Model",
    icon: Landmark,
    color: "green",
    description:
      "Own your complete EV charging infrastructure with maximum control and long-term returns.",
    points: [
      "100% ownership",
      "Higher ROI",
      "Long-term investment",
    ],
  },

  {
    no: "02",
    title: "Revenue Sharing",
    icon: HandCoins,
    color: "green",
    description:
      "Partner with Volterra and generate recurring revenue through shared charging income.",
    points: [
      "Low investment",
      "Shared revenue",
      "Business partnership",
    ],
  },

  {
    no: "03",
    title: "Investor Model",
    icon: TrendingUp,
    color: "green",
    description:
      "Invest in EV charging infrastructure and build sustainable long-term assets.",
    points: [
      "Scalable returns",
      "Future-ready business",
      "Growing EV market",
    ],
  },

  {
    no: "04",
    title: "White Label Solutions",
    icon: BadgeCheck,
    color: "purple",
    description:
      "Launch your own EV charging brand using Volterra's technology and platform.",
    points: [
      "Custom branding",
      "CMS included",
      "Complete support",
    ],
  },

  {
    no: "05",
    title: "Franchise Opportunities",
    icon: Store,
    color: "purple",
    description:
      "Become a Volterra franchise partner and expand EV charging in your region.",
    points: [
      "Business opportunity",
      "Marketing support",
      "Training provided",
    ],
  },

  {
    no: "06",
    title: "Charge Point Operator (CPO)",
    icon: BatteryCharging,
    color: "blue",
    description:
      "Operate and manage public charging stations with centralized monitoring and billing.",
    points: [
      "Remote monitoring",
      "User management",
      "Revenue tracking",
    ],
  },

  {
    no: "07",
    title: "Charging as a Service",
    icon: CloudLightning,
    color: "blue",
    description:
      "Subscription-based EV charging solutions with minimal upfront investment.",
    points: [
      "Pay-as-you-grow",
      "Cloud platform",
      "Maintenance included",
    ],
  },
];

export function Solutions() {

  return (

<section
id="solutions"
className="
relative
overflow-hidden
bg-[#F8FAFC]
py-32
"
>

{/* Green Glow */}

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

className="text-center"

>

<div
   className="
            inline-flex
            items-center
            rounded-full
            border
            border-lime-500/20
            bg-lime-500/10
            px-3
            py-1
            text-xs
            font-semibold
            tracking-widest
            uppercase
            text-lime-600
            "
>

Business Solutions

</div>


<h2
className="
  mt-4
            text-4xl
            lg:text-5xl
            font-black
            leading-tight
            text-slate-900
"
>

Flexible EV Charging {" "}

<span className="text-lime-600">

 Business Models

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

Whether you're an investor, property owner, enterprise or entrepreneur,
Volterra offers flexible business models designed to maximize value and accelerate EV charging adoption.

</p>

</motion.div>


          {/* Features */}

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((solution, index) => {

    const Icon = solution.icon;

  return (
    <motion.div
      key={solution.title}
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
          {solution.no}
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
        mt-3
        text-xl
        font-bold
        text-slate-900
        "
      >
       {solution.title}
      </h3>

      {/* Description */}

      <p
        className="
        mt-3
        leading-7
        text-slate-600
        "
      >
        {solution.description}
      </p>

      {/* Divider */}

      <div className="my-6 h-px bg-slate-200 " />

      {/* Footer */}

      <button
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

      </button>

    </motion.div>
  );
})}

          </div>

{/* ======================================== */}
{/* CTA */}
{/* ======================================== */}

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
    grid
    items-center
    gap-10
    lg:grid-cols-[1fr_auto]
    "
  >

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

        Find Your Business Model

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

        Let's Build a Profitable

        <span className="text-lime-400">

          {" "}EV Charging Business

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

        Whether you're an investor, property owner,
        entrepreneur or enterprise, Volterra has a
        flexible business model designed to help you
        succeed in the growing EV charging ecosystem.

      </p>

    </div>

    <button
      className="
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
      hover:scale-105
      hover:shadow-[0_20px_50px_rgba(132,204,22,.45)]
      "
    >

      Talk to Our Experts

    </button>

  </div>

</motion.div>

</div>

</section>

);

}