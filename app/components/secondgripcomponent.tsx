import Image from "next/image"
export default function Gridcardsecond() {

    return (
        <main className="flex items-center justify-center mt-10 ">
            <div className=" max-w-[1000px] w-full grid md:grid-cols-2 gap-5 ">
                <div className="bg-gray-100 rounded-xl flex flex-col  ">
                    <div className="px-10 py-5">
                        <Image
                            src="/cardtwo/cardtwoicon1.png"
                            alt="card2icon1"
                            width={40}
                            height={40}
                        />
                        <h1 className="font-bold text-[20px] ">Connect and create Notion docs</h1>
                        <p className="">With info from Notion right in your calendar, you’ll always have full context for every meeting.</p>
                    </div>
                    <Image
                        src="/cardtwo/cardtwo1.png"
                        alt="cardtwo1"
                        width={500}
                        height={500}
                        className="mt-auto rounded-xl max-w flex justify-end"
                    />
                </div>
                <div className="bg-gray-100 rounded-xl flex flex-col w-full">
                    <div className="px-10 py-5">
                        <Image
                            src="/cardtwo/carddtwoicon2.png"
                            alt="card2icon2"
                            width={40}
                            height={40}
                        />
                        <h1 className="font-bold text-[20px]"> Update project timelines</h1>
                        <p >Just drag and drop to edit Notion database items without leaving your calendar.</p>
                    </div>
                    <div className="mt-auto flex justify-end">
                        <Image
                            src="/cardtwo/cardtwo2.png"
                            alt="cardone2"
                            width={500}
                            height={500}

                        />    </div>
                </div>
            </div>
        </main >


    )
}