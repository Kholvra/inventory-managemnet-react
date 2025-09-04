import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/MainContent/Content";
import Topbar from "./Components/Topbar/Topbar";

function App(){

    return (
        <div className="flex">
        <Sidebar/>
        <div className="flex flex-col flex-1">
        <Topbar/>
        <Content/>
        </div>
        </div>
    )
}

export default App;