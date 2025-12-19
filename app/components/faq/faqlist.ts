'use client'
import { Plus } from "lucide-react"
import { useState } from "react"

export type FaqIt = {
    questons: string;
    answers: string;
}
export const listoffaq: FaqIt[] = [
    {
        questons: "Which calendar provider(s) is Notion Calendar compatible with?"
        , answers: "Currently, Notion Calendar integrates and syncs with Google Calendar accounts and Apple iCloud-synced Calendars. Adding support for other calendar providers such as Outlook is on our roadmap."
    },
    {
        questons: "Is Notion Calendar available on mobile devices?",
        answers: "Yes, Notion Calendar is available for iPhone and Android devices. We know some users are looking for an optimized version for tablet devices, such as iPad, and are working to make Notion Calendar the best experience on all platforms."
    }
    ,
    {
        questons: "Does Notion Calendar bring Google Calendar sync to Notion?",
        answers: "Notion Calendar allows you to view your Notion database items alongside your Google Calendar events. This offers a streamlined way to see project timelines and task due dates alongside other scheduled events. However, importing Google Calendar events directly into a Notion database is not yet possible. We’re always exploring new ways for Notion and calendars to interact. Expect exciting developments soon!"
    }
]




