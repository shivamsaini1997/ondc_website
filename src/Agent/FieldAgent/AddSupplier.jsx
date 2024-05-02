import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AddSupplier = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [state, setState] = useState([]);
    const [city, setCity] = useState(null)
    console.log(city,state);

    useEffect(() => {
        axios.get(`${baseUrl}/Agent/States_List`)
            .then((res) => {
                setState(res.data.obj)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

    const stateId = watch("state")
    useEffect(() => {
        axios.post(`${baseUrl}/Agent/City_List`,{
            fk_state_id:stateId
        })
            .then((res) => {
                setCity(res.data.obj)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [stateId])
 

    const userId = localStorage.getItem('User_Id');
    const onSubmit = async (data) => {
        console.log(data);
        try {
            // Use axios to make the POST request
            const res = await axios.post(`${baseUrl}/Agent/Add_Supplier`, {
                fk_agent: userId,
                first_name: data.firstName,
                last_name: data.lastName,
                mobile: data.mobileno,
                pincode: data.pincode,
                fk_state: data.state,
                fk_city: data.city,
                tahasil: data.tehsil,
                district: data.district,
                address: data.address

            }); // Update the URL here
            console.log(res);
            toast("Add Successful");
            navigate('/agent/supplier-list');
            // Reset form after successful submission
            reset();
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message || "An error occurred");
        }

    }
    return (
        <Layout>
            <div className="add-supplier mt-4">
                <div className="container-fluid">
                    <div className="row mb-4">
                        <NavLink to={"/agent/supplier-list"} className="text-dark">
                            <h5 className="mb-0">
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z" fill="black" />
                                </svg>
                                Add Supplier
                            </h5>
                        </NavLink>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-border-bg">
                            <div className="row mb-4">
                                <div className="col-md-6 mb-md-0 mb-3">
                                    <label htmlFor="" className="lableformtag">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register("firstName", {
                                            required: true
                                        })}
                                        onKeyDown={(e) => {
                                            const isNumeric = /[0-9]/.test(e.key);
                                            if (isNumeric) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                    {errors.firstName &&
                                        <p className="error-message">First name is required</p>
                                    }
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="" className="lableformtag">Last Name</label>
                                    <input type="text" className="form-control"
                                        {...register("lastName", {
                                            required: true
                                        })}
                                        onKeyDown={(e) => {
                                            const isNumeric = /[0-9]/.test(e.key);
                                            if (isNumeric) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                    {errors.lastName &&
                                        <p className="error-message">Last name is required</p>
                                    }
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="" className="lableformtag">Mobile Number</label>
                                    <input
                                        type="text" maxlength="10" minLength="10"
                                        className="form-control"
                                        {...register("mobileno", {
                                            required: true,
                                            minLength: 10,
                                            maxLength: 10,
                                        })}
                                        onKeyDown={(e) => {
                                            const isNumeric = /^[0-9]$/.test(e.key);
                                            const isBackspaceOrDelete = e.key === 'Backspace' || e.key === 'Delete';
                                            if (!isNumeric && !isBackspaceOrDelete) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                    {errors.mobileno && errors.mobileno.type === "required" && (
                                        <p className="error-message">Mobile number is required</p>
                                    )}
                                    {errors.mobileno && errors.mobileno.type === "minLength" && (
                                        <p className="error-message">Mobile number should be at least 10 digits long</p>
                                    )}
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="" className="lableformtag">Pincode</label>
                                    <input
                                        type="text"
                                        maxLength="6"
                                        minLength="6"
                                        className="form-control"
                                        {...register("pincode", {
                                            required: true,
                                            pattern: /^[0-9]+$/,
                                            minLength: 6,
                                            maxLength: 6,
                                        })}
                                        onKeyDown={(e) => {
                                            const isNumeric = /^[0-9]$/.test(e.key);
                                            const isBackspaceOrDelete = e.key === 'Backspace' || e.key === 'Delete';
                                            if (!isNumeric && !isBackspaceOrDelete) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                    {errors.pincode && errors.pincode.type === "required" && (
                                        <p className="error-message">Pincode is required</p>
                                    )}
                                    {errors.pincode && errors.pincode.type === "minLength" && (
                                        <p className="error-message">Pincode should be exactly 6 digits long</p>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <label htmlFor="" className="lableformtag">State</label>
                                    <select className="form-select" name="" id=""
                                        {...register("state", {
                                            required: true,
                                        })}
                                    >
                                        <option value="">Select</option>
                                        {
                                            state?.map((item) => {
                                                return (
                                                    <option value={item.id}>{item.state}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {errors.state &&
                                        <p className="error-message">State is required</p>
                                    }
                                </div>
                                <div className="col-lg-4 mb-3 mb-4">
                                    <label htmlFor="" className="lableformtag">City</label>
                                    <select disabled={city == null ? true: false} className="form-select" name="" id=""
                                        {...register("city", {
                                            required: true,
                                        })}
                                    >
                                        <option value="">Select</option>
                                        {
                                            city?.map((item) => {
                                                return (
                                                    <option value={item.id}>{item.city}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {errors.city &&
                                        <p className="error-message">City is required</p>
                                    }
                                </div>
                                <div className="col-lg-4 mb-4">
                                <label htmlFor="" className="lableformtag">District</label>

                                        <input type="text" className="form-control"
                                        {...register("district", {
                                            required: true
                                        }
                                        )}
                                    />
                                        {errors.district && <p className="error-message">District is required</p>}

                                   
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    
                                    <label htmlFor="" className="lableformtag">Teshil</label>

                                     <input type="text" className="form-control"
                                        {...register("tehsil", {
                                            required: true
                                        }
                                        )}
                                    />
                                    {errors.tehsil &&
                                        <p className="error-message">Tehsil is required</p>
                                    }
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="" className="lableformtag">Address</label>
                                    <input type="text" className="form-control"
                                        {...register("address", {
                                            required: true
                                        }
                                        )}
                                    />
                                    {errors.address &&
                                        <p className="error-message">Address is required</p>
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="" className="lableformtag">
                                    Consent
                                    </label>

                                    <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        This Agent ABC has my permission to manage my
                                        Dashboard.
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-end py-5">
                            <div className="btn-groupnewstyle">
                                <NavLink to={"/agent/supplier-list"} className="formbtnnew1">Cancel</NavLink>
                                <button type="submit" className="formbtnnew2 ms-3">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}