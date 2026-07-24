'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  mainQuote: string;
  rating: number;
  avatar: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Mangal',
      role: 'Engineering Lead',
      company: 'Bank of America',
      location: 'BANGALORE',
      mainQuote: 'With Volterra Energy, we&apos;re not just charging vehicles—we&apos;re driving toward a greener future',
      content:
        'Our employees love the convenience of on-site charging, and it helps us stay aligned with our ESG goals. With Volterra Energy, we&apos;re not just charging vehicles—we&apos;re driving toward a greener future!',
      rating: 5,
      avatar: '/images/testimonial-user-1.png',
    },
    {
      id: 2,
      name: 'Naresh Budhia',
      role: 'Committee Member',
      company: 'Rajheja Heights',
      location: 'MUMBAI',
      mainQuote: 'From installation to the app and fast chargers, everything has been seamless',
      content:
        'We&apos;ve been using their service for over two years now, and we love it! From installation to the app and fast chargers, everything has been seamless. Plus, having a dedicated team to resolve any issues makes a huge difference!',
      rating: 5,
      avatar: '/images/testimonial-user-2.png',
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Facility Manager',
      company: 'Kalpataaru',
      location: 'PUNE',
      mainQuote: 'Usage has been incredibly high, and I&apos;m really happy with Volterra',
      content:
        'The installation went smoothly and the chargers work exceptionally well during peak and off-peak hours. The support team has been fantastic, and I&apos;m looking forward to expanding our network with more chargers soon.',
      rating: 5,
      avatar: '/images/testimonial-user-3.png',
    },
    {
      id: 4,
      name: 'Amit Verma',
      role: 'Operations Head',
      company: 'Tech Park Solutions',
      location: 'DELHI',
      mainQuote: 'The infrastructure is world-class and the user experience is unmatched',
      content:
        'Implementing Volterra Energy across our offices has been a strategic move. The charging stations are always available, the mobile app is intuitive, and the customer support is responsive and helpful.',
      rating: 5,
      avatar: '/images/testimonial-user-4.png',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section className="py-24 bg-linear-to-b from-green-50 to-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">

        
<div
className="
absolute
left-0
top-0
h-112.5
w-112.5
rounded-full
bg-lime-500/10
blur-[140px]
"
/>

<div
className="
absolute
right-0
bottom-0
h-[450px]
w-[450px]
rounded-full
bg-green-500/10
blur-[140px]
"
/>

{/* Engineering Grid */}

<div
className="
absolute
inset-0
opacity-[0.04]
[background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
[background-size:70px_70px]
"
/>


        {/* Header */}
       <motion.div

initial={{ opacity:0, y:40 }}

whileInView={{ opacity:1, y:0 }}

viewport={{ once:true }}

transition={{ duration:.8 }}

className="text-center"

>

<div
className="
inline-flex
items-center
gap-4
text-lime-600
"
>

<div className="h-px w-12 bg-lime-500"/>

<p
className="
text-sm
font-bold
uppercase
tracking-[4px]
"
>
Industry Success Stories

</p>

<div className="h-px w-12 bg-lime-500"/>

</div>

<h2
className="
mt-3
text-4xl
lg:text-5xl
font-black
leading-tight
text-slate-900
"
>

Trusted Across {" "}

<span className="text-lime-600">

 Industries

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

From hospitality and residential communities to
commercial developments and corporate campuses,
Volterra delivers scalable EV charging solutions
tailored to every industry.

</p>

</motion.div>

        {/* Testimonials Carousel - Single Card */}
        <div className="relative mt-10">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            {/* Previous Button */}
            <button
              onClick={prev}
              className="absolute left-0 -translate-x-16 md:-translate-x-20 z-10 p-2 rounded-lg border border-border hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Card */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-lg soft-shadow"
                >
                  {/* Top Badge */}
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-primary flex items-center justify-center mb-6 mx-auto">
                    <Image
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      width={56} height={56} className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {testimonials[current].name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonials[current].role}
                    </p>
                  </div>

                  {/* Main Quote */}
                  <p className="text-lg md:text-xl text-primary font-semibold text-center mb-6 leading-relaxed">
                    {testimonials[current].mainQuote}
                  </p>

                  {/* Full Content */}
                  <p className="text-gray-700 text-center mb-6 leading-relaxed">
                    {testimonials[current].content}
                  </p>

                  {/* Company and Location */}
                  <p className="text-center text-sm font-semibold text-foreground uppercase tracking-wide">
                    {testimonials[current].company}, {testimonials[current].location}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              className="absolute right-0 translate-x-16 md:translate-x-20 z-10 p-2 rounded-lg border border-border hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
