import Image from "next/image";
import Link from "next/link";
import TopNavbarTrying from "./components/navbar";
import Imagecaller from "./components/imagecalling";
import Hero from "./components/hero";

export default function Home() {
  return (

    <main>
      <TopNavbarTrying />
      <div className="flex items-center justify-center justify">
        <Image
          src="/calendardrawing.png"
          alt="notsamecalendardrawing" 
          width={120}
          height={60}
          
          /> 
        
          

         </div>


      <Hero />




    </main>


  )
}
