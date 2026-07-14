"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = {
  label: string;
  href?: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

const menuItems: MenuItem[] = [
    {
      label: "About Us", href: "/about",
    },
    {
      label: "Products",  href: "/products",
    },
    {
      label: "Solutions",  href: "/solutions",
    },
    {
      label: "Industries", href: "/industries",
    },
    {
      label: "CMS Platform", href: "/cms_platform",
    },
    // {
    //   label: "Projects", href: "/projects",
    // },
    {
      label: "Blogs", href: "/blogs",
    },
  ];

  return (
    <motion.nav
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-[1500px] z-50"
>
    <div
  className="
 bg-black
    backdrop-blur-xl
    rounded-3xl
    border border-white/10
    shadow-[0_25px_60px_rgba(0,0,0,.35)]
    h-20
    px-8
    grid
    grid-cols-[1fr_auto_1fr]
    items-center
  "
>
  {/* LEFT - Logo */}
  <div className="flex justify-start">
  <Link href="/">
  <img
    src="/images/website_logo.png"
    alt="Volterra Energy"
    className="h-17 w-auto object-contain transition-transform duration-500 hover:scale-105"
  />
</Link>
  </div>

  {/* CENTER - Navigation */}
  <div className="hidden lg:flex items-center justify-center gap-10">
    {menuItems.map((item) => (
      <div key={item.label} className="relative group">
        {item.dropdown ? (
          <>
            <button className="flex items-center gap-2 text-white/90 font-medium hover:text-white transition-all duration-300">
              {item.label}
              <ChevronDown
                size={18}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div
              className="
                absolute
                left-1/2
                top-full
                -translate-x-1/2
                mt-5
                bg-white
                rounded-2xl
                shadow-2xl
                min-w-[240px]
                opacity-0
                translate-y-3
                pointer-events-none
                group-hover:opacity-100
                group-hover:translate-y-0
                group-hover:pointer-events-auto
                transition-all
                duration-300
                overflow-hidden
              "
            >
              {item.dropdown.map((sub) => (
                <Link
  key={sub.name}
  href={sub.href}
  className="block px-6 py-4 text-gray-700 hover:bg-lime-50 hover:text-lime-600"
>
  {sub.name}
</Link>

              ))}
            </div>
          </>
        ) : (
         <Link
  href={item.href ?? "#"}
 className={`
relative
font-medium
transition-all
duration-300
${
  pathname === item.href
    ? "text-lime-400"
    : "text-white/90 hover:text-lime-400"
}
after:absolute
after:left-0
after:-bottom-2
after:h-[2px]
after:bg-lime-400
after:transition-all
${
  pathname === item.href
    ? "after:w-full"
    : "after:w-0 hover:after:w-full"
}
`}
>
  {item.label}
</Link>

        )}
      </div>
    ))}
  </div>

  {/* RIGHT - Contact Button */}
  <div className="hidden lg:flex justify-end">
  <Link
  href="/contact"
  className="
  inline-flex
  items-center
  gap-2
  rounded-2xl
  bg-gradient-to-r
  from-lime-500
  to-green-600
  px-4
  py-2
  text-white
  font-semibold
  transition-all
  duration-300
  hover:scale-105
  hover:shadow-xl
  hover:shadow-lime-500/30
  "
>
  Contact Us
</Link>
  </div>

  {/* Mobile Menu Button */}
  <button
    className="lg:hidden justify-self-end text-white"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X size={30} /> : <Menu size={30} />}
  </button>
</div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
         className="
lg:hidden
mt-3
rounded-3xl
bg-[#666A86]
backdrop-blur-xl
overflow-hidden
shadow-xl
"
        >
          {menuItems.map((item) => (
            <div key={item.label}>

             <Link
  href={item.href ?? "#"}
  onClick={() => setIsOpen(false)}
  className="block px-5 py-4 text-white hover:bg-gray-900"
>
  {item.label}
</Link>

              {item.dropdown && openDropdown === item.label && (
                <div className="bg-gray-900">

                  {item.dropdown.map((sub) => (
                  <motion.div
  whileHover={{ y: -2 }}
  transition={{ duration: 0.2 }}
>
  <Link
    href={sub.href}
    className="block px-10 py-3 text-gray-300 hover:text-lime-400"
  >
    {sub.name}
  </Link>
</motion.div>
                  ))}

                </div>
              )}

            </div>
          ))}

          <div className="p-5">
            <button className="w-full bg-lime-600 hover:bg-lime-500 text-white py-3 rounded-lg font-semibold">
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}