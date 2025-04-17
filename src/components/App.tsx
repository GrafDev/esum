import Main from "./Main.tsx";
import Sidebar from "./Sidebar.tsx";

function App() {

    return (
        <div className="_app flex items-start max-w-[1350px] mx-auto ">
            <Sidebar/>
            <Main/>
        </div>
    )
}

export default App
