import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function OrganizationSignup() {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [validated, setValidated] = useState(false);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const [allEntry, setAllEntry] = useState([]);
  const inputRef = useRef(null);
  const inputRefe = useRef(null);
  const inputRefc = useRef(null);
  const inputRefcp = useRef(null);

  const OrgSignup = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      if (!orgName) {
        toast.error("Please enter a organization name");
        inputRef.current.focus();
      } else if (!validateEmail(email)) {
        toast.error("Please enter a valid email");
        inputRefe.current.focus();
      } else if (!password) {
        toast.error("Please enter a password");
        inputRefc.current.focus();
      } else if (!cpassword) {
        toast.error("Please enter a confirm passord");
        inputRefcp.current.focus();
      } else {
        // Store data in local storage
        const newEntry = { orgName: orgName, email: email, password: password };
        const allEntries = JSON.parse(localStorage.getItem("orgEntries")) || [];
        localStorage.setItem("orgEntries", JSON.stringify([...allEntries, newEntry]));
        
        toast.success("Signup Successful");
        
        // Clear form fields
        setOrgName("");
        setEmail("");
        setPassword("");
        setCpassword("");
        setValidated(false);
      }
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
                <Form noValidate validated={validated} action="POST">
                  <Row className="mb-3 admin-fm">
                    <Form.Group
                      as={Col}
                      md="12 position-relative mb-3"
                      controlId="validationCustom01"
                    >
                      <Form.Label>Name of the Organization</Form.Label>
                      <Form.Control
                        className=""
                        required
                        type="text"
                        value={orgName}
                        ref={inputRef}
                        onChange={(e) => setOrgName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12 position-relative mb-3"
                      controlId="validationCustom02"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        className=""
                        required
                        type="email"
                        value={email}
                        ref={inputRefe}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12 position-relative mb-3"
                      controlId="validationCustom03"
                    >
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative">
                      <Form.Control
                        className=""
                        required
                        type="Password"
                        value={password}
                        ref={inputRefc}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <FontAwesomeIcon icon={faEyeSlash} className="iconpass" />
                      </div>


                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12 position-relative mb-3"
                      controlId="validationCustom04"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          className=""
                          required
                          type="Password"
                          value={cpassword}
                          ref={inputRefcp}
                          onChange={(e) => setCpassword(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faEyeSlash} className="iconpass" />
                      </div>
                    </Form.Group>

                    <button className="formbtn mt-3 w-100" onClick={OrgSignup}>
                      Sign up
                    </button>
                  </Row>

                  <div className="text-end">
                    <a href="/" className="color-link">
                      Already a member?{" "}
                      <img
                        className="userform-icon"
                        src={"/images/usericon.svg"}
                        alt=""
                      />
                    </a>
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
