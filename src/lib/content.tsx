import { FaMapMarkerAlt, FaGlobe, FaTelegramPlane, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const content = {
    traits: [
        {
            title: "Self-starter",
            description: "Independent and persistent in achieving results. Able to quickly adapt to new information and make well-reasoned decisions even when information is lacking."
        },
        {
            title: "Motivating",
            description: "Led teams of up to 15 members with clear communication and consensus-driven development. Inspired friends to join startups"
        },
        {
            title: "Adaptable",
            description: "Quickly learn new tools and technologies to achieve results across diverse domains."
        },
    ],
    topics: [
        'Frontend Development',
        'UX/UI',
        'React',
        'TypeScript',
        'BIM Integration',
        'System Integration',
        'Automation Tools',
        'Software Architecture',
        'C# Development',
        'Requirements Analysis',
    ],
    languages: [
        'English-B1',
        'Russian-Native',
    ],
    interests: [
        'Ice Hockey',
        'Table Tennis',
        'Brain Teasers',
    ],
    contacts : [
        { icon: <FaMapMarkerAlt />, label: 'Serbia' },
        { icon: <FaGlobe />, label: 'Russia' },
        { icon: <FaTelegramPlane />, label: 'GregoryYakovlev' },
        { icon: <FaLinkedin />, label: 'Gregory Iakovelv' },
        { icon: <FaWhatsapp />, label: '+381 628 495 479' },
        { icon: <FaEnvelope />, label: 'gregory.yakovlev@gmail.com' },
        { icon: <FaGlobe />, label: 'greg-yakovlev.web.app' },
    ],
}

export {content};
