// fix your file and import names 
// on mobile everything is pushed to the edges of the screen, needs fixing 
// you need to combine the grids with the top parts of the page, like firstfirst and gridcardfirst 

import Image from "next/image";
import Link from "next/link";
import Hero from "./components/hero";
import Videofmonkey from "./components/videosthing";
import Firstfirst from "./components/firstcomponent";
import Gridcardfirst from "./components/firstgridcomp";
import Secondcomp from "./components/secondcomponent";
import Gridcardsecond from "./components/secondgripcomponent";
import Thirdcomp from "./components/thirdcomponet";
import ThirdGridcomp from "./components/thirdgridcomp";
import Sixcard from "./components/sixcardscomp";
import Lastcomp from "./components/comp4/component4";
import Lovedbyall from "./components/footer";

export default function Home() {

  return (
    <main >
      <Hero />
      <Videofmonkey />
      <Firstfirst />
      <Gridcardfirst />
      <Secondcomp />
      <Gridcardsecond />
      <Thirdcomp />
      <ThirdGridcomp />
      <Sixcard />
      <Lastcomp />


    </main>


  )
}
