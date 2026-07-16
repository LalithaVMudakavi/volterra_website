"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  MonitorSmartphone,
} from "lucide-react";

import KPICards from "./KPICards";
import RevenueChart from "./RevenueChart";
import EnergyChart from "./EnergyChart";

export default function CMSPlatform() {
  return (
    <section
      id="cms-platform"
      className="relative overflow-hidden bg-[#F7F9FC] py-28"
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[140px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
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
            Intelligent CMS Platform
          </div>

         <h2 className="mt-4 text-4xl lg:text-5xl font-black leading-tight text-slate-900">
            Power Your EV Network
              <span className="block text-lime-600">
                 With Volterra CMS
              </span>
         </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Monitor charging stations, analyse energy usage,
            control chargers remotely, manage users and track
            business performance from one intelligent cloud platform.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                bg-lime-600
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Explore Platform

              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-slate-300
                bg-white
                px-7
                py-4
                font-semibold
                text-slate-700
                transition
                hover:border-lime-500
              "
            >
              <MonitorSmartphone className="h-5 w-5" />

              Live Demo
            </button>

          </div>
        </motion.div>

        {/* Dashboard Preview */}

        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
          className="
            mt-20
            rounded-[40px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-[0_40px_100px_rgba(15,23,42,.08)]
          "
        >

          {/* Top Stats */}

          <KPICards />

          {/* Charts */}

          <div className="mt-10 grid gap-8 xl:grid-cols-2">

            <RevenueChart />

            <EnergyChart />

          </div>

        </motion.div>

                {/* Live Dashboard Widgets */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">

          {/* Live Charger Status */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8"
          >
            <div className="flex items-center justify-between">

              <div>

                <span className="text-sm font-semibold uppercase tracking-widest text-lime-600">
                  Live Monitoring
                </span>

                <h3 className="mt-2 text-3xl font-black text-slate-900">
                  Charger Status
                </h3>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">

                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

                <span className="font-semibold text-green-700">
                  Online
                </span>

              </div>

            </div>

            <div className="mt-8 space-y-5">

              {[
                {
                  name: "Volterra DC Fast Charger",
                  location: "Bangalore",
                  status: "Charging",
                  power: "120 kW",
                },
                {
                  name: "Volterra AC Charger",
                  location: "Hyderabad",
                  status: "Available",
                  power: "22 kW",
                },
                {
                  name: "Ultra Fast Station",
                  location: "Chennai",
                  status: "Maintenance",
                  power: "180 kW",
                },
                {
                  name: "Fleet Charging Hub",
                  location: "Mumbai",
                  status: "Charging",
                  power: "240 kW",
                },
              ].map((item) => (

                <motion.div
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >

                  <div>

                    <h4 className="font-bold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.location}
                    </p>

                  </div>

                  <div className="text-right">

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        item.status === "Charging"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Available"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {item.status}
                    </span>

                    <p className="mt-2 font-bold text-slate-900">
                      {item.power}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Floating Statistics */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="space-y-6"
          >

            {[
              {
                title: "Network Health",
                value: "99.8%",
                subtitle: "Excellent",
              },
              {
                title: "Energy Delivered",
                value: "18,942",
                subtitle: "kWh",
              },
              {
                title: "Revenue",
                value: "₹2.84L",
                subtitle: "Monthly",
              },
              {
                title: "Charging Sessions",
                value: "2,846",
                subtitle: "Completed",
              },
            ].map((card) => (

              <motion.div
                key={card.title}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                "
              >

                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h3 className="mt-3 text-4xl font-black text-slate-900">
                  {card.value}
                </h3>

                <p className="mt-2 text-lime-600 font-semibold">
                  {card.subtitle}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

        {/* Enterprise Features */}

        <div className="mt-16">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-600">
              Platform Capabilities
            </span>

            <h3 className="mt-4 text-4xl font-black text-slate-900">
              Everything Needed To Manage
              <span className="block text-lime-600">
                Your EV Charging Network
              </span>
            </h3>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Remote Control",
                desc: "Start, stop and restart chargers remotely.",
              },
              {
                title: "Real-Time Alerts",
                desc: "Receive instant charger fault notifications.",
              },
              {
                title: "Smart Analytics",
                desc: "Revenue, usage and performance insights.",
              },
              {
                title: "User Management",
                desc: "Manage fleets, customers and permissions.",
              },
            ].map((feature) => (

              <motion.div
                key={feature.title}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                "
              >

                <div className="mb-5 h-14 w-14 rounded-2xl bg-lime-100" />

                <h4 className="text-xl font-black text-slate-900">
                  {feature.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

                {/* ================= Statistics ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                value: "126+",
                label: "Connected Chargers",
              },
              {
                value: "99.8%",
                label: "Network Uptime",
              },
              {
                value: "18,942",
                label: "kWh Delivered",
              },
              {
                value: "₹2.84L",
                label: "Monthly Revenue",
              },
            ].map((item) => (

              <motion.div
                key={item.label}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-white
                  p-10
                  text-center
                  shadow-[0_20px_60px_rgba(15,23,42,.06)]
                "
              >

                <h3 className="text-5xl font-black text-lime-600">
                  {item.value}
                </h3>

                <p className="mt-4 text-slate-600 font-medium">
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>
        </motion.div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            from-lime-600
            via-green-600
            to-emerald-700
            p-12
            text-white
          "
        >

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-widest">
                Intelligent EV Software
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight lg:text-5xl">
                Manage Every Charger
                <span className="block">
                  From One Intelligent Platform
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50">
                Volterra CMS provides complete visibility into your charging
                infrastructure with real-time monitoring, analytics,
                energy management and smart automation.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <button
                className="
                  rounded-2xl
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-slate-900
                  transition
                  hover:scale-105
                "
              >
                Request Demo
              </button>

              <button
                className="
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/10
                  px-8
                  py-4
                  font-semibold
                  backdrop-blur
                  transition
                  hover:bg-white/20
                "
              >
                Learn More
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}