
import Layout from "../../Layout";
import React, { useMemo, useRef } from "react";
import { NavLink } from "react-router-dom";
import Table from "../../component/Table";
import { Box } from '@mui/material';
import { data } from '../../component/Table/makeData';

function CustomerList() {
   const tableProps = {
      enableColumnFilterModes: true,
      enableColumnOrdering: false,
      enableGrouping: false,
      enableColumnPinning: true,
      enableFacetedValues: true,
      enableRowActionsTrue: false,
      enableRowSelection: false,
      showColumnFilters: false,
      showGlobalFilter: true // Assuming this should also be passed as a prop
      
   };
   const columns = useMemo(() => [{
      id: 'employee',
      columns: [
        
        {
            accessorKey: 'Customer_ID',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Customer ID',
            
         
          },
          {
            accessorKey: 'Customer',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Customer',
           
         
          },
          {
            accessorKey: 'Address',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Address',
           
         
          },
          {
            accessorKey: 'Pincode',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Pincode',
          
          },
          {
            accessorKey: 'Orders',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Orders',
            
         
          },
      
      ],
   },

   ],
      [],


   );
   //   Modal data 
 const  modalTitle = "Order Details";
 const modalWidth = "modal-lg"
 const modalid = 'productdetailmodal'
 const databstoggleViewModal = "#productdetailmodal"
 const databstoggleViewModal2 = "modal" 
 const viewClick = (row) => {
    console.log('ddd');
      
   }
 const editClick = (e) => {

}

const deleteClick = (e) => {
   console.log("delete");
   
}
   return (
      <>
         <Layout>
            <div className="productlistsupplier">
               <div>
                  <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
                     <h3 className="heading3">Customer Details</h3>

                  </div>
               </div>
               <div className="px-3">
   
                  <NavLink to={"/supplier/customer-list"}
                        className="formbtnnew4 ms-md-2" 
                  >
                        List
                  </NavLink>
                  <NavLink to={"/supplier/customer-review"}
                        className="btnactive ms-md-2" 
                  >
                        Reviews
                  </NavLink>
               </div>
               <div className="tableDatadiv px-3 py-2">
                  <Table {...tableProps} columns={columns} data={data} databstoggleViewModal2={databstoggleViewModal2} databstoggleViewModal={databstoggleViewModal} viewClick={viewClick} editClick={editClick} deleteClick={deleteClick} isDraft={true} isLive={true} isView={true} isDelete={true} isEdit={true}></Table>
               </div>
            </div>
      </Layout >
      </>
   );
}
export default CustomerList;