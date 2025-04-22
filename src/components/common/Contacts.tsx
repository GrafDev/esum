import React from 'react';
import {content} from "../../lib/content.tsx";

interface ContactsProps {
    _className?: string;
    style?: React.CSSProperties;
}

const Contacts: React.FC<ContactsProps> = ( {_className} ) => {
    return (
        <div className={_className}>
            {content.contacts.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-100 mb-2">
                    <span className="text-[16px] font-light">{item.icon}</span>
                    <span className="text-[15px] font-light">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Contacts;
