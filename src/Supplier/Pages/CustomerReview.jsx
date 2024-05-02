
import Layout from "../../Layout";
import React, { useMemo, useRef } from "react";
import { NavLink } from "react-router-dom";
import Table from "../../component/Table";
import { Box } from '@mui/material';
import { data } from '../../component/Table/makeData';
import Modal from "../../component/Modal";
export const CustomerReview = () => {

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
              accessorKey: 'Product',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Product',
              
           
            },
            {
              accessorKey: 'Customer',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Customer',
             
           
            },
            {
              accessorKey: 'Review',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Review',
             
           
            },
            {
              accessorKey: 'Date',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Date',
            
            },
            {
                accessorFn: (row) => `${row.status}`,
              //   enableClickToCopy: true,
              //   filterVariant: 'autocomplete',
                header: 'Status',
                Cell: ({ renderedCellValue, row }) => (
                    
                  <Box>
                  <select
                      className={'form-select form-select-table'}
                      name=""
                      id=""
                  >
                      <option value="Approved">Approved</option>
                      <option value="Pending">Pending</option>
                  </select>
              </Box>
        
                  ),
                
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
    <Layout>
    <div className="productlistsupplier">
       <div>
          <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
             <h3 className="heading3">Customer Details</h3>

          </div>
       </div>
       <div className="px-3">

          <NavLink to={"/supplier/customer-list"}
                className="btnactive ms-md-2" 
          >
                List
          </NavLink>
          <NavLink to={"/supplier/customer-review"}
                className="formbtnnew4 ms-md-2" 
          >
                Reviews
          </NavLink>
       </div>
       <div className="tableDatadiv px-3 py-2">
          <Table {...tableProps} columns={columns} data={data} databstoggleViewModal2={databstoggleViewModal2} databstoggleViewModal={databstoggleViewModal} viewClick={viewClick} editClick={editClick} deleteClick={deleteClick} isDraft={true} isLive={true} isView={true} isDelete={true} isEdit={true}></Table>
       </div>
    </div>
</Layout >
  )
}
