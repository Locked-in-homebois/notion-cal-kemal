import Image from "next/image"
export default function Gridcardsecond() {

    return (
        <main className="flex items-center justify-center mt-10 ">
            <div className=" w-[1000px] h-[500px] grid grid-cols-2 gap-5 ">
                <div className="bg-gray-100 rounded-xl w-full flex flex-col px-10 py-5">
                    <Image
                        src="/cardtwo/cardtwoicon1.png"
                        alt="card2icon1"
                        width={40}
                        height={40}
                    />
                    <h1 className="font-bold text-[20px] ">Connect and create Notion docs</h1>
                    <p className="">With info from Notion right in your calendar, you’ll always have full context for every meeting.</p>

                    <Image
                        src="/cardtwo/cardtwo1.png"
                        alt="cardtwo1"
                        width={500}
                        height={500}
                        className="mt-auto max-w flex justify-end"
                    />

                </div>
                <div className="bg-gray-100 rounded-xl flex flex-col w-full px-10 py-5 ">
                    <Image
                        src="/cardtwo/carddtwoicon2.png"
                        alt="card2icon2"
                        width={40}
                        height={40}
                    />
                    <h1 className="font-bold text-[20px]"> Update project timelines</h1>
                    <p >Just drag and drop to edit Notion database items without leaving your calendar.</p>
                    <div className="mt-auto flex justify-end">
                        <Image
                            src="/cardtwo/cardtwo2.png"
                            alt="cardone2"
                            width={500}
                            height={500}
                            className="block w-full h-auto object-contain"
                        />    </div>
                </div>
            </div>
        </main >


    )
}