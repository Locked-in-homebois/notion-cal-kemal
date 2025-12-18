// code needs to be cleaned up ALOT ABI 
// everything is fully pushed to the edges on mobile 
// right now company is next to the notion logo on mobile, needs to be pushed down 

'use client'
import Image from "next/image"
import { Instagram } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
export default function Lovedbyall() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev)

    return (
        <div className="w-full border-t border-gray-600 mt-40">
            <div className="grid md:grid-cols-5 px-6 gap-4 mt-20">
                <div className="grid md:col-span-1 col-span-2 justify-start ">
                    <Image
                        width={200}
                        src={"/notionfooter.png"}
                        height={200}
                        alt="image on footer"
                    />
                    <div className="mt-10 flex gap-3 ">
                        <Link className="hover:bg-gray-300 rounded-xl " href="/">  <Instagram />   </Link>
                        <Link className="hover:bg-gray-300 rounded-xl " href="/">  <Instagram />   </Link>
                        <Link className="hover:bg-gray-300 rounded-xl " href="/">  <Instagram />   </Link>
                        <Link className="hover:bg-gray-300 rounded-xl " href="/">  <Instagram />   </Link>
                        <Link className="hover:bg-gray-300 rounded-xl " href="/">  <Instagram />   </Link>
                    </div>
                    <button onClick={toggleMenu} className={`text-center  hover:bg-gray-100 rounded-sm max-w-[150px] mt-10 border ${isOpen ? "" : "bg-gray-100}"}`}> English "US" ^ </button>
                    {
                        isOpen && (
                            <div className="text-bold  bottom-full text-xl grid gap-3">
                                <Link className="hover:bg-gray-100" onClick={() => setIsOpen(false)} href="/">English</Link>
                                <Link className="hover:bg-gray-100" onClick={() => setIsOpen(false)} href="/">Turkhis</Link>
                                <Link className="hover:bg-gray-100" onClick={() => setIsOpen(false)} href="/">Persian</Link>
                                <Link className="hover:bg-gray-100" onClick={() => setIsOpen(false)} href="/">Arabic</Link>
                            </div>
                        )
                    }
                    <p className="mt-6 text-gray-400 text-sm">Cookie Settings</p>
                    <p className="mt-6 text-gray-400 text-sm">© 2025 Notion Labs, Inc.</p>
                </div>

                <div className="flex flex-col  text-gray-500 gap-3 ">
                    <h1 className="text-lg font-[505] text-black hover:underline">Company</h1>
                    <Link className="text-sm  hover:underline" href="/"> About us</Link>
                    <Link className="text-sm  hover:underline" href="/">Careers</Link>
                    <Link className="text-sm  hover:underline" href="/"> Security</Link>
                    <Link className="text-sm  hover:underline" href="/"> Status</Link>
                    <Link className="text-sm  hover:underline" href="/"> Your privacy rights</Link>

                </div>
                <div className="flex flex-col gap-3 text-gray-500 ">
                    <h1 className="text-lg font-[505] hover:underline text-black">Download</h1>
                    <Link className="text-sm hover:underline" href="/">iOS & Android
                    </Link>
                    <Link className="text-sm  hover:underline" href="/"> Mac & Windows</Link>
                    <Link className="text-sm hover:underline" href="/">
                        Calendar</Link>
                    <Link className="text-sm  hover:underline" href="/"> Web Clipper</Link>
                </div>

                <div className="flex flex-col gap-3 text-sm  text-gray-500 ">
                    <h1 className="text-lg font-[505] hover:underline text-black">Resources</h1>
                    <Link className="hover:underline" href="/">Help Center</Link>
                    <Link className="hover:underline" href="/"> Pricing</Link>
                    <Link className="hover:underline" href="/"> Blog</Link>
                    <Link className="hover:underline" href="/">  Community</Link>
                    <Link className="hover:underline" href="/">Integrations</Link>
                    <Link className="hover:underline" href="/"> Templates</Link>
                    <Link className="hover:underline" href="/"> Partner Programs</Link>
                </div>

                <div className="flex flex-col text-gray-500  gap-3">
                    <h1 className="text-lg font-[505] hover:underline text-black" >Notion For</h1>
                    <Link className="text-sm hover:underline" href="/"> Enterprise</Link>

                    <Link className="text-sm  hover:underline" href="/"> Small Business</Link>

                    <Link className="text-sm  hover:underline" href="/"> Personal</Link>

                    <Link className="text-md font-bold hover:underline hover:text-blue-500 mt-10" href="/"> Explore More !!!</Link>

                </div>
            </div>
        </div>

    )


}