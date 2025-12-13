import Image from "next/image";
import Link from "next/link";

export default function Lastcomp() {
    return (
        <main className="">

            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-[40px]"> Get Notion Calendar for free. </h1>
                <p className="mt=10 text-[20px]"> Unlock a better way to manage your time and life. </p>

                <Link
                    className="text-blue-600 "
                    href="/"
                >  Get Notion Calendar Free ! </Link>
            </div>
            <div className=""> </div>
        </main>
    )
}
