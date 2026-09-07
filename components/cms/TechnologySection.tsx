"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Database,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const ecosystem = [
  {
    title: "Artificial Intelligence",
    description:
      "AI-powered analytics for demand forecasting, predictive maintenance and operational intelligence.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Secure cloud platform providing centralized monitoring and real-time charger connectivity.",
    icon: Cloud,
  },
  {
    title: "IoT Connectivity",
    description:
      "Always-connected charging stations delivering live operational data and diagnostics.",
    icon: Cpu,
  },
  {
    title: "Data Analytics",
    description:
      "Business intelligence dashboards with utilization, revenue and performance insights.",
    icon: Database,
  },
];

export default function TechnologySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-26">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
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
          "
        >
            OUR TECHNOLOGY
          </div>

          <h2
              className="
              mt-3
              text-3xl
              sm:text-4xl
              font-black
              leading-tight
              text-slate-900
              lg:text-5xl
              "
            >
            Intelligence Behind {" "}
            <span className=" text-lime-600">
              Every Charge
            </span>
          </h2>

          <p
              className="
              mx-auto
              mt-3
              max-w-4xl
              text-base
              sm:text-lg
              leading-7
              text-slate-600
              "
            >
            VOLTERRA Energy transforms EV chargers into an intelligent,
            connected energy ecosystem using AI, IoT, Cloud Computing,
            Data Analytics and Smart Energy Management.
          </p>

        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-8 lg:mt-16 lg:grid-cols-2">

          {ecosystem.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .1,
                  duration: .6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-5 sm:rounded-[32px] sm:p-8 shadow-sm"
              >

                <div className="flex items-start gap-3 sm:gap-5">

                  <div className="rounded-2xl bg-lime-100 p-2">

                    <Icon className="h-6 w-6 text-lime-600" />

                  </div>

                  <div>

                    <h3 className="text-xl font-black text-slate-900 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>

                    {/* <button className="mt-6 flex items-center gap-2 font-semibold text-lime-600">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button> */}

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}