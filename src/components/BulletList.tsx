import React from 'react';

interface BulletListProps {
    items: string[];
    _className?: string;
}

const BulletList: React.FC<BulletListProps> = ({ items, _className }) => {
    return (
        <ul className={_className ?? ''} >
            {items.map((item, index) => (
                <li key={index} className="flex items-center mb-0.5">
                    <span className="text-white  font-light text-[18px] mr-1">•</span>
                    <span className="text-gray-100  text-[15px] font-light ">
            {item}
          </span>
                </li>
            ))}
        </ul>
    );
};

export default BulletList;
