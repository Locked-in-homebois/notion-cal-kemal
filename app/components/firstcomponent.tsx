import Image from "next/image"
export default function Firstfirst() {
    return (
        // this will be the below video
        <main className="">
            <h1 className="font-bold text-[35px] flex justify-self-center items-center mt-20">Time Management? Simplified.</h1>
            <div className="grid bg-gray-100  mt-15 flex 
                justify-self-center text-white  rounded-[12]">

                <div className="px-10 py-5 ">
                    <Image className=""
                        src={"/iconoffirstcomp.png"}
                        alt={""}
                        width={50}
                        height={50}
                    />
                    <h1 className=" font-semibold text-[22px] text-black " >See your schedule at a glance</h1>
                    <p className=" text-[20px] text-black  max-w-[600] ">Join meetings directly from the menu bar so you can stay focused on the work that matters.
                    </p>
                </div>
                <div className="flex justify-self-center items-center mt-15 rounded-[12]">
                    <Image
                        src={"/firstfirst.png"}
                        alt={"the second components first photo"}
                        width={1000}
                        height={750}
                    />

                </div>


            </div>




        </main>
    )
}