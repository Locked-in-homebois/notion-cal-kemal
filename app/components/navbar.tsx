"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "motion/react";

const mlinks = [
  "Notion",
  "Mail",
  "Calendar",
  "Ai",
  "Enterprize",
  "Pricing",
  "More",
];

const dlink = [
  "Notion",
  "Mail",
  "Calendar",
  "Ai",
  "Enterprize",
  "Pricing",
  "Explore",
  "Request a Demo",
];

const menuVars: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVars: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.1,
    },
  },
};

export default function TopNavbarTrying() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 text-black shadow-sm bg-white">
      <div className="mx-auto flex justify-between w-full max-w-[1440px] md:grid grid-cols-3 items-center px-4 py-2 text-[13px] tracking-normal  ">
        <Link href="/">
          <div className="flex items-center justify-self-start">
            <Image
              src="/notionsymbol.png"
              width={60}
              height={30}
              alt="topleftsymbol"
            />
          </div>
        </Link>

        <div className="md:flex hidden gap-5 justify-self-center whitespace-nowrap">
          {/* <Link href="/">Mail</Link>
          <Link href="/">Calendar</Link>
          <Link href="/">AI</Link>
          <Link href="/">Enterprise</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Explore</Link>
          <Link href="/">Request A Demo</Link> */}
          {dlink.map((dlink) => (
            <Link key={dlink} href={"/"}>
              {dlink}
            </Link>
          ))}
        </div>
        <div className="flex gap-3 items-center md:col-span-1 col-span-2 justify-self-end">
          <Link className="hidden md:block" href="/">
            Log in
          </Link>
          <Link
            className={`text-white rounded-lg px-4 py-2 transition-colors duration-300 ${
              isOpen ? "bg-blue-600" : "bg-black"
            }`}
            href="/"
          >
            Get Notion Calendar Free
          </Link>
          <button
            onClick={toggleMenu}
            className={`md:hidden transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            layout
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed font-bold px-5 h-full w-full flex flex-col gap-2 text-[22px] bg-white z-40 "
          >
            {mlinks.map((mlink) => (
              <motion.div key={mlink} variants={itemVars}>
                <Link onClick={() => setIsOpen(false)} href="/">
                  {mlink}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
