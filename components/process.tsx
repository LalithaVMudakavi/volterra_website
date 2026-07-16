
"use client";

import { motion } from "framer-motion";

import {
  MessageCircle,
  MapPinned,
  FileText,
  CircuitBoard,
  Wrench,
  ShieldCheck,
  Zap,
  Headphones,
  Leaf,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Discuss your EV charging requirements and business objectives.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Site Survey",
    description:
      "Technical inspection and electrical infrastructure assessment.",
    icon: MapPinned,
  },
  {
    number: "03",
    title: "Proposal",
    description:
      "Customized commercial proposal with project scope and pricing.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Electrical Design",
    description:
      "Prepare optimized layouts and complete electrical planning.",
    icon: CircuitBoard,
  },
  {
    number: "05",
    title: "Installation",
    description:
      "Professional installation and commissioning by certified engineers.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "Testing",
    description:
      "Quality inspection, testing and compliance verification.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Go Live",
    description:
      "Activate chargers and integrate with the CMS platform.",
    icon: Zap,
  },
  {
    number: "08",
    title: "AMC & Support",
    description:
      "24×7 monitoring, preventive maintenance and customer support.",
    icon: Headphones,
  },
];

export function Process() {
  return (

<section
id="process"
className="
relative
overflow-hidden
bg-white
py-28
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
 -mt-10
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
gap-4
text-lime-600
"
>

<div className="h-px w-12 bg-lime-500"/>

<p
className="
text-sm
font-bold
uppercase
tracking-[4px]
"
>

OUR PROCESS

</p>

<div className="h-px w-12 bg-lime-500"/>

</div>

<h2
className="
mt-3
text-4xl
lg:text-5xl
font-black
leading-tight
text-slate-900
"
>

Powering Your Journey,

<span className="text-lime-600">

 Together

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

A simple, transparent 8-step implementation process
designed to deliver reliable EV charging infrastructure
for homes, businesses and public networks.

</p>

</motion.div>

{/* PART 2 WILL START HERE */}

{/* ========================================= */}
{/* TOP PROCESS ROW */}
{/* ========================================= */}

<div className="relative mt-16">

  {/* Connector Line */}

  <div
    className="
    absolute
    left-[12%]
    right-[12%]
    top-14
    h-[2px]
    bg-slate-300
    "
  />

  <div className="grid grid-cols-4 gap-12">

    {processSteps.slice(0,4).map((step,index)=>{

      const Icon = step.icon;

      return(

        <motion.div

          key={step.number}

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
            delay:index*.15,
            duration:.6
          }}

          className="
          relative
          flex
          flex-col
          items-center
          text-center
          group
          "

        >

          {/* STEP NUMBER */}

          <div
            className="
            absolute
            left-12
            top-0
            z-20
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border-4
            border-white
            bg-lime-600
            text-lg
            font-bold
            text-white
            shadow-lg
            "
          >

            {step.number}

          </div>

          {/* ICON CIRCLE */}

          <div

            className="
            relative
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            border
            border-lime-200
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,.08)]
            transition-all
            duration-500
            group-hover:-translate-y-2
            group-hover:shadow-[0_30px_70px_rgba(132,204,22,.25)]
            "

          >

            {/* OUTER RING */}

            <div
              className="
              absolute
              inset-2
              rounded-full
              border-2
              border-lime-500/30
              "
            />

            {/* INNER ICON */}

            <Icon
              className="
              h-12
              w-12
              text-lime-600
              transition-all
              duration-500
              group-hover:scale-110
              "
            />

          </div>


          {/* TITLE */}

          <h3
            className="
            mt-3
            text-2xl
            font-bold
            text-slate-900
            "
          >

            {step.title}

          </h3>


          {/* DESCRIPTION */}

          <p
            className="
            mt-2
            max-w-3xl
            text-base
            leading-6
            text-slate-600
            "
          >

            {step.description}

          </p>

        </motion.div>

      )

    })}

  </div>

</div>

<div
  className="
  absolute
  right-[12%]
  top-[460px]
  hidden
  xl:flex
  flex-col
  items-center
  "
>

  {/* Vertical Line */}

  <div
    className="
    w-[2px]
    h-[40px]
    bg-slate-300
    "
  />

  {/* Arrow */}

  <div
    className="
    h-3
    w-3
    rotate-45
    border-r-2
    border-b-2
    border-slate-300
    -mt-1
    "
  />

</div>


{/* ========================================= */}
{/* BOTTOM PROCESS ROW */}
{/* ========================================= */}

<div className="mt-20">

  {/* Bottom Connector */}

<div
  className="
  absolute
  left-[12%]
  right-[12%]
  top-[580px]
  h-[1.5px]
  bg-slate-300
  "
/>

  <div className="grid grid-cols-4 gap-12">

    {processSteps
  .slice(4)
  .map((step, index) => {

      const Icon = step.icon;

      return(

        <motion.div

          key={step.number}

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
            delay:index*.15,
            duration:.6
          }}

          className="
          relative
          flex
          flex-col
          items-center
          text-center
          group
          "

        >

          {/* STEP NUMBER */}

          <div
            className="
            absolute
            left-12
            top-0
            z-20
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border-4
            border-white
            bg-lime-600
            text-lg
            font-bold
            text-white
            shadow-lg
            "
          >

            {step.number}

          </div>

          {/* ICON */}

          <div
            className="
            relative
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            border
            border-lime-200
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,.08)]
            transition-all
            duration-500
            group-hover:-translate-y-2
            group-hover:shadow-[0_30px_70px_rgba(132,204,22,.25)]
            "
          >

            <div
              className="
              absolute
              inset-2
              rounded-full
              border-2
              border-lime-500/30
              "
            />

            <Icon
              className="
              h-12
              w-12
              text-lime-600
              transition-all
              duration-500
              group-hover:scale-110
              "
            />

          </div>


          {/* Title */}

          <h3
            className="
            mt-3
            text-2xl
            font-bold
            text-slate-900
            "
          >

            {step.title}

          </h3>


          {/* Description */}

          <p
            className="
            mt-2
            max-w-3xl
            text-base
            leading-6
            text-slate-600
            "
          >

            {step.description}

          </p>

        </motion.div>

      )

    })}

  </div>

</div>

{/* ========================================= */}
{/* CTA STRIP */}
{/* ========================================= */}

<motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.7,
    delay: 0.2,
  }}
  className="
  mt-18
  flex
  justify-center
  "
>

  <div
    className="
    flex
    items-center
    gap-3
    rounded-full
    border
    border-lime-200
    bg-white
    px-8
    py-3
    shadow-[0_20px_50px_rgba(0,0,0,.08)]
    "
  >

    {/* Icon */}

    <div
      className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      bg-lime-600
      text-white
      "
    >

      <Leaf className="h-5 w-5"/>

    </div>

    {/* Divider */}

    <div
      className="
      h-8
      w-px
      bg-slate-200
      "
    />

    {/* Text */}

    <p
      className="
      text-base
      text-slate-700
      "
    >

      Reliable Solutions.

      <span className="font-semibold">

        {" "}Expert Support.

      </span>

      <span className="font-bold text-lime-600">

        {" "}A Greener Tomorrow.

      </span>

    </p>

  </div>

</motion.div>

{/* ========================================= */}
{/* BUTTON */}
{/* ========================================= */}

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8,
delay:.3
}}

className="
mt-8
flex
justify-center
"

>

<button
className="
rounded-2xl
bg-gradient-to-r
from-lime-500
to-green-600
px-6
py-3
text-base
font-semibold
text-white
shadow-[0_20px_50px_rgba(132,204,22,.35)]
transition-all
duration-300
hover:-translate-y-1
hover:scale-105
hover:shadow-[0_30px_60px_rgba(132,204,22,.45)]
cursor-pointer
"
>

Book Free Consultation

</button>

</motion.div>

</div>

</section>

  );

}