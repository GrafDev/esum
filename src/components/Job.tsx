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

const Job: React.FC<JobProps> = ({ jobExperience, _className }) => {
    return (
        <div className={`flex border-t  sm:border-gray-200 flex-col sm:flex-row border-b-1   ${_className}`}>
            {/* Левая колонка */}
            <div className="flex-1 p-3.5 flex flex-col justify-between min-h-full">
                {jobExperience ? (
                    <div className="mb-7">
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
                    <div className="h-full w-full" />
                )}
            </div>

            {/* Правая колонка */}
            <div className="w-full sm:w-48 p-3.5 flex flex-col justify-between min-h-full bg-gray-100 ">
                {jobExperience ? (
                    <div className="flex flex-wrap items-start gap-2">
                        {jobExperience.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-2 py-1 rounded bg-gray-400 text-white"
                            >
                                {tech}
                            </span>
                        ))}
                        <div className="w-full" />
                        {jobExperience.tools.map((tool, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-2 py-1 rounded border bg-white border-gray-400 text-gray-500"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                ) : (
                    <div className="h-full w-full bg-gray-100 rounded animate-pulse" />
                )}
            </div>
        </div>
    );
};

export default Job;
