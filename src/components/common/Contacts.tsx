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
                <div key={index} className="flex items-center gap-2 text-gray-100 mb-2 font-light">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Contacts;
