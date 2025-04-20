import Liner from "./Liner.tsx";
import {content} from "../lib/content.tsx";
import Job from "./Job.tsx";

const Main = () => {
    return (
        <main className="_main flex flex-col h-full w-full bg-white">
            <div className="_header  justify-start items-end hidden sm:flex w-full h-fit text-2xl uppercase px-4 py-7">
                Gregory Iakovlev
            </div>
            <Liner text={"Work Experience"} _className="px-3.5 bg-gray-400"/>
            {content.jobs.map((job, idx) =>
                <Job key={idx} jobExperience={job}/>)
            }
            <Liner text={"Education"} _className="px-3.5 bg-gray-400"/>
            {content.education.map((edu, idx) =>
                <Job key={idx} jobExperience={edu}/>)
            }
            <Job _className="border-t-0 h-full flex-grow"/>
        </main>
    )
}

export default Main;
