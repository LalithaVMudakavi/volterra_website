// "use client";

// import { motion } from "framer-motion";

// import {
//   MessageCircle,
//   MapPinned,
//   FileText,
//   CircuitBoard,
//   Wrench,
//   BadgeCheck,
//   Zap,
//   Headphones,
// } from "lucide-react";

// const processSteps = [
//   {
//     number: "01",
//     title: "Consultation",
//     description:
//       "Discuss your EV charging requirements and business objectives.",
//     icon: MessageCircle,
//   },
//   {
//     number: "02",
//     title: "Site Survey",
//     description:
//       "Technical inspection and electrical infrastructure assessment.",
//     icon: MapPinned,
//   },
//   {
//     number: "03",
//     title: "Proposal",
//     description:
//       "Customized commercial proposal with project scope and pricing.",
//     icon: FileText,
//   },
//   {
//     number: "04",
//     title: "Electrical Design",
//     description:
//       "Prepare optimized layouts and complete electrical planning.",
//     icon: CircuitBoard,
//   },
//   {
//     number: "05",
//     title: "Installation",
//     description:
//       "Professional installation and commissioning by certified engineers.",
//     icon: Wrench,
//   },
//   {
//     number: "06",
//     title: "Testing",
//     description:
//       "Quality inspection, testing and compliance verification.",
//     icon: BadgeCheck,
//   },
//   {
//     number: "07",
//     title: "Go Live",
//     description:
//       "Activate chargers and integrate with the CMS platform.",
//     icon: Zap,
//   },
//   {
//     number: "08",
//     title: "AMC & Support",
//     description:
//       "24×7 monitoring, preventive maintenance and customer support.",
//     icon: Headphones,
//   },
// ];

// export function Process() {
//   return (

// <section
// id="process"
// className="
// relative
// overflow-hidden
// bg-[#F8FAFC]
// py-26
// "
// >

// {/* ========================= */}
// {/* Background */}
// {/* ========================= */}

// <div
// className="
// absolute
// left-0
// top-0
// h-[550px]
// w-[550px]
// rounded-full
// bg-lime-500/10
// blur-[150px]
// "
// />

// <div
// className="
// absolute
// right-0
// bottom-0
// h-[550px]
// w-[550px]
// rounded-full
// bg-green-500/10
// blur-[150px]
// "
// />

// <div
// className="
// absolute
// inset-0
// opacity-[0.04]
// [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
// [background-size:70px_70px]
// "
// />

// {/* Floating Particles */}

// {[...Array(12)].map((_, i) => (

// <motion.div
// key={i}
// className="absolute rounded-full bg-lime-500/20"
// style={{
// width: Math.random() * 8 + 5,
// height: Math.random() * 8 + 5,
// left: `${Math.random() * 100}%`,
// top: `${Math.random() * 100}%`,
// }}
// animate={{
// y: [0, -25, 0],
// opacity: [.2, .8, .2],
// }}
// transition={{
// repeat: Infinity,
// duration: Math.random() * 6 + 6,
// delay: Math.random() * 4,
// }}
// />

// ))}

// <div
// className="
// relative
// z-10
// mx-auto
// max-w-[1500px]
// px-6
// lg:px-10
// "
// >

// {/* ========================= */}
// {/* Heading */}
// {/* ========================= */}

// <motion.div

// initial={{
// opacity:0,
// y:40
// }}

// whileInView={{
// opacity:1,
// y:0
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:.8
// }}

// className="text-center"

// >

// <div
// className="
// inline-flex
// items-center
// rounded-full
// border
// border-lime-500/20
// bg-lime-500/10
// px-3
// py-1
// text-xs
// font-semibold
// uppercase
// tracking-[4px]
// text-lime-600
// "
// >

// Our Process

// </div>

// <h2
// className="
// mt-4
// text-4xl
// lg:text-5xl
// font-black
// leading-tight
// text-slate-900
// "
// >

// From {" "}

// <span className="text-lime-600">

//  Planning {" "}

// </span>

// to {" "}

// <span className="text-lime-600">

//  Powering

// </span>

// </h2>

// <p className="
//     mx-auto
//     mt-3
//     max-w-4xl
//     text-lg
//     leading-7
//   text-slate-600
// "
// >

// Our streamlined implementation process ensures every EV charging
// project is delivered safely, efficiently and with complete
// transparency—from consultation to long-term maintenance.

// </p>

// </motion.div>

// {/* ========================================= */}
// {/* PROCESS INFOGRAPHIC */}
// {/* ========================================= */}

// <div className="relative mt-20">

//   {/* Center Glow */}

//   <div
//     className="
//     absolute
//     left-1/2
//     top-1/2
//     -translate-x-1/2
//     -translate-y-1/2
//     h-[420px]
//     w-[420px]
//     rounded-full
//     bg-lime-500/10
//     blur-[120px]
//     "
//   />

//   {/* Decorative Rings */}

//   <motion.div
//     animate={{ rotate: 360 }}
//     transition={{
//       duration: 35,
//       repeat: Infinity,
//       ease: "linear",
//     }}
//     className="
//     absolute
//     left-1/2
//     top-1/2
//     -translate-x-1/2
//     -translate-y-1/2
//     h-[380px]
//     w-[380px]
//     rounded-full
//     border
//     border-dashed
//     border-lime-500/20
//     "
//   />

//   <motion.div
//     animate={{ rotate: -360 }}
//     transition={{
//       duration: 45,
//       repeat: Infinity,
//       ease: "linear",
//     }}
//     className="
//     absolute
//     left-1/2
//     top-1/2
//     -translate-x-1/2
//     -translate-y-1/2
//     h-[300px]
//     w-[300px]
//     rounded-full
//     border
//     border-dashed
//     border-slate-300
//     "
//   />

//   {/* SVG Connector Lines */}

//   <svg
//     className="
//     absolute
//     inset-0
//     h-full
//     w-full
//     pointer-events-none
//     "
//     viewBox="0 0 1200 700"
//     preserveAspectRatio="none"
//   >

//     <path
//       d="M170 170
//          C280 170 340 220 470 250
//          L600 350"
//       stroke="#84cc16"
//       strokeWidth="3"
//       strokeDasharray="8 8"
//       fill="none"
//       opacity=".5"
//     />

//     <path
//       d="M1030 170
//          C920 170 860 220 730 250
//          L600 350"
//       stroke="#84cc16"
//       strokeWidth="3"
//       strokeDasharray="8 8"
//       fill="none"
//       opacity=".5"
//     />

//     <path
//       d="M170 530
//          C280 530 340 470 470 450
//          L600 350"
//       stroke="#84cc16"
//       strokeWidth="3"
//       strokeDasharray="8 8"
//       fill="none"
//       opacity=".5"
//     />

//     <path
//       d="M1030 530
//          C920 530 860 470 730 450
//          L600 350"
//       stroke="#84cc16"
//       strokeWidth="3"
//       strokeDasharray="8 8"
//       fill="none"
//       opacity=".5"
//     />

//   </svg>

//   {/* ========================================= */}
//   {/* CENTER CHARGER */}
//   {/* ========================================= */}

//   <motion.div
//     initial={{
//       opacity: 0,
//       scale: .8,
//     }}
//     whileInView={{
//       opacity: 1,
//       scale: 1,
//     }}
//     transition={{
//       duration: .8,
//     }}
//     viewport={{
//       once: true,
//     }}
//     className="
//     absolute
//     left-1/2
//     top-1/2
//     z-20
//     -translate-x-1/2
//     -translate-y-1/2
//     "
//   >

//     <div
//       className="
//       relative
//       flex
//       h-56
//       w-56
//       items-center
//       justify-center
//       rounded-full
//       border
//       border-lime-500/20
//       bg-white
//       shadow-[0_40px_80px_rgba(132,204,22,.18)]
//       "
//     >

//       {/* Pulse */}

//       <motion.div
//         animate={{
//           scale: [1, 1.15, 1],
//           opacity: [.4, .15, .4],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 3,
//         }}
//         className="
//         absolute
//         inset-0
//         rounded-full
//         bg-lime-500/20
//         "
//       />

//       {/* Charger */}

//       <div
//         className="
//         relative
//         z-10
//         flex
//         flex-col
//         items-center
//         "
//       >

//         <img
//           src="/images/process-charger.png"
//           alt="Volterra Charger"
//           className="
//           h-28
//           object-contain
//           "
//         />

//         <h3
//           className="
//           mt-4
//           text-xl
//           font-black
//           text-slate-900
//           "
//         >
//           VOLTERRA
//         </h3>

//         <p
//           className="
//           mt-1
//           text-center
//           text-sm
//           text-slate-500
//           "
//         >
//           EV Charging Journey
//         </p>

//       </div>

//     </div>

//   </motion.div>

//   {/* ========================================= */}
//   {/* TOP ROW */}
//   {/* ========================================= */}

//   <div
//     className="
//     grid
//     grid-cols-4
//     gap-12
//     pb-72
//     "
//   >
//     {processSteps.slice(0, 4).map((step, index) => {
//   const Icon = step.icon;

//   return (
//     <motion.div
//       key={step.number}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.15,
//       }}
//       whileHover={{
//         y: -10,
//       }}
//       className="
//       relative
//       group
//       "
//     >

//       {/* Step Number */}

//       <div
//         className="
//         absolute
//         -top-5
//         left-1/2
//         -translate-x-1/2
//         z-20
//         flex
//         h-12
//         w-12
//         items-center
//         justify-center
//         rounded-full
//         bg-lime-500
//         text-white
//         font-black
//         shadow-xl
//         "
//       >
//         {step.number}
//       </div>

//       {/* Card */}

//       <div
//         className="
//         rounded-[28px]
//         border
//         border-slate-200
//         bg-white
//         p-8
//         pt-10
//         text-center
//         shadow-[0_20px_60px_rgba(0,0,0,.06)]
//         transition-all
//         duration-500
//         group-hover:border-lime-400
//         group-hover:shadow-[0_30px_70px_rgba(132,204,22,.18)]
//         "
//       >

//         {/* Icon */}

//         <div
//           className="
//           mx-auto
//           flex
//           h-20
//           w-20
//           items-center
//           justify-center
//           rounded-full
//           bg-lime-500/10
//           transition-all
//           duration-500
//           group-hover:bg-lime-500
//           "
//         >

//           <Icon
//             className="
//             h-10
//             w-10
//             text-lime-600
//             transition-all
//             duration-500
//             group-hover:text-white
//             "
//           />

//         </div>

//         {/* Title */}

//         <h3
//           className="
//           mt-6
//           text-2xl
//           font-bold
//           text-slate-900
//           "
//         >
//           {step.title}
//         </h3>

//         {/* Description */}

//         <p
//           className="
//           mt-4
//           text-[15px]
//           leading-7
//           text-slate-600
//           "
//         >
//           {step.description}
//         </p>

//       </div>

//       {/* Connector Dot */}

//       <div
//         className="
//         absolute
//         -bottom-12
//         left-1/2
//         -translate-x-1/2
//         flex
//         h-6
//         w-6
//         items-center
//         justify-center
//         rounded-full
//         border-4
//         border-white
//         bg-lime-500
//         shadow-lg
//         "
//       />

//     </motion.div>
//   );
// })}
//   </div>

//   {/* ========================================= */}
// {/* BOTTOM ROW */}
// {/* ========================================= */}

// <div
//   className="
//   grid
//   grid-cols-4
//   gap-12
//   pt-72
//   "
// >

//   {processSteps.slice(4).map((step, index) => {

//     const Icon = step.icon;

//     return (

//       <motion.div
//         key={step.number}
//         initial={{
//           opacity:0,
//           y:50
//         }}
//         whileInView={{
//           opacity:1,
//           y:0
//         }}
//         viewport={{
//           once:true
//         }}
//         transition={{
//           duration:.6,
//           delay:index*.15
//         }}
//         whileHover={{
//           y:-10
//         }}
//         className="
//         relative
//         group
//         "
//       >

//         {/* Connector Dot */}

//         <div
//           className="
//           absolute
//           -top-12
//           left-1/2
//           -translate-x-1/2
//           flex
//           h-6
//           w-6
//           items-center
//           justify-center
//           rounded-full
//           border-4
//           border-white
//           bg-lime-500
//           shadow-lg
//           "
//         />

//         {/* Card */}

//         <div
//           className="
//           rounded-[28px]
//           border
//           border-slate-200
//           bg-white
//           p-8
//           text-center
//           shadow-[0_20px_60px_rgba(0,0,0,.06)]
//           transition-all
//           duration-500
//           group-hover:border-lime-400
//           group-hover:shadow-[0_30px_70px_rgba(132,204,22,.18)]
//           "
//         >

//           {/* Icon */}

//           <div
//             className="
//             mx-auto
//             flex
//             h-20
//             w-20
//             items-center
//             justify-center
//             rounded-full
//             bg-lime-500/10
//             transition-all
//             duration-500
//             group-hover:bg-lime-500
//             "
//           >

//             <Icon
//               className="
//               h-10
//               w-10
//               text-lime-600
//               transition-all
//               duration-500
//               group-hover:text-white
//               "
//             />

//           </div>

//           {/* Step */}

//           <div
//             className="
//             mt-6
//             inline-flex
//             rounded-full
//             bg-lime-500/10
//             px-4
//             py-1
//             text-sm
//             font-bold
//             text-lime-600
//             "
//           >

//             STEP {step.number}

//           </div>

//           {/* Title */}

//           <h3
//             className="
//             mt-5
//             text-2xl
//             font-bold
//             text-slate-900
//             "
//           >

//             {step.title}

//           </h3>

//           {/* Description */}

//           <p
//             className="
//             mt-4
//             text-[15px]
//             leading-7
//             text-slate-600
//             "
//           >

//             {step.description}

//           </p>

//         </div>

//       </motion.div>

//     );

//   })}

// </div>  

// </div>  

// </div>   

// </section>

//   );
// }


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
  .reverse()
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