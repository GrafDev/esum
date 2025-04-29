import avatar from "../../assets/iam2.png";
import Liner from "../common/Liner.tsx";
import {content} from "../../lib/content.tsx";
import Trait from "../common/Trait.tsx";
import Job from "../common/Job.tsx";
import ContentBlock from "../common/ContentBlock.tsx";

interface PartFirstProps {
    _className?: string;
}

const PartFirst = ({_className}: PartFirstProps) => {
    console.log("PartFirst", _className);
    return (
        <div className="_part1 grid justify-center relative grid-cols-[22%_78%]
        print:grid-cols-[30%_70%] print:min-h-screen
        ">
            <div className="_sidebar flex flex-col w-full z-10 bg-gray-500
            ">
                <div className="_header_part_sidebar w-full aspect-square overflow-hidden
                ">
                    <img src={avatar} alt="Gregory Iakovlev" className="h-full  object-cover"/>
                </div>
                <Liner text={"SUMMARY"} _className="px-3.5 bg-gray-600 mb-5"/>
                <div className="flex flex-col justify-start items-start w-full h-fit mb-9
                print:break-inside-avoid
                ">
                    {content.traits.map((trait, index) => (
                        <Trait key={index} title={trait.title} _className="px-3.5 mb-2"
                               description={trait.description}/>
                    ))}
                </div>
                <ContentBlock items={content.topics} title={"Domains of expertise"}
                              _className="mb-9 break-inside-avoid
                              print:mb-0 print:h-fit
                              "/>

            </div>
            <div className="_main flex flex-col w-full bg-white relative
            print:break-inside-avoid
            ">
                <div
                    className="_header justify-start items-end z-20 bg-white flex w-full text-2xl  uppercase px-4 py-7
                    print:text-3xl
                    ">
                    Gregory Iakovlev
                </div>
                <Liner text={"Work Experience"} _className="px-3.5 bg-gray-400 z-10 "/>
                <Job jobExperience={content.jobs[0]} _className={"z-10"}/>
                <Job jobExperience={content.jobs[1]} _className={"z-10 print:h-full"}/>
                <Job jobExperience={content.jobs[2]} _className={"z-10 h-full print:hidden"}/>
            </div>
        </div>
    )
}

export default PartFirst;
