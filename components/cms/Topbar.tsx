"use client";

import { motion } from "framer-motion";
import {
  Bell,
  CalendarDays,
  Search,
  Settings2,
  SunMedium,
  Wifi,
} from "lucide-react";
import { format } from "date-fns";

export default function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between rounded-[28px] border border-slate-200 bg-white px-8 py-5 shadow-[0_15px_50px_rgba(15,23,42,0.08)]"
    >
      {/* Left */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative w-90">
          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search chargers, users, locations..."
            className="
              h-12
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              pl-14
              pr-4
              text-sm
              outline-none
              transition
              focus:border-lime-500
              focus:bg-white
              focus:ring-4
              focus:ring-lime-100
            "
          />
        </div>

        {/* Date */}
        <div className="hidden items-center gap-3 rounded-2xl bg-slate-50 px-5 py-3 lg:flex">
          <CalendarDays className="h-5 w-5 text-lime-600" />

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Today
            </p>

            <p className="font-semibold text-slate-800">
              {format(new Date(), "EEEE, dd MMM yyyy")}
            </p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Live Status */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="hidden items-center gap-3 rounded-full bg-green-50 px-5 py-3 lg:flex"
        >
          <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

          <span className="font-semibold text-green-700">
            Live System
          </span>
        </motion.div>

        {/* Theme */}
        <button
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-200
            bg-white
            transition
            hover:border-lime-400
            hover:bg-lime-50
          "
        >
          <SunMedium className="h-5 w-5 text-slate-600" />
        </button>

        {/* Settings */}
        <button
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-200
            bg-white
            transition
            hover:border-lime-400
            hover:bg-lime-50
          "
        >
          <Settings2 className="h-5 w-5 text-slate-600" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              bg-white
              transition
              hover:border-lime-400
              hover:bg-lime-50
            "
          >
            <Bell className="h-5 w-5 text-slate-600" />
          </button>

          <span
            className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-red-500
              text-[10px]
              font-bold
              text-white
            "
          >
            3
          </span>
        </div>

        {/* Profile */}
        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-2
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-linear-to-br
              from-lime-500
              to-green-600
              text-lg
              font-bold
              text-white
            "
          >
            V
          </div>

          <div>
            <h4 className="font-bold text-slate-900">
              Volterra Admin
            </h4>

            <div className="flex items-center gap-2">
              <Wifi className="h-4 w-4 text-green-500" />

              <span className="text-sm text-slate-500">
                Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}