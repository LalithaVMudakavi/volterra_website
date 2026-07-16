"use client";

import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  BatteryCharging,
  Leaf,
  Zap,
  TrendingUp,
} from "lucide-react";

const energyData = [
  { day: "Mon", energy: 620 },
  { day: "Tue", energy: 710 },
  { day: "Wed", energy: 845 },
  { day: "Thu", energy: 790 },
  { day: "Fri", energy: 960 },
  { day: "Sat", energy: 880 },
  { day: "Sun", energy: 730 },
];

const stats = [
  {
    title: "Energy Delivered",
    value: "18,942",
    unit: "kWh",
    icon: Zap,
    color: "text-lime-600",
    bg: "bg-lime-100",
  },
  {
    title: "CO₂ Saved",
    value: "8.4",
    unit: "Ton",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Peak Load",
    value: "122",
    unit: "kW",
    icon: BatteryCharging,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

export default function EnergyChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        rounded-[30px]
        border
        border-slate-200
        bg-white
        p-7
        shadow-[0_20px_60px_rgba(15,23,42,.08)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-600">
            Energy Analytics
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Weekly Consumption
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2">
          <TrendingUp className="h-4 w-4 text-green-600" />

          <span className="font-semibold text-green-700">
            +16.4%
          </span>
        </div>
      </div>

      {/* Stats */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="rounded-2xl bg-slate-50 p-5"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >
                <Icon className={`h-6 w-6 ${item.color}`} />
              </div>

              <p className="mt-4 text-sm text-slate-500">
                {item.title}
              </p>

              <h3 className="mt-1 text-2xl font-black text-slate-900">
                {item.value}

                <span className="ml-1 text-base font-semibold text-slate-500">
                  {item.unit}
                </span>
              </h3>
            </motion.div>
          );
        })}
      </div>

      {/* Chart */}

      <div className="mt-10 h-85">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={energyData}>
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b" }}
            />

            <Tooltip
              cursor={{ fill: "#f8fafc" }}
              formatter={(value) => {
  const energy = Number(value ?? 0);

  return [
    `${energy.toLocaleString()} kWh`,
    "Energy",
  ];
}}
              contentStyle={{
                borderRadius: 18,
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(15,23,42,.08)",
              }}
            />

            <Bar
              dataKey="energy"
              radius={[10, 10, 0, 0]}
              fill="#84cc16"
              maxBarSize={42}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom */}

      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
        <div>
          <p className="text-sm text-slate-500">
            Average / Day
          </p>

          <h4 className="mt-1 text-xl font-bold text-slate-900">
            790 kWh
          </h4>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Peak Day
          </p>

          <h4 className="mt-1 text-xl font-bold text-slate-900">
            Friday
          </h4>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Efficiency
          </p>

          <h4 className="mt-1 text-xl font-bold text-green-600">
            97.8%
          </h4>
        </div>
      </div>
    </motion.div>
  );
}