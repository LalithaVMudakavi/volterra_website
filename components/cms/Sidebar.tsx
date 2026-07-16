"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BatteryCharging,
  Activity,
  BarChart3,
  Users,
  CreditCard,
  Settings,
  ShieldCheck,
  BellRing,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Chargers",
    icon: BatteryCharging,
  },
  {
    title: "Live Monitoring",
    icon: Activity,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Users",
    icon: Users,
  },
  {
    title: "Billing",
    icon: CreditCard,
  },
  {
    title: "Notifications",
    icon: BellRing,
  },
  {
    title: "Security",
    icon: ShieldCheck,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-70 flex-col rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      {/* Logo */}
      <div className="border-b border-slate-100 px-7 py-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-lime-400 to-green-600 shadow-lg shadow-lime-500/30">
            <BatteryCharging className="h-6 w-6 text-white" />
          </div>

          <div>
            <h2 className="text-xl font-black text-slate-900">
              Volterra
            </h2>

            <p className="text-sm text-slate-500">
              CMS Platform
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-5">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.title}
              whileHover={{
                x: 6,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`group flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                item.active
                  ? "bg-linear-to-r from-lime-500 to-green-600 text-white shadow-lg shadow-lime-500/30"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${
                  item.active
                    ? "text-white"
                    : "text-slate-500 group-hover:text-lime-600"
                }`}
              />

              <span className="font-semibold">
                {item.title}
              </span>

              {item.active && (
                <motion.div
                  layoutId="activeMenu"
                  className="ml-auto h-2.5 w-2.5 rounded-full bg-white"
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Network Status */}
      <div className="mx-5 mb-5 rounded-3xl bg-linear-to-br from-lime-500 to-green-600 p-6 text-white shadow-xl shadow-lime-500/30">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-white" />

          <span className="text-sm font-semibold uppercase tracking-wider">
            Network Status
          </span>
        </div>

        <h3 className="text-3xl font-black">
          99.8%
        </h3>

        <p className="mt-2 text-sm text-lime-100">
          All charging stations are operating normally across your network.
        </p>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "99.8%" }}
            transition={{
              duration: 1.5,
            }}
            className="h-full rounded-full bg-white"
          />
        </div>
      </div>

      {/* Logout */}
      <div className="border-t border-slate-100 p-5">
        <button className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-slate-600 transition hover:bg-red-50 hover:text-red-500">
          <LogOut className="h-5 w-5" />

          <span className="font-semibold">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}