import React from "react";
import Layout from "../../Layout";

function AgentDashboard() {
return(
    <Layout>
        <div className="sales">
            <div className="tabledataP px-3 my-2">
                <div className="row mb-3 ">
                    <div className="col-12">
                        <div className="statement-product">
                            <div className="order-list-view-tab w-100 ">
                                <div className="uploadsdone">
                                    <div className=" w-25 p-0">
                                        <h6 className="mb-4" style={{color :"#8D8D8DEE"}} >Revenue</h6>
                                        <span className="me-3">₹ 97737.00</span>
                                        <h6 className="mt-2 mb-0" style={{color :"#8D8D8DEE",fontSize: "14px"}} >(+13.2%)</h6>
                                    </div>
                                    <div className="d-flex w-100 justify-content-between border-0 pe-0">
                                        <div className="ps-4 w-25">
                                            <h6 className="mb-4" style={{color :"#8D8D8DEE"}} >Avg Order Value <img class="er-icon" src="/images/error_24px.svg"></img></h6>
                                            <span className="me-3">₹ 97737.00</span>
                                            <h6 className="mt-2 mb-0" style={{color :"#8D8D8DEE", fontSize: "14px"}} >(-3.2%)</h6>
                                        </div>
                                        <div className="ps-4 w-25">
                                            <h6 className="mb-4" style={{color :"#8D8D8DEE"}} >Gross Profit <img class="er-icon" src="/images/error_24px.svg"></img></h6>
                                            <span className="me-3">₹ 97737.00</span>
                                            <h6 className="mt-2 mb-0" style={{color :"#8D8D8DEE", fontSize: "14px"}} >(+13.2%)</h6>
                                        </div>
                                        <div className="ps-4 w-25">
                                            <h6 className="mb-4" style={{color :"#8D8D8DEE"}} >Profit Margin <img class="er-icon" src="/images/error_24px.svg"></img></h6>
                                            <span className="me-3">68%</span>
                                            <h6 className="mt-2 mb-0" style={{color :"#8D8D8DEE", fontSize: "14px"}} >(+13.2%) </h6>
                                        </div>
                                        <div className="ps-4 border-0 pe-0">
                                            <select name="" id=""  className="select-box">
                                                <option value="">Last 1 month</option>
                                                <option value="">Last 1 month</option>
                                                <option value="">Last 1 month</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12">
                        <div className="statement-product shadowbd">
                            <img src="../images/revenue.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row mb-5 ">
                    <div className="col-md-6">
                        <div className="statement-product shadowbd">
                            <img src="../images/conversion.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="statement-product shadowbd">
                            <img src="../images/revenue.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>        
);
}
export default AgentDashboard;