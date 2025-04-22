import {content} from "../../lib/content.tsx";
import Liner from "../common/Liner.tsx";
import Contacts from "../common/Contacts.tsx";
import Job from "../common/Job.tsx";
import ContentBlok from "../common/ContentBlok.tsx";

const PartSecond = () => {
    return (

        <div
            className="_part2 flex justify-center relative break-inside-avoid items-start min-h-screen w-[1100px] mx-auto">
            <div className="_sidebar  flex flex-col w-60 bg-gray-500 mb-0 z-10">
                <ContentBlok items={content.languages} title={"Languages"}
                             _className="mb-9 break-inside-avoid"/>
                <ContentBlok items={content.interests} title={"Interests"}
                             _className="mb-9 break-inside-avoid"/>
                <Liner text={"Contacts"} _className="px-3.5 bg-gray-600 mb-5"/>
                <Contacts _className="px-3.5 bg-gray-500 mb-9 flex-grow "/>
            </div>
            <div className="_main flex flex-col w-full  bg-white relative">
                <Liner text={"Work Experience"} _className="px-3.5 hidden print:block bg-gray-400 z-10"/>
                <Job jobExperience={content.jobs[2]} _className="hidden print:flex z-10"/>
                <Liner text={"Education"} _className="px-3.5 bg-gray-400 z-10"/>
                <Job jobExperience={content.education[0]} _className={"z-10"}/>
                <Job _className="border-t-0 h-full flex-grow h-full z-10 "/>
            </div>
            <div className="_bg_sidebar w-60 h-full bg-gray-500 absolute z-5 left-0 top-0"/>
            <div className="_bg_main w-48 h-full bg-gray-100 absolute z-5 right-0 top-0 "/>

        </div>
    )
}

export default PartSecond;
