'use client'
import { Plus } from "lucide-react"
import React from "react"
import { useState } from "react"

interface thePropsProps {
    quesions: string
    answeres: string
    coloredolores: string
    textcolores: string
}

const looperpropertiepart: React.FC<thePropsProps> = ({ quesions, answeres, coloredolores, textcolores }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);
    return (

        <div className={`flex flex-col container px-4 py-2 bg-${coloredolores} text-${textcolores} border-b ring-offset-1 border-white  max-w-[1000px]`} >

            <button onClick={toggleMenu} className=" flex justify-between" >
                <h1 className={` text-xl  font-medium `}>{quesions}</h1>
                <Plus className={`duration-300  transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`} />
            </button>

            {isOpen && (

                <p >{answeres}</p>
            )}
        </div>

        // : React.FC<QAItemProps> = ({ question, answer }) => {
    )
}
export default looperpropertiepart;
