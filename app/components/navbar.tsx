import Link from "next/link"

export default function TopNavbarTrying() {
  return (
    <nav className="sticky items-center justify-center flex gap-6 p-4 border-b">
      <Link href="/">Mail</Link>
      <Link href="/">Calendar</Link>
      <Link href="/">AI</Link>
      <Link href="/">Enterprise</Link>
      <Link href="/">Pricing</Link>
     <Link href="/">Explore</Link>
     <Link href="/">Request a Demo</Link>

    </nav>
  )
}