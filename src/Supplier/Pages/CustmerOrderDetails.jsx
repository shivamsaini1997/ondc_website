
import Layout from "../../Layout";
import React, { useMemo, useRef } from "react";
import { NavLink } from "react-router-dom";
import Table from "../../component/Table";
import { Box } from '@mui/material';
import { data } from '../../component/Table/makeData';

function CustomerOrderList() {
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
            accessorKey: 'sku',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'SKU',
            
         
          },
          {
            accessorKey: 'Product_Name',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Product Name',
           
         
          },
          {
            accessorKey: 'Quantity',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Quantity',
           
         
          },
          {
            accessorKey: 'Date',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Date',
          
          },
          {
            accessorKey: 'Status',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Status',
            
         
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
                     <h3 className="heading3">(Customer Name) Order Details</h3>

                  </div>
               </div>
          
               <div className="tableDatadiv px-3 py-2">
                  <Table {...tableProps} columns={columns} data={data} databstoggleViewModal2={databstoggleViewModal2} databstoggleViewModal={databstoggleViewModal} viewClick={viewClick} editClick={editClick} deleteClick={deleteClick} isDraft={true} isLive={true} isView={true} isDelete={true} isEdit={true}></Table>
               </div>
            </div>
      </Layout >
      </>
   );
}
export default CustomerOrderList;