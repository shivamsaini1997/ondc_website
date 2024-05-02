
import Layout from "../../Layout";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Table from "../../component/Table";
import { Box } from '@mui/material';
import { data } from '../../component/Table/makeData';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from "../../component/Modal";

export const Inventory = () => {


   const [status, setStatus] = useState(null)
   const buttonRef = useRef(null)
   console.log(status);

   useEffect(() => {
      if (status === "Out of stock") {
         buttonRef.current.click()
      }
   }, [status])

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
            accessorKey: 'bar_code',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Bar Code',

         },

         {
            accessorKey: 'product_name',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Product Name',

         },
         {
            accessorKey: 'sku',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'SKU',

         },

         {
            accessorKey: 'received_date',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Received Date',

         },

       
         {
            accessorFn: (row) => `${row.stock}`,
            //   enableClickToCopy: true,
            //   filterVariant: 'autocomplete',
            header: 'Stock',
            Cell: ({ renderedCellValue, row }) => (

               <Box>
                  <select
                     value={status}
                     onChange={(e) => {
                        setStatus(e.target.value)
                     }}
                     className={'form-select form-select-table'}
                     name=""
                     id=""

                  >
                     <option value="In stock">In stock</option>
                     <option value="Out of stock">Out of stock</option>  
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
   const modalTitle = "Why is it not available?";
   const modalWidth = "modal-md"
   const modalid = 'productdetailmodal'
   const databstoggleViewModal = "#productdetailmodal"

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
               <button style={{ display: "none" }} ref={buttonRef} data-bs-toggle="modal" data-bs-target="#productdetailmodal">modal</button>
               <div>
                  <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
                     <h3 className="heading3">Warehouse Name</h3>

                  </div>
               </div>
               <div className="tableDatadiv px-3 py-2">
                  <Table {...tableProps} columns={columns} data={data} viewClick={viewClick} editClick={editClick} deleteClick={deleteClick} isDraft={false} isLive={false} isView={true}></Table>
               </div>
            </div>
         </Layout >
         <Modal modalTitle={modalTitle} modalWidth={modalWidth} modalid={modalid} databstoggleViewModal={databstoggleViewModal} >
            <form>
               <div className="mb-3">
                    <select
                        className={'form-select'}
                        name=""
                        id=""

                    >
                        <option value="Reason">Reason</option>
                        <option value="Reason">Reason</option>
                        <option value="Reason">Reason</option>
                    </select>
               </div>
                  
                  <div>
                    <input type="text" className="form-control"  placeholder="Other"/>
                  </div>
                  <div class="modal-footer">
                        <button type="button" class="formbtnnew1" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="formbtnnew2">Submit</button>
                    </div>
            </form> 
         </Modal>
      </>
   )
}
