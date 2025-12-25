import { Brain, Check, Link } from "lucide-react"
import { CARDSELEMENTS_DATA, BELOWSTRINGWITHCHECK_DATA, INSIDEBOXSRING_DATA, INBOXSTRINGWITHCHECK_DATA } from "./constants";

export default function Cardswithswitch() {

    const gridprops = "border border-2 border-gray-400 flex flex-col gap-2 rounded-xl px-8 py-4"
    const boxicon = { Brain }
    return (

        <main className="flex justify-center mt-10">

            <div className="grid grid-cols-4 max-w-[1320px] gap-4 ">



                {CARDSELEMENTS_DATA.map((item, index) => (

                    <div className={` ${gridprops} `} key={index}>

                        <h1 className="font-bold text-xl">{item.header}</h1>
                        <div className="flex  gap-4 ">
                            <p className="text-4xl font-black">{item.pricenumber} </p>
                            <p className="text-gray-400 mt-auto"> {item.pricestring}</p>
                        </div>
                        <p>  {item.pricebelow}</p>
                        <button className="max-w-[300px] border-black border-2 py-1 text-lg  text-white font-bold rounded-lg bg-gray-400">    {item.inbutton} </button>

                        <div className="max-w-[300px] rounded-lg bg-gray-200">

                            <div className="px-4 py-2 flex gap-4 font-bold"> <Brain /> <h1 className="">Notion AI</h1>  </div>
                            {INBOXSTRINGWITHCHECK_DATA.map((item, index) => (

                                <p>{item.desc}</p>
                            ))}
                        </div>

                        {<p className="text-gray-400">  {item.justupperbelowboxstring} </p>}

                    </div>



                ))}




            </div>
        </main>

    )

}