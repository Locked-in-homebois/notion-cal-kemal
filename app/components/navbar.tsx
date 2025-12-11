import Link from "next/link"
import Image from "next/image"
export default function TopNavbarTrying() {
  return (

    <nav className="sticky font-semibold items-center justify-center flex gap-8 p-4 border-b">
      <Link href="/">
        <Image
                  src="/notionsymbol.png"
                  width={60}
                  height={30}
                  alt="topleftsymbol" // descrption 8 whatever
                  className="absolute left-4"  // all the css parts for the image flex item center and shi         
                />
      </Link>
      <Link href="/">Mail</Link>
      <Link href="/">Calendar</Link>
      <Link href="/">AI</Link>
      <Link href="/">Enterprise</Link>
      <Link href="/">Pricing</Link>
      <Link href="/">Explore</Link>
      <Link href="/">Request a Demo</Link>
      <div className="absolute right-4 ">
        <Link className="mr-3" href="/">Log in</Link>
        <Link className="bg-black text-white rounded-[8] px-4 py-2 " href="/">Get Notion Calendar Free</Link>
      </div>
    </nav>




  )
}