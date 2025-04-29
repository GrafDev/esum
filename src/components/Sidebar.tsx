import avatar from "../assets/iam2.png";
import Liner from "./common/Liner.tsx";
import {content} from "../lib/content.tsx";
import Trait from "./common/Trait.tsx";
import Contacts from "./common/Contacts.tsx";
import ContentBlock from "./common/ContentBlock.tsx";

const Sidebar = () => {
    return (
        <div className="_sidebar  flex print:hidden flex-col min-h-screen w-60 z-10 bg-gray-500 mb-0">
            <div className="_header_part_sidebar  sm:w-60 h-56 aspect-square overflow-hidden">
                <img src={avatar} alt="Gregory Iakovlev" className="w-full h-full object-cover"/>
            </div>
            <Liner text={"SUMMARY"} _className="px-3.5 bg-gray-600 mb-5"/>
            <div className="flex flex-col justify-start items-start w-full h-fit mb-9">
                {content.traits.map((trait, index) => (
                    <Trait key={index} title={trait.title} _className="px-3.5 mb-2" description={trait.description}/>
                ))}
            </div>
            <ContentBlock items={content.topics} title={"Domains of expertise"} _className="mb-9 break-after-page break-inside-avoid"/>
            <ContentBlock items={content.languages} title={"Languages"} _className="mb-9 break-inside-avoid"/>
            <ContentBlock items={content.interests} title={"Interests"} _className="mb-9 break-inside-avoid"/>
            <Liner text={"Contacts"} _className="px-3.5 bg-gray-600 mb-5"/>
            <Contacts _className="px-3.5 bg-gray-500 mb-9 flex-grow "/>
        </div>
    )
}
export default Sidebar;
