import { MARKALOGOS_DATA } from "./constants";
import Image from "next/image";
export default function HeroOfPricing() {
    return (

        <main className="flex flex-col items-center">
            <h1 className="text-6xl text-center tracking-tighter  max-w-[900px] font-black">One tool for your whole company.Free for teams to try.</h1>
            <p className="text-sm text-gray-500 mt-10">Trusted by teams at </p>
            <div className="flex gap-4 mt-4 justify-center"  >
                {MARKALOGOS_DATA.map((logo, index) => (

                    <Image key={index} src={`/${logo.image}`} className="" alt={"the markas"} width={logo.width} height={logo.height} />

                ))}
            </div>
        </main>

    )
}