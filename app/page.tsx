// on mobile everything is pushed to the edges of the screen, needs fixing 
// you also have the floating boxes left abi 

import Hero from "./components/hero";
import Videofmonkey from "./components/videosthing";
import Firstfirst from "./components/firstcomponent";
import Secondcomp from "./components/secondcomponent";
import Thirdcomp from "./components/thirdcomponet";
import Sixcard from "./components/sixcardscomp";
import Lastcomp from "./components/comp4/component4";
import Frequestions from "./components/FAQ";
export default function Home() {
  return (
    <main >
      <Hero />
      <Videofmonkey />
      <Firstfirst />
      <Secondcomp />
      <Thirdcomp />
      <Sixcard />
      <Lastcomp />
      <Frequestions />
    </main>
  )
}
