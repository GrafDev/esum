import Liner from "./Liner.tsx";

const Main = () => {
    return (
        <main className="main flex flex-col w-full bg-white">
            <div className="_header flex justify-start items-end w-full h-fit text-2xl uppercase px-4 py-7">
                Gregory Iakovlev
            </div>
            <Liner text={"Work Experience"} _className="px-3.5 bg-gray-400 mb-3"/>
            <div className="flex flex-col justify-start items-start w-full h-fit ">
                <div className="flex flex-col justify-start items-start w-full h-fit px-3.5 mb-3">
                    <div className="text-gray-900 text-[16px] font-semibold py-1.5">Software Engineer</div>
                    <div className="text-gray-900 text-[15px] font-light py-1.5">Company Name</div>
                    <div className="text-gray-900 text-[14px] font-light py-1.5">Location</div>
                    <div className="text-gray-900 text-[14px] font-light py-1.5">Date</div>
                </div>
            </div>
            <Liner text={"Education"} _className="px-3.5 bg-gray-400 mb-3"/>
            <div className="flex flex-col justify-start items-start w-full h-fit ">
                <div className="flex flex-col justify-start items-start w-full h-fit px-3.5 mb-3">
                    <div className="text-gray-900 text-[16px] font-semibold py-1.5">Degree</div>
                    <div className="text-gray-900 text-[15px] font-light py-1.5">University Name</div>
                    <div className="text-gray-900 text-[14px] font-light py-1.5">Location</div>
                    <div className="text-gray-900 text-[14px] font-light py-1.5">Date</div>
                </div>
            </div>
        </main>
    )
}

export default Main;
