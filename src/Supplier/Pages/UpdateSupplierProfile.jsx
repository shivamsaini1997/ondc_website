import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

function SupplierProfile(props) {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const id = localStorage.getItem("User_Id");
  const [data, setData] = useState([]);

  const [state, setState] = useState([]);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate({});

console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();
  const inputs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Move d inside the component

  const handleKeyUp = (index, event) => {
    const maxLength = 1;
    const currentLength = event.target.value.length;

    if (currentLength >= maxLength) {
      // Move focus to the next input field
      const nextIndex = index + 1;
      if (nextIndex < inputs.length) {
        inputs[nextIndex].current.focus();
      }
    }

    if (event.keyCode === 8 || event.keyCode === 46) {
      // Backspace or Delete key pressed, move focus to the previous input field
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        inputs[prevIndex].current.focus();
      }
    }
  };
  useEffect(() => {
    setValue("firstName", data?.first_name);
    setValue("lastName", data?.last_name);
    setValue("mobileno", data?.mobileno);
    setValue("address", data?.address);
    setValue("pincode", data?.pincode);
    setValue("state", data?.fk_state_id);
    setValue("city", data?.fk_city_id);
    setValue("district", data?.district);
    setValue("tehsil", data?.tahasil);
    setValue("pancard", data?.pancard);
    setValue("gst", data?.gst_no);
    setValue("aadhaar", data?.aadhar_no);
    setValue("holdername", data?.account_holder_name);
    setValue("bnkaccountnum", data?.account_number);
    setValue("rebnkaccountnum", data?.account_number);
    setValue("ifsccode", data?.ifsc_code);
    setValue("upiid", data?.upi_id);
  }, [data]);

  const phone = watch("mobileno");

  const validateBankAccountNumber = (value) => {
    const originalValue = watch("bnkaccountnum");
    const match = value === originalValue;
    return match || "Bank account numbers do not match";
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await axios.post(
        `${baseUrl}/Supplier/Update_Supplier_Details`,
        {
          supplier_id: id,
          first_name: data.firstName,
          last_name: data.lastName,
          mobile_no : data.mobileno,
          address: data.address,
          pincode: data.pincode,
          fk_state_id : data.state,
          fk_city_id: data.city,
          district: data.district,
          tahasil : data.tehsil,
          gst_no  : data.gst,
          pancard_no: data.pancard,
          aadhar_no: data.aadhaar,
          account_holder_name: data.holdername,
          account_no: data.bnkaccountnum,
          ifsc_code: data.ifsccode,
          upi_id: data.upiid,
        }
      ); // Update the URL here
      const responseData = res.data;
      toast("Update Successful");
      navigate(`/supplier/view-profile`);

      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "An error occurred");
    }
  };
  useEffect(() => {
    setLoading(true);
    axios
      .post(`${baseUrl}/Supplier/Get_Supplier_Details`, {
        supplier_id: id,
      })
      .then((res) => {
        // console.log(res);
        setData(res.data.data);
        setCity(res.data.city_list);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const stateId = watch("state");
  console.log(stateId);
  useEffect(() => {
    axios
      .get(`${baseUrl}/Agent/States_List`)
      .then((res) => {
        setState(res.data.obj);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .post(`${baseUrl}/Agent/City_List`, {
        fk_state_id: stateId,
      })
      .then((res) => {
        // console.log(res);
        if (stateId) {
          setCity(res.data.obj);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [baseUrl, stateId]);

  const handleVerify = async () => {
    try {
      const res = axios.post(`${baseUrl}/Agent/Send_OTP_Mobile`, {
        mobileno: phone,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const sendOtp = async () => {
    try {
      const otp = inputs.map((input) => input.current.value).join("");

      // Make the POST request to verify OTP
      const res = await axios.post(`${baseUrl}Agent/Verify_OTP_Mobile`, {
        otp,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error.message || "An error occurred");
    }
  };

  const [profileimg, setProfileimg] = useState(""); // State to store the selected file name

  // Function to handle file change event
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileimg(file.name);
      const formData = new FormData();
      formData.append("profile_pic", file);
      formData.append("id", id);

      axios
        .post(`${baseUrl}/Supplier/Update_Supplier_Profile_Pic`, formData)
        .then((res) => {
          if (res.data.status === 1) {
            toast("Update Successful");
          } else {
            toast.error(res.data.msg || "An error occurred");
          }
        })
        .catch((e) => {
          console.log(e);
          toast.error(e.message || "An error occurred");
        });
    }
  };
  return (
    <>
      <Layout>
        <div className="profilepage mb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 pt-4 pb-3">
                <h1 className="h1 text-center">Supplier Profile</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 px-lg-3">
                <ul
                  className="nav nav-pills mb-3 btnformbtntab justify-content-between px-xl-5"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="Personal-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#Personal"
                      type="button"
                      role="tab"
                      aria-controls="Personal"
                      aria-selected="true"
                    >
                      Personal Information
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="NumberVerification-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#NumberVerification"
                      type="button"
                      role="tab"
                      aria-controls="NumberVerification"
                      aria-selected="false"
                    >
                      Government Identification
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="BankAccount-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#BankAccount"
                      type="button"
                      role="tab"
                      aria-controls="BankAccount"
                      aria-selected="false"
                    >
                      Bank Account Details
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12 px-lg-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div
                    className="tab-content profiletabbody"
                    id="pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="Personal"
                      role="tabpanel"
                      aria-labelledby="Personal-tab"
                      tabindex="0"
                    >
                      <div className="row mb-4">
                        <div className="col-md-6 mb-md-0 mb-4">
                          <label htmlFor="" className="lableformtag">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("firstName", {
                              required: true,
                            })}
                            onKeyDown={(e) => {
                              const isNumeric = /[0-9]/.test(e.key);
                              if (isNumeric) {
                                e.preventDefault();
                              }
                            }}
                          />
                          {errors.firstName && (
                            <p className="error-message">
                              First name is required
                            </p>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="" className="lableformtag">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("lastName", {
                              required: true,
                            })}
                            onKeyDown={(e) => {
                              const isNumeric = /[0-9]/.test(e.key);
                              if (isNumeric) {
                                e.preventDefault();
                              }
                            }}
                          />
                          {errors.lastName && (
                            <p className="error-message">
                              Last name is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="" className="lableformtag">
                          Mobile Number Verification
                        </label>
                        <div className="col-lg-1 col-md-2 col-3">
                          <input
                            type="text"
                            className="form-control"
                            value="+91"
                          />
                        </div>
                        <div className="col-lg-9 col-md-8 col-9 ps-0">
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
                          {errors.mobileno &&
                            errors.mobileno.type === "required" && (
                              <p className="error-message">
                                Mobile number is required
                              </p>
                            )}
                          {errors.mobileno &&
                            errors.mobileno.type === "minLength" && (
                              <p className="error-message">
                                Mobile number should be at least 10 digits long
                              </p>
                            )}
                        </div>
                        <div className="col-md-2 col-4 mt-md-0 mt-3">
                          <NavLink
                            to={"#"}
                            onClick={handleVerify}
                            className="formbtnnew2 w-100 d-block text-center"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Verify
                          </NavLink>
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    Enter OTP
                                  </h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body px-5">
                                  <div className="d-flex gap-3 mt-3">
                                    {inputs.map((inputRef, index) => (
                                      <input
                                        class="form-control"
                                        key={index}
                                        ref={inputRef}
                                        type="text"
                                        maxLength={1}
                                        onKeyUp={(event) =>
                                          handleKeyUp(index, event)
                                        }
                                      />
                                    ))}
                                  </div>
                                  <div className="d-flex mt-3 justify-content-between">
                                    <NavLink to={"#"}>Resend OTP</NavLink>
                                    <span>12 sec</span>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <NavLink
                                    to={"#"}
                                    onClick={sendOtp}
                                    className="formbtn w-25"
                                  >
                                    Submit
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12">
                          <label htmlFor="" className="lableformtag">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Address"
                            {...register("address", {
                              required: true,
                            })}
                          />
                          {errors.address && (
                            <p className="error-message">Address is required</p>
                          )}
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-4 mb-md-0 mb-3">
                          <input
                            type="text"
                            maxLength="6"
                            minLength="6"
                            className="form-control"
                            placeholder="Pincode"
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
                          {errors.pincode &&
                            errors.pincode.type === "required" && (
                              <p className="error-message">
                                Pincode is required
                              </p>
                            )}
                          {errors.pincode &&
                            errors.pincode.type === "minLength" && (
                              <p className="error-message">
                                Pincode should be exactly 6 digits long
                              </p>
                            )}
                        </div>
                        <div className="col-md-8">
                          <select
                            className="form-select"
                            name=""
                            id=""
                            {...register("state", {
                              required: true,
                            })}
                          >
                            <option value="">Select</option>
                            {state?.map((item) => {
                              return (
                                <option
                                  selected={
                                    data?.fk_state_id === item.id ? true : false
                                  }
                                  value={item.id}
                                >
                                  {item.state}
                                </option>
                              );
                            })}
                          </select>
                          {errors.state && (
                            <div>
                              <p className="error-message">State is required</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 mb-md-0 mb-3">
                          <select
                            className="form-select"
                            name=""
                            id=""
                            defaultValue={2}
                            {...register("city", {
                              required: true,
                            })}
                          >
                            <option value="">Select</option>
                            {city?.map((item) => {
                              return (
                                <option
                                  selected={
                                    data?.fk_city_id === item.id ? true : false
                                  }
                                  value={item.id}
                                >
                                  {item.city}
                                </option>
                              );
                            })}
                          </select>
                          {errors.city && (
                            <div>
                              <p className="error-message">City is required</p>
                            </div>
                          )}
                        </div>
                        <div className="col-md-4 mb-md-0 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="District"
                            {...register("district", {
                              required: true,
                            })}
                          />
                          {errors.district && (
                            <p className="error-message">
                              District is required
                            </p>
                          )}
                        </div>
                        <div className="col-md-4 mb-md-0 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tehsil"
                            {...register("tehsil", {
                              required: true,
                            })}
                          />
                          {errors.tehsil && (
                            <p className="error-message">Tehsil is required</p>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <label
                            htmlFor="profileupdate"
                            className="file-upload-btn"
                          >
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
                              {profileimg
                                ? profileimg
                                : "Upload Profile Picture"}
                            </span>
                          </label>
                          <input
                            id="profileupdate"
                            type="file"
                            className="file-input"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                          {errors.profileupdate && (
                            <p className="error-message">
                              Upload Profile Picture is required
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="NumberVerification"
                      role="tabpanel"
                      aria-labelledby="NumberVerification-tab"
                      tabindex="0"
                    >
                      <div className="row align-items-end mb-4">
                        <div className="col-md-10 mb-md-0 mb-3">
                          <label className="lableformtag">
                            GST Number Verification
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter 15 digit GST number"
                            maxLength="10"
                            minLength="10"
                            {...register("gst", {
                              required: true,
                            })}
                            onKeyDown={(e) => {
                              const isAlphaNumeric = /^[A-Za-z0-9]$/.test(
                                e.key
                              );
                              const isBackspaceOrDelete =
                                e.key === "Backspace" || e.key === "Delete";
                              if (!isAlphaNumeric && !isBackspaceOrDelete) {
                                e.preventDefault();
                              }
                            }}
                          />
                        </div>
                        <div className="col-md-2 col-4">
                          <NavLink
                            to={"#"}
                            className="formbtnnew2 w-100 d-block text-center"
                          >
                            Verify
                          </NavLink>
                        </div>
                        {errors.gst && errors.gst.type === "required" && (
                          <p className="error-message">
                            GST Number is required
                          </p>
                        )}
                        {errors.gst && errors.gst.type === "pattern" && (
                          <p className="error-message">Invalid GST Number</p>
                        )}
                      </div>
                      <div className="row align-items-end mb-4">
                        <div className="col-md-10 mb-md-0 mb-3">
                          <label className="lableformtag">
                            PAN Number Verification
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your PAN card number"
                            maxLength="10"
                            minLength="10"
                            {...register("pancard", {
                              required: true,
                            })}
                            onKeyDown={(e) => {
                              const isAlphaNumeric = /^[A-Za-z0-9]$/.test(
                                e.key
                              );
                              const isBackspaceOrDelete =
                                e.key === "Backspace" || e.key === "Delete";
                              if (!isAlphaNumeric && !isBackspaceOrDelete) {
                                e.preventDefault();
                              }
                            }}
                          />
                        </div>
                        <div className="col-md-2 col-4">
                          <NavLink
                            to={"#"}
                            className="formbtnnew2 w-100 d-block text-center"
                          >
                            Verify
                          </NavLink>
                        </div>
                        {errors.pancard &&
                          errors.pancard.type === "required" && (
                            <p className="error-message">
                              PAN Card Number is required
                            </p>
                          )}
                        {errors.pancard &&
                          errors.pancard.type === "pattern" && (
                            <p className="error-message">
                              Invalid PAN Card Number
                            </p>
                          )}
                      </div>
                      <div className="row align-items-end">
                        <div className="col-md-10 mb-md-0 mb-3">
                          <label className="lableformtag">
                            Aadhaar Card Verification
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your PAN card number"
                            maxLength="10"
                            minLength="10"
                            {...register("aadhaar", {
                              required: true,
                            })}
                            onKeyDown={(e) => {
                              const isAlphaNumeric = /^[A-Za-z0-9]$/.test(
                                e.key
                              );
                              const isBackspaceOrDelete =
                                e.key === "Backspace" || e.key === "Delete";
                              if (!isAlphaNumeric && !isBackspaceOrDelete) {
                                e.preventDefault();
                              }
                            }}
                          />
                        </div>
                        <div className="col-md-2 col-4">
                          <NavLink
                            to={"#"}
                            className="formbtnnew2 w-100 d-block text-center"
                          >
                            Verify
                          </NavLink>
                        </div>
                        {errors.aadhaar &&
                          errors.aadhaar.type === "required" && (
                            <p className="error-message">
                              Aadhaar Number is required
                            </p>
                          )}
                        {errors.aadhaar &&
                          errors.aadhaar.type === "pattern" && (
                            <p className="error-message">
                              Invalid Aadhaar Number
                            </p>
                          )}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="BankAccount"
                      role="tabpanel"
                      aria-labelledby="BankAccount-tab"
                      tabindex="0"
                    >
                      <div className="row mb-3">
                        <div className="col-12 mb-3">
                          <label htmlFor="" className="lableformtag">
                            Add your bank account
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Account Holder Name"
                            {...register("holdername", {
                              required: true,
                            })}
                            onKeyDown={(e) => {
                              const isNumeric = /[0-9]/.test(e.key);
                              if (isNumeric) {
                                e.preventDefault();
                              }
                            }}
                          />
                          {errors.holdername && (
                            <p className="error-message">
                              Account holder name is required
                            </p>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Bank Account Number"
                            {...register("bnkaccountnum", {
                              required: "Bank account number is required",
                              pattern: {
                                value: /^[0-9]+$/,
                                message:
                                  "Bank account number must contain only digits",
                              },
                            })}
                          />
                          {errors.bnkaccountnum && (
                            <p className="error-message">
                              {errors.bnkaccountnum.message}
                            </p>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Re-enter Bank Account Number"
                            {...register("rebnkaccountnum", {
                              required:
                                "Re-enter bank account number is required",
                              pattern: {
                                value: /^[0-9]+$/,
                                message:
                                  "Re-entered bank account number must contain only digits",
                              },
                              validate: validateBankAccountNumber,
                            })}
                          />
                          {errors.rebnkaccountnum && (
                            <p className="error-message">
                              {errors.rebnkaccountnum.message}
                            </p>
                          )}
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="IFSC Code"
                            {...register("ifsccode", {
                              required: true,
                              pattern: /^[A-Za-z0-9]+$/,
                            })}
                            onKeyDown={(e) => {
                              const isAlphaNumeric = /^[A-Za-z0-9]$/.test(
                                e.key
                              );
                              const isBackspaceOrDelete =
                                e.key === "Backspace" || e.key === "Delete";
                              if (!isAlphaNumeric && !isBackspaceOrDelete) {
                                e.preventDefault();
                              }
                            }}
                          />
                          {errors.ifsccode &&
                            errors.ifsccode.type === "required" && (
                              <p className="error-message">
                                IFSC Code is required
                              </p>
                            )}
                          {errors.ifsccode &&
                            errors.ifsccode.type === "pattern" && (
                              <p className="error-message">
                                IFSC Code should contain only numbers and
                                alphabets
                              </p>
                            )}
                        </div>
                        <p
                          className="text-center py-4"
                          style={{ color: "#747474" }}
                        >
                          Or
                        </p>
                        <div className="col-12">
                          <label htmlFor="" className="lableformtag">
                            Enter UPI ID
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            {...register("upiid", {})}
                          />
                          {errors.upiid && (
                            <p className="error-message">UPI ID is required</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-center py-5">
                      <p>Update all the above information?</p>
                      <div className="btn-groupnewstyle">
                        <NavLink
                          to={"/supplier/view-profile"}
                          className="formbtnnew1"
                        >
                          Cancel
                        </NavLink>
                        <button type="submit" className="formbtnnew2 ms-3">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default SupplierProfile;
