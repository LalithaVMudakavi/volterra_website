// "use client";

// import { AnimatePresence, motion, type Variants } from "framer-motion";

// import {
//   ArrowRight,
//   Zap,
//   ShieldCheck,
//   Leaf,
//   Network,
//   BatteryCharging,
//   Cpu,
// } from "lucide-react";
// import { useRouter } from "next/navigation";

// export function Hero() {
//     const router = useRouter()

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.18,
//         delayChildren: 0.3,
//       },
//     },
//   };

// const itemVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.25, 0.1, 0.25, 1],
//     },
//   },
// };

//   return (
//     <section  id="hero" className="relative h-screen overflow-hidden">

//       {/* ================= BACKGROUND ================= */}
//       <div
// className="
// absolute
// top-0
// left-0
// right-0
// h-48
// bg-linear-to-b
// from-black/30
// to-transparent
// "
// />

//    <div
//   className="
//   absolute
//   inset-0
//   bg-cover
//   bg-no-repeat
//   scale-[1.08]
//   "
//   style={{
//     backgroundImage: "url('/images/hero_image.png')",
//     backgroundPosition: "72% center",
//   }}
// />

//       {/* Dark Overlay */}

// <div className="absolute inset-0 bg-black/30" />



// <div
// className="
// absolute
// inset-0
// "
// />

// <div
// className="
// absolute
// top-0
// left-1/2
// -translate-x-1/2
// w-225
// h-87.5
// bg-white/5
// blur-[120px]
// rounded-full
// "
// />
//       {/* Left Gradient */}

//       <div
// className="
// absolute
// inset-0
// bg-linear-to-r
// from-[#08111d]/88
// via-[#08111d]/45
// to-transparent
// "
// />

//       {/* ================= CONTENT ================= */}
//       <div
//   className="
//   absolute
//   left-0
//   top-0
//   bottom-0
//   w-[55%]
//   bg-linear-to-r
//   from-[#08111d]/35
//   to-transparent
//   backdrop-blur-[2px]
//   "
// />

//       <div className="relative z-20 max-w-[1750px] mx-auto h-full px-8 lg:px-16">

//         <div className="flex h-full items-center">

//           {/* LEFT CONTENT */}

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="max-w-190"
//           >

//             {/* Badge */}

//             <motion.div variants={itemVariants}>

//               <div
//                 className="
//                 inline-flex
//                 items-center
//                 gap-3
//                 rounded-full
//                 border
//                 border-white/15
//                 bg-white/10
//                 backdrop-blur-xl
//                 px-6
//                 py-2
//                 shadow-xl
//                 mt-16
//                 "
//               >

//                 <span className="relative flex h-3 w-3">

//                   <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75 animate-ping" />

//                   <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-400" />

//                 </span>

//                 <span className="text-white text-xs font-medium tracking-wide">

                  
// India's Trusted EV Charging Infrastructure Partner

//                 </span>

//               </div>

//             </motion.div>

//             {/* Heading */}

//             <motion.h1
//               variants={itemVariants}
//               className="
//               mt-6
//               text-white
//               text-4xl
//               lg:text-5xl
//               xl:text-5xl
//               font-black
//               leading-[0.98]
//               tracking-tight
//               "
//             >

//            Powering the Future of


//               <span className="mt-2 block bg-linear-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">

//                 Sustainable Mobility

//               </span>

//             </motion.h1>

//             {/* Description */}

//             <motion.p
//               variants={itemVariants}
//               className="
//               mt-6
//               max-w-155
//               text-base
//               md:text-lg
//               leading-7
//               text-gray-300
//               "
//             >
//            Our mission is to simplify EV charging through intelligent, accessible solutions that power a cleaner and more sustainable future. Through end-to-end EV charging solutions for homes, businesses, fleet operators, and public charging networks, we are building a smarter, greener, and more connected transportation ecosystem.

//             </motion.p>

//             {/* Buttons */}

//             <motion.div
//               variants={itemVariants}
//               className="mt-10 flex flex-wrap gap-5"
//             >

//               {/* Primary */}

//               <button
//                onClick={() => router.push('/products')}
//                 className="
//                 group
//                 h-11
//                 rounded-2xl
//                 bg-lime-500
//                 px-6
//                 font-semibold
//                 text-white
//                 shadow-lg
//                 shadow-lime-500/20
//                 transition-all
//                 duration-300
//                 hover:scale-105
//                 hover:bg-lime-400
//                 cursor-pointer
//                 "
//               >

//                 <span className="flex items-center gap-3">

//                   Explore Products
//                   <ArrowRight
//                     size={18}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />

//                 </span>

//               </button>

//               {/* Secondary */}

//               <button
//                 onClick={() => router.push('/about')}
//                 className="
//                 h-11
//                 rounded-2xl
//                 border
//                 border-white/20
//                 bg-white/10
//                 backdrop-blur-xl
//                 px-6
//                 font-semibold
//                 text-white
//                 transition-all
//                 duration-300
//                 hover:bg-white/20
//                 hover:border-white/40
//                 cursor-pointer
//                 "
//               >
//               Learn More

//               </button>

//             </motion.div>

//             <motion.div
//   variants={itemVariants}
//   className="
//     mt-10
//     inline-flex
//     overflow-hidden
//     rounded-[28px]
//     border
//     border-white/10
//     bg-white/8
//     backdrop-blur-2xl
//     shadow-[0_20px_60px_rgba(0,0,0,0.25)]
//   "
// >
//   {[
// {
// icon:<Cpu />,
// value:"AI",
// label:"Powered Platform",
// },
// {
// icon:<BatteryCharging />,
// value:"AC & DC",
// label:"Smart Chargers",
// },
// {
// icon:<Network />,
// value:"CMS",
// label:"Cloud Management",
// },
// {
// icon:<Leaf />,
// value:"Green",
// label:"Energy Ready",
// }
// ].map((item, index) => (
//     <div
//       key={item.label}
//       className={`
//         group
//         relative
//         flex
//         w-50
//         flex-col
//         items-center
//         justify-center
//         px-6
//         py-2
//         transition-all
//         duration-300
//         hover:bg-white/5
//         ${index !== 3 ? "border-r border-white/10" : ""}
//       `}
//     >
//       {/* Glow */}
//       <div className="absolute inset-0 bg-linear-to-b from-lime-400/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//       {/* Icon */}
//       <div
//         className="
//           relative
//           flex
//           h-9
//           w-9
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-lime-400/20
//           bg-lime-400/10
//           text-lime-400
//           transition-all
//           duration-300
//           group-hover:scale-110
//           group-hover:bg-lime-400
//           group-hover:text-black
//         "
//       >
//         {item.icon}
//       </div>

//       {/* Value */}
//       <h3 className="mt-1 text-lg font-bold text-white">
//         {item.value}
//       </h3>

//       {/* Label */}
//       <p className="text-center text-sm text-gray-300 leading-5">
//         {item.label}
//       </p>
//     </div>
//   ))}
// </motion.div>

//                         {/* ================= RIGHT FEATURE CARDS ================= */}

//             <div
//               className="
//               absolute
//               right-4
//               xl:right-12
//               2xl:right-8
//               top-[54%]
//               -translate-y-1/2
//               hidden
//               lg:flex
//               flex-col
//               gap-5
//               "
//             >
//               {[
//                 {
//                   icon: <Zap size={24} />,
//                   title: "Ultra Fast Charging",
//                   description: "0–80% in just 30 minutes",
//                 },
//                 {
//                   icon: <ShieldCheck size={24} />,
//                   title: "Safe & Reliable",
//                   description: "Advanced protection at every step",
//                 },
//                 {
//                   icon: <Leaf size={24} />,
//                   title: "Sustainable Energy",
//                   description: "100% green and renewable solutions",
//                 },
//                 {
//                   icon: <Network size={24} />,
//                   title: "Smart Network",
//                   description: "AI powered monitoring & uptime",
//                 },
//               ].map((card, index) => (
//                 <motion.div
//                   key={card.title}
//                   initial={{
//                     opacity: 0,
//                     x: 60,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   transition={{
//                     delay: 0.8 + index * 0.15,
//                     duration: 0.7,
//                   }}
//                   whileHover={{
//                     scale: 1.03,
//                     y: -4,
//                   }}
//                   className="
//                   group
//                   w-77.5
//                   rounded-[28px]
//                   border
//                   border-white/15
//                   bg-white/10
//                   backdrop-blur-xl
//                   shadow-[0_15px_45px_rgba(0,0,0,.18)]
//                   p-4
//                   transition-all
//                   duration-300
//                   hover:border-lime-400/40
//                   hover:bg-white/15
//                   "
//                 >
//                   <div className="flex items-start gap-3">

//                     {/* Icon */}

//                     <div
//                       className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       rounded-2xl
//                       bg-lime-400/10
//                       text-lime-400
//                       transition-all
//                       duration-300
//                       group-hover:bg-lime-400
//                       group-hover:text-black
//                       "
//                     >
//                       {card.icon}
//                     </div>

//                     {/* Content */}

//                     <div className="flex-1">

//                       <h3
//                         className="
//                         text-base
//                         font-semibold
//                         text-white
//                         "
//                       >
//                         {card.title}
//                       </h3>

//                       <p
//                         className="
//                         leading-5
//                         text-sm
//                         text-gray-300
//                         "
//                       >
//                         {card.description}
//                       </p>

//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//           </motion.div>

//         </div>

//       </div>

//       <div
// className="
// absolute
// left-1/2
// bottom-0
// -translate-x-1/2
// w-225
// h-55
// bg-lime-400/10
// blur-[140px]
// rounded-full
// pointer-events-none
// "
// />

//     </section>

//   );
// }



'use client';

import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Leaf,
  Network,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Hero() {
  const router = useRouter();

  /* ============================================================
      ANIMATIONS
  ============================================================ */

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* ============================================================
      FEATURE CARDS
  ============================================================ */

  const features = [
    {
      icon: <Zap size={20} />,
      title: 'Ultra Fast Charging',
      description: '0–80% charging in less time',
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Safe & Reliable',
      description: 'Advanced protection technology',
    },
    {
      icon: <Leaf size={20} />,
      title: 'Sustainable Energy',
      description: 'Built for a cleaner tomorrow',
    },
    {
      icon: <Network size={20} />,
      title: 'Smart Network',
      description: 'Connected charging ecosystem',
    },
  ];

  return (
    <section
      id="hero"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#06111c]

        min-h-[100svh]

        lg:h-[100svh]
        lg:min-h-[740px]
      "
    >
      {/* ============================================================
          BACKGROUND IMAGE
      ============================================================ */}

      <div
        className="
          absolute
          inset-0

          bg-cover
          bg-no-repeat

          [background-position:62%_center]

          sm:[background-position:64%_center]

          md:[background-position:66%_center]

          lg:[background-position:center]

          xl:[background-position:center]
        "
        style={{
          backgroundImage: "url('/images/image.png')",
        }}
      />

      {/* ============================================================
          LEFT DARK GRADIENT

          Keeps the text readable while allowing the image
          to remain fully visible on the right.
      ============================================================ */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r

          from-[#06111c]/95
          via-[#06111c]/78
          via-[42%]
          to-transparent

          lg:from-[#06111c]/92
          lg:via-[#06111c]/60
          lg:via-[42%]

          xl:from-[#06111c]/88
          xl:via-[#06111c]/48
        "
      />

      {/* ============================================================
          BOTTOM GRADIENT

          Helps feature cards stand out without hiding image.
      ============================================================ */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          bottom-0

          h-[45%]

          bg-gradient-to-t

          from-[#06111c]/85
          via-[#06111c]/35
          to-transparent
        "
      />

      {/* ============================================================
          MOBILE OVERLAY
      ============================================================ */}

      <div
        className="
          absolute
          inset-0

          bg-[#06111c]/35

          lg:hidden
        "
      />

      {/* ============================================================
          TOP NAVIGATION GRADIENT
      ============================================================ */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          top-0

          z-10

          h-40

          bg-gradient-to-b

          from-black/45
          to-transparent
        "
      />

      {/* ============================================================
          GREEN AMBIENT GLOW
      ============================================================ */}

      <div
        className="
          pointer-events-none

          absolute

          -left-40
          top-[20%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-lime-400/[0.05]

          blur-[140px]
        "
      />

      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}

      <div
        className="
          relative
          z-20

          mx-auto

          flex
          min-h-[100svh]

          w-full
          max-w-[1800px]

          flex-col

          px-5
          pt-24
          pb-8

          sm:px-8
          sm:pt-28

          md:px-10
          md:pt-32

          lg:h-full
          lg:px-16
          lg:pt-0
          lg:pb-0

          xl:px-20
        "
      >
        {/* ============================================================
            MAIN CONTENT
        ============================================================ */}

        <div
          className="
            flex
            flex-1
            items-center

            pb-10

            lg:pb-36
          "
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              w-full

              max-w-[650px]

              lg:max-w-[680px]

              xl:max-w-[720px]
            "
          >
            {/* ========================================================
                BADGE
            ======================================================== */}

            <motion.div variants={itemVariants}>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                    sm:mt-8

                md:mt-10

                lg:mt-12

                xl:mt-16
                  rounded-full

                  border
                  border-white/15

                  bg-[#081724]/65

                  px-4
                  py-2.5

                  shadow-lg

                  backdrop-blur-xl

                  sm:px-5
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inline-flex

                      h-full
                      w-full

                      animate-ping

                      rounded-full

                      bg-lime-400
                      opacity-70
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex

                      h-2.5
                      w-2.5

                      rounded-full

                      bg-lime-400
                    "
                  />
                </span>

                <span
                  className="
                    text-[10px]

                    font-medium
                    tracking-wide

                    text-white

                    sm:text-xs
                  "
                >
                  India's Trusted EV Charging Infrastructure Partner
                </span>
              </div>
            </motion.div>

            {/* ========================================================
                HEADING
            ======================================================== */}

            <motion.h1
              variants={itemVariants}
              className="
                mt-6

                text-3xl

                font-black

                leading-[0.98]
                tracking-tight

                text-white

                sm:text-5xl

                md:text-6xl

                lg:text-6xl

                xl:text-6xl
              "
            >
              Powering the Future of

              <span
                className="
                  mt-2
                  block

                  bg-gradient-to-r

                  from-lime-300
                  via-lime-400
                  to-lime-500

                  bg-clip-text

                  text-transparent
                "
              >
                Sustainable Mobility
              </span>
            </motion.h1>

            {/* ========================================================
                DESCRIPTION
            ======================================================== */}

            <motion.p
              variants={itemVariants}
              className="
                mt-6

                max-w-[620px]

                text-sm

                leading-7

                text-white
                sm:text-base

                md:text-lg
                md:leading-8

                lg:text-base
                lg:leading-7

                xl:text-[17px]
                xl:leading-8
              "
            >
              Our mission is to simplify EV charging through intelligent,
              accessible solutions that power a cleaner and more sustainable
              future. From homes and businesses to fleets and public charging
              networks, we are building a smarter and more connected
              transportation ecosystem.
            </motion.p>

            {/* ========================================================
                BUTTONS
            ======================================================== */}

            <motion.div
              variants={itemVariants}
              className="
                mt-8

                flex
                flex-col

                gap-3

                sm:flex-row
              
                lg:mt-9
              "
            >
              {/* Explore Products */}

              <button
                onClick={() => router.push('/products')}
                className="
                  group

                  flex

                  h-12
                  w-full

                  items-center
                  justify-center

                  gap-3

                  rounded-xl

                  bg-lime-400

                  px-7

                  font-semibold

                  text-[#07111c]

                  shadow-lg
                  shadow-lime-400/20

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-lime-300

                  sm:w-auto
                "
              >
                Explore Products

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* Learn More */}

              <button
                onClick={() => router.push('/about')}
                className="
                  flex

                  h-12
                  w-full

                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-white/25

                  bg-[#07131f]/50

                  px-7

                  font-semibold

                  text-white

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:border-white/45
                  hover:bg-white/15

                  sm:w-auto
                "
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* ============================================================
            FEATURE CARDS

            Reduced width so the floating message button
            does not collide with the last card.
        ============================================================ */}

        <div
          className="
            relative

            z-30
             
            mx-auto

            w-full

            max-w-[1280px]

            pb-2
           
            lg:absolute
            lg:bottom-7
            lg:left-1/2

            lg:-translate-x-1/2
          "
        >
          <div
            className="
              grid

              grid-cols-1

              gap-3

              sm:grid-cols-2
              sm:gap-4

              lg:grid-cols-4
              lg:gap-4
            "
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.75 + index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group

                  min-h-[92px]
                  
                  rounded-[20px]

                  border
                  border-white/15
                  bg-white/10

                  px-4
                  py-4

                  shadow-[0_15px_40px_rgba(0,0,0,.28)]

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:border-lime-400/45
                  hover:bg-[#0b1b29]/90
                "
              >
                <div
                  className="
                    flex
                    h-full

                    items-center

                    gap-3
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex

                      h-11
                      w-11

                      shrink-0

                      items-center
                      justify-center

                      rounded-xl

                      bg-lime-400/10

                      text-lime-400

                      transition-all
                      duration-300

                      group-hover:bg-lime-400
                      group-hover:text-[#07111c]
                    "
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}

                  <div className="min-w-0">
                    <h3
                      className="
                        text-sm

                        font-semibold

                        text-white
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-1

                        text-xs

                        leading-5

                        text-gray-300
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          SUBTLE BOTTOM GREEN GLOW
      ============================================================ */}

      <div
        className="
          pointer-events-none

          absolute
          bottom-0
          left-1/2

          h-32
          w-[50%]

          -translate-x-1/2

          rounded-full

          bg-lime-400/[0.06]

          blur-[120px]
        "
      />
    </section>
  );
}