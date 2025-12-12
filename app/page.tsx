import Image from "next/image";
import Link from "next/link";
import Imagecaller from "./components/imagecalling";
import Hero from "./components/hero";
import Videofmonkey from "./components/videosthing";
import Firstfirst from "./components/firstcomponent";
import Gridcardfirst from "./components/firstgridcomp";

export default function Home() {
  return (
    <main >
      <Hero />

      {/* <Videofmonkey /> */}
      <Firstfirst />
      <Gridcardfirst />


    </main>


  )
}
