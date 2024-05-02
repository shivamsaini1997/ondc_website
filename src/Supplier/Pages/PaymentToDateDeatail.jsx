import React from "react";
import Layout from "../../Layout";
// import SidebarDataSupplier from "./SidebarDataSupplier";

function PaymentToDateDetails(props){
   // const { profilenameHeader, profilename, display, items, homeimage, backtohome } = SidebarDataSupplier();  

    return(
    <>
         <Layout>
         <div className="PaymentToDate">
                <div className="headprofile px-3 pt-3 border-0">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Payment <img className='breadright-icon' src={'/images/breadright.svg'} />
                            </a>
                        </li>
                         <li class="active" aria-current="page">Payment to Date <img className='breadright-icon' src={'/images/breadright.svg'} /></li>
                            <li class="active" aria-current="page">21st March 2019</li>
                        </ol>
                    </nav>
                    <a href="/supplier/payment-to-date" className="text-dark">
                    <h5 className="mb-0"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z" fill="black"/>
                    </svg>
                    21st March 2019</h5>
                    </a>
                </div>
               <div className="tabledataP px-3 my-2">

                  <div className="row mb-3">
                     <div className="col-12">
                        <div className="statement-product">
                            <div className="order-list-view-tab w-100">
                                <div className="uploadsdone">
                                    <div>
                                        <h6>NEFT/UTR</h6>
                                        <span className="">KN56D248978967RDE</span>
                                    </div>
                                    <div className="ms-4">
                                        <h6>Total Net order amount<img class="er-icon" src="/images/error_24px.svg"/></h6>
                                        <span className="">₹ 1274.68</span>
                                    </div>
                                    
                                </div>
                                
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
                                    <th>S.no</th>
                                    <th>Order No.</th>
                                    <th>SKU</th>
                                    <th>Sub Order Contribution</th>
                                    <th>Order Amount <img class="er-icon" src="/images/error_24px.svg"/></th>
                                    <th>Claims & compensation<img class="er-icon" src="/images/error_24px.svg"/></th>
                                    <th>Recoveries & Charges<img class="er-icon" src="/images/error_24px.svg"/></th>
                                    <th>Net Order Amount<img class="er-icon" src="/images/error_24px.svg"/></th>
                                    <th>Action</th>
                                    
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>1</td>
                                    <td>2019-03-21</td>
                                    <td>4GRD567F </td>
                                    <td>RTO</td>
                                    <td>₹6353</td>
                                    <td>₹6353</td>
                                    <td>₹6353</td>
                                    <td>KN56D248978967RDE</td>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="view-product-icon prod-icon" style={{width:"35px"}} src="../images/eye-regular 1.svg"/></a></td>
                                 </tr>
                                 <tr>
                                 <td>2</td>
                                    <td>2019-03-21</td>
                                    <td>4GRD567F </td>
                                    <td>Delivered</td>
                                    <td>₹6353</td>
                                    <td>₹6353</td>
                                    <td>₹6353</td>
                                    <td>KN56D248978967RDE</td>
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
               </div>
         </div>
         <div className="container-fluid saledetail">
         <div className="row">
            <div className="col-lg-8 p-4">
                 <h4>Sale Details</h4>
                 <div className="mt-4">
                     <h5>Total Revenue (Incl. GST)</h5>
                     <div className="d-flex border-bottom justify-content-between py-1">
                           <span>Sale Revenue </span>
                           <span>₹ 987 <img class="er-icon" src="/images/error_24px.svg"></img></span>
                     </div>
                     <div className="d-flex border-bottom justify-content-between py-1">
                           <span>Shipping Revenue</span>
                           <span>₹ 76 <img class="er-icon" src="/images/error_24px.svg"></img></span>
                     </div>
                     <div className="d-flex border-bottom justify-content-between py-1">
                           <span>Sales Return</span>
                           <span>-₹76 <img class="er-icon" src="/images/error_24px.svg"></img></span>
                     </div>
                     <div className="d-flex border-bottom justify-content-between py-1">
                           <span>Shipping Return</span>
                           <span>-₹76 <img class="er-icon" src="/images/error_24px.svg"></img></span>
                     </div>
                 </div>
                 <div className="mt-4">
                     <h5>Marketplace Fee (Incl GST)</h5>
                     <div className="d-flex border-bottom justify-content-between py-1">
                           <span>Website Commission</span>
                           <span>₹ 35<img class="er-icon" src="/images/error_24px.svg"></img></span>
                     </div>
                     <div className="d-flex border-bottom justify-content-between py-1">
                           <span>Waas Fee</span>
                           <span>₹ 56 <img class="er-icon" src="/images/error_24px.svg"></img></span>
                     </div>
                     <div className="d-flex border-bottom justify-content-between py-1">
                           <span>Shipping charge</span>
                           <span>₹ 56 <img class="er-icon" src="/images/error_24px.svg"></img></span>
                     </div>
                    
                 </div>
                 <div className="mt-4">
                     <h5>Net Settlement (Incl.GST)</h5>
                     <div className="d-flex border-bottom justify-content-between py-1">
                           <span>GST Input Credits </span>
                           <span>₹ 56 <img class="er-icon" src="/images/error_24px.svg"></img></span>
                     </div>
                     <div className="d-flex mt-3 justify-content-between py-1">
                           <h5>Bank Settlement</h5>
                           <span>₹ 56 <img class="er-icon" src="/images/error_24px.svg"></img></span>
                     </div>
                     
                 </div>
            </div>
            <div className="col-lg-4 p-4">
                 <h4>Payment Status</h4>

                 <div className="payment-details">
                     <ul>
                           <li>
                              <h4>Order ID</h4>
                                 <p>GDY44743</p>
                           </li>
                           <li>
                              <h4>Shipped</h4>
                                 <p>GDY44743</p>
                           </li>
                           <li>
                              <h4>Delivered</h4>
                                 <p>GDY44743</p>
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

export default PaymentToDateDetails;