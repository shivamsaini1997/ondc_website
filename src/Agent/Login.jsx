import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setUser } from "../store/loginSlice";
import { useDispatch } from "react-redux";

function AgentLogin() {
  const dispatch = useDispatch(); // Get the dispatch function

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/Agent/Agent_Login`, data);
      console.log(res);
      const responseData = res.data;
      if (responseData.status === 1) {
        const userId = responseData.obj.id;
        const agent_type = responseData.obj.agent_type;
        localStorage.setItem("User_Type", agent_type);
        localStorage.setItem("User_Id", userId);
        toast("Login Successful");
        navigate("/agent/dashboard");
      } else {
        toast.error(responseData.msg);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false); // Set loading state to false after submission
    }
  };

  return (
    <>
      <div className="formadmin padding-y superform">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-7 padding-form">
              <div className="text-center mb-3">
                <h2>Login</h2>
              </div>

              <div className="adminform">
                <Row className="mb-3 admin-fm">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group
                      as={Col}
                      md="12 position-relative mb-3"
                      controlId="validationCustom02"
                    >
                      <Form.Label>Email</Form.Label>
                      <input
                        className="form-control"
                        type="email"
                        defaultValue=""
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <p style={{ color: "#ff0000" }}>Mail is required</p>
                      )}
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="12 position-relative mb-3"
                      controlId="validationCustom02"
                    >
                      <Form.Label>Password</Form.Label>
                      <div className="password-input position-relative">
                        <input
                          type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                          className="form-control"
                          defaultValue=""
                          {...register("password", {
                            required: true,
                            pattern:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&()_+])[A-Za-z\d!@#$%^&*()_+]{5,10}$/,
                          })}
                        />
                        {/* Toggle eye icon based on showPassword state */}
                        {showPassword ? (
                          <FaEyeSlash
                            onClick={() => setShowPassword(false)}
                            className="eye-icon"
                          />
                        ) : (
                          <FaEye
                            onClick={() => setShowPassword(true)}
                            className="eye-icon"
                          />
                        )}
                      </div>
                      {errors.password && (
                        <p style={{ color: "#ff0000" }}>
                          Password is required and must contain at least one
                          lowercase letter, one uppercase letter, and one
                          special character
                        </p>
                      )}
                      <div className="text-end">
                        <NavLink className="forgetpassword" to="#">
                          Forgot Password ?
                        </NavLink>
                      </div>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <button className="formbtn mt-3 w-100" type="submit">
                      {isLoading ? "Loading..." : "Login"}
                    </button>
                  </form>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgentLogin;
