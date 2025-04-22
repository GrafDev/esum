import PartFirst from "./parts/PartFirst.tsx";
import PartSecond from "./parts/PartSecond.tsx";


function App() {

    return (
        <div className="_App leading-relaxed   justify-center  min-h-screen w-full grid-rows-2 grid-cols-2">
            <PartFirst/>
            <PartSecond/>
        </div>
    )
}

export default App
