import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const Agentviewprofile = () => {

  const {id} = useParams()

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(`${baseUrl}/Organization/Get_Agents_Details`, {
        agent_id: id,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 1) {
          setData(res.data.data);
        } else {
          toast.error(res.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="profileview p-3">
        <div className="container">
          <div className="row mb-3">
            <NavLink to={"/organization/both-agent"} className="text-dark p-0">
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
                Agent
              </h5>
            </NavLink>
          </div>
        </div>
        <div className="container-fluid form-border-bg p-md-5">
          <div className="row mb-5">
            <div className="col-12">
              <div className="profilebox">
                <img src="../images/proimg.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <span class="dateshipping">Name: </span>
              <span class="lablename">{data?.first_name + " "  +   data?.last_name }</span>
            </div>
            <div className="col-12 mb-4">
              <span class="dateshipping">Mobile Number: </span>
              <span class="lablename">{data?.mobileno}</span>
            </div>
            <div className="col-12 mb-4">
              <span class="dateshipping">Address: </span>
              <span class="lablename"> {data?.address}</span>
            </div>
            <div className="col-12 mb-4">
              <span class="dateshipping">State: </span>
              <span class="lablename"> {data?.state}</span>
            </div>
            <div className="col-12 mb-4">
              <span class="dateshipping">City: </span>
              <span class="lablename">{data?.city} </span>
            </div>
            <div className="col-12 mb-4">
              <span class="dateshipping">District: </span>
              <span class="lablename">{data?.district} </span>
            </div>
            <div className="col-12 mb-4">
              <span class="dateshipping">Tehsil: </span>
              <span class="lablename"> {data?.tahasil}</span>
            </div>
            <div className="col-12 mb-4">
              <span class="dateshipping">Pincode:</span>
              <span class="lablename"> {data?.pincode} </span>
            </div>

            <div className="col-12 mb-4">
              <span class="dateshipping">PAN Number: </span>
              <span class="lablename"> {data?.pancard} </span>
            </div>
            <div className="col-12 mb-4">
              <span class="dateshipping">Aadhaar Number: </span>
              <span class="lablename">{data?.aadhar_no} </span>
            </div>
            {/* <div className="col-12 mb-4">
              <span class="dateshipping">Bank Account Number: </span>
              <span class="lablename"> </span>
            </div> */}
          </div>
          {/* <div className="btn-groupnewstyle mt-5">
                        <NavLink className="formbtnnew2" to={"/organization/update-profile"}> Update Profile</NavLink>
                     
                        </div> */}
        </div>
      </div>
    </Layout>
  );
};
