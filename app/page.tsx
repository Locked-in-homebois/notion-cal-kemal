import Image from "next/image";

export default function Home() {
  return (
    <div className="flex item-center justify-center mt-30"> 

      <Image

      src="/calendardrawing.png"
      width={120}
      height={60}
      alt="notsamecalendardrawing" // descrption 8 whatever
      className="idkwhatwasthis"  // all the css parts for the image flex item center and shi 

        />

    </div>
  )
}
