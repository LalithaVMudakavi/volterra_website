
// "use client";

// import { motion } from "framer-motion";
// import {
//   Building2,
//   Cpu,
//   Handshake,
//   Leaf,
//   MonitorSmartphone,
//   Target,
//   Eye,
//   Brain,
//   Network,
//   Radar,
//   Landmark,
//   Route,
//   Building,
//   MapPinned,
//   Store,
//   Truck,
//   Hotel,
//   Home,
//   ShieldCheck,
//   Zap,
// } from "lucide-react";
// import { useRouter } from "next/navigation";

// export function About() {
//    const router = useRouter();
   
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#F8FAFC] py-28"
//     >
//       {/* Background Glow */}

//       <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-lime-400/10 blur-[140px]" />

//       <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-slate-300/20 blur-[150px]" />

//       <div className="relative mx-auto max-w-375 px-6 lg:px-12">

//         {/* Section Header */}

//        <div className="relative overflow-hidden rounded-[36px] shadow-2xl mt-3">

//     <img
//         src="/images/about.png"
//         className="w-full h-130 object-cover"
//     />

// </div>

// <div className="mx-auto max-w-5xl -mt-22 relative z-10">

//     <div className="rounded-[32px] bg-white p-8 shadow-2xl">

//         <span className="text-2xl text-lime-600  font-black tracking-widest uppercase">
//             About Volterra Energy
//         </span>

//         {/* <h2 className="mt-3 text-5xl font-black">
//             Powering Intelligent
//             <span className="text-lime-600"> Mobility</span>
//         </h2> */}

//         <p className="mt-3 text-lg leading-8 text-slate-600">
//           Volterra Energy, a brand of Vayutattva Ventures LLP, is a clean-energy and electric mobility infrastructure company committed to accelerating India’s transition toward sustainable transportation.

//         </p>

//         <p className="mt-3 text-lg leading-8 text-slate-600">
//           We deliver intelligent, reliable, and scalable EV charging solutions for residential communities, corporate workplaces, commercial properties, hotels and restaurants, malls and supermarkets, highways, fleet operators, real estate developments, and public charging networks.

//         </p>

//     </div>

// </div>


//        {/* Main Content */}

// <div className="mx-auto mt-12 max-w-7xl">

//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//     className="space-y-10"
//   >


//    {/* Section 1 */}

// <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
//   <div className="mb-4 flex items-center gap-3">
//     <div className="h-10 w-1 rounded-full bg-lime-500"></div>

//     <h3 className="text-2xl font-bold text-slate-900">
//       Comprehensive EV Charging Solutions
//     </h3>
//   </div>

//   <p className="text-lg leading-8 text-slate-600">
//     <strong>VOLTERRA Energy</strong> provides a comprehensive portfolio of
//     intelligent AC and DC EV charging solutions, supporting everything from
//     convenient destination charging to high-speed DC fast-charging corridors.
//   </p>

//   <p className="mt-5 text-lg leading-8 text-slate-600">
//     Our solutions are designed for <strong>residential communities, real
//     estate developments, corporate workplaces, hospitality venues, retail
//     destinations, fleet operators, highways, and public charging
//     networks</strong>, delivering reliable and scalable infrastructure for
//     every charging ecosystem.
//   </p>

//   <p className="mt-5 text-lg leading-8 text-slate-600">
//     Whether for homes, businesses, or public infrastructure, we enable
//     seamless EV charging experiences through future-ready technology,
//     intelligent hardware, and integrated software platforms.
//   </p>
// </div>

// {/* Section 2 */}

// <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
//   <div className="mb-4 flex items-center gap-3">
//     <div className="h-10 w-1 rounded-full bg-lime-500"></div>

//     <h3 className="text-2xl font-bold text-slate-900">
//       End-to-End Deployment & Smart Infrastructure
//     </h3>
//   </div>

//   <p className="text-lg leading-8 text-slate-600">
//     We manage the complete lifecycle of EV charging infrastructure—from
//     <strong> site assessment, feasibility analysis, and solution design{" "}</strong>
//     to <strong>installation, commissioning, software integration, and ongoing
//     operations</strong>, ensuring a seamless experience for every client.
//   </p>

//   <p className="mt-5 text-lg leading-8 text-slate-600">
//     Our intelligent platform enables user authentication, billing, energy
//     monitoring, remote diagnostics, and performance optimization while helping
//     businesses maximize uptime and operational efficiency.
//   </p>

//   <p className="mt-5 text-lg leading-8 text-slate-600">
//     By deploying accessible, connected, and scalable charging infrastructure,
//     VOLTERRA Energy is building a smarter, greener, and future-ready
//     transportation ecosystem that grows alongside India's accelerating EV
//     adoption.
//   </p>
// </div>
//   </motion.div>

// </div>



//         {/* ========================================= */}
//         {/* VISION & MISSION */}
//         {/* ========================================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-28"
//         >
//           {/* Section Title */}

//           <div className="text-center mb-10">

//           <div
//               className="
//               inline-flex
//               items-center
//               rounded-full
//               border
//               border-lime-500/20
//               bg-lime-500
//               px-4
//               py-2
//               text-xs
//               font-semibold
//               uppercase
//               tracking-[3px]
//               text-white
//               shadow-[0_20px_50px_rgba(132,204,22,.35)]
//               "
//             >
//               Our Purpose
//             </div>

//             <h2
//               className="
//                mt-4
//             text-4xl
//             lg:text-5xl
//               font-black
//               text-slate-900
//               "
//             >
//               Vision &
//               <span className="text-lime-600"> Mission</span>
//             </h2>

//             <p
//               className="
//               mx-auto
//               mt-3
//               max-w-3xl
//               text-lg
//               leading-7
//               text-slate-600
//               "
//             >
//               Every charger we install, every software platform we build,
//               and every partnership we create moves India one step closer
//               to a sustainable electric future.
//             </p>

//           </div>

//           {/* Cards */}

//           <div className="grid gap-10 xl:grid-cols-2 items-stretch">

//             {/* Vision */}

//          <motion.div
//   whileHover={{
//     y: -8,
//     scale: 1.02,
//   }}
//   transition={{ duration: 0.3 }}
//   className="
//     relative
//     overflow-hidden
//     rounded-[32px]
//     bg-slate-900
//     p-10
//     text-white
//     shadow-[0_20px_60px_rgba(0,0,0,.15)]
//     border
//     border-slate-800
//     transition-all
//     duration-300
//     hover:border-lime-500/40
//   "
// >
//   {/* Glow */}
//   <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lime-500/20 blur-[120px]" />

//   {/* Icon */}
//   <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-500/15">
//     <Eye className="h-7 w-7 text-lime-400" />
//   </div>

//   <span className="relative z-10 mt-6 inline-block text-sm font-semibold uppercase tracking-[4px] text-lime-400">
//     Our Vision
//   </span>

//  <h3 className="relative z-10 mt-3 text-3xl font-black">
//   Building the Future of Intelligent Mobility
// </h3>

// <p className="relative z-10 mt-6 text-lg leading-8 text-slate-300">
//   To become India's most trusted EV charging infrastructure company by
//   building an intelligent, connected, and sustainable charging ecosystem
//   that accelerates the transition to clean mobility.
// </p>
// </motion.div>

//             {/* Mission */}
// <motion.div
//   whileHover={{
//     y: -8,
//     scale: 1.02,
//   }}
//   transition={{ duration: 0.3 }}
//   className="
//   relative
//     overflow-hidden
//     rounded-[32px]
//     border
//     border-slate-200
//     bg-white
//     p-10
//     shadow-[0_20px_60px_rgba(0,0,0,.08)]
//     hover:border-lime-400
//     transition-all
//   "
// >
//   <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-lime-500/20 blur-[120px]" />

//   <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-500/15">
//     <Target className="h-7 w-7 text-lime-400" />
//   </div>

//   <span className="relative z-10 mt-6 inline-block text-sm font-semibold uppercase tracking-[4px] text-lime-400">
//     Our Mission
//   </span>

//   <h3 className="relative z-10 mt-3 text-3xl font-black">
//   Driving Sustainable Mobility
// </h3>

// <p className="relative z-10 mt-6 text-lg leading-8 text-slate-600">
//   Our mission is to simplify EV charging through intelligent,
//   accessible, and end-to-end solutions for homes, businesses, fleets,
//   and public charging networks while enabling a smarter, greener, and
//   more connected transportation ecosystem.
// </p>
// </motion.div>
//           </div>

//         </motion.div>

//       </div>

//     </section>
//   );
// }





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

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8FAFC] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-lime-400/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-slate-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-375 px-6 lg:px-12">

     {/* ========================================================= */}
{/* ABOUT VOLTERRA ENERGY */}
{/* ========================================================= */}

{/* Hero Image */}

<div
  className="
    relative
    mt-3
    overflow-hidden

    rounded-[22px]

    shadow-2xl

    sm:rounded-[28px]

    lg:rounded-[36px]
  "
>
  <img
    src="/images/about.png"
    alt="About Volterra Energy"
    className="
      h-[260px]
      w-full

      object-cover
      object-center

      sm:h-[380px]

      md:h-[480px]

      lg:h-[520px]

      xl:h-[520px]
    "
  />
</div>

{/* Content Card */}

<div
  className="
    relative
    z-10

    mx-auto
    w-full

    max-w-5xl

    -mt-10

    px-3

    sm:-mt-14
    sm:px-5

    md:-mt-18
    md:px-8

    lg:-mt-22
    lg:px-0
  "
>
  <div
    className="
      rounded-[22px]

      bg-white

      p-5

      shadow-xl

      sm:rounded-[26px]
      sm:p-7

      md:rounded-[30px]
      md:p-8

      lg:rounded-[32px]
      lg:p-8
      lg:shadow-2xl
    "
  >
    {/* Section Label */}

    <span
      className="
        block

        text-lg
        font-black

        uppercase

        tracking-[2px]

        text-lime-600

        sm:text-xl
        sm:tracking-[3px]

        lg:text-2xl
        lg:tracking-widest
      "
    >
      About Volterra Energy
    </span>

    {/* Description */}

    <p
      className="
        mt-3

        text-sm
        leading-6

        text-slate-600

        sm:text-base
        sm:leading-7

        lg:text-lg
        lg:leading-8
      "
    >
      Volterra Energy, a brand of Vayutattva Ventures LLP, is a clean-energy
      and electric mobility infrastructure company committed to accelerating
      India’s transition toward sustainable transportation.
    </p>

        <p
      className="
        mt-4

        text-sm
        leading-6

        text-slate-600

        sm:mt-5
        sm:text-base
        sm:leading-7

        lg:mt-3
        lg:text-lg
        lg:leading-8
      "
    >
      We deliver intelligent, reliable, and scalable EV charging solutions for
      residential communities, corporate workplaces, commercial properties,
      hotels and restaurants, public charging networks.
    </p>
  </div>
</div>


{/* ========================================================= */}
{/* Main Content */}
{/* ========================================================= */}

<div
  className="
    mx-auto
    mt-8
    w-full
    max-w-7xl

    sm:mt-10

    lg:mt-12
  "
>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8 }}
    className="
      space-y-5

      sm:space-y-7

      lg:space-y-10
    "
  >
    {/* ===================================================== */}
    {/* Section 1 */}
    {/* ===================================================== */}

    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white

        p-5

        shadow-sm

        sm:rounded-3xl
        sm:p-6

        md:p-7

        lg:p-8
      "
    >
      {/* Heading */}

      <div
        className="
          mb-4

          flex
          items-start

          gap-3

          sm:items-center
        "
      >
        <div
          className="
            mt-1

            h-8
            w-1

            shrink-0

            rounded-full

            bg-lime-500

            sm:mt-0
            sm:h-10
          "
        />

        <h3
          className="
            text-xl
            font-bold

            leading-snug

            text-slate-900

            sm:text-2xl
          "
        >
          Comprehensive EV Charging Solutions
        </h3>
      </div>

      {/* Paragraph 1 */}

      <p
        className="
          text-sm

          leading-6

          text-slate-600

          sm:text-base
          sm:leading-7

          lg:text-lg
          lg:leading-8
        "
      >
        <strong>VOLTERRA Energy</strong> provides a comprehensive portfolio of
        intelligent AC and DC EV charging solutions, supporting everything from
        convenient destination charging to high-speed DC fast-charging
        corridors.
      </p>

      {/* Paragraph 2 */}

      <p
        className="
          mt-4

          text-sm
          leading-6

          text-slate-600

          sm:mt-5
          sm:text-base
          sm:leading-7

          lg:text-lg
          lg:leading-8
        "
      >
        Our solutions are designed for{" "}
        <strong>
          residential communities, real estate developments, corporate
          workplaces, hospitality venues, retail destinations, fleet operators,
          highways, and public charging networks
        </strong>
        , delivering reliable and scalable infrastructure for every charging
        ecosystem.
      </p>

      {/* Paragraph 3 */}

      <p
        className="
          mt-4

          text-sm
          leading-6

          text-slate-600

          sm:mt-5
          sm:text-base
          sm:leading-7

          lg:text-lg
          lg:leading-8
        "
      >
        Whether for homes, businesses, or public infrastructure, we enable
        seamless EV charging experiences through future-ready technology,
        intelligent hardware, and integrated software platforms.
      </p>
    </div>

    {/* ===================================================== */}
    {/* Section 2 */}
    {/* ===================================================== */}

    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white

        p-5

        shadow-sm

        sm:rounded-3xl
        sm:p-6

        md:p-7

        lg:p-8
      "
    >
      {/* Heading */}

      <div
        className="
          mb-4

          flex
          items-start

          gap-3

          sm:items-center
        "
      >
        <div
          className="
            mt-1

            h-8
            w-1

            shrink-0

            rounded-full

            bg-lime-500

            sm:mt-0
            sm:h-10
          "
        />

        <h3
          className="
            text-xl
            font-bold

            leading-snug

            text-slate-900

            sm:text-2xl
          "
        >
          End-to-End Deployment & Smart Infrastructure
        </h3>
      </div>

      {/* Paragraph 1 */}

      <p
        className="
          text-sm

          leading-6

          text-slate-600

          sm:text-base
          sm:leading-7

          lg:text-lg
          lg:leading-8
        "
      >
        We manage the complete lifecycle of EV charging infrastructure—from{" "}
        <strong>
          site assessment, feasibility analysis, and solution design
        </strong>{" "}
        to{" "}
        <strong>
          installation, commissioning, software integration, and ongoing
          operations
        </strong>
        , ensuring a seamless experience for every client.
      </p>

      {/* Paragraph 2 */}

      <p
        className="
          mt-4

          text-sm
          leading-6

          text-slate-600

          sm:mt-5
          sm:text-base
          sm:leading-7

          lg:text-lg
          lg:leading-8
        "
      >
        Our intelligent platform enables user authentication, billing, energy
        monitoring, remote diagnostics, and performance optimization while
        helping businesses maximize uptime and operational efficiency.
      </p>

      {/* Paragraph 3 */}

      <p
        className="
          mt-4

          text-sm
          leading-6

          text-slate-600

          sm:mt-5
          sm:text-base
          sm:leading-7

          lg:text-lg
          lg:leading-8
        "
      >
        By deploying accessible, connected, and scalable charging
        infrastructure, VOLTERRA Energy is building a smarter, greener, and
        future-ready transportation ecosystem that grows alongside India's
        accelerating EV adoption.
      </p>
    </div>
  </motion.div>
</div>



      {/* ========================================= */}
{/* VISION & MISSION */}
{/* ========================================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.1 }}
  transition={{ duration: 0.7 }}
  className="
    mt-16
    sm:mt-20
    lg:mt-28
  "
>
  {/* ================= SECTION TITLE ================= */}

  <div className="mb-8 text-center sm:mb-10">
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
        text-[10px]
        font-semibold
        uppercase
        tracking-[2px]
        text-white
        shadow-[0_20px_50px_rgba(132,204,22,.35)]

        sm:text-xs
        sm:tracking-[3px]
      "
    >
      Our Purpose
    </div>

    <h2
      className="
        mt-4
        text-3xl
        font-black
        leading-tight
        text-slate-900

        sm:text-4xl

        lg:text-5xl
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
        px-2
        text-sm
        leading-6
        text-slate-600

        sm:text-base
        sm:leading-7

        lg:px-0
        lg:text-lg
      "
    >
      Every charger we install, every software platform we build,
      and every partnership we create moves India one step closer
      to a sustainable electric future.
    </p>
  </div>

  {/* ================= CARDS ================= */}

  <div
    className="
      grid
      grid-cols-1
      gap-5

      sm:gap-6

      xl:grid-cols-2
      xl:gap-10
    "
  >
    {/* ================= VISION ================= */}

    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        relative
        min-w-0
        overflow-hidden

        rounded-[24px]

        bg-slate-900

        p-6

        text-white

        shadow-[0_20px_60px_rgba(0,0,0,.15)]

        border
        border-slate-800

        transition-all
        duration-300

        hover:border-lime-500/40

        sm:rounded-[28px]
        sm:p-8

        lg:rounded-[32px]
        lg:p-10
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none

          absolute
          -right-24
          -top-24

          h-56
          w-56

          rounded-full

          bg-lime-500/20

          blur-[100px]

          sm:h-72
          sm:w-72
          sm:blur-[120px]
        "
      />

      {/* Icon */}

      <div
        className="
          relative
          z-10

          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-2xl

          bg-lime-500/15

          sm:h-14
          sm:w-14
        "
      >
        <Eye className="h-6 w-6 text-lime-400 sm:h-7 sm:w-7" />
      </div>

      {/* Label */}

      <span
        className="
          relative
          z-10

          mt-5
          inline-block

          text-xs
          font-semibold

          uppercase

          tracking-[3px]

          text-lime-400

          sm:mt-6
          sm:text-sm
          sm:tracking-[4px]
        "
      >
        Our Vision
      </span>

      {/* Heading */}

      <h3
        className="
          relative
          z-10

          mt-3

          break-words

          text-2xl
          font-black

          leading-tight

          text-white

          sm:text-3xl
        "
      >
        Building the Future of Intelligent Mobility
      </h3>

      {/* Description */}

      <p
        className="
          relative
          z-10

          mt-5

          text-base
          leading-7

          text-slate-300

          sm:mt-6
          sm:text-lg
          sm:leading-8
        "
      >
        To become India's most trusted EV charging infrastructure company by
        building an intelligent, connected, and sustainable charging ecosystem
        that accelerates the transition to clean mobility.
      </p>
    </motion.div>

    {/* ================= MISSION ================= */}

    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        relative
        min-w-0
        overflow-hidden

        rounded-[24px]

        border
        border-slate-200

        bg-white

        p-6

        shadow-[0_20px_60px_rgba(0,0,0,.08)]

        transition-all
        duration-300

        hover:border-lime-400

        sm:rounded-[28px]
        sm:p-8

        lg:rounded-[32px]
        lg:p-10
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none

          absolute
          -bottom-24
          -right-24

          h-56
          w-56

          rounded-full

          bg-lime-500/20

          blur-[100px]

          sm:h-72
          sm:w-72
          sm:blur-[120px]
        "
      />

      {/* Icon */}

      <div
        className="
          relative
          z-10

          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-2xl

          bg-lime-500/15

          sm:h-14
          sm:w-14
        "
      >
        <Target className="h-6 w-6 text-lime-500 sm:h-7 sm:w-7" />
      </div>

      {/* Label */}

      <span
        className="
          relative
          z-10

          mt-5
          inline-block

          text-xs
          font-semibold

          uppercase

          tracking-[3px]

          text-lime-600

          sm:mt-6
          sm:text-sm
          sm:tracking-[4px]
        "
      >
        Our Mission
      </span>

      {/* IMPORTANT: Explicit text color added */}

      <h3
        className="
          relative
          z-10

          mt-3

          block
          w-full

          break-words

          text-2xl
          font-black

          leading-tight

          text-slate-900

          sm:text-3xl

          lg:text-3xl
        "
      >
        Driving Sustainable Mobility
      </h3>

      {/* Description */}

      <p
        className="
          relative
          z-10

          mt-5

          text-base
          leading-7

          text-slate-600

          sm:mt-6
          sm:text-lg
          sm:leading-8
        "
      >
        Our mission is to simplify EV charging through intelligent,
        accessible, and end-to-end solutions for homes, businesses, fleets,
        and public charging networks while enabling a smarter, greener, and
        more connected transportation ecosystem.
      </p>
    </motion.div>
  </div>
        </motion.div>

      </div>

    </section>
  );
}