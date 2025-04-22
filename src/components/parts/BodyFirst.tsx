import Liner from "../common/Liner.tsx";
import {content} from "../../lib/content.tsx";
import Job from "../common/Job.tsx";

const BodyFirst = () => {
    return (
        <main className="_main flex flex-col min-h-screen bg-white relative">
            <div className="_header justify-start items-end z-20 bg-white hidden sm:flex w-full h-fit text-2xl uppercase px-4 py-7">
                Gregory Iakovlev
            </div>
            <Liner text={"Work Experience"} _className="px-3.5 bg-gray-400 z-10"/>
            {content.jobs.map((job, idx) =>
                <Job key={idx} jobExperience={job} _className={"z-10"}/>)
            }
            <Liner text={"Education"} _className="px-3.5 bg-gray-400 z-10"/>
            {content.education.map((edu, idx) =>
                <Job key={idx} jobExperience={edu} _className={"z-10"}/>)
            }
            <Job _className="border-t-0 h-full flex-grow h-full z-10 "/>
            <div className="_bg-100 w-48 bg-gray-100 min-h-full absolute right-0 top-0 bottom-0 z-5"/>
        </main>
    )
}

export default BodyFirst;
