import Image from "next/image"
export default function thirdcomp() {
    return (
        <main className="flex flex-col items-center">
            <h1 className="font-bold text-[45px] text-center tracking-tighter">Work and life, playing nice. </h1>
            <div className=" bg-gray-100  mt-14 justify-center max-w-[1000px] w-full h-auto rounded-xl">
                <div className="px-10 py-5 ">
                    <Image className=""
                        src="/comp3icon.png"
                        alt={""}
                        width={45}
                        height={45}
                    />
                    <h1 className=" font-semibold text-[22px] text-black " >See all your commitments in the same place
                    </h1>
                    <p className=" text-[20px] text-black  max-w-[600] ">No more accidental conflicts between work and personal events.
                    </p>
                </div  >
                <div className="flex justify-center ">
                    <Image
                        src="/comp3image.png"
                        alt={"the second components first photo"}
                        width={750}
                        height={500}
                        className="block w-auto h-auto object-contain"
                    />
                </div>
            </div>
        </main>





    )


}