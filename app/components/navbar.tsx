// learn and use "list rendering"

"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function TopNavbarTrying() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen((prev) => !prev);
	return (
		<nav className="sticky top-0 bg-white font-semibold items-center md:px-4 z-50 justify-center shadow-md grid grid-cols-3 ">
			<div className="flex items-center justify-self-start">
				<Link href="/">
					<Image
						src="/notionsymbol.png"
						width={60}
						height={30}
						alt="topleftsymbol"
					/>
				</Link>
			</div>

			<div className="md:flex hidden gap-5 md:justify-self-center  whitespace-nowrap">
				<Link href="/">Mail</Link>
				<Link href="/">Calendar</Link>
				<Link href="/">AI</Link>
				<Link href="/">Enterprise</Link>
				<Link href="/">Pricing</Link>
				<Link href="/">Explore</Link>
				<Link href="/">Request A Demo</Link>
			</div>
			<div className="flex items-center justify-self-end text-[12px] md:col-span-1 col-span-2 gap-3">
				<Link className="md:flex hidden mr-3" href="/">
					Log in
				</Link>
				<Link
					className={` text-white rounded-lg px-4 py-2 ${
						isOpen ? "bg-blue-500" : " bg-black"
					} `}
					href="/"
				>
					Get Notion Calendar Free
				</Link>
				<button
					onClick={toggleMenu}
					className={`md:hidden px-4 flex transition-transform duration-500 ${
						isOpen ? "rotate-90" : "rotate-0"
					}`}
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>
			<div className="relative ">
				{isOpen && (
					<div className="text-bold text-xl bg-neutral-100 pt-10 w-screen absolute grid uppercase font-black px-5 h-[calc(100vh-55px)]">
						<Link onClick={() => setIsOpen(false)} href="/">
							Mail
						</Link>
						<Link onClick={() => setIsOpen(false)} href="/">
							Calendar
						</Link>
						<Link onClick={() => setIsOpen(false)} href="/">
							AI
						</Link>
						<Link onClick={() => setIsOpen(false)} href="/">
							Enterprise
						</Link>
						<Link onClick={() => setIsOpen(false)} href="/">
							Pricing
						</Link>
						<Link onClick={() => setIsOpen(false)} href="/">
							Explore
						</Link>
						<Link onClick={() => setIsOpen(false)} href="/">
							Request A Demo
						</Link>
						<div className="flex flex-col gap-5 ">
							<button className=" px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300">
								this is a button
							</button>
							<button className=" px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300">
								this is a button
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
