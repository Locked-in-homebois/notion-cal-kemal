'use client'
import { Plus } from "lucide-react"
import React from "react"
import { useState } from "react"

interface thePropsProps {
    quesions: string
    answeres: string
}

const looperpropertiepart: React.FC<thePropsProps> = ({ quesions, answeres }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);
    return (

        <div className="flex flex-col container justify-center max-w-[1000px]" >

            <button onClick={toggleMenu} className="flex justify-end" >
                <h1 className="text-lg font-medium">{quesions}</h1>
                <Plus className={`duration-300  transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`} />
            </button>

            {isOpen && (

                <p className="">{answeres}</p>
            )}
        </div>
        // : React.FC<QAItemProps> = ({ question, answer }) => {
    )
}
export default looperpropertiepart;
