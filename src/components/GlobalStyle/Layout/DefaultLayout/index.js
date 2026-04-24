import Header from "~/components/GlobalStyle/Layout/components/Header/header";
import SideBar from "./SideBar/sidebar";

function DefaultLayout() {
    return (<div>
        <Header/>
        
        <div className="container">
            <SideBar/>
        </div>
    </div>)
}

export default DefaultLayout;