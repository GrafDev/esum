import avatar from "../assets/iam2.png";
import Liner from "./Liner.tsx";
import {content} from "../lib/content.tsx";
import Trait from "./Trait.tsx";
import BulletList from "./BulletList.tsx";
import Contacts from "./Contacts.tsx";


const ContentBlok = (props: { items: string[], title: string, _className: string; }) => {
    return (
        <div className={props._className || ''}>
            <Liner text={props.title} _className="px-3.5 bg-gray-600 mb-3"/>
            <BulletList items={props.items} _className="px-3.5 mb-3"/>
        </div>

    )
}

const Sidebar = () => {
    return (
        <div className="_sidebar  flex flex-col h-full sm:max-w-60 bg-gray-500 mb-9 sm:mb-0">
            <div
                className="_header flex flex-col sm:flex-row sm:justify-start sm:items-end  sm:hidden w-full text-gray-100 h-fit text-2xl uppercase px-4 py-7">

                Gregory Iakovlev
                <span className="font-light text-xs normal-case">
                    Frontend Developer / Team Lead
                </span>
            </div>
            <div className="_header_part_sidebar  sm:w-60 h-56 overflow-hidden">
                <img src={avatar} alt="Gregory Iakovlev" className="w-full h-full object-cover"/>
            </div>
            <Liner text={"SUMMARY"} _className="px-3.5 bg-gray-600 mb-5"/>
            <div className="flex flex-col justify-start items-start w-full h-fit mb-9">
                {content.traits.map((trait, index) => (
                    <Trait key={index} title={trait.title} _className="px-3.5 mb-2" description={trait.description}/>
                ))}
            </div>
            <ContentBlok items={content.topics} title={"Domains of expertise"} _className="mb-9"/>
            <ContentBlok items={content.languages} title={"Languages"} _className="mb-9"/>
            <ContentBlok items={content.interests} title={"Interests"} _className="mb-9"/>
            <Liner text={"Contacts"} _className="px-3.5 bg-gray-600 mb-5"/>
            <Contacts _className="px-3.5 bg-gray-500 mb-32"/>
        </div>
    )
}
export default Sidebar;
