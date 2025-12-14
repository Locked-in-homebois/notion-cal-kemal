import Image from "next/image"
export default function ThirdGridcomp() {

    return (
        <main className="flex items-center justify-center py-10 ">
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
        </main >


    )
}