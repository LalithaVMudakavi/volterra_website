'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  BatteryCharging,
  Bolt,
  ChartNoAxesCombined,
  CircleDollarSign,
  Cpu,
  Radio,
  ShieldCheck,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Chargers',
    value: '128',
    icon: BatteryCharging,
    color: 'from-lime-500 to-green-600',
  },
  {
    title: 'Active Sessions',
    value: '46',
    icon: Activity,
    color: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Energy Delivered',
    value: '18,942 kWh',
    icon: Bolt,
    color: 'from-green-500 to-lime-500',
  },
  {
    title: 'Revenue',
    value: '₹2.84L',
    icon: CircleDollarSign,
    color: 'from-lime-500 to-emerald-600',
  },
];

export function CMSPlatform() {
  return (
    <section
      id="cms-platform"
      className="
relative
overflow-hidden
bg-[#F7F9FC]
py-32
"
    >
      {/* ================= Background ================= */}
<div
className="
absolute
left-0
top-0
h-112.5
w-112.5
rounded-full
bg-lime-500/10
blur-[150px]
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
bg-lime-400/10
blur-[150px]
"
/>

{/* Engineering Grid */}

<div
className="
absolute
inset-0
opacity-[0.03]
bg-[linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
bg-size-[70px_70px]
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
"
>

        {/* ================= Heading ================= */}

<motion.div

initial={{ opacity:0,y:30 }}

whileInView={{ opacity:1,y:0 }}

viewport={{ once:true }}

transition={{ duration:.8 }}

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

            {/* <Cpu className="h-4 w-4" /> */}

            Intelligent CMS Platform

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
            Manage Every Charger {" "}
           <span className="text-lime-600">
              From One Dashboard
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
            Monitor charging stations, track revenue, analyse energy usage,
            manage users and control your entire EV infrastructure through one
            intelligent cloud platform.
          </p>
        </motion.div>

        {/* ================= Main Grid ================= */}

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[1.2fr_.8fr]">

          {/* ================================================= */}
          {/* Dashboard */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">

              {/* Header */}

              <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

                <div>
                  <h3 className="text-xl font-bold text-black">
                    Volterra CMS
                  </h3>

                  <p className="text-sm text-slate-400">
                    Live Network Overview
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">

                  <Radio className="h-4 w-4 text-green-400" />

                  <span className="text-sm font-semibold text-green-400">
                    Online
                  </span>

                </div>

              </div>

              {/* Stats */}

              <div className="grid gap-6 p-6 md:grid-cols-2">

                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-[#0E1B2A] p-6 transition-all"
                    >
                      <div
                        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${item.color}`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <h4 className="text-sm text-slate-400">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-2xl font-black text-white">
                        {item.value}
                      </p>
                    </motion.div>
                  );
                })}

              </div>

              {/* Network Health */}

              <div className="border-t border-white/10 px-8 py-7">

                <div className="mb-4 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <ShieldCheck className="h-6 w-6 text-lime-400" />

                    <span className="font-semibold text-white">
                      Network Health
                    </span>

                  </div>

                  <span className="text-lime-400 font-bold">
                    99.8%
                  </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '99.8%' }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-linear-to-r from-lime-500 to-green-500"
                  />

                </div>

              </div>

            </div>
          </motion.div>

          {/* ================================================= */}
          {/* Right Content */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-black leading-tight text-black mt-12">

              Powerful Software

              <span className="block text-lime-400">
                Built For Every Deployment
              </span>

            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-400">
              Whether you're managing five chargers or five hundred,
              Volterra's intelligent CMS keeps every station connected,
              monitored and optimized in real time.
            </p>

            {/* Feature Preview */}

            <div className="mt-8 space-y-3">

              {[
                'Real-time charger monitoring',
                'Remote start & stop charging',
                'Energy consumption tracking',
                'Revenue & payment management',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: .5,
                    delay: index * .15,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white p-4 backdrop-blur-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-lime-500 to-green-600">

                    <ChartNoAxesCombined className="h-6 w-6 text-white" />

                  </div>

                  <span className="font-medium text-slate-600">
                    {feature}
                  </span>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}