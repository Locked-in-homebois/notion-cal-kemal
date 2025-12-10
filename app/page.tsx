import Image from "next/image";
import Link from "next/link";
import TopNavbarTrying from "./components/navbar";
import Imagecaller from "./components/imagecalling";
import Hero from "./components/hero";

export default function Home() {
  return (

    <main>
      <TopNavbarTrying />
      <Hero/>
      <Image src={"/calendardrawing.png"} width={300} height={200} alt={"notsamecalendardrawing"}/>

    </main>


  )
}
