import avatar from "../assets/iam2.png";
import Liner from "./Liner.tsx";
import {content} from "../lib/content.tsx";
import Trait from "./Trait.tsx";
import BulletList from "./BulletList.tsx";
import Contacts from "./Contacts.tsx";


const ContentBlok = (props: { items: string[], title: string }) => {
    return (
        <>
            <Liner text={props.title} _className="px-3.5 bg-gray-600 mb-3"/>
            <BulletList items={props.items} _className="px-3.5 mb-3"/>
        </>

    )
}

const Sidebar = () => {
    return (
        <div className="sidebar  flex flex-col max-w-60 bg-gray-500">
            <div className="_header_part_sidebar  w-60 h-56 overflow-hidden">
                <img src={avatar} alt="Gregory Iakovlev" className="w-full h-full object-cover"/>
            </div>
            <Liner text={"SUMMARY"} _className="px-3.5 bg-gray-600 mb-3"/>
            <div className="flex flex-col justify-start items-start w-full h-fit ">
                {content.traits.map((trait, index) => (
                    <Trait key={index} title={trait.title} _className="px-3.5 mb-3" description={trait.description}/>
                ))}
            </div>
            <ContentBlok items={content.topics} title={"Domains of expertise"}/>
            <ContentBlok items={content.languages} title={"Languages"}/>
            <ContentBlok items={content.interests} title={"Interests"}/>
            <Liner text={"Contacts"} _className="px-3.5 bg-gray-600 mb-3"/>
            <Contacts _className="px-3.5 bg-gray-500 mb-3"/>
        </div>
    )
}
export default Sidebar;
