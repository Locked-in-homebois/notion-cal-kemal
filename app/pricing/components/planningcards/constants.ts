import { Brain, Check } from "lucide-react";
import { cardselements, box, inboxstringwithcheck, belowstringwithcheck } from "./types";


export const CARDSELEMENTS_DATA: cardselements[] = [
    {
        header: "Free",
        price: "  $0 per member/month  ",
        pricebelow: "For individuals to organize personal projects and life.",
        inbutton: "Sign up",
        justupperbelowboxstring: ""
    },
    {
        header: "Plus",
        price: "  $10 per member/month  ",
        pricebelow: " For small teams and professionals to work together. ",
        inbutton: "Get Started",
        justupperbelowboxstring: "Everything in Free"

    },
    {
        header: "Business",
        price: "  $20 per member/month  ",
        pricebelow: "For growing businesses to streamline teamwork.",
        inbutton: "Get Started",
        justupperbelowboxstring: "Everything in Plus"
    },
    {
        header: "Enterprise",
        price: "  $? Custom Pricing  ",
        pricebelow: "For organizations to operate with scalability, control,and security.",
        inbutton: "CALL US!",
        justupperbelowboxstring: "Everything in Business"

    },
]


export const INSIDEBOXSRING_DATA: box[] = [

    {
        header: " Notion AI ",
        icon: Brain
    },
    {
        header: " Notion AI ",
        icon: Brain
    },
    {
        header: " Notion AI ",
        icon: Brain
    }
    ,
    {
        header: " Notion AI ",
        icon: Brain
    }
]

export const INBOXSTRINGWITHCHECK_DATA: inboxstringwithcheck[] = [{
    desc: "Trial of Notion AI",
    icon: Check

},
{
    desc: "Trial of Notion AI",
    icon: Check

},
{
    desc: "Agent",
    icon: Check

}, {
    desc: "Enterprise search",
    icon: Check

}, {
    desc: "AI meeting notes",
    icon: Check

},
{
    desc: "Agent",
    icon: Check

},
{
    desc: "Enterprise search",
    icon: Check

},
{
    desc: "AI meeting notes",
    icon: Check

},
{
    desc: "Zero data retention with LLM providers",
    icon: Check

},
]

export const BELOWSTRINGWITHCHECK_DATA: belowstringwithcheck[] = [

    {
        desc: "",
        icon: Check
    },
    {
        desc: "",
        icon: Check
    },

    {
        desc: "",
        icon: Check
    },
    {
        desc: "",
        icon: Check
    },
    {
        desc: "",
        icon: Check
    },
    {
        desc: "",
        icon: Check
    },

]