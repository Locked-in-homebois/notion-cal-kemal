import Image from "next/image"
export default function gridcardfirst() {

    return (
        <main className="w-[1000px] h-[1000px] bg-gray-100 flex flex-col ">
            <div className="flex items-center justify-center flex-1">
                <div className=" grid grid-cols-2 grid-rows-2 gap-5  ">
                    <div className="bg-gray-100 rounded-x1 w-full h-full">



                        1

                    </div>
                    <div className="bg-red-700 rounded-x1 w-full h-full">


                        2

                    </div>

                    <div className="bg-blue-700 rounded-x1 w-full h-full">


                        3

                    </div>


                    <div className="bg-gray-100 rounded-x1 w-full h-full">



                        4

                    </div>

                </div>
            </div>
        </main>


    )
}