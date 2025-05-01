import {FaGlobe, FaTelegramPlane, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const content = {
    traits: [
        {
            title: "Self-starter",
            description: "Independent and persistent in achieving results. Able to quickly adapt to new information and make well-reasoned decisions even when information is lacking."
        },
        {
            title: "Communicative",
            description: "Easily build effective working relationships with different people. Experienced in conducting sessions with clients to identify and clarify business requirements."
        },
        {
            title: "Team Lead",
            description: "Led development teams and prepared technical specifications based on business requirements."
        },
    ],
    topics: [
        'Frontend Development',
        'UX/UI',
        'BIM Integration',
        'System Integration',
        'Automation Tools',
        'Requirements Analysis',
    ],
    languages: [
        'English - B1',
        'Russian - Native',
    ],
    interests: [
        'Ice Hockey',
        'Table Tennis',
    ],
    contacts : [
        { icon: <FaGlobe />, label: 'Serbia' },
        { icon: <FaTelegramPlane />, label: '@GregoryYakovlev' },
        { icon: <FaLinkedin />, label: 'www.linkedin.com/in/gregory-iakovlev-graf-dev' },
        { icon: <FaWhatsapp />, label: '+381 628 495 479' },
        { icon: <FaEnvelope />, label: 'gregory.yakovlev@gmail.com' },
    ],
    jobs: [
        {
            title: "Frontend Developer",
            company: "Lotus ZAO- Industrial Equipment",
            years: "Jul 2024 - Present",
            tech: ["UX/UI"],
            tools: ["TypeScript", "React", "react-admin", "MUI", "Node.js", "MongoDB"],
            responsibilities: [
                "Developed a platform for managing auction bidding for contract work and equipment supply",
                "Implemented main platform modules: auction listings, bid reception and tracking, access management",
                "Built responsive and intuitive interfaces for complex bidding workflows",
                "Worked closely with backend developers to optimize data flow"
            ]
        },
        {
            title: "Frontend Developer / Team Lead",
            company: "BIMDATA - BIM integration system",
            years: "Oct 2021 - May 2024",
            tech: ["UX/UI", "Team Lead"],
            tools: [
                "TypeScript", "React", "PostgreSQL", "Redux", "Zustand", "Tailwind CSS"
            ],
            responsibilities: [
                "Developed the frontend for BIMDATA platform and integrated it with a custom engine for BIM models (ERP for construction).",
                "Created a custom application for automating façade panel layout and generating commercial proposals, streamlining the sale process." +
                "Modules of the application include:" +
                "implemented panel layout on BIM model, unfolded view generation, and cost calculation features.",
                "Led client sessions to identify business requirements and prepared technical specifications.",
                "Successfully delivered project that resulted in a 5x budget increase for a follow-up contract."
            ]
        },
        {
            title: "C# Developer / BIM Lead ",
            company: "GilStroy - Construction Company",
            years: "Apr 2020 - Oct 2021",
            tech: ["BIM", "Workflow Automation"],
            tools: ["C#", ".NET", "PostgreSQL", "Entity Framework", "Revit API", "WPF"],
            responsibilities: [
                "Developed automation tools for documentation checking and processing in Autodesk Revit",
                "Created a Revit plugin that automated the process of checking drawings for compliance with ISO",
                "Implemented tools for generation of standardized statements and specifications",
                "Built a system to control and validate BIM model parameters.",
                "Reduced documentation processing time by 2.5 times through integration with business processes"
            ]
        },
        {
            title: "Architect / Civil Engineer / BIM Lead",
            company: "Architectural & Technical Leadership",
            years: "2001 – 2020",
            tech: ["Architecture", "Civil Engineering", "BIM-Management"],
            tools: [ "Python", "Lisp", "Dynamo","Revit", "AutoCAD", ],
            responsibilities: [
                "Led multidisciplinary teams of architects, engineers, and contractors",
                "Ensured compliance with building codes and standards (ISO)",
                "Coordinated all project stages from concept to delivery",
                "Supervised quality and accuracy of design documentation",
                "Managed BIM workflows and model coordination in Revit",
                "Oversaw project approvals and coordination with regulatory bodies, clients, and investors",
                "Taught BIM Management course at ITMO University",
                "Developed and delivered a Dynamo (Python) course for Revit engineers"
            ]
        }

    ],
    education: [
        {
            title: "Engineer",
            company: "St Petersburg State University of Architecture and Civil" +
                "Engineering \"LSPbGASU\"",
            years: "1995 - 2001",
            tech: ["Architecture", "Civil Engineering"],
            tools: [],
            responsibilities: [
                "Graduated with a degree in Architecture and Civil Engineering",
            ]
        },
    ]
}

export {content};
