import Liner from "./Liner.tsx";
import React from "react";


interface BulletListProps {
    items: string[];
    _className?: string;
}

const BulletList: React.FC<BulletListProps> = ({ items, _className }) => {
    return (
        <ul className={_className ?? ''} >
            {items.map((item, index) => (
                <li key={index} className="flex items-center mb-1.5 text-white font-light text-sm leading-relaxed
                print:text-base
                ">
                    <span>{`• ${item}`}</span>
                </li>
            ))}
        </ul>
    );
};

const ContentBlock = (props: { items: string[], title: string, _className: string; }) => {
    return (
        <div className={props._className || ''}>
            <Liner text={props.title} _className="px-3.5 bg-gray-600 mb-3"/>
            <BulletList items={props.items} _className="px-3.5 mb-3

             "/>
        </div>

    )
}
export default ContentBlock;
