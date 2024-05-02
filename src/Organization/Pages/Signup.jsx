import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setUser } from "../../store/loginSlice";
import { useDispatch } from "react-redux";

function OrganizationSignup() {
  const dispatch = useDispatch(); // Get the dispatch function

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Signup request
      const signupRes = await axios.post(
        `${baseUrl}/Organization/Organization_Registration`,
        data
      );
      const signupData = signupRes.data;

      if (signupData.status === 1) {
        // Login request
        const loginRes = await axios.post(
          `${baseUrl}/Organization/Organization_Login`,
          {
            email: data.email,
            password: data.password,
          }
        );
        console.log(loginRes);
        const loginData = loginRes.data;

        if (loginData.status === 1) {
          const userId = loginData.details.id;
          localStorage.setItem("User_Type", "Org");
          localStorage.setItem("User_Id", userId);
          dispatch(setUser(loginData.details));
          toast("Signup Successful");
          navigate("/organization/dashboard");
        } else {
          toast.error(loginData.msg);
        }
      } else {
        toast.error(signupData.msg);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="formadmin padding-y pb-0 org-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-7 padding-form">
              <div className="text-center mb-5">
                <h4>Create an account</h4>
              </div>
              <div className="adminform">
                <Form className="form-box" onSubmit={handleSubmit(onSubmit)}>
                  <Row className="mb-3 admin-fm">
                    <Form.Group
                      as={Col}
                      md="12 position-relative mb-3"
                      controlId="validationCustom02"
                    >
                      <Form.Label>Name of the Organization</Form.Label>
                      <input
                        className="form-control"
                        defaultValue=""
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <p style={{ color: "#ff0000" }}>
                          Organization name is required
                        </p>
                      )}
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
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
                      controlId="validationCustom03"
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
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12 position-relative mb-3"
                      controlId="validationCustom04"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="password-input position-relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"} // Toggle input type based on showConfirmPassword state
                          className="form-control"
                          defaultValue=""
                          {...register("confirmPassword", {
                            required: true,
                            validate: (value) =>
                              value === password ||
                              "The passwords do not match",
                          })}
                        />
                        {/* Toggle eye icon based on showConfirmPassword state */}
                        {showConfirmPassword ? (
                          <FaEyeSlash
                            onClick={() => setShowConfirmPassword(false)}
                            className="eye-icon"
                          />
                        ) : (
                          <FaEye
                            onClick={() => setShowConfirmPassword(true)}
                            className="eye-icon"
                          />
                        )}
                      </div>
                      {errors.confirmPassword && (
                        <p style={{ color: "#ff0000" }}>
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </Form.Group>
                    <button className="formbtn mt-3 w-100" disabled={isLoading}>
                      {isLoading ? "Loading..." : "Sign up"}
                    </button>
                  </Row>

                  <div className="text-end">
                    <NavLink to={"/"} className="color-link">
                      Already a member?{" "}
                      <img
                        className="userform-icon"
                        src={"/images/usericon.svg"}
                        alt=""
                      />
                    </NavLink>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrganizationSignup;
