import Image from "next/image"

export default function Hero() {

    return (<main className="max-w-[350px] ">
        <div className="flex flex-col items-center justify-center">
            <Image
                src="/calendardrawing.png"
                alt="notsamecalendardrawing"
                width={120}
                height={60}
            />

            <h1 className="text-[20px] mt-3">Notion Calendar</h1>
            <h2 className="font-bold text-[70px] mt-6 ">It's time</h2>

        </div>

    </main>
    )


}