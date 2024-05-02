import React from "react";
import Layout from "../../Layout";
import { NavLink } from "react-router-dom";



function PaymentTransactions(props) {

return (
<>
<Layout>
<div className="agentpayment">

               

                <div className="headprofile px-3 pt-3 border-0">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Payment <img className='breadright-icon' src={'/images/breadright.svg'} />
                            </a>
                        </li>
                         <li class="active" aria-current="page">Your Wallet</li>

                        </ol>
                    </nav>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h5 className="" ><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z" fill="black"/>
                            </svg>
                            <NavLink to="/agent/payment" className="text-dark">Your Wallet</NavLink></h5>
                        </div>
                        <div>
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="All-Transaction-tab" data-bs-toggle="pill" data-bs-target="#All-Transaction" type="button" role="tab" aria-controls="All-Transaction" aria-selected="true">All Transaction</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="History-tab" data-bs-toggle="pill" data-bs-target="#History" type="button" role="tab" aria-controls="History" aria-selected="false">History</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                    <div className="tabledataP px-3 my-2">
                
                        <div className="row">
                            <div className="col-12">
                                    <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="All-Transaction" role="tabpanel" aria-labelledby="All-Transaction-tab" tabindex="0">
                                            <div className="tableorderdetail">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>S.no</th>
                                                        <th>Date</th>
                                                        <th>Amount Credited</th>
                                                        <th>Transfer ID</th>
                                                        <th>Payment for</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>2019-03-21</td>
                                                        <td>₹63</td>
                                                        <td>KN56D248978967RDE</td>
                                                        <td>Onboarding </td>
                                                        <td>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                                >
                                                            <img
                                                            class="view-product-icon prod-icon"
                                                            style={{ width: "35px" }}
                                                            src="../images/eye-regular 1.svg"
                                                            />
                                                            </a>
                                                        </td>
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
                                    <div class="tab-pane fade" id="History" role="tabpanel" aria-labelledby="History-tab" tabindex="0">
                                        <div className="tableorderdetail">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>S.no</th>
                                                        <th>Date</th>
                                                        <th>Payment for</th>
                                                        <th>Amount Withdrawal</th>
                                              
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>2019-03-21</td>
                                                        <td>Onboarding</td>
                                                        <td>₹69873</td>
                                                    
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>2019-03-21</td>
                                                        <td>Onboarding</td>
                                                        <td>₹69873</td>
                                                    
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>2019-03-21</td>
                                                        <td>Onboarding</td>
                                                        <td>₹69873</td>
                                                    
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
                    </div>
                </div>

</Layout>
</>
);
}
export default PaymentTransactions;