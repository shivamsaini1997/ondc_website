import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const AddWarehouse = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [state, setState] = useState([]);
  const [city, setCity] = useState(null);
  useEffect(() => {
    axios
      .get(`${baseUrl}/Agent/States_List`)
      .then((res) => {
        const responseData = res.data;
        if (responseData.status === 1) {
          setState(res.data.obj);
        } else {
          toast.error(responseData.msg);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const stateId = watch("fk_state_id");
  useEffect(() => {
    axios
      .post(`${baseUrl}/Agent/City_List`, {
        fk_state_id: stateId,
      })
      .then((res) => {
        const responseData = res.data;
        if (responseData.status === 1) {
          setCity(res.data.obj);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [baseUrl, stateId]);

  const userId = localStorage.getItem("User_Id");
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        `${baseUrl}/Organization/Add_Warehouse_By_Organization`,
        {
          fk_organiztion_id: userId,
          ...data,
        }
      );
      console.log(res);
      const responseData = res.data;
      if (responseData.status === 1) {
        toast("Add Successful");
        navigate("/organization/warehouse");
      } else {
        toast.error(responseData.msg);
      }

      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "An error occurred");
    }
  };
  return (
    <Layout>
      <div className="add-supplier mt-4">
        <div className="container">
          <div className="row mb-4">
            <NavLink to={"/organization/warehouse"} className="text-dark">
              <h5 className="mb-0">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z"
                    fill="black"
                  />
                </svg>
                Add Warehouse
              </h5>
            </NavLink>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-border-bg">
              <div className="row mb-4">
                <div className="col-md-12 mb-md-0 mb-3">
                  <label htmlFor="" className="lableformtag">
                    Warehouse Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("warehouse_name", {
                      required: true,
                    })}
                    onKeyDown={(e) => {
                      const isNumeric = /[0-9]/.test(e.key);
                      if (isNumeric) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.warehouse_name && (
                    <p className="error-message">Warehouse name is required</p>
                  )}
                </div>
              </div>
              <div className="row ">
                <div className="col-md-6 mb-4">
                  <label htmlFor="" className="lableformtag">
                    capacity
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("capacity", {
                      required: true,
                    })}
                  />
                  {errors.capacity && (
                    <p className="error-message">capacity is required</p>
                  )}
                </div>
                <div className="col-md-6 mb-4">
                  <label htmlFor="" className="lableformtag">
                    no of employee
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("no_of_employee", {
                      required: true,
                    })}
                    onKeyDown={(e) => {
                      const isNumeric = /^[0-9]$/.test(e.key);
                      const isBackspaceOrDelete =
                        e.key === "Backspace" || e.key === "Delete";
                      if (!isNumeric && !isBackspaceOrDelete) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.no_of_employee &&
                    errors.no_of_employee.type === "required" && (
                      <p className="error-message">
                        no of employee are required
                      </p>
                    )}
                </div>
              </div>
              <div className="col-md-12 mb-md-0 mb-3">
                <label htmlFor="" className="lableformtag">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("address", {
                    required: true,
                  })}
                />
                {errors.address && (
                  <p className="error-message">address name is required</p>
                )}
              </div>
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <label htmlFor="" className="lableformtag">
                    State
                  </label>
                  <select
                    className="form-select"
                    name=""
                    id=""
                    {...register("fk_state_id", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    {state?.map((item) => {
                      return <option value={item.id}>{item.state}</option>;
                    })}
                  </select>
                  {errors.fk_state_id && (
                    <p className="error-message">State is required</p>
                  )}
                </div>
                <div className="col-lg-4 mb-3 mb-4">
                  <label htmlFor="" className="lableformtag">
                    City
                  </label>
                  <select
                    disabled={city == null ? true : false}
                    className="form-select"
                    name=""
                    id=""
                    {...register("fk_city_id", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    {city?.map((item) => {
                      return <option value={item.id}>{item.city}</option>;
                    })}
                  </select>
                  {errors.fk_city_id && (
                    <p className="error-message">City is required</p>
                  )}
                </div>
                <div className="col-lg-4 mb-4">
                  <label htmlFor="" className="lableformtag">
                    District
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    {...register("district", {
                      required: true,
                    })}
                  />
                  {errors.district && (
                    <p className="error-message">District is required</p>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-6">
                  <label htmlFor="" className="lableformtag">
                    Teshil
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    {...register("tahasil", {
                      required: true,
                    })}
                  />
                  {errors.tahasil && (
                    <p className="error-message">Tehsil is required</p>
                  )}
                </div>
                <div className="col-lg-6">
                  <label htmlFor="" className="lableformtag">
                    Pincode
                  </label>
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
                      const isBackspaceOrDelete =
                        e.key === "Backspace" || e.key === "Delete";
                      if (!isNumeric && !isBackspaceOrDelete) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.pincode && errors.pincode.type === "required" && (
                    <p className="error-message">Pincode is required</p>
                  )}
                  {errors.pincode && errors.pincode.type === "minLength" && (
                    <p className="error-message">
                      Pincode should be exactly 6 digits long
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="text-end py-5">
              <div className="btn-groupnewstyle">
                <NavLink to={"/agent/supplier-list"} className="formbtnnew1">
                  Cancel
                </NavLink>
                <button type="submit" className="formbtnnew2 ms-3">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddWarehouse;
