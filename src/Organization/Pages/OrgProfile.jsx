import React, { useEffect, useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Layout from '../../Layout'
import { NavLink } from 'react-router-dom'  
import { toast } from "react-toastify";

export const OrgProfile = () => {
    const id = localStorage.getItem("User_Id");
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [data, setData] = useState();
    const [state, setState] = useState([]);
    const [city, setCity] = useState(null);
    console.log(data);

    const {  
        watch,
      } = useForm();
      useEffect(() => { 
        axios.post(`${baseUrl}/Organization/Get_Organizations_Detail`, {orgnization_id: id,
        })
        .then((res) => {
            if (res.data.status === 1) {
                setData(res.data.data)
              } else {
                toast.error(res.data.msg);
              }
        })
        .catch((error) => {
            console.log(error);
            toast.error(error.message);
        })
  }, []);
    return (
        <Layout>
            <div className="profileview p-3">
                <div className="container-fluid form-border-bg p-md-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="profilebox">
                                <img  src={`${baseUrl}${data?.profile_pic}`} alt="profile_image" style={{height: '100%' , width: '100%', objectFit: 'cover'}} />
                            </div>   
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-4">
                            <span class="dateshipping">Name: </span>
                            <span class="lablename"> {data?.name}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span class="dateshipping">Mobile Number: </span>
                            <span class="lablename">{data?.mobileno}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span class="dateshipping">Address: </span>
                            <span class="lablename">{data?.addrss}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span class="dateshipping">State: </span>
                            <span class="lablename"> {data?.state}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span class="dateshipping">City: </span>
                            <span class="lablename"> {data?.city}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span class="dateshipping">District: </span>
                            <span class="lablename">{data?.district} </span>
                        </div>
                        <div className="col-12 mb-4">
                            <span class="dateshipping">Pincode:</span>
                            <span class="lablename"> {data?.pincode}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span class="dateshipping">GST Number: </span>
                            <span class="lablename">{data?.gst_no} </span>
                        </div>
                        <div className="col-12 mb-4">
                            <span class="dateshipping">PAN Number: </span>
                            <span class="lablename"> {data?.pancard} </span>
                        </div>
                        {/* <div className="col-12 mb-4">
                            <span class="dateshipping">Aadhaar Number: </span>
                            <span class="lablename"> </span>
                        </div> */}
                        <div className="col-12 mb-4">
                            <span class="dateshipping">Bank Account Number: </span>
                            <span class="lablename">{data?.account_no} </span>
                        </div>
                    </div>
                    <div className="btn-groupnewstyle mt-5">
                        <NavLink className="formbtnnew2" to={"/organization/update-profile"}> Update Profile</NavLink>
                     
                        </div>
                </div>
            </div>
        </Layout>
    )
}
