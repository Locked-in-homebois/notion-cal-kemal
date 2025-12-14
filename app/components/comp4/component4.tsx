import Image from "next/image";
import Link from "next/link";

export default function Lastcomp() {
  const butStyle =
    "bg-white border px-4 py-2 hover:bg-stone-500 hover:text-white transition-colors duration-300 border-gray-400 rounded-xl whitespace-nowrap ";

  return (
    <main className="flex flex-col items-center justify-center w-full py-10">
      <h1 className="font-bold text-[40px] text-center">
        Get Notion Calendar for free.
      </h1>
      <p className="mt-4 text-[20px] text-center">
        Unlock a better way to manage your time and life.
      </p>
      <Link className="text-blue-600 " href="/">
        Get Notion Calendar Free !
      </Link>
      <div className="flex justify-center mt-10">
        <div className="md:grid md:grid-cols-2 flex flex-col gap-7 max-w-[1000px] w-full">
          <div className="bg-stone-100 p-10 flex flex-col gap-5 rounded-xl">
            <h1 className="text-[18px] font-bold ">Desktop App</h1>
            <div className="flex justify-center mt-auto">
              <Image
                className=""
                src="/desktopapp.png"
                width={400}
                height={400}
                alt=""
              />
            </div>
            <div className="flex gap-5 mt-5 ">
              <button className={butStyle}>this is a button</button>
              <button className={butStyle}>this is a button</button>
            </div>
          </div>
          <div className="bg-stone-100 p-10 flex flex-col gap-5 rounded-xl">
            <h1 className="text-[18px] font-bold ">Mobile App</h1>
            <div className="flex justify-center w-full mt-auto">
              <Image
                className=""
                src="/mobileapp.png"
                width={250}
                height={250}
                alt=""
              />
            </div>
            <div className="flex gap-5 mt-5 ">
              <button className={butStyle}>this is a button</button>
              <button className={butStyle}>this is a button</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
