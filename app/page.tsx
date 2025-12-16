import Image from "next/image";
import Link from "next/link";
import Imagecaller from "./components/imagecalling";
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
      <Lovedbyall />

    </main>


  )
}
