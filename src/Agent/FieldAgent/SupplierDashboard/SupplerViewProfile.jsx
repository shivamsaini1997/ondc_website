import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Layout from "../../../Layout";
import { NavLink, useParams } from 'react-router-dom'
import { toast } from "react-toastify";
import { Box } from "@mui/system";

export const SupplierViewProfile = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { id } = useParams()
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.post(`${baseUrl}/Agent/Get_Supplier_Detail`, { id: id })
            .then((res) => {
                if (res.data.status === 1) {
                    setData(res.data.obj)
                } else {
                    toast.error(res.data.msg);
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }, [baseUrl, id]);

    return (
        <Layout>
            <div className="profileview p-3">
                <div className="container-fluid form-border-bg p-md-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="profilebox">
                                <img src={`${baseUrl}${data?.profile_pic}`} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-4">
                            <span className="dateshipping">Name: </span>
                            <span className="lablename">{data?.first_name} {data?.last_name}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">Mobile Number: </span>
                            <span className="lablename">{data?.mobile_no}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">Address: </span>
                            <span className="lablename">{data?.address}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">State: </span>
                            <span className="lablename"> {data?.state_name}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">City: </span>
                            <span className="lablename">{data?.city_name} </span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">District: </span>
                            <span className="lablename"> {data?.district} </span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">Tehsil: </span>
                            <span className="lablename"> {data?.tahasil}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">Pincode:</span>
                            <span className="lablename"> {data?.pincode} </span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">GST Number:</span>
                            <span className="lablename"> {data?.gst_no} </span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">PAN Number: </span>
                            <span className="lablename"> {data?.pancard}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">Aadhaar Number: </span>
                            <span className="lablename"> {data?.aadhar_no}</span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="dateshipping">Bank Account Number: </span>
                            <span className="lablename"> {data?.account_no}</span>
                        </div>
                    </div>
                    <div className="btn-groupnewstyle mt-5">
                        <Box>
                            <NavLink className="formbtnnew2" to={`/agent/supplier/update-profile/${id}`}>
                                Update Profile
                            </NavLink>
                        </Box>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
