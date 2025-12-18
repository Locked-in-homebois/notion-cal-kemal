import Image from "next/image"
export default function thirdcomp() {
    return (
        <div className="flex flex-col md:px-0 px-4 items-center">
            <h1 className="font-bold text-[45px] text-center mt-10 tracking-tighter">Work and life, playing nice. </h1>
            <div className=" bg-gray-100  mt-14 justify-center max-w-[1000px] w-full h-auto rounded-xl">
                <div className="px-10 py-5 ">
                    <Image className=""
                        src="/comp3icon.png"
                        alt={""}
                        width={45}
                        height={45}
                    />
                    <h1 className=" font-semibold text-[22px] text-black " >See all your commitments in the same place
                    </h1>
                    <p className=" text-[20px] text-black  max-w-[600] ">No more accidental conflicts between work and personal events.
                    </p>
                </div  >
                <div className="flex justify-center ">
                    <Image
                        src="/comp3image.png"
                        alt={"the second components first photo"}
                        width={750}
                        height={500}
                        className="block w-auto h-auto object-contain"

                    />
                </div>
            </div>
            <div className="flex items-center justify-center py-10 ">
                <div className=" max-w-[1000px] md:grid md:grid-cols-3 flex flex-col gap-5 w-full   ">
                    <div className="bg-gray-100 rounded-xl w-full flex flex-col px-10 pt-5 ">
                        <Image
                            src="/cardone/cardone2icon.png"
                            alt="icon1"
                            width={40}
                            height={40}
                        />
                        <h1 className="font-bold text-[18px] ">Connect multiple calendars</h1>
                        <p className="">Easily sync work and personal calendars.</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl flex flex-col w-full">
                        <div className=" px-10 pt-5">
                            <Image
                                src="/cardthree/card3icon2.png"
                                alt="card1icon2"
                                width={40}
                                height={40}
                            />
                            <h1 className="font-bold text-[18px]">No more double bookings</h1>
                            <p>Auto-block busy slots across all your calendars. </p>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-xl flex flex-col w-full px-10 pt-5">
                        <Image
                            src="/cardthree/card3icon3.png"
                            alt="card1icon2"
                            width={40}
                            height={40}
                        />
                        <h1 className="font-bold text-[18px]"> Easy-to-use mobile app</h1>
                        <p>View your schedule at a glance and add events quickly with iOS and Android widgets.</p>
                    </div>
                </div>
            </div >
        </div>

    )


}