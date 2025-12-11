import Link from "next/link"
import Image from "next/image"
export default function TopNavbarTrying() {
  return (

    <nav className="sticky top-0 bg-white font-semibold items-center justify-center flex gap-8 p-4 shadow-md grid grid-cols-3 ">
      <Link href="/">
        <div className="flex items-center justify-self-start">
          <Image
            src="/notionsymbol.png"
            width={60}
            height={30}
            alt="topleftsymbol" // descrption 8 whatever
          // all the css parts for the image flex item center and shi         
          />

        </div>

      </Link>
      <div className="flex gap-5 justify-self-center whitespace-nowrap">
        <Link href="/">Mail</Link>
        <Link href="/">Calendar</Link>
        <Link href="/">AI</Link>
        <Link href="/">Enterprise</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Explore</Link>
        <Link href="/">Request A Demo</Link>
      </div>
      <div className="flex items-center justify-self-end">
        <Link className="mr-3" href="/">Log in</Link>
        <Link className="bg-black text-white rounded-[8] px-4 py-2 " href="/">Get Notion Calendar Free</Link>
      </div>
    </nav>
  )
}