'use client'
import { Plus } from "lucide-react"
import { useState } from "react"
// This imports the data from the file you created in Step 1
import { listoffaq } from "./faqlist"

export type FaqIt = {
    questons: string;
    answers: string;
}
// 1. Create a sub-component specifically for a single row
// This allows us to use 'useState(false)' safely for each item.
function QuestionItem({ item }: { item: FaqIt }) {
    // Each item now has its own independent switch!
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="border-b border-gray-200 pb-4 cursor-pointer group"
        >
            <div className="font-semibold flex justify-between items-center py-2">
                <h3 className="text-lg">{item.questons}</h3>

                <div className="text-gray-400 group-hover:bg-gray-100 rounded p-1 transition-colors">
                    <Plus
                        className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    />
                </div>
            </div>

            {isOpen && (
                <div className="mt-2 text-gray-600 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {item.answers}
                </div>
            )}
        </div>
    )
}
export default function RealFakin() {
    return (
        <main className="mt-20 max-w-[1000px] mx-auto bg-white p-4">
            <h1 className="text-5xl flex border-b border-gray-300 flex-col items-start pb-4 font-bold">
                Questions & answers
            </h1>
            <div className="flex flex-col mt-10 gap-4">
                {listoffaq.map((item, index) => (
                    // We pass the data to our new sub-component
                    <QuestionItem key={index} item={item} />
                ))}
            </div>
        </main>
    )
}