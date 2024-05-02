import React from "react";

// import SidebarDataSupplier from "./SidebarDataSupplier";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Layout from "../../Layout";

function ReturnProduct(props){
   // const { profilenameHeader, profilename, display, items, homeimage, backtohome } = SidebarDataSupplier();  

    return(
<>
   <Layout>
      <div className="PaymentToDate">
               <div className="headprofile px-2 pt-3 border-0">
                  
                  <a href="" className="text-dark">
                  <h5 className="mb-0"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z" fill="black"/>
                  </svg>
                  Returns</h5>
                  </a>
               </div>
            <div className="tabledataP px-3 my-2">

               <div className="row mb-3">
                  <div className="col-12">
                     <div className="statement-product">
                           <div className="order-list-view-tab w-100">
                              <div className="uploadsdone">
                                 <div className="w-50">
                                       <h6 className="mb-4" style={{color :"#8D8D8DEE"}} >Customer Return Rate</h6>
                                       <span className="d-flex ">
                                          <span className="me-3">15.46%</span>
                                          <span style={{color :"#FF1515EE"}}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.66602 6.66663L7.99935 9.99996L11.3327 6.66663H4.66602Z" fill="#FF5F5F"/>
                                          </svg>
                                          (3.2%)</span>
                                       </span>
                                       <h6 className="mt-2 mb-0" style={{color :"#8D8D8DEE",fontSize: "14px"}} >32 orders returned out of 207 delivered</h6>
                                 </div>
                                 <div className="d-flex w-100 justify-content-between border-0">
                                       <div className="ps-4 border-0">
                                          <h6 className="mb-4" style={{color :"#8D8D8DEE"}} >Courier Return Rate</h6>
                                          <span className="d-flex ">
                                             <span className="me-3">11.54%</span>
                                             <span style={{color :"#00C64FEE"}}><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M3.79102 8.16663L6.49935 5.24996L9.20768 8.16663H3.79102Z" fill="#0DC60A"/>
                                             </svg>

                                             (3.2%)</span>
                                          </span>
                                          <h6 className="mt-2 mb-0" style={{color :"#8D8D8DEE", fontSize: "14px"}} >38 Received Wrong orders out of 338 dispatched</h6>
                                       </div>
                                       <div className="ps-4 border-0">
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
               <div className="row">
                  <div className="col-12">
                     <div className="d-flex d-flex justify-content-between my-3">
                           <div>
                           <button aria-label="All (130)" class="All btn-data p-button p-component" type="button">
                              <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                              <span class="p-button-label p-c">All (130)</span>
                           </button>
                           <button aria-label="All (130)" class="Approved  btn-data p-button p-component" type="button">
                              <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                              <span class="p-button-label p-c">Delivered (87)</span>
                           </button>
                           <button aria-label="All (130)" class="dis  btn-data p-button p-component" type="button">
                              <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                              <span class="p-button-label p-c">Out for Delivery (67)</span>
                           </button>
                           </div>
                           <div>
                           <span class="p-input-icon-left"><i class="pi pi-search"></i>
                           <input class="searchinputtable p-inputtext p-component searchinputtable" value=""/></span>
                           <button className="searchbar"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                           <button className="searchbar resetbtn">Reset</button>
                           </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="tableorderdetail">
                        <table className="table mb-0 table-py">
                           <thead>
                              <tr>
                                 <th>Order No.</th>
                                 <th>Product</th>
                                 <th>Return Reason</th>
                                 <th>Return Shipping Fee</th>
                                 <th>Created Date</th>
                                 <th>Tracking Number</th>
                                 <th>Status</th>
                                 <th>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                        
                                 <td>2019DK3</td>
                                 <td>Product 1<br/>
                                    <span style={{color: "#AEAEAEEE",fontSize: "12px"}}>SKU: GTI234</span><br/>
                                    <span style={{color: "#AEAEAEEE",fontSize: "12px"}}>Category: Shirt</span><br/>
                                    <span style={{color: "#AEAEAEEE",fontSize: "12px"}}>Qty:1</span>
                                 </td>
                                 
                                 <td>Received Wrong Product</td>
                                 <td>₹ 115</td>
                                 <td>23/08/22<br/>
                                    <span style={{color: "#AEAEAEEE",fontSize: "12px"}}>Qty:1</span>
                                 </td>
                                 <td>FWY56363HHS</td>
                                 <td><span className="dis">Out for Delivery </span><br/>
                                    <span  style={{color: "#AEAEAEEE",fontSize: "12px"}}>Qty:1</span>
                                    </td>
                                 <td><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="view-product-icon prod-icon" style={{width:"35px"}} src="../images/eye-regular 1.svg"/></a></td>
                           
                              </tr>
                              <tr>
                        
                                 <td>2019DK3</td>
                                 <td>Product 1<br/>
                                    <span style={{color: "#AEAEAEEE",fontSize: "12px"}}>SKU: GTI234</span><br/>
                                    <span style={{color: "#AEAEAEEE",fontSize: "12px"}}>Category: Shirt</span><br/>
                                    <span style={{color: "#AEAEAEEE",fontSize: "12px"}}>Qty:1</span>
                                 </td>
                                 
                                 <td>Received Wrong Product</td>
                                 <td>₹ 115</td>
                                 <td>23/08/22<br/>
                                    <span style={{color: "#AEAEAEEE",fontSize: "12px"}}>Qty:1</span>
                                 </td>
                                 <td>FWY56363HHS</td>
                                 <td><span className="Approved">Out for Delivery </span><br/>
                                    <span style={{color: "#AEAEAEEE",fontSize: "12px"}}>Qty:1</span>
                                 </td>
                                 <td><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="view-product-icon prod-icon" style={{width:"35px"}} src="../images/eye-regular 1.svg"/></a></td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
         <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Order Details</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body pb-0 px-0">
               <div className="order-detail-box border-bottom p-4 pb-0">
                     <div className="product-order-description d-flex">
                           <div className="product-image">

                           </div>
                           <h3>Product Description</h3>
                     </div>
                     <div className="product-order-description d-flex mt-3 ORde">
                           <div className="d-flex">
                              <div className="product-image invisible h-25"></div>
                              <div>
                                 <h4>Order ID</h4>
                                 <p>GDY44743</p>
                              </div>
                           </div>
                           <div className="ms-5">
                              <h4>SKU Code</h4>
                              <p>4PZFKE</p>
                           </div>
                           <div className="ms-5">
                              <h4>Quantity</h4>
                              <p>1</p>
                           </div>
                           <div className="ms-5">
                              <h4>Size</h4>
                              <p>Free Size</p>
                           </div>
                     </div>
               </div>
               <div className="container-fluid saledetail">
               <div className="row">
                  <div className="col-lg-8 p-4">
                     <h4>Shipment Details</h4>
                     <div className="mt-4">
                        
                           <div className="d-flex border-bottom justify-content-between shipmentpadding">
                                 <span>Order ID</span>
                                 <span>FTGHJ987</span>
                           </div>
                           <div className="d-flex border-bottom justify-content-between shipmentpadding">
                                 <span>Return Type</span>
                                 <span>Courier ReturnRTO</span>
                           </div>
                           <div className="d-flex border-bottom justify-content-between shipmentpadding">
                                 <span>Return Reason</span>
                                 <span>N/A</span>
                           </div>
                           <div className="d-flex border-bottom justify-content-between shipmentpadding">
                                 <span>Return Shipping Fee</span>
                                 <span>₹76</span>
                           </div>
                           <div className="d-flex border-bottom justify-content-between shipmentpadding">
                                 <span>Courier Partner</span>
                                 <span>Ecom Express</span>
                           </div>
                           <div className="d-flex border-bottom justify-content-between shipmentpadding">
                                 <span>Tracking Number</span>
                                 <span>FTU678YHG</span>
                           </div>
                     </div>
                  
                  </div>
                  <div className="col-lg-4 p-4">
                     <h4>Timeline</h4>

                     <div className="payment-details mt-4">
                           <ul>
                                 <li>
                                    <h4>Order Dispatched</h4>
                                       <p>31 Jan, 24</p>
                                 </li>
                                 <li>
                                    <h4>RTO Initiated</h4>
                                       <p>31 Jan, 24</p>
                                 </li>
                                 <li>
                                    <h4>Expected Delivery</h4>
                                       <p>31 Jan, 24</p>
                                 </li>
                           </ul>
                     </div>
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

export default ReturnProduct; 