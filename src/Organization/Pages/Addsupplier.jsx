import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export const OrgAddSupplier = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("User_Id");

  useEffect(() => {
    axios
      .post(`${baseUrl}/Organization/Get_Warehouse_List`, {
        fk_organiztion_id: userId,
      })
      .then((res) => {
        const responseData = res.data;
        if (responseData.status === 1) {
          setData(res.data.data);
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

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Use axios to make the POST request
      const res = await axios.post(
        `${baseUrl}/Organization/Add_Individual_Supplier_By_Organization`,
        {
          fk_orgination_id: userId,
          first_name:data.first_name,
          last_name: data.last_name,
          mobileno: data.mobileno,
          tahasil: data.tehsil,
          fk_warehouse_id: data.fk_warehouse_id,
        }
      );
      if (res.data.status === 1) {
        toast("Add Successful");
        navigate(-1);
      } else {
        toast.error(res.data.msg);
      } // Update the URL here
      console.log(res);

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
            <NavLink to={"/organization/supplierList"} className="text-dark">
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
                Add Supplier
              </h5>
            </NavLink>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-border-bg">
              <div className="row mb-4">
                <div className="col-md-6 mb-md-0 mb-3">
                  <label htmlFor="" className="lableformtag">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("first_name", {
                      required: true,
                    })}
                    onKeyDown={(e) => {
                      const isNumeric = /[0-9]/.test(e.key);
                      if (isNumeric) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.first_name && (
                    <p className="error-message">First name is required</p>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="" className="lableformtag">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("last_name", {
                      required: true,
                    })}
                    onKeyDown={(e) => {
                      const isNumeric = /[0-9]/.test(e.key);
                      if (isNumeric) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.last_name && (
                    <p className="error-message">Last name is required</p>
                  )}
                </div>
              </div>
              <div className="col-md-12  mb-3">
                  <label htmlFor="" className="lableformtag">
                    {" "}
                    Tehsil
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("tehsil", {
                      required: true,
                    })}
                    onKeyDown={(e) => {
                      const isNumeric = /[0-9]/.test(e.key);
                      if (isNumeric) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.tehsil && (
                    <p className="error-message">Tehsil is required</p>
                  )}
                </div>
              <div className="row ">
                <div className="col-md-6 mb-4">
                  <label htmlFor="" className="lableformtag">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    maxlength="10"
                    minLength="10"
                    className="form-control"
                    {...register("mobileno", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
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
                  {errors.mobileno && errors.mobileno.type === "required" && (
                    <p className="error-message">Mobile number is required</p>
                  )}
                  {errors.mobileno && errors.mobileno.type === "minLength" && (
                    <p className="error-message">
                      Mobile number should be at least 10 digits long
                    </p>
                  )}
                </div>
                <div className="col-lg-6 mb-4">
                  <label htmlFor="" className="lableformtag">
                    Warehouse
                  </label>
                  <select
                    className="form-select"
                    name=""
                    id=""
                    {...register("fk_warehouse_id", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    {data?.map((item) => (
                      <option value={item.id}>{item.warehouse_name}</option>
                    ))}
                  </select>
                  {errors.fk_warehouse_id && (
                    <p className="error-message">warehouse is required</p>
                  )}
                </div>
              </div>
            </div>
            <div className="text-end py-5">
              <div className="btn-groupnewstyle">
                <NavLink to={""} className="formbtnnew1">
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
