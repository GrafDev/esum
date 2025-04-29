import {content} from "../../lib/content.tsx";
import Liner from "../common/Liner.tsx";
import Contacts from "../common/Contacts.tsx";
import Job from "../common/Job.tsx";
import ContentBlock from "../common/ContentBlock.tsx";

interface PartSecondProps {
    _className?: string;
}

const PartSecond = ({_className}: PartSecondProps) => {
    return (

        <div
            className={`${_className} _part2 hidden md:grid justify-center relative h-full items-start break-inside-avoid grid-cols-[22%_78%]
        print:grid-cols-[30%_70%] print:min-h-screen print:grid
`}>
            <div className="_sidebar flex flex-col w-full h-full z-10 bg-gray-500
            ">
                    <ContentBlock items={content.languages} title={"Languages"}
                                  _className="mb-9 break-inside-avoid"/>
                    <ContentBlock items={content.interests} title={"Interests"}
                                  _className="mb-9 break-inside-avoid"/>
                    <Liner text={"Contacts"} _className="px-3.5 bg-gray-600 mb-5"/>
                    <Contacts _className="px-3.5 bg-gray-500 mb-9 flex-grow "/>
            </div>
            <div className="_main flex flex-col w-full h-full bg-white

            ">
                    <Liner text={"Work Experience"} _className="px-3.5 hidden print:block bg-gray-400 z-10"/>
                    <Job jobExperience={content.jobs[2]} _className="hidden print:flex z-10"/>
                    <Liner text={"Education"} _className="px-3.5 bg-gray-400 z-10"/>
                    <Job jobExperience={content.education[0]} _className={"h-full z-10"}/>
            </div>
        </div>
    )
}

export default PartSecond;
