import React from "react";

interface LinerProps {
    _className?: string;
    style?: React.CSSProperties;
    text: string;
}

const Liner: React.FC<LinerProps> = ({text,_className}: LinerProps) => {
    return (
        <div className={`text-gray-100 uppercase text-xs py-1.5 ${_className}`}> {text}</div>
    )
}
export default Liner;
