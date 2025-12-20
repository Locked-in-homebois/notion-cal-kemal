'use client'
import { Plus } from "lucide-react"
import React from "react"
import { useState } from "react"

interface thePropsProps {
    quesions: string
    answeres: string
}

const [isOpen, setIsOpen] = useState(false)
const toggleMenu = () => setIsOpen((prev) => !prev);


const looperpropertiepart: React.FC<thePropsProps> = ({ quesions, answeres }) => {

    return (

        <div className="flex flex-col" >

            <button onClick={toggleMenu} className="" >
                <h1>{quesions}</h1>
                <Plus className={`duration-300 transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`} />
            </button>

            isOpen && (

            <p>{answeres}</p>
            )

        </div>

        // : React.FC<QAItemProps> = ({ question, answer }) => {




    )
}
export default looperpropertiepart;
