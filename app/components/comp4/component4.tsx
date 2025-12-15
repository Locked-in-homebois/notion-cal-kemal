import Image from "next/image";
import Link from "next/link";

export default function Lastcomp() {
    return (
        <main className="flex flex-col items-center text-center">
            <h1 className="font-bold text-[40px]"> Get Notion Calendar for free. </h1>
            <p className="text-[20px]"> Unlock a better way to manage your time and life. </p>
            <Link
                className="text-blue-600 mt-4 "
                href="/"
            >  Get Notion Calendar Free ! </Link>
            <div className="max-w-[1000px] w-full mt-10 grid grid-cols-2 gap-5 ">
                <div className="bg-gray-100  rounded-2xl ">
                    <h1 className="font-bold text-xl text-start p-5">Desktop app</h1>
                    <div className="grid justify-center" >
                        <Image
                            src="/comp4image1.png"
                            alt="comp4-1"
                            height={400}
                            width={400}
                        // sadece linkleri eklemek falan kaldi sakso bir de paragrafi basa sabitlemek
                        />
                    </div>
                </div>
                <div className="bg-gray-100 rounded-xl flex flex-col items-center ">
                    <h1 className="font-bold text-xl p-5 "> Mobile App</h1>
                    <Image
                        src="/comp4image2.png"
                        alt="comp4-2"
                        height={300}
                        width={300}
                    />
                </div>
            </div>
        </main >
    )
}
