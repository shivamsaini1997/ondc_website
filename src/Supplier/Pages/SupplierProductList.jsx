
import Layout from "../../Layout";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Table from "../../component/Table";
import { Box } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';


function SupplierProduct() {
   const baseUrl = process.env.REACT_APP_BASE_URL;
   const [data, setData] = useState([]);
   const navigate = useNavigate()
   const {id} = useParams()
   const [org, setOrg] = useState(null)


console.log(org);

  const userId = localStorage.getItem('User_Id');

  useEffect(() => {
   axios
     .post(`${baseUrl}/Supplier/Get_Product_category_list_By_Supplier
     `,{
         supplier_id: userId
     })
     .then((res) => {
       setOrg(res.data.organization_id)
 
     })
     .catch((error) => {
       console.log(error);
     });
 }, []);

   useEffect(() => {
      if(org){
         axios.post(`${baseUrl}/Supplier/Get_Product_List_BY_Supplier`,{
            fk_supplier_id: userId
        })
        .then((res) => {
          if(res.data.status === 1){
               console.log(res);
               setData(res.data.data.map(item => ({
                  ...item,
                  // Assuming 'created_dt' is the key for the date field
                  created_dt: formatDate(item.created_dt)
               })));
          } 
          else {
            toast.error(res.data.msg)
          }
        })
      }
  
      
   },[org])
   const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
   }
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
             accessorFn: (row) => `${row.quantity_in_stock}`,
            header: 'Stock',
            Cell: ({row}) => {
               console.log(row.original.quantity_in_stock);
              if (row.original.quantity_in_stock === 0) {
                return (
                  <Box>
                    <p className="Draft">Out of Stock</p>
                  </Box>
                );
              } else {
                return (
                  <Box>
                    <p className="Publish">In Stock</p>
                  </Box>
                );
              }
            }
          },
          {
            accessorKey: 'sku_id',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'SKU',

         },
         {
            accessorKey: 'created_dt',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Created Date',

         },
         {
            accessorKey: 'product_loation',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Product Location',

         },
         {
            accessorFn: (row) => `${row.status}`,
          //   enableClickToCopy: true,
          //   filterVariant: 'autocomplete',
            header: 'Status',
            Cell: ({ renderedCellValue, row }) => (
                
              <Box>
                  <p className={`${renderedCellValue}`}>{renderedCellValue}</p>
              </Box>

              ),
            
          },

      ],
   },

   ],
      [],


   );
 const viewClick = (row) => {
    console.log('ddd');
      
   }

   const editClick = (e, row) => {
   
      navigate(`/supplier/product-detail/${row.id}`)
    };

   const editClickedit = (e, row) => {
   
      navigate(`/supplier/edit-product/${row.id}`)
    };
   
   const deleteClick = async (e,row) => {
      console.log('Edit clicked for row:', row);
      try {
        const res = await axios.post(`${baseUrl}/Supplier/Delete_Product_By_Supplier`, {
         product_id: row.id,
        })
        if(res.data.status === 1){
          toast("Delted Succesfully")
          window.location.reload()
        } else {
          toast.error(res.data.msg)
        }
        
      } catch (error) {
        console.log(error);
        toast.error(error.msg)
   
      }
   }
   return (
      <>
         <Layout>
            <div className="productlistsupplier">
               <div>
                  <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
                     <h3 className="heading3">Product List</h3>

                  </div>
               </div>
               <div className="d-flex flex-wrap px-3 justify-content-between align-items-center">
   
                     <span className="sbtitle">Uploads Done <span className="sonumber">{data?.length}</span></span>
                  <NavLink to={"/supplier/add-product"}
                        className="formbtnnew4 ms-md-2" 
                  >
                        Add Product
                  </NavLink>
               </div>
               <div className="tableDatadiv px-3 py-2">
                  <Table {...tableProps} columns={columns} data={data} viewClick={viewClick} editClick={editClick} editClickedit={editClickedit} deleteClick={deleteClick} isView={true} isDelete={true} isEdit={true}></Table>
               </div>
            </div>
      </Layout >
      
      </>
   );
}
export default SupplierProduct;