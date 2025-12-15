import Image from "next/image"
export default function secondcomp() {

    return (
        <main className="flex flex-col justify-center items-center ">
            <h1 className="font-bold text-[45px] flex text-center justify-center max-w-[480px] tracking-tighter">Fully integrated with your Notion workspace.</h1>
            <div className=" bg-gray-100 mt-16 max-w-[1000px] w-full rounded-xl ">
                <div className="px-10 py-5  ">
                    <Image className=""
                        src="/comp2icon.png"
                        alt={""}
                        width={45}
                        height={45}
                    />
                    <h1 className=" font-semibold text-[22px] " >Manage your time and work, together.</h1>
                    <p className="text-[20px] max-w-[600px] ">See deadlines and project timelines alongside your calendar events so you know where to focus your efforts.</p>
                </div >
                <div className="flex justify-end mt-10">
                    <Image
                        src="/comp2image.png"
                        alt={"the second components first photo"}
                        width={750}
                        height={500}
                        className="w-auto"
                    />
                </div>
            </div>
        </main>





    )


}