import { Brain, Check } from "lucide-react";
import { PricingTier } from "./types";

interface CardProps {
	data: PricingTier;
}

export default function Card({ data }: CardProps) {
	return (
		<div className="bg-white border border-gray-600 rounded-xl px-5 py-2 flex flex-col items-center justify-center">
			<h2 className="font-bold text-xl"> {data.plan} </h2>
			<div className="flex gap-4">
				<h1 className="text-3xl font-black">{data.price}</h1>
				<p className="text-gray-600 font-extralight">
					{data.pricedesc}
				</p>
			</div>
			<p className="">{data.desc}</p>
			<button
				className={`w-full px-4 py-2 ${data.btn.text.color} ${data.btn.color}`}
			>
				{data.btn.text.lable}
			</button>
			<div className="bg-gray-400 px-5 py-3 text-start">
				<div className="flex gap-4">
					<Brain size={18} />
					<h1 className="text-cyan-400">Notion AI</h1>
				</div>
				<div className="flex gap-4">
					<Check />
					<p> {data.thingiesinbox} </p>
				</div>
			</div>
			<p>{data.featuresHeader} </p>
			<div className="flex gap-4">
				<Check />
				<p className="underline underline-offset-2">{data.features} </p>
			</div>
		</div>
	);
}
