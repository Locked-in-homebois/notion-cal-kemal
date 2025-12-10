import Image from "next/image"

export default function Imagecaller() {

return  (

        <Image
          src="/calendardrawing.png"
          width={120}
          height={60}
          alt="notsamecalendardrawing" // descrption 8 whatever
          className="justify-center"  // all the css parts for the image flex item center and shi 
          
        />
        )
        }