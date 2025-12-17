import Image from "next/image";
import Link from "next/link";
export default function Lastcomp() {
    return (

        <main className="flex flex-col items-center md:text-start text-center">
            <h1 className="font-bold text-[40px]"> Get Notion Calendar for free. </h1>
            <p className="text-[20px]"> Unlock a better way to manage your time and life. </p>
            <Link
                className="text-blue-600 mt-4 "
                href="/"
            >  Get Notion Calendar Free ! </Link>
            <div className="max-w-[1000px] w-full mt-10 grid md:grid-cols-2 gap-5 ">
                <div className="bg-gray-100 rounded-2xl py-5">
                    <h1 className="font-bold text-xl px-5 mb-4">Desktop app</h1>
                    <Image className="mx-auto "
                        src="/comp4image1.png"
                        alt="comp4-1"
                        height={400}
                        width={400}
                    // sadece linkleri eklemek falan kaldi sakso SAKSO 
                    />
                    <div className="flex items-start gap-5 mt-8 ml-6">
                        <Link className="border-gray-200 border-2 px-4 py-2 bg-white rounded-xl " href="/"> this is a niga</Link>
                        <Link className="border-gray-200 border-2 px-4 py-2 bg-white rounded-xl" href="/"> where is my niga</Link>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-xl gap-5 py-5">
                    <h1 className="font-bold text-xl px-5  "> Mobile App</h1>
                    <Image className="mx-auto py-5"
                        src="/comp4image2.png"
                        alt="comp4-2"
                        height={300}
                        width={300}
                    />
                    <div className="flex items-start gap-5 ml-6">

                        <Link className="transition-color hover:bg-indigo-500 hover:text-white duration-600 border-gray-200 border-2 px-4 py-2 bg-white rounded-xl " href="/"> this is a niga</Link>
                        <Link className="transition-all hover:scale-115 hover:bg-indigo-500 hover:text-white duration-600  border-gray-200 border-2 px-4 py-2 bg-white rounded-xl" href="/"> where is my niga</Link>
                    </div>
                </div>
            </div>
        </main >
    )
}
