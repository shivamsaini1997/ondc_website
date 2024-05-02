import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export const AddAgent = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);

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
const values = watch()
  console.log(values);
    
  const userId = localStorage.getItem("User_Id");
  const onSubmit = async (data) => {
    console.log(data,"hii");

    let agent_type;
    if( data.fk_agent_role_id == 1 ){
        agent_type = "Field"
    } else if ( data.fk_agent_role_id == 2 ) {
        agent_type = "Warehouse"
    } else {
        agent_type = "Both"
    }
    try {
      // Use axios to make the POST request
      const res = await axios.post(`${baseUrl}/Organization/Add_Agent_By_Organization`, {
        fk_orgnization_id : userId,
        agent_type:agent_type,
        ...data
      }); // Update the URL here
      console.log(res);
      const responseData = res.data;
      if (responseData.status === 1) {
      toast("Add Successful");
      navigate("/organization/both-agent");
      } else {
        toast.error(responseData.msg);
      }
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "An error occurred");
    }
  };
  const [fileName, setFileName] = useState("");
  // State to store the selected file name
  // Function to handle file change event
  const handleFileChange = (event) => {
    console.log(event, "hi");
    const file = event.target.files[0];
   
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   const csvData = e.target.result; // CSV data as text
    //   alert(csvData); // Do something with the CSV data
    // };
    // reader.readAsText(file);

  
  };
  return (
    <Layout>
      <div className="add-supplier mt-4">
        <div className="container">
          <div className="row mb-4">
            <NavLink to={"/organization/field-agent"} className="text-dark">
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
                Add Agent
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
                <div className="col-lg-6 mb-4">
                  <label htmlFor="" className="lableformtag">
                    Role
                  </label>
                  <select
                    className="form-select"
                    name=""
                    id=""
                    {...register("fk_agent_role_id", {
                      required: true,
                    })}
                  >
                    <option value="">Select</option>
                    <option value={1}>Field Agent</option>
                    <option value={2}>Warehouse Agent </option>
                    <option value={3}>Field and Warehouse Agent</option>
                  </select>
                  {errors.fk_agent_role_id && (
                    <p className="error-message">Role is required</p>
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
              {/* <div className="row mb-3">
                <div className="col-12 mb-3">
                  <label htmlFor="fileexcel" className="file-upload-btn">
                    <span>
                      <svg
                        width="36"
                        height="34"
                        viewBox="0 0 36 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 19.6251V22.7501H12V19.6251H10V22.7501C10 23.8959 10.9 24.8334 12 24.8334H24C25.1 24.8334 26 23.8959 26 22.7501V19.6251H24ZM13 13.3751L14.41 14.8438L17 12.1563V20.6667H19V12.1563L21.59 14.8438L23 13.3751L18 8.16675L13 13.3751Z"
                          fill="black"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="35"
                          height="33"
                          rx="4.5"
                          stroke="#4417A6"
                        />
                      </svg>
                    </span>
                    <span
                      id="file-name-text"
                      className="ms-3"
                      style={{ color: "#4417A6" }}
                    >
                      {fileName ? fileName : "Upload Supplier’s Excel"}
                    </span>
                  </label>
                  <input
                    id="fileexcel"
                    type="file"
                    accept=".csv"
                    className="file-input"
                    onChange={handleFileChange}
                  
                    // Call handleFileChange function when file is selected
                  />
                 
                </div>
              </div> */}
            </div>
            <div className="text-end py-5">
              <div className="btn-groupnewstyle">
                <NavLink to={""}  className="formbtnnew1">
                  Cancel
                </NavLink>
                <button type="button" className="formbtnnew2 ms-3" onClick={handleSubmit(onSubmit)}>
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
