import avatar from "../../assets/iam2.png";
import Liner from "../common/Liner.tsx";
import {content} from "../../lib/content.tsx";
import Trait from "../common/Trait.tsx";
import Job from "../common/Job.tsx";
import ContentBlok from "../common/ContentBlok.tsx";

interface PartFirstProps {
    _className?: string;
}
const PartFirst = ({_className}:PartFirstProps) => {
    return (
        <div className={`_part1 flex justify-center relative items-start min-h-screen break-inside-avoid w-[1100px] mx-auto ${_className}`}>
            <div className="_sidebar flex flex-col w-60 bg-gray-500 mb-0 z-10">
                <div className="_header_part_sidebar  w-60 h-56 aspect-square overflow-hidden">
                    <img src={avatar} alt="Gregory Iakovlev" className="w-full h-full object-cover"/>
                </div>
                <Liner text={"SUMMARY"} _className="px-3.5 bg-gray-600 mb-5"/>
                <div className="flex flex-col justify-start items-start w-full h-fit mb-9">
                    {content.traits.map((trait, index) => (
                        <Trait key={index} title={trait.title} _className="px-3.5 mb-2"
                               description={trait.description}/>
                    ))}
                </div>
                <ContentBlok items={content.topics} title={"Domains of expertise"}
                             _className="mb-9 break-inside-avoid"/>

            </div>
            <div className="_main flex flex-col w-full bg-white relative">
                <div
                    className="_header justify-start items-end z-20 bg-white flex w-full h-fit text-2xl uppercase px-4 py-7">
                    Gregory Iakovlev
                </div>
                <Liner text={"Work Experience"} _className="px-3.5 bg-gray-400 z-10"/>
                <Job jobExperience={content.jobs[0]} _className={"z-10"}/>
                <Job jobExperience={content.jobs[1]} _className={"z-10"}/>
                <Job jobExperience={content.jobs[2]} _className={"z-10 print:hidden"}/>
            </div>
            <div className="_bg_sidebar w-60 h-full bg-gray-500 absolute z-5 left-0 top-0"/>
            <div className="_bg_main w-48 h-full bg-gray-100 absolute z-5 right-0 top-0 "/>

        </div>
    )
}

export default PartFirst;
