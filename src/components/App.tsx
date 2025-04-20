import Main from "./Main.tsx";
import Sidebar from "./Sidebar.tsx";

function App() {

    return (
        <div className="_app flex items-start flex-col sm:flex-row min-h-screen max-w-[1100px] mx-auto ">
            <Sidebar/>
            <Main/>
        </div>
    )
}

export default App
