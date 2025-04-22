import React from "react";
import {BiCalendar} from "react-icons/bi";

interface JobProps {
    _className?: string;
    jobExperience?: {
        title: string;
        company: string;
        years: string;
        tech: string[];
        tools: string[];
        responsibilities: string[];
    };
}

const Job: React.FC<JobProps> = ({jobExperience, _className}) => {
    return (
        <div
            className={`flex border-t break-inside-avoid border-gray-300 flex-row flex-wrap border-b-1 w-full  ${_className}`}>
            {/* Левая колонка */}
            <div className="flex-1 p-3.5 flex flex-col justify-between min-h-full">
                {jobExperience ? (
                    <div className="mb-7 ">
                        <p className="text-lg font-medium text-gray-800">{jobExperience.title}</p>
                        <p className="text-gray-600">{jobExperience.company}</p>
                        <p className="text-sm text-gray-400 flex items-center gap-2">
                            <BiCalendar/>
                            {jobExperience.years}
                        </p>
                        <ul className="mt-2 pl-5  list-disc list-outside text-sm font-light text-gray-700 space-y-1">
                            {jobExperience.responsibilities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="h-full w-full"/>
                )}
            </div>

            {/* Правая колонка */}
            <div className="w-48 p-3.5 flex flex-col justify-start min-h-full bg-gray-100 ">
                {jobExperience ? (
                    <div className="flex flex-col flex-wrap justify-start items-start gap-3">
                        <div className="flex flex-wrap items-start gap-2">
                            {jobExperience.tech.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="text-xs px-2 py-1 rounded bg-gray-400 text-white inline"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap print:flex print:flex-wrap items-start gap-2 print:pr-3">
                            {jobExperience.tools.map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs px-2 py-1 rounded border bg-white border-gray-400 text-gray-500 inline"
                                >
                                {tool}
                            </span>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="h-full w-full bg-gray-100 rounded animate-pulse"/>
                )}
            </div>
        </div>
    );
};

export default Job;
