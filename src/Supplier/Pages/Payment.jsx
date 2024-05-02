import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../Layout";
import Table from "../../component/Table";
import { Box } from '@mui/material';
import axios from "axios";
import { data as myData } from "../../component/Table/data/fieldagentdata"


function PaymentUser(props) {
   const [data, setData] = useState([]);
   console.log(data);
   const userId = localStorage.getItem('User_Id');
   const baseurl = "http://192.168.1.77:8000";
   useEffect(() => {
      axios.post(`${baseurl}/Agent/Supplier_List`, {
         fk_agent: userId
      })
         .then((res) => {
            setData(res.data.obj)
            const formattedData = res.data.obj.map(item => ({
               ...item,
               // Assuming 'created_dt' is the key for the date field
               created_dt: formatDate(item.created_dt)
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
      return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
   };

   const tableProps = {
      enableColumnFilterModes: true,
      enableColumnOrdering: false,
      enableGrouping: false,
      enableColumnPinning: true,
      enableFacetedValues: true,
      enableRowActionsTrue: true,
      enableRowSelection: false,
      showColumnFilters: false,
      showGlobalFilter: true // Assuming this should also be passed as a prop
   };
   const columns = useMemo(() => [{

      id: 'data',
      columns: [
        {
            accessorKey: 'created_dt',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Date',

         },
         

         {
            accessorKey: 'mobileno',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Product Quantity',


         },

         {
            accessorKey: 'tehsil',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Amount',


         },
      
        
      ],


   },

   ],

      [],


   );


   const editClick = (e) => {
      console.log("clicked");
   }

   const deleteClick = (e) => {
      console.log("delete");
   }

   const addAgent = "/organization/add-agent"

   return (
      <>
         <Layout>

            <div className="row">
               <div className="col-12 pt-4 pb-3">
                  <h1 className="h1 text-center">Payments</h1>
               </div>
            </div>
            <div className="pt-4 pb-2 px-1 mx-3">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="orderCard tabledataP mb-3">
                        <div className="d-flex mb-5 align-items-center justify-content-between">
                           <div>
                              <span className="Customerid">Payment to Date <img className='er-icon' src={'/images/error_24px.svg'} /></span>
                              <div className="lablename"> ₹1274.68</div>
                           </div>
                           <div>
                              <a href="/supplier/payment-to-date" className="viewPaymentbtn">View Details</a>
                           </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                           <div>
                              <span className="lablename">Last Payment </span>
                              <span className="Customerid"> ₹1274687 </span>
                           </div>

                           <div>
                              <span className="lablename">25th Dec </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <div className="col-lg-6">
                        <div className="orderCard card-bg-box mb-3">
                              <div className="d-flex mb-5 align-items-center justify-content-between">
                                    <div>
                                    <span className="Customerid">Total Outstanding Payments <img className='er-icon' src={'/images/error_24px.svg'} /></span>
                                    <div className="lablename"> ₹1274.68</div>
                                    </div>
                                 <div>
                                    <a href="/supplier/outstanding-payments" className="viewPaymentbtn">View Details</a>
                                 </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                    <span className="lablename">Next Payment </span>
                                    <span className="Customerid"> ₹1274687 </span>
                                    </div>
                                
                                 <div>
                                    <span className="lablename">8th Feb </span>
                                 </div>
                              </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="orderCard card-bg-box mb-3">
                              <div className="d-flex mb-3 align-items-center justify-content-between">
                                    <div>
                                    <span style={{color :"#8D8D8DEE"}} className="lablename">Compensation & Recoveries<img className='er-icon' src={'/images/error_24px.svg'} /></span>
                
                                    </div>
                                 <div>
                                    <a href="#" className="viewPaymentbtn">View Details</a>
                                 </div>
                              </div>
                              <div className="Compensation">
                                   <ul className="p-0 mb-0">
                                    <li class="nav-item pt-2 w-100 py-2">
                                        <div className="d-flex justify-content-between">
                                             <span>Compensation</span>
                                             <span>0%</span>
                                        </div>
                                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                             <div class="progress-bar w-0"></div>
                                       </div>
                                        </li>
                                   </ul>
                              </div>
                              <div className="Compensation">
                                   <ul className="p-0 mb-0">
                                    <li class="nav-item pt-2 w-100 py-0">
                                        <div className="d-flex justify-content-between">
                                             <span>Recoveries</span>
                                             <span>0%</span>
                                        </div>
                                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                             <div class="progress-bar w-0"></div>
                                       </div>
                                        </li>
                                   </ul>
                              </div>
                              <div className="d-flex mt-3 align-items-center justify-content-between">
                                    <div>
                                    <span className="lablename">Total</span>
                
                                    </div>
                                 <div>
                                 <span className="lablename">₹0</span>

                                 </div>
                              </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="orderCard card-bg-box mb-3">
                              <div className="d-flex mb-5 align-items-center justify-content-between">
                                    <div>
                                    <div className="lablename">Have a query?</div>
                                    <span className="Customerid">Raise a ticket for your payment related matters</span>
                                    </div>
                                 <div>
                                    <img className='userform-icon' src={'/images/navigate_next.svg'} />
                                 </div>
                              </div>
                             
                        </div>
                     </div> */}

               </div>
            </div>

            <div className="tableDatadiv px-3 py-2">
               <Table {...tableProps} columns={columns} data={myData} isFieldAgent={true} isWarehouseAgent={true} editClick={editClick} isAddagent={false} isAddsupplier={false} deleteClick={deleteClick} isDraft={false} isLive={false} isEdit={false} isDelete={false} isView={true}></Table>
            </div>
         </Layout>
      </>
   );
}

export default PaymentUser;