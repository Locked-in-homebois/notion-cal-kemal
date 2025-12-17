//  bigger div that covers everything and when i gap grids /  gap all of them equally
// hint, col-span

import Image from "next/image";
export default function Firstfirst() {
	return (
		<div className="flex flex-col items-center mt-10 justify-center px-5">
			<h1 className="font-bold md:text-[42px] text-3xl text-center mt-20">
				Time Management? Simplified.
			</h1>
			<div className=" bg-gray-100 mt-24 rounded-xl">
				<div className="px-10 py-5 ">
					<Image
						className=""
						src="/comp1icon.png"
						alt=""
						width={50}
						height={50}
					/>
					<h1 className=" font-semibold text-[22px] ">
						See your schedule at a glance
					</h1>
					<p className=" text-[20px] max-w-[600px] ">
						Join meetings directly from the menu bar so you can stay
						focused on the work that matters.
					</p>
				</div>
				<Image
					className=" mt-16 rounded-xl"
					src="/comp1image.png"
					alt="1st components first photo"
					width={1000}
					height={750}
				/>
			</div>
			<div className="flex items-center justify-center mt-20">
				<div className="grid md:grid-cols-2 gap-5 max-w-[1000px] w-full ">
					<div className="bg-gray-100 rounded-xl">
						<div className="px-10 py-5 ">
							<Image
								src="/cardone/cardone1icon.png"
								alt="icon1"
								width={40}
								height={40}
							/>
							<h1 className="font-bold text-[20px]">
								Built-in Scheduling
							</h1>
							<p className="">
								Send your availability and scheduling link to
								let others book time with you.
							</p>
						</div>
						<Image
							src="/cardone/cardone1.png"
							alt="cardone1"
							width={500}
							height={500}
							className="px-6 mt-10"
						/>
					</div>
					<div className="bg-gray-100 rounded-xl flex flex-col w-full">
						<div className="px-10 py-5">
							<Image
								src="/cardone/cardone2icon.png"
								alt="card1icon2"
								width={40}
								height={40}
							/>
							<h1 className="font-bold text-[20px]">
								{" "}
								Work across time zones
							</h1>
							<p>
								Thoughtfully collaborate with global teams as
								you visualize your day across time zones.{" "}
							</p>
						</div>
						<Image
							src="/cardone/cardone2.png"
							alt="cardone2"
							width={500}
							height={500}
							className="mt-10"
						/>
					</div>
					<div className="bg-gray-100 rounded-xl w-full flex flex-col">
						<div className=" px-10 py-5 mt-10">
							<Image
								src="/cardone/cardone3icon.png"
								alt="card1icon3"
								width={50}
								height={50}
							/>
							<h1 className="font-bold text-[20px]">
								{" "}
								Modern design{" "}
							</h1>
							<p className="text-[16px] max-w-[300px] mt-2">
								{" "}
								Use command menu and shortcuts for efficient
								workflows.
							</p>
						</div>
						<Image
							src="/cardone/cardone3.png"
							alt="cardone3"
							width={500}
							height={500}
							className="rounded-2xl flex mt-auto"
						/>
					</div>
					<div className="bg-gray-100 rounded-xl w-full flex flex-col">
						<div className="px-10 py-5 ">
							<Image
								src="/cardone/cardone4icon.png"
								alt="card1icon4"
								width={50}
								height={50}
							/>
							<h1 className="font-bold text-[20px]">
								{" "}
								Available in 12 languages{" "}
							</h1>
							<p>
								Supports English, Japanese, Korean, French,
								German, Spanish, Portuguese, Danish, Dutch,
								Finnish, Norwegian, and Swedish… with more on
								the way!
							</p>
						</div>
						<Image
							className="mt-10 rounded-2xl"
							src="/cardone/cardone4.png"
							alt="cardone4"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
