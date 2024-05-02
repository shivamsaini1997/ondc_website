
import Layout from "../../Layout";
import React, { useMemo, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Table from "../../component/Table";
import { data } from '../../component/Table/makeData';

function PaymentProductSold(props) {
  const navigate = useNavigate()

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
        id: 'employee',
        columns: [
          
          {
              accessorKey: 'Product Sold Date',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Product Sold Date',
              
           
            },
            {
              accessorKey: 'Product Name',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Product Name',
             
           
            },
            {
              accessorKey: 'Order ID',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Order ID',
             
           
            },
            {
              accessorKey: 'Amount Credited',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Amount Credited',
             
           
            },
           
        
        ],
     },
  
     ],
        [],
  
  
     );
     const editClick = (e, row) => {
   
      navigate(`/agent/payment-order-product/${row.id}`)
    };
  return (
    <Layout>
      <div className="agentpayment">
        <div>
          <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
            <h3 className="heading3">Payments</h3>
          </div>
        </div>
        <div className="px-3 my-2">
          <div className="row mb-3">
            <div className="col-lg-6">
              <div className="orderCard mb-1 p-3 form-border-bg">
                <div className="d-flex mb-3 align-items-center justify-content-between">
                  <div>
                    <span className="Customerid"> Your Wallet </span>
                    <div className="lablename mt-2"> ₹1274.68</div>
                  </div>
                  
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <NavLink to="#" className="viewPaymentbtn">
                      Redeem{" "}
                    </NavLink>
                    <NavLink href="#" className="viewDetailspayment ms-3">
                      View Details{" "}
                    </NavLink>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="orderCard mb-1 p-3 form-border-bg">
                <div className="d-flex mb-4 align-items-center justify-content-between">
                  <div>
                    <span className="Customerid"> Fixed Salary </span>
                    <p className="lastwidrawal">₹1287 </p>

                  </div>
                  <div>
                    <span className="Customerid">Last Credited On</span>
                    <p className="lastwidrawal text-end"> 25th Jan </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
            
         
            <div className="productlistsupplier">
               
   
                  <NavLink to={"/agent/payment-onboarding"}
                        className="btnactive" 
                  >
                        Onboarding
                  </NavLink>
                  <NavLink to={"/agent/payment-product-sold"}
                        className="formbtnnew4 ms-md-2" 
                  >
                        Product Sold
                  </NavLink>
             
               <div className="tableDatadiv py-2">
                  <Table {...tableProps} columns={columns} data={data} editClick={editClick} isView={true}></Table>
               </div>
            </div>
    
    
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default PaymentProductSold;
