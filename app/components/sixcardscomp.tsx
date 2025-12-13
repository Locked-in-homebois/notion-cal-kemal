import Image from "next/image"
export default function Sixcard() {

    return (
        <main>
            <h1 className="flex items-center justify-self-center trace-tightest py-5 font-bold text-[40px] max-w-[450px]">Designed to work with your favorite tools.        </h1>
            <div className="flex items-center justify-center py-10 mt-10">

                <div className=" w-[1000px] h-[500px] bg-white-100 flex ">
                    <div className="grid grid-cols-3 grid-rows-2 gap-5 ">
                        <div className="bg-gray-100 rounded-xl w-full h-full flex flex-col ">
                            <div className="px-10 pt-5">
                                <Image
                                    src="/cardone/cardone1icon.png"
                                    alt="icon1"
                                    width={40}
                                    height={40}
                                />
                                <h1 className="font-bold text-[20px] ">Built-in Scheduling</h1>
                                <p className="">Send your availability and scheduling link to let others book time with you.</p>
                            </div>

                        </div>
                        <div className="bg-gray-100 rounded-xl flex flex-col w-full h-full">
                            <div className=" px-10 pt-5">
                                <Image
                                    src="/cardone/cardone2icon.png"
                                    alt="card1icon2"
                                    width={40}
                                    height={40}
                                />
                                <h1 className="font-bold text-[20px]"> Work across time zones</h1>
                                <p>Thoughtfully collaborate with global teams as you visualize your day across time zones. </p>
                            </div>

                        </div>
                        <div className="bg-gray-100 rounded-xl w-full h-full flex flex-col">
                            <div className=" px-10 pt-5"        >

                                <Image
                                    src="/cardone/cardone3icon.png"
                                    alt="card1icon3"
                                    width={50}
                                    height={50}
                                />
                                <h1 className="font-bold text-[20px]"> Modern design </h1>
                                <p>Use command menu and shortcuts for efficient workflows.</p>
                            </div>

                        </div>


                        <div className="bg-gray-100 rounded-xl w-full h-full px-10 pt-5 flex flex-col">

                            <div className="">
                                <Image
                                    src="/cardone/cardone4icon.png"
                                    alt="card1icon4"
                                    width={50}
                                    height={50}
                                />
                                <h1 className="font-bold text-[20px]"> Available in 12 languages </h1>
                                <p>Supports English, Japanese, Korean, French, German, Spanish, Portuguese, Danish, Dutch, Finnish, Norwegian, and Swedish… with more on the way!  </p>
                            </div>

                        </div>
                        <div className="bg-gray-100 rounded-xl w-full h-full px-10 pt-5 flex flex-col">

                            <div className="">
                                <Image
                                    src="/cardone/cardone4icon.png"
                                    alt="card1icon4"
                                    width={50}
                                    height={50}
                                />
                                <h1 className="font-bold text-[20px]"> Available in 12 languages </h1>
                                <p>Supports English, Japanese, Korean, French, German, Spanish, Portuguese, Danish, Dutch, Finnish, Norwegian, and Swedish… with more on the way!  </p>
                            </div>

                        </div>
                        <div className="bg-gray-100 rounded-xl w-full h-full px-10 pt-5 flex flex-col">

                            <div className="">
                                <Image
                                    src="/cardone/cardone4icon.png"
                                    alt="card1icon4"
                                    width={50}
                                    height={50}
                                />
                                <h1 className="font-bold text-[20px]"> Available in 12 languages </h1>
                                <p>Supports English, Japanese, Korean, French, German, Spanish, Portuguese, Danish, Dutch, Finnish, Norwegian, and Swedish… with more on the way!  </p>
                            </div>

                        </div>


                    </div>
                </div>
            </div >

        </main>
    )
}