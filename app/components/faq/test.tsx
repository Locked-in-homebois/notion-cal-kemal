'use client'
import { Plus } from "lucide-react"
import { useState } from "react"
import { listoffaq, FaqIt } from "./faqlist"

function QuestionItem({ item }: { item: FaqIt }) {
    const [isOpen, setIsOpen] = useState(false)

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
                    <QuestionItem key={index} item={item} />
                ))}
            </div>
        </main>
    )
}