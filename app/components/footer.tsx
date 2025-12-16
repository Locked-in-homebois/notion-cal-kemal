import Image from "next/image"
import { Instagram } from "lucide-react"
import Link from "next/link"
export default function Lovedbyall() {

    return (

        <main>

            <div className="w-full border-t border-gray-600 mt-40">

                <div className="grid md:grid-cols-5 grid-cols-2 mt-20">

                    <div className="grid justify-center ">
                        <Image
                            width={200}
                            src={"/notionfooter.png"}
                            height={200}
                            alt="image on footer"
                        />
                        <div className="mt-10 flex gap-3">
                            <Link href="/">  <Instagram />     </Link>
                            <Link href="/">  <Instagram />     </Link>
                            <Link href="/">  <Instagram />     </Link>
                            <Link href="/">  <Instagram />     </Link>
                            <Link href="/">  <Instagram />     </Link>
                        </div>

                        <Link href="/" className="text-center rounded-md max-w-[150px] border mt-10 bg-gray-100 "> English "US" ^ </Link>
                        <p className="mt-6 text-gray-400 text-sm">Cookie Settings</p>
                        <p className="mt-6 text-gray-400 text-sm">© 2025 Notion Labs, Inc.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-lg font-[505]">Company</h1>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> About us</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/">Careers</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Security</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Status</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Your privacy rights</Link>

                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-lg font-[505]">Download</h1>
                        <Link className="text-sm text-gray-500 hover:underline" href="/">iOS & Android
                        </Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Mac & Windows</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/">
                            Calendar</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Web Clipper</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-lg font-[505]">Resources</h1>
                        <Link className="text-sm text-gray-500 hover:underline" href="/">Help Center</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Pricing</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Blog</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/">  Community</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/">Integrations</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Templates</Link>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Partner Programs</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-lg font-[505]">Notion For</h1>
                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Enterprise</Link>

                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Small Business</Link>

                        <Link className="text-sm text-gray-500 hover:underline" href="/"> Personal</Link>

                        <Link className="text-md font-bold hover:underline hover:text-blue-500 mt-10" href="/"> Explore More !!!</Link>

                    </div>


                </div>


            </div>

        </main>



    )


}