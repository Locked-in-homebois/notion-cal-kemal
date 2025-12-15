import Image from "next/image"
export default function Firstfirst() {
    return (
        // this will be the below video
        <main className="flex flex-col items-center justify-center">
            <h1 className="font-bold md:text-[42px] text-3xl text-center mt-20">Time Management? Simplified.</h1>
            <div className=" bg-gray-100 mt-24 rounded-xl">
                <div className="px-10 py-5 ">
                    <Image className=""
                        src="/comp1icon.png"
                        alt=""
                        width={50}
                        height={50}
                    />
                    <h1 className=" font-semibold text-[22px] " >See your schedule at a glance</h1>
                    <p className=" text-[20px] max-w-[600px] ">Join meetings directly from the menu bar so you can stay focused on the work that matters.</p>
                </div>
                <Image className=" mt-16 rounded-xl"
                    src="/comp1image.png"
                    alt="1st components first photo"
                    width={1000}
                    height={750}
                />
            </div>
        </main>
    )
}