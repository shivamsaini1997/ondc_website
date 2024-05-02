import React from "react";
// import SidebarDataSupplier from "./SidebarDataSupplier";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Layout from "../../Layout";

function ProductOrderList(props){
   // const { profilenameHeader, profilename, display, items, homeimage, backtohome } = SidebarDataSupplier();  

    return(
    <>
         <Layout>
         <div className="productlistsupplier orderlist">
                <div className="headprofile px-1 pt-3 border-0">
                   <h3 className="ms-3">Order List</h3>
                </div>
                <div className="statement-product mx-3">
                    <div className="order-list-view-tab">
                    <div className="uploadsdone">
                        <div>
                            <h6>890</h6>
                            <span className="Approved">Delivered</span>
                        </div>
                        <div className="ps-4">
                            <h6>345</h6>
                            <span className="dis">Dispatched</span>
                        </div>
                        <div className="ps-4">
                            <h6>56</h6>
                            <span className="Declined">Cancelled</span>
                        </div>
                        <div className="ps-4">
                            <h6>56</h6>
                            <span className="Pending">Pending</span>
                        </div>
                    </div>
                    
                    </div>
                   
                </div>
               <div className="tabledataP px-3 my-2">
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
                                 <span class="p-button-label p-c">Paid (86)</span>
                              </button>
                              <button aria-label="All (130)" class="Declined btn-data p-button p-component" type="button">
                                 <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                                 <span class="p-button-label p-c">Cancelled (9)</span>
                              </button>
                              <button aria-label="All (130)" class="Approved   btn-data p-button p-component" type="button">
                                 <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                                 <span class="p-button-label p-c">Delivered (87)</span>
                              </button>
                              <button aria-label="All (130)" class="dis  btn-data p-button p-component" type="button">
                                 <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                                 <span class="p-button-label p-c">Dispatched (27)</span>
                              </button>
                              <button aria-label="All (130)" class="Pending btn-data p-button p-component" type="button">
                                 <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                                 <span class="p-button-label p-c">Pending (36)</span>
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
                                    <th>S.no</th>
                                    <th>Order No.</th>
                                    <th>Billing Name</th>
                                    <th>Date</th>
                                    <th>Totle</th>
                                    <th>Payment Status</th>
                                    <th>Payment method</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>1</td>
                                    <td>#12837492</td>
                                    <td>Name
                                    </td>
                                  
                                    <td>	02/01/2001</td>
                                    <td>	₹ 546.00</td>
                                    <td>
                                        <span className="bgstatuspaid">Paid</span>
                                    </td>
                                    <td>	Mastercard</td>
                                    <td><span className="Approved   ">Delivered</span></td>
                                    <td><a href="/supplier/order-detail"><img class="view-product-icon prod-icon" style={{width:"35px"}} src="../images/eye-regular 1.svg"/></a></td>
                            
                                 </tr>
                                 <tr>
                                    <td>2</td>
                                    <td>#12837492</td>
                                    <td>Name
                                    </td>
                                   
                                    <td>	02/01/2001</td>
                                    <td>	₹ 546.00</td>
                                    <td><span className="bgstatuscancelled">Cancelled</span>
                                    </td>
                                    <td>	Mastercard</td>
                                    <td><span className="panding-color">Panding</span></td>
                                    <td><a href="/supplier/order-detail"><img class="view-product-icon prod-icon" style={{width:"35px"}} src="../images/eye-regular 1.svg"/></a></td>
                                 </tr>
                                 <tr>
                                    <td>3</td>
                                    <td>#12837492</td>
                                    <td>Name
                                    </td>
                                   
                                    <td>	02/01/2001</td>
                                    <td>	₹ 546.00</td>
                                    <td><span className="bgstatuscancelled">Cancelled</span>
                                    </td>
                                    <td>	Mastercard</td>
                                    <td><span className="dis">Dispatched</span></td>
                                    <td><a href="/supplier/order-detail"><img class="view-product-icon prod-icon" style={{width:"35px"}} src="../images/eye-regular 1.svg"/></a></td>
                                 </tr>
                              </tbody>
                           </table>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                           <span className="paginationentries">Displaying 1 to 10 of 100 entries</span>
                           <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-end">
                                <li class="page-item disabled">
                                <a class="page-link">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                            </nav>
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

export default ProductOrderList;