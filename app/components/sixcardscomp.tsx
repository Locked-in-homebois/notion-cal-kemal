import Image from "next/image"
export default function Sixcard() {

    return (
        <main>
            <h1 className="flex items-center justify-self-center trace-tightest text-center py-5 font-bold text-[40px] max-w-[450px]">Designed to work with your favorite tools.        </h1>
            <div className="flex items-center justify-center py-10 mt-10">

                <div className=" w-[1000px] h-[400px] bg-white-100 flex ">
                    <div className="grid grid-cols-3 grid-rows-2 gap-5 ">
                        <div className="bg-gray-100 rounded-xl w-full h-full flex flex-col ">
                            <div className="px-10 pt-5">
                                <Image
                                    src="/sixcard/notionsymbol2.png"
                                    alt="icon1"
                                    width={40}
                                    height={40}
                                />
                                <h1 className="font-bold text-[20px] ">Notion</h1>
                                <p className="">Bring in important dates across workspaces into one calendar.</p>
                            </div>

                        </div>
                        <div className="bg-gray-100 rounded-xl flex flex-col w-full h-full">
                            <div className=" px-10 pt-5">
                                <Image
                                    src="/sixcard/2.png"
                                    alt="card1icon2"
                                    width={40}
                                    height={40}
                                />
                                <h1 className="font-bold text-[20px]"> Google Calendar</h1>
                                <p>Connect Google Calendar with your existing Notion workspace. </p>
                            </div>

                        </div>
                        <div className="bg-gray-100 rounded-xl w-full h-full flex flex-col">
                            <div className=" px-10 pt-5"        >

                                <Image
                                    src="/sixcard/3.png"
                                    alt="card1icon3"
                                    width={50}
                                    height={50}
                                />
                                <h1 className="font-bold text-[20px]"> Google Meet </h1>
                                <p>Available by default with Google Calendar.</p>
                            </div>

                        </div>


                        <div className="bg-gray-100 rounded-xl w-full h-full px-10 pt-5 flex flex-col">

                            <div className="">
                                <Image
                                    src="/sixcard/4.png"
                                    alt="card1icon4"
                                    width={50}
                                    height={50}
                                />
                                <h1 className="font-bold text-[20px]">Zoom </h1>
                                <p>Create new Zoom meetings directly in Notion Calendar.</p>
                            </div>

                        </div>
                        <div className="bg-gray-100 rounded-xl w-full h-full px-10 pt-5 flex flex-col">

                            <div className="">
                                <Image
                                    src="/sixcard/5.png"
                                    alt="card1icon4"
                                    width={50}
                                    height={50}
                                />
                                <h1 className="font-bold text-[20px]"> Apple Calendar </h1>
                                <p>Create new Apple Calendar meetings directly in Notion. </p>
                            </div>

                        </div>
                        <div className="bg-gray-100 rounded-xl w-full h-full px-10 pt-5 flex flex-col">

                            <div className="">
                                <Image
                                    src="/sixcard/6.png"
                                    alt="card1icon4"
                                    width={50}
                                    height={50}
                                />
                                <h1 className="font-bold text-[20px]"> Other providers </h1>
                                <p>Add a custom link from other popular conferencing services. </p>
                            </div>

                        </div>


                    </div>
                </div>
            </div >

        </main>
    )
}