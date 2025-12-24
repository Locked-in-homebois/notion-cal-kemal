// learn and use "list rendering"
'use client'
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
export default function TopNavbarTrying() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev)
  return (
    <nav className="sticky top-0 bg-white font-semibold items-center md:px-4 z-50 justify-center shadow-md grid grid-cols-3 ">
      <div className="flex items-center justify-self-start">
        <Link href="/">
          <Image
            src="/notionsymbol.png"
            width={60}
            height={30}
            alt="topleftsymbol" // descrption 8 whatever
          />
        </Link>
      </div>

      <div className="md:flex hidden gap-5 md:justify-self-center  whitespace-nowrap">
        <Link href="/">Mail</Link>
        <Link href="/">Calendar</Link>
        <Link href="/">AI</Link>
        <Link href="/">Enterprise</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/">Explore</Link>
        <Link href="/">Request A Demo</Link>
      </div>
      <div className="flex items-center justify-self-end text-[12px] md:col-span-1 col-span-2 gap-3">
        <Link className="md:flex hidden mr-3" href="/">Log in</Link>
        <Link className={` text-white rounded-lg hover:bg-blue-500 px-2 py-2 ${isOpen ? "bg-blue-500" : " bg-black"} `} href="/" >  Get Notion Calendar Free </Link>
        <button onClick={toggleMenu} className={`md:hidden px-8 flex transition-transform duration-500 ${isOpen ? "rotate-90" : "rotate-0"}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div >
      <div className="relative ">
        {
          isOpen && (
            <div className="text-bold text-xl px-6 py-6 bg-red-500 h-screen w-screen absolute flex flex-col gap-4">
              <Link onClick={() => setIsOpen(false)} href="/">Mail</Link>
              <Link onClick={() => setIsOpen(false)} href="/">Calendar</Link>
              <Link onClick={() => setIsOpen(false)} href="/">AI</Link>
              <Link onClick={() => setIsOpen(false)} href="/">Enterprise</Link>
              <Link onClick={() => setIsOpen(false)} href="/">Pricing</Link>
              <Link onClick={() => setIsOpen(false)} href="/">Explore</Link>
              <Link onClick={() => setIsOpen(false)} href="/">Request A Demo</Link>

              <button className="flex justify-center rounded-2xl bg-blue-500 mt-50">Download App</button>

              <button className="flex justify-center rounded-2xl bg-blue-400 ">Log In</button>
            </div>
          )
        }
      </div>
    </nav >
  )
}          