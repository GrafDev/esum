import PartFirst from "./parts/PartFirst.tsx";
import PartSecond from "./parts/PartSecond.tsx";


function App() {

    return (
        <div className="_App leading-relaxed grid grid-rows-[auto_1fr] w-[1100px] mx-auto
        print:w-full
        ">
            <PartFirst/>
            <PartSecond/>
        </div>
    )
}

export default App
