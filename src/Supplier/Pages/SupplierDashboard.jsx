import React from "react";
import Layout from "../../Layout";
// import SidebarDataSupplier from "./SidebarDataSupplier";



function SupplierDashboard(props){
    // const { profilenameHeader, profilename, display, items, homeimage, backtohome } = SidebarDataSupplier();  

return(
<>
    <Layout>
    <div className="sales">
                    <div className="headprofile px-4 pt-3 d-flex justify-content-between align-items-center; border-0">
                        <h5 className="">Hello Seller 1</h5>
                        <div className="d-flex headerbtn dashbord-tabs">
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Verify</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Order</button>
                                </li>
                            </ul>
                            {/* <a href="#" class="formbtn me-3">Verify</a>
                            <a href="#" class="formbtn ">Order</a> */}
                        </div>
                    </div>
                    <div className="tabledataP px-3 my-2">
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
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
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
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
                                            <img src="../images/TotalOrders.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-5 ">
                                    <div className="col-md-6">
                                        <div className="statement-product shadowbd height-bt">
                                            <img className="h-100 w-100" src="../images/conversion.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="statement-product shadowbd">
                                            <img className="h-50 w-100" src="../images/DeliveryStatus.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </Layout>
</>
);
}
export default SupplierDashboard;