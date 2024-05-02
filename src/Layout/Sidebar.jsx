import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar(props) {
  const navigate = useNavigate();
  const UserType = localStorage.getItem("User_Type");

  const getRedirectPath = () => {
    switch (UserType) {
      case "Org":
        return "/OrganizationLogin";
      case "Supplier":
        return "/supplier/login";
      case "Wharehouse":
        return "/agent/dashboard"; // Adjust this path according to your app's logic
      case "Field":
        return "/agent/login";
      default:
        return "/OrganizationLogin"; // Redirect to default path if user type is not recognized
    }
  };
  const logout = () => {
    localStorage.clear();
    window.location.href = '/'
  };
  const data = props.items;
  return (
    <>
      <div
        className="offcanvas offcanvas-start sidebardesign sidebody"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header pb-0 pt-2 d-lg-none ">
          <button
            type="button"
            className="btn-close ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <ul className="nav nav-pills mt-3" id="menu">
          {/* <li className={`nav-item ps-3 pt-2 d-flex justify-content-between w-100 p-0 position-relative bkdash ${props.display}`}>
                            <NavLink to={"#"} className="d-flex mb-3">
                                <span style={{width:"20px", lineHeight: "1"}}>{props.backtophomebtn}</span>
                                <span className="ms-2 pb-2">{props.backtohome}</span>
                            </NavLink>
                        </li> */}
          <li className="nav-item px-3 pt-2 d-flex justify-content-between w-100">
            <div className="d-flex" style={{cursor:"pointer"}} onClick={() => {
           if( UserType === "Org" ){
            navigate("/organization/profile");
            } else if (UserType === "Field" ) {
                navigate("/agent/profile");
            }else if (UserType === "Supplier" ) {
              navigate("/supplier/view-profile");
            }
            }}>
              <img
                className="userform-icon me-2"
                style={{ width: "20px" }}
                src={"/images/usericon.svg"}
                alt=""
              />
              <span className="">{props.profilename}</span>
            </div>
            <NavLink to={"#"} style={{ width: "20px" }}>
              <img
                className="userform-icon"
                src={"/images/alarm-3.svg"}
                alt=""
              />
            </NavLink>
          </li>
          <li className="nav-item px-3 pt-2 w-100 py-4 progressbar-t">
            <span>50% complete</span>
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar w-50"></div>
            </div>
          </li>
          <li>{props.SidebarData}</li>
          <li className="w-100">
            <ul className="bodysidescroll">
              {data?.map((item, index) => (
                <li className="nav-item ps-3 pt-2 tab-sidebar" key={index}>
                  <NavLink
                    to={item.url}
                    className="nav-link align-middle px-0 d-flex align-items-center"
                  >
                    <img
                      className="userform-icon"
                      src={item.srcs}
                      alt=""
                      style={{ width: item.imgsize }}
                    />
                    <span className="ms-3 tab-content">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <li className="nav-item logoutsidebarfooter">
              <NavLink
                to={"#"}
                onClick={logout}
                className="nav-link align-middle px-0 d-flex align-items-center"
              >
                <span className="tab-content">Logout</span>
              </NavLink>
            </li>
          </li>
        </ul>
      </div>
    </>
  );
}
