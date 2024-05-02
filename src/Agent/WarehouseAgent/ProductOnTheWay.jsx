
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

export const ProductOnTheWay = () => {


   const [status, setStatus] = useState(null)
   const buttonRef = useRef(null)
   console.log(status);

   useEffect(() => {
      if (status === "Declined") {
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
      enableRowSelection: true,
      showColumnFilters: false,
      showGlobalFilter: true // Assuming this should also be passed as a prop

   };
   const columns = useMemo(() => [{
      id: 'employee',
      columns: [

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
            accessorKey: 'quantity',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Quantity',

         },
         {
            accessorKey: 'visitingDate',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Created Date',

         },

         {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`,
            id: 'name',
            header: 'Supplier’s Name',

            Cell: ({ renderedCellValue, row }) => (
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '1rem',
                     size: 10,

                  }}
               >
                  <span>{renderedCellValue}</span>
               </Box>
            ),
         },
         {
            accessorFn: (row) => `${row.firstName1} ${row.lastName1}`,
            id: 'name',
            header: 'Agent’s Name ',

            Cell: ({ renderedCellValue, row }) => (
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '1rem',
                     size: 10,

                  }}
               >
                  <span>{renderedCellValue}</span>
               </Box>
            ),
         },
         {
            accessorKey: 'status',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Status',

         },
         {
            accessorFn: (row) => `${row.status}`,
            //   enableClickToCopy: true,
            //   filterVariant: 'autocomplete',
            header: 'Status',
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
                     <option value="Approved">Approved</option>
                     <option value="Declined">Declined</option>
                     <option value="Pending">Pending</option>
                  </select>
               </Box>

            ),
         },
         {
            accessorKey: 'profile',
            // enableClickToCopy: true,
            // filterVariant: 'autocomplete',
            header: 'Barcode',
            size: 200,
            Cell: ({ cell }) => (
               <Box>
                  <NavLink to={""} className="formbtnnew4"> <img class="userform-icon2" src="/images/uploadbtn.svg" alt="" />Generate</NavLink>
               </Box>
            ),

         },
      ],
   },

   ],
      [],


   );
   //   Modal data 
   const modalTitle = "Reason for not accepting the product?";
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
                     <h3 className="heading3">Products on the way</h3>

                  </div>
               </div>
               <div className="tableDatadiv px-3 py-2">
                  <Table {...tableProps} columns={columns} data={data} viewClick={viewClick} editClick={editClick} deleteClick={deleteClick} isDraft={true} isLive={true} isView={true}></Table>
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
