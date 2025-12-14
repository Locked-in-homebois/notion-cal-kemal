import Image from "next/image";
import Link from "next/link";

export default function Lastcomp() {
    return (
        <main className="flex flex-col justify-center items-center">
            <div className="flex flex-col">
                <h1 className="font-bold text-[40px]"> Get Notion Calendar for free. </h1>
                <p className="mt-10 text-[20px]"> Unlock a better way to manage your time and life. </p>
                <Link
                    className="text-blue-600 mt-5 "
                    href="/"
                >  Get Notion Calendar Free ! </Link>
            </div>


            <div className="w-[1000px] h-[500px] bg-gray-100 flex">
                <div className="grid grid-rows-2 gap-5 ">
                    <div className="bg-gray-100 rounded-xl w-full h-full flex flex-col">
                        <div>
                            <h1 className="font-bold text-2xl p-5">Desktop app</h1>
                            <Image
                                src="/comp4image1.png"
                                alt="comp4-1"
                                height={300}
                                width={300}
                            />
                        </div>

                        <div>
                            <h1 className="font-bold text-2xl p-5"> Mobile App</h1>
                            <Image
                                src="/comp4image2.png"
                                alt="comp4-2"
                                height={300}
                                width={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}
