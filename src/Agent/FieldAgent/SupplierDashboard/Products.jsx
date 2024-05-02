
import Layout from "../../../Layout";
import React, { useEffect, useMemo, useRef,useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Table from "../../../component/Table";
import { Box } from '@mui/material';
// import { data } from '../../../component/Table/makeData';
import axios from "axios";
import { toast } from "react-toastify";


export const ProductsSupplieraAg = () => {
  const navigate = useNavigate()

   const baseUrl = process.env.REACT_APP_BASE_URL;
   const {id} = useParams()
   const [data, setData] = useState([]);
   const [fname, setFname] = useState()
   const [lname, setLname] = useState()
   const [profile, setProfile] = useState(null)
//   const userId = localStorage.getItem('User_Id');
useEffect(() => {
  axios.post(`${baseUrl}/Agent/Get_Supplier_Detail`,{
    id:id
  })
  .then((res) => {
    if(res.data.status === 1){
      console.log(res);
      setProfile(res.data.obj.profile_pic)
      setFname(res.data.obj.first_name);
      setLname(res.data.obj.last_name);
    } else {
      toast.error(res.data.msg)
    }
  })
   
},[])
useEffect(() => {
  axios.post(`${baseUrl}/Agent/Get_Product_List_BY_Agent`, {
    fk_supplier_id: id
  })
    .then((res) => {
      const formattedData = res.data.data.map(item => ({
        ...item,
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
              accessorKey: 'sku_id',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'SKU',
  
           },
           {
            accessorFn: (row) => `${row.quantity_in_stock}`,
            header: 'Stock',
            Cell: ({row }) => {
              // console.log(row);
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
          //  {
          //   accessorFn: (row) => `${row.Stoke}`,
          // //   enableClickToCopy: true,
          // //   filterVariant: 'autocomplete',
          //   header: 'Stoke',
          //   Cell: ({ renderedCellValue, row }) => (
                
          //     <Box>
          //     <select
          //         className={'form-select form-select-table'}
          //         name=""
          //         id=""
                  
          //     >
          //         <option value="In stock">In stock</option>
          //         <option value="Out of stock">Out of stock</option>
    
          //     </select>
          // </Box>

          //     ),
            
          // },
           {
              accessorKey: 'created_dt',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Created Date',
  
           },

          {
            accessorFn: (row) => `${row.status}`,
          //   enableClickToCopy: true,
          //   filterVariant: 'autocomplete',
            header: 'Live Status',
            Cell: ({ renderedCellValue, row }) => (
                
              <Box>
                  <p className={`${renderedCellValue}`}>{renderedCellValue}</p>
              </Box>

              ),
            
          },
          //  {
          //   accessorFn: (row) => `${row.live_status}`,
          // //   enableClickToCopy: true,
          // //   filterVariant: 'autocomplete',
          //   header: 'Status',
          //   Cell: ({ renderedCellValue, row }) => (
                
          //     <Box>
          //         <p className={`${renderedCellValue}`}>{renderedCellValue}</p>
          //     </Box>

          //     ),
            
          // },
           
        ],
     },
  
     ],
        [],
  
  
     );
     
   const viewClickprofile = () => {
      navigate(`/agent/supplier/profile/${id}`)
     
     }
     const editClick = (e, row) => {
   
      navigate(`/agent/supplier/product-detail/${row.id}`)
    };
     const editClickedit = (e, row) => {
   
      navigate(`/agent/edit-product/${row.id}`)
    };
  

    
    const deleteClick = async (e,row) => {
      // console.log('Edit clicked for row:', row);
      try {
        const res = await axios.post(`${baseUrl}/Agent/Delete_Product_By_Agent`, {
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
    };
  return (
    <Layout>
       <div className="container-fluid">
        <div className="row py-2">
          <div className="col-12 form-border-bg p-2">
            <div className="suppliershowimg float-end" onClick={viewClickprofile} style={{cursor: 'pointer'}}>
              <div className="d-flex align-items-center justify-align-betwen">
                <div className="cercalimgbox">
                  {/* <p className="mb-0">A</p> */}
                  <img src={`${baseUrl}${profile}`} alt="" />
                </div>
                <p className="mb-0 ms-2 suppliername"> {fname && lname ? `${fname} ${lname}` : "Supplier’s Name"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="supplerDbTabs">
                <NavLink  to={"/agent/supplier/home"}>Home</NavLink>
                <NavLink className="activetabdb" to={`/agent/supplier/product/${id}`}>Products</NavLink>
                <NavLink to={"/agent/supplier/order"}>Orders</NavLink>
                <NavLink to={"/agent/supplier/customers"}>Customers</NavLink>
                <NavLink to={"/agent/supplier/return"}>Return</NavLink>
            </div>
        </div>
        <div className="row">
        <div className="productlistsupplier">
               {/* <div>
                  <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
                  
                  </div>
                </div> */}
               <div className="d-flex justify-content-between align-items-center my-4">
                <span className="sbtitle">Uploads Done <span className="sonumber">{data?.length}</span></span>
                <NavLink className="formbtnnew4" to={`/agent/add-product/${id}`}>Add Product</NavLink>

               </div>
               <div className="tableDatadiv px-1">
                  <Table {...tableProps} columns={columns} data={data}  editClick={editClick} editClickedit={editClickedit} deleteClick={deleteClick} isDraft={false} isLive={false} isView={true} isEdit={true} isDelete={true}></Table>
               </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}
