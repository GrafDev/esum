import Liner from "./common/Liner.tsx";
import {content} from "../lib/content.tsx";
import Job from "./common/Job.tsx";

const Main = () => {
    return (
        <main className="_main flex print:hidden flex-col h-full z-10 w-full">
            <div className="_header  justify-start items-end hidden sm:flex w-full h-fit text-2xl uppercase px-4 py-7">
                Gregory Iakovlev
            </div>
            <Liner text={"Work Experience"} _className="px-3.5 bg-gray-400"/>
            <Job jobExperience={content.jobs[0]} _className=""/>
            <Job jobExperience={content.jobs[1]} _className=""/>
            <Job _className="border-t-0 flex-1 hidden z-10"/>
            <Job jobExperience={content.jobs[2]} _className="break-before-page"/>
            <Liner text={"Education"} _className="px-3.5 bg-gray-400"/>
            <Job jobExperience={content.education[0]}/>
            <Job _className="border-t-0 h-full flex-grow"/>
        </main>
    )
}

export default Main;
