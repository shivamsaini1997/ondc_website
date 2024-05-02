import React from "react";
import Headerdb from "./Header";
import Sidebar from "./Sidebar";
import SidebarData from "./SidebarData";
import { useSelector } from "react-redux";

function Layout ({children}) {
    const data = useSelector(state => state.login.user); 
    const usertype = localStorage.getItem("User_Type");
    const { profilenameHeader } = SidebarData();
    const {  Field, Wharehouse, Suppliers, Org } = SidebarData();
    let items;

    // Filter items based on the user type
    if (usertype === "Field") {
        items = Field;
    } else if (usertype === "Wharehouse") {
        items = Wharehouse;
    } else if (usertype === "Supplier") {
        items = Suppliers;
    } else if (usertype === "Org") {
        items = Org;
    } // Add more conditions as needed


    return (
        <div className="mainBody">
            <Headerdb profilenameHeader={profilenameHeader} />
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-lg-3 col-xl-2 p-0 sidebar">
                        {items && items.length > 0 && 
                            <Sidebar profilename={data.name || "Agent"} items={items}/>
                        }
                    </div>
                    <div className="col-lg-9 col-xl-10 contant-body p-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
