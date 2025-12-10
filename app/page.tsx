import Image from "next/image";
import Link from "next/link";
import TopNavbarTrying from "./components/navbar";

export default function Home() {
  return (
      


    <div className="flex item-center justify-center mt-30">
      <TopNavbarTrying/>  
      <Image
        src="/calendardrawing.png"
        width={120}
        height={60}
        alt="notsamecalendardrawing" // descrption 8 whatever
        className="idkwhatwasthis"  // all the css parts for the image flex item center and shi 
      />
      <div>
        <h1 className="text-lg">  Time is now  </h1>
      </div>
    </div>

    






  )
}
