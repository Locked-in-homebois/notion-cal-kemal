import Link from "next/link"

export default function TopNavbarTrying() {
    return (
      <nav className="sticky flex gap-4 p-4 border-b">
        <Link href="/">Mail</Link>
      </nav>
    )
  }