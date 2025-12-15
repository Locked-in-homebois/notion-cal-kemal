import Image from "next/image"
import Link from "next/link"
export default function Hero() {

    return (<main >
        <div className="flex flex-col items-center justify-center mt-16">
            <Image
                src="/calendardrawing.png"
                alt="notsamecalendardrawing"
                width={120}
                height={60}
            />
            <h1 className="text-[20px] font-semibold ">Notion Calendar</h1>
            <h2 className="font-bold text-[70px]  ">It's time.</h2>
            <p className="text-[20px] md:max-w-[380px] font-[515] max-w-[250px] text-center">All of your commitments, now in one place. Meet the beautifully designed, fully integrated calendar for your work and life.</p>
            <Link className="bg-black text-white rounded-lg px-4 py-2 mt-6" href="/">Get Notion Callendar Free</Link>
        </div>
    </main>
    )


}