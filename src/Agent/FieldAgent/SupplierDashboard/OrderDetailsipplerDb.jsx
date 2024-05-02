import React, { useEffect, useMemo, useState } from "react";
import Layout from "../../../Layout";
import { NavLink ,useNavigate} from "react-router-dom";
import Table from "../../../component/Table";
import { Box } from "@mui/material";
import axios from "axios";
import { data as myData } from "../../../component/Table/data/fieldagentdata";

export const OrderDetailsipplerDb = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate({})
  const userId = localStorage.getItem("User_Id");
  const baseurl = "http://192.168.1.78:8000";
  useEffect(() => {
    axios
      .post(`${baseurl}/Agent/Supplier_List`, {
        fk_agent: userId,
      })
      .then((res) => {
        setData(res.data.obj);
        const formattedData = res.data.obj.map((item) => ({
          ...item,
          // Assuming 'created_dt' is the key for the date field
          created_dt: formatDate(item.created_dt),
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;
  };

  const tableProps = {
    enableColumnFilterModes: true,
    enableColumnOrdering: false,
    enableGrouping: false,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActionsTrue: false,
    enableRowSelection: false,
    showColumnFilters: false,
    showGlobalFilter: true, // Assuming this should also be passed as a prop
  };
  const columns = useMemo(
    () => [
      {
        id: "data",
        columns: [
          {
            accessorKey: "Product",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Product.",
          },
          {
            accessorKey: "sku",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "SKU",
          },
          {
            accessorKey: "Price",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Price",
          },
          {
            accessorKey: "Quantity",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Quantity",
          },
          {
            accessorKey: "Total",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Total",
          },
          {
            accessorKey: "Date",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Date",
          },
        ],
      },
    ],

    []
  );

  const editClick = (e) => {
    console.log("clicked");
  };

  const deleteClick = (e) => {
    console.log("delete");
  };

  return (
    <>
      <Layout>
        <div className="container">
          <div className="row py-2">
            <div className="col-12 form-border-bg p-2">
              <div
                className="suppliershowimg float-end"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center justify-align-betwen">
                  <div className="cercalimgbox">
                    {/* <p className="mb-0">A</p> */}
                    <img src="../../images/proimg.jpg" alt="" />
                  </div>
                  <p className="mb-0 ms-2 suppliername">Supplier’s Name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="supplerDbTabs">
              <NavLink to={"/agent/supplier/home"}>Home</NavLink>
              <NavLink to={"/agent/supplier/product"}>Products</NavLink>
              <NavLink className="activetabdb" to={"/agent/supplier/order"}>
                Orders
              </NavLink>
              <NavLink to={"/agent/supplier/customers"}>Customers</NavLink>
              <NavLink to={"/agent/supplier/return"}>Return</NavLink>
            </div>
          </div>
        </div>
        <div className="headprofile px-3 pt-3 border-0">
          <NavLink onClick={() => {
                           navigate(-1)
                        }} className="text-dark">
            <h5 className="m-0">
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
              Order Details - # 646573{" "}
            </h5>
          </NavLink>
        </div>
        <div className="px-3 my-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="orderCard form-border-bg p-3">
                <div className="d-flex mb-5 align-items-center">
                  <span className="costomer-profile"></span>
                  <div>
                    <div className="lablename">Customer Name</div>
                    <span className="Customerid">Customer ID</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="costomer-profile"></span>
                  <div>
                    <div className="lablename">Mastercard</div>
                    <span className="Customerid">Card Number: ******4291</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="orderCard add-order-detail-card form-border-bg p-3">
                <div className="d-flex  align-items-start gp">
                  <span className="Customerid">Email ID : </span>{" "}
                  <span className="lablename">
                    {" "}
                    divyanshiagrawal1@gmail.com
                  </span>
                </div>
                <div className="d-flex  align-items-start gp">
                  <span className="Customerid">Mobile : </span>{" "}
                  <span className="lablename">+91 7653790067</span>
                </div>
                <div className="d-flex  mb-0 align-items-start gp">
                  <span className="Customerid">Shipping Address : </span>{" "}
                  <span className="lablename">
                    {" "}
                    45 Roker Terrace Latheronwheel KW5 8NW, Delhi, INDIA <br />{" "}
                    KW5 8NW, Delhi, INDIA
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="totalOrderOrderid bg-row">
                <div className="d-flex justify-content-between table-header">
                  <span>Order ID #646573</span>
                  <span>Total Orders : 3</span>
                </div>
              </div>
              <div className="tableDatadiv  py-2">
                <Table
                  {...tableProps}
                  columns={columns}
                  data={myData}
                 
                  isFieldAgent={false}
                  isWarehouseAgent={true}
                  editClick={editClick}
                  isAddagent={false}
                  isAddsupplier={false}
                  deleteClick={deleteClick}
                  isDraft={false}
                  isLive={false}
                  isEdit={false}
                  isDelete={false}
                  isView={true}
                ></Table>
              </div>
              <div className="delivStatus d-flex justify-content-between bg-row mt-0">
                <div>
                  <div className="d-flex mb-2 align-items-center">
                    <span className="Customerid">Status :</span>
                    <div className="lablename Approved bgStatus">Paid</div>
                  </div>

                  <div className="d-flex align-items-center">
                    <span className="Customerid">Delivery : </span>
                    <div className="lablename dis"> Dispatched</div>
                  </div>
                </div>

                <div className="orderTotalTax">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="Customerid">Subtotal : </span>
                    <span className="lablename">
                      <img
                        className="rupyee-icon"
                        src={"/images/rupee 4.svg"}
                      />{" "}
                      7465.45
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="Customerid">Discount : </span>
                    <span className="lablename">
                      <img
                        className="rupyee-icon"
                        src={"/images/rupee 4.svg"}
                      />{" "}
                      00.00
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-1">
                    <span className="Customerid">Tax : </span>
                    <span className="lablename">
                      <img
                        className="rupyee-icon"
                        src={"/images/rupee 4.svg"}
                      />
                      100.00
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="Customerid">Total : </span>
                    <span className="lablename">
                      {" "}
                      <img
                        className="rupyee-icon"
                        src={"/images/rupee 4.svg"}
                      />
                      7565.45
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12">
              <div className="shippingActivity bg-row form-border-bg p-3">
                <h6>Shipping Activity</h6>
                <ul className="mt-5 shipping-ul">
                  <li>
                    <div className="row">
                      <div className="col-md-6">
                        <span className="shippingStatus1">
                          Order was placed (Order ID: #32543)
                        </span>
                        <br />
                        <span className="shippingStatus2">
                          Your order has been placed successfully
                        </span>
                      </div>
                      <div className="col-md-6 text-end">
                        <span className="dateshipping">Thursday 11:29 AM</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-6">
                        <span className="shippingStatus1">Pick-up</span>
                        <br />
                        <span className="shippingStatus2">
                          Pick-up scheduled with logistic
                        </span>
                      </div>
                      <div className="col-md-6 text-end">
                        <span className="dateshipping">Friday 11:29 AM</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-6">
                        <span className="shippingStatus1">Picked</span>
                        <br />
                        <span className="shippingStatus2">
                          Item has been picked up by logistic
                        </span>
                      </div>
                      <div className="col-md-6 text-end">
                        <span className="dateshipping">Saturday 11:29 AM</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-6">
                        <span className="shippingStatus1">
                          Dispatched for delivery
                        </span>
                        <br />
                        <span className="shippingStatus2">
                          Package has left from logistic
                        </span>
                      </div>
                      <div className="col-md-6 text-end">
                        <span className="dateshipping">Today 11:29 AM</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-6">
                        <span className="shippingStatus1">Delivery</span>
                        <br />
                        <span className="shippingStatus2">
                          Package will be delivered by tomorrow
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
