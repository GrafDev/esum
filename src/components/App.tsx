import PartFirst from "./PartFirst.tsx";
import PartSecond from "./PartSecond.tsx";


function App() {

    return (
        <div className="_App leading-relaxed w-full grid grid-rows-[auto_1fr] mx-auto
        md:w-[1100px]
        print:w-full
        ">
            <PartFirst/>
            <PartSecond/>
        </div>
    )
}

export default App
