import Image from "next/image"
import Link from "next/link"
export default function Hero() {

    return (<main className="max-w-[380px] ">
        <div className="flex flex-col items-center justify-center mt-15">
            <Image
                src="/calendardrawing.png"
                alt="notsamecalendardrawing"
                width={120}
                height={60}
            />

            <h1 className="text-[20px] font-semibold mt-1">Notion Calendar</h1>
            <h2 className="font-bold text-[70px] mt-3 ">It's time.</h2>
            <p className="text-[20px] mt-4 ">All of your commitments, now in one place. Meet the beautifully designed, fully integrated calendar for your work and life.</p>
            <Link className="bg-black text-white rounded-[8] px-4 py-2 mt-5" href="/">Get Notion Callendar Free</Link>


        </div>

    </main>
    )


}