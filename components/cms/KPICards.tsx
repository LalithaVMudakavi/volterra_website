"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  Activity,
  CircleDollarSign,
  Zap,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    title: "Active Chargers",
    value: 128,
    suffix: "",
    icon: BatteryCharging,
    color: "from-lime-500 to-green-600",
    bg: "bg-lime-50",
    trend: "+12%",
    subtitle: "Compared to last month",
  },
  {
    title: "Charging Sessions",
    value: 2846,
    suffix: "",
    icon: Activity,
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    trend: "+18%",
    subtitle: "Compared to last week",
  },
  {
    title: "Revenue",
    value: 284000,
    prefix: "₹",
    suffix: "",
    icon: CircleDollarSign,
    color: "from-green-500 to-lime-500",
    bg: "bg-green-50",
    trend: "+9%",
    subtitle: "Monthly revenue",
  },
  {
    title: "Energy Delivered",
    value: 18942,
    suffix: " kWh",
    icon: Zap,
    color: "from-yellow-400 to-lime-500",
    bg: "bg-yellow-50",
    trend: "+22%",
    subtitle: "Power delivered",
  },
];

export default function KPICards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              transition-all
            "
          >
            {/* Glow */}
            <div
              className={`
                absolute
                -right-12
                -top-12
                h-40
                w-40
                rounded-full
                bg-linear-to-br
                ${card.color}
                opacity-10
                blur-3xl
                transition-all
                group-hover:opacity-20
              `}
            />

            {/* Top */}
            <div className="flex items-center justify-between">
              <div
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-linear-to-br
                  ${card.color}
                  shadow-lg
                `}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>

              <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1">
                <TrendingUp className="h-4 w-4 text-green-600" />

                <span className="text-sm font-semibold text-green-600">
                  {card.trend}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="mt-8">
              <p className="text-sm font-medium text-slate-500">
                {card.title}
              </p>

              <h3 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
                {card.prefix}

                <CountUp
                  end={card.value}
                  duration={2}
                  separator=","
                />

                {card.suffix}
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                {card.subtitle}
              </p>
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                <span>Performance</span>

                <span>92%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  className={`
                    h-full
                    rounded-full
                    bg-linear-to-r
                    ${card.color}
                  `}
                />
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-sm text-slate-500">
                Last updated
              </span>

              <span className="font-semibold text-slate-700">
                Just now
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}