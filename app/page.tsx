import Image from "next/image";
import Link from "next/link";
import Imagecaller from "./components/imagecalling";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center ">
      <div className="max-w-[500px] ">
        <Image
          src="/calendardrawing.png"
          alt="notsamecalendardrawing"
          width={120}
          height={60}
        />
        <Hero />

      </div>


    </main>


  )
}
