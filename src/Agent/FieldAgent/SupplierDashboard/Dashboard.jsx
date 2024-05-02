import React from "react";
import Layout from "../../../Layout";
import { NavLink, useParams } from "react-router-dom";

export const HomeSupplieraAg = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="container">
        <div className="row py-2">
          <div className="col-12 form-border-bg p-2">
            <div className="suppliershowimg float-end" style={{cursor: 'pointer'}}>
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
                <NavLink  to={"/agent/supplier/home"}>Home</NavLink>
                <NavLink className="activetabdb" to={`/agent/supplier/product/${id}`}>Products</NavLink>
                <NavLink to={"/agent/supplier/order"}>Orders</NavLink>
                <NavLink to={"/agent/supplier/customers"}>Customers</NavLink>
                <NavLink to={"/agent/supplier/return"}>Return</NavLink>
            </div>
        </div>
      </div>
    </Layout>
  );
};
