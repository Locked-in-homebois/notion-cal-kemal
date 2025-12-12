import Image from "next/image"
export default function gridcardfirst() {

    return (
        <main className="flex items-center justify-center py-10 ">
            <div className=" w-[1000px] h-[1000px] bg-white-100 flex ">
                <div className="grid grid-cols-2 grid-rows-2 gap-5 ">
                    <div className="bg-gray-100 rounded-[12px] w-full h-full flex flex-col ">
                        <div className="px-10 pt-5">
                            <Image
                                src="/cardone/cardone1icon.png"
                                alt="icon"
                                width={40}
                                height={40}
                            />
                            <h1 className="font-bold text-[20px] mt-2">Built-in Scheduling</h1>
                            <p className="mt-2">Send your availability and scheduling link to let others book time with you.</p>
                        </div>

                        <div className="flex-1 relative w-full min-h-0 mt-5">
                            <Image
                                src="/cardone/cardone1.png"
                                alt="card1icon2"
                                fill
                                className=""
                            />
                        </div>

                    </div>
                    <div className="bg-gray-100 rounded-x1 w-full h-full p-5">

                        <Image
                            src="/cardone/cardone2icon.png"
                            alt="card1icon2"
                            width={40}
                            height={40}
                        />
                        <h1 className="font-bold text-[20px]"> Work across time zones</h1>
                        <p>Thoughtfully collaborate with global teams as you visualize your day across time zones. </p>

                        <Image
                            src="/cardone/cardone2.png"
                            alt="cardone2"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div className="bg-gray-100 rounded-x1 w-full h-full p-5 ">

                        <Image
                            src="/cardone/cardone3icon.png"
                            alt="card1icon3"
                            width={50}
                            height={50}
                        />
                        <h1 className="font-bold text-[20px]"> Modern design </h1>
                        <p>Use command menu and shortcuts for efficient workflows.</p>
                        <div className="flex-1 relative w-full min-h-0 mt-5">
                            <Image
                                src="/cardone/cardone3.png"
                                alt="cardone3"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>


                    <div className="bg-gray-100 rounded-x1 w-full h-full p-5">


                        <Image
                            src="/cardone/cardone4icon.png"
                            alt="card1icon4"
                            width={50}
                            height={50}
                        />
                        <h1 className="font-bold text-[20px]"> Available in 12 languages </h1>
                        <p>Supports English, Japanese, Korean, French, German, Spanish, Portuguese, Danish, Dutch, Finnish, Norwegian, and Swedish… with more on the way!  </p>

                        <Image
                            src="/cardone/cardone4.png"
                            alt="cardone4"
                            width={400}
                            height={400}
                        />
                    </div>

                </div>
            </div>
        </main>


    )
}