import React from "react";

interface TraitProps {
    _className?: string;
    style?: React.CSSProperties;
    title: string;
    description: string;
}

const Trait: React.FC<TraitProps> = ({title, description,_className}) => {
    return (
        <div className={_className || ''}>
            <div className={`text-gray-100 text-[16px] font-semibold py-1.5`}> {title}</div>
            <div className={`text-gray-100 text-[15px] font-light py-1.5`}> {description}</div>
        </div>
    )
}
export default Trait;
