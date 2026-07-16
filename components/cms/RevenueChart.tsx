"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  TrendingUp,
  Download,
  CalendarRange,
} from "lucide-react";

const monthlyData = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 138000 },
  { month: "Mar", revenue: 152000 },
  { month: "Apr", revenue: 170000 },
  { month: "May", revenue: 194000 },
  { month: "Jun", revenue: 218000 },
  { month: "Jul", revenue: 244000 },
  { month: "Aug", revenue: 272000 },
  { month: "Sep", revenue: 294000 },
  { month: "Oct", revenue: 326000 },
  { month: "Nov", revenue: 352000 },
  { month: "Dec", revenue: 389000 },
];

const filters = ["Week", "Month", "Year"];

export default function RevenueChart() {
  const [selected, setSelected] = useState("Month");

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
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
      "
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-lime-600">
            Revenue Analytics
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            ₹3.89L
          </h2>

          <div className="mt-2 flex items-center gap-2 text-green-600">
            <TrendingUp className="h-5 w-5" />
            <span className="font-semibold">
              +18.6% growth this year
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Filters */}
          <div className="flex rounded-2xl bg-slate-100 p-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelected(filter)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  selected === filter
                    ? "bg-lime-500 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Export */}
          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-lime-500 hover:bg-lime-50">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Monthly Revenue</p>
          <h3 className="mt-2 text-2xl font-black text-slate-900">
            ₹2.84L
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Charging Sessions</p>
          <h3 className="mt-2 text-2xl font-black text-slate-900">
            2,846
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Average Ticket</p>
          <h3 className="mt-2 text-2xl font-black text-slate-900">
            ₹126
          </h3>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-10 h-90">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="volterraRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#84cc16" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#84cc16" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e2e8f0"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#64748b", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tickFormatter={(value) => `₹${value / 1000}k`}
              tick={{ fill: "#64748b", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ stroke: "#84cc16", strokeDasharray: "4 4" }}
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                boxShadow: "0 12px 40px rgba(15,23,42,0.08)",
              }}
              formatter={(value) => {
  const revenue = Number(value ?? 0);

  return [
    `₹${revenue.toLocaleString("en-IN")}`,
    "Revenue",
  ];
}}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#65a30d"
              strokeWidth={4}
              fill="url(#volterraRevenue)"
              activeDot={{
                r: 7,
                stroke: "#65a30d",
                strokeWidth: 3,
                fill: "#fff",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-wrap items-center justify-between border-t border-slate-100 pt-6">
        <div className="flex items-center gap-2 text-slate-500">
          <CalendarRange className="h-5 w-5 text-lime-600" />
          Updated 2 minutes ago
        </div>

        <div className="flex items-center gap-6">
          <div>
            <p className="text-xs text-slate-500">Peak Revenue</p>
            <p className="font-bold text-slate-900">₹3.89L</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Growth</p>
            <p className="font-bold text-green-600">+18.6%</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Forecast</p>
            <p className="font-bold text-slate-900">₹4.20L</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}