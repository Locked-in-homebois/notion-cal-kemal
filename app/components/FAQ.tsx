// mobile navbar
'use client'
import { Plus } from "lucide-react"
import { useState } from "react"
import Link from "next/link";
export default function Frequestions() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev)

    const [isOpen2, setIsOpen2] = useState(false);
    const toggleMenu2 = () => setIsOpen2((prev) => !prev)

    const [isOpen3, setIsOpen3] = useState(false);
    const toggleMenu3 = () => setIsOpen3((prev) => !prev)


    return (
        <main className="flex flex-col ml-60 mt-40">
            <h1 className="text-5xl max-w-[1000px] font-bold border-b border-gray-300 py-4 flex justify-start ">Questions & answers</h1>

            <div className="flex flex-col max-w-[1000px] font-bold ">
                <div className="border-b items-center border-gray-300 py-4 flex  ">
                    <button > Which calendar provider(s) is Notion Calendar compatible with?   </button>


                    <button onClick={toggleMenu} className={`px-8 flex justify-end transition-transform duration-500 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                        {isOpen ? <Plus size={24} /> : <Plus size={20} />}
                    </button>
                    {
                        isOpen && (

                            <div className="font-medium ">Currently, Notion Calendar integrates and syncs with Google Calendar accounts and Apple iCloud-synced Calendars. Adding support for other calendar providers such as Outlook is on our roadmap.</div>
                        )
                    }
                </div>
                <div className="border-b border-gray-300 py-4 " >
                    <button > Is Notion Calendar available on mobile devices?</button>

                    <button onClick={toggleMenu2} className={`px-8  flex transition-transform duration-500 ${isOpen2 ? "rotate-45" : "rotate-0"}`}>
                        {isOpen2 ? <Plus size={24} /> : <Plus size={20} />}
                    </button>
                    {
                        isOpen2 && (

                            <div className="font-medium">Yes, Notion Calendar is available for iPhone and Android devices. We know some users are looking for an optimized version for tablet devices, such as iPad, and are working to make Notion Calendar the best experience on all platforms.

                            </div>
                        )
                    }
                </div>

                <div className="border-b border-gray-300 py-4">
                    <button > Does Notion Calendar bring Google Calendar sync to Notion?</button>


                    <button onClick={toggleMenu3} className={`px-8 flex  transition-transform duration-500 ${isOpen3 ? "rotate-45" : "rotate-0"}`}>
                        {isOpen3 ? <Plus size={24} /> : <Plus size={20} />}
                    </button>
                    {
                        isOpen3 && (

                            <div className="font-medium">Notion Calendar allows you to view your Notion database items alongside your Google Calendar events. This offers a streamlined way to see project timelines and task due dates alongside other scheduled events. However, importing Google Calendar events directly into a Notion database is not yet possible. We’re always exploring new ways for Notion and calendars to interact. Expect exciting developments soon!

                            </div>


                        )
                    }




                </div>


            </div>

        </main >
    )


}