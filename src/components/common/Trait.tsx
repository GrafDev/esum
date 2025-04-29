import React from "react";

interface TraitProps {
    _className?: string;
    style?: React.CSSProperties;
    title: string;
    description: string;
}

const Trait: React.FC<TraitProps> = ({title, description,_className}) => {
    return (
        <div className={`${_className}`}>
            <div className="text-gray-100 text-base font-bold
            print:text-lg
            "> {title}</div>
            <div className="text-gray-100 text-sm font-light leading-relaxed py-1.5
            print:text-base print:mb-3
            "> {description}</div>
        </div>
    )
}
export default Trait;
