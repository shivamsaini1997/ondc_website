import React from "react";
import sweetAlertMsg from '../component/Commen'
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";





function Headerdb(props) { 
    const navigate = useNavigate();     
    async function Logout() {
        const preference = await sweetAlertMsg('Logout Confirmation', 'Are you sure you want to log out ?', 'question', 'cancel', 'Yes', 'No')
        if (preference) {
            // remove agent session
            localStorage.removeItem('user_id');
            localStorage.removeItem('user_type');
            navigate('/agent/login');
            // window.location.reload();
        }        
    }
    
    return(
        <>
            <header className="d-flex justify-content-end">
                <div className="container-fluid headerdb">
                    <div className="row">
                        <div className="col-12">
                            <div className="dropdown">
                                <NavLink className="d-lg-none d-block" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><img src="../images/bars-solid-manu.svg" alt="" style={{width:'20px', color:'#fff'}} /></NavLink>
                                {/* <button className="dropdown-toggle org-profile-drop align-middle flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className="userform-icon me-2" src={"/images/userprofileicon.svg"} alt="" />
                                        <span>{props.profilenameHeader}</span>
                                </button> */}
                                <ul className="dropdown-menu">
                                    {/* <li>
                                        <NavLink className="dropdown-item" to={props.profileurl}><img className="me-2" style={{width:"19px"}} src="../images/settings.svg"/>Profile</NavLink>
                                    </li> */}
                                    {/* <li>
                                        <a className="dropdown-item d-flex" href="#">
                                        <img className="me-2" style={{width:"19px"}} src="../images/settings.svg"/>Settings</a></li>
                                    <li>
                                        <a className="dropdown-item d-flex" onClick={Logout} href="#">
                                        <img className="me-2" style={{width:"19px"}} src="../images/switch.svg"/>Logout</a></li>
                                    {props.profileurl} */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Headerdb;