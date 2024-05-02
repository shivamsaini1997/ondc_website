import React, { useEffect, useMemo, useState} from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../Layout";
import Table from "../../component/Table";
import {Box} from '@mui/material';
import axios from "axios";

export function SupplierList(){
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);
  console.log(data);
  const userId = localStorage.getItem('User_Id');
  useEffect(() => {
    axios.post(`${baseUrl}/Agent/Supplier_List`,{
      fk_agent:userId
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
      console.log(error);});
    },[]);

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
      enableRowActionsTrue: false,
      enableRowSelection : false,
      showColumnFilters : false,
      showGlobalFilter : true // Assuming this should also be passed as a prop
   };
   const columns = useMemo(() => [{
    
      id: 'data',
      columns: [
        {
          accessorFn: (row) => `${row.first_name} ${row.last_name}`,
          id: 'name',
          header: 'Name',
          
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
          accessorKey: 'mobileno',
          enableClickToCopy: true,
          filterVariant: 'autocomplete',
          header: 'Contact No.',
          
       
        },
        {
          accessorKey: 'address',
          enableClickToCopy: true,
          filterVariant: 'autocomplete',
          header: 'Address',
         
       
        },
        {
          accessorKey: 'created_dt',
          enableClickToCopy: true,
          filterVariant: 'autocomplete',
          header: 'Visiting Date',
        
        },
        {
            accessorFn: (row) => `${row.status}`,
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Status',
            Cell: ({ renderedCellValue, row }) => (
                
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    size: 10,
                    
                  }}
                >
                  <span className={`${ renderedCellValue}`}>{renderedCellValue}</span>
                </Box>
              ),
            
          },
        {
          
          accessorKey: 'profile',
          // enableClickToCopy: true,
          filterVariant: 'autocomplete',
          header: 'Action',
          size: 300,
          Cell: ({ cell,row }) => {
          return (
            <Box className="d-flex flex-wrap g-5 sp-btn-g">
            <NavLink to={`/agent/supplier/update-profile/${row.original.id}`}   className="formbtnnew4" >Update Profile</NavLink>
            <NavLink to={`/agent/supplier/product/${row.original.id}`} className="formbtnnew3 ms-2" >Dashboard</NavLink>
          </Box>
          )
          },
          
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

 const AddSupplier ="/agent/add-supplier"
   return(
        <Layout>
         <div>
            <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
               <h3 className="heading3">Supplier’s Onboarded List</h3>
               <span className="sbtitle">Suppliers Onboarded</span><span className="sonumber">{data?.length}</span>

            </div>
         </div>
         <div className="tableDatadiv px-3 py-2">
           <Table {...tableProps} columns={columns} data={data} AddSupplier={AddSupplier} isFieldAgent={false} isWarehouseAgent={false}  isAddagent={false} editClick={editClick} isAddsupplier={true}   deleteClick={deleteClick} isDraft={false} isLive={false} isView={false}></Table>
         </div>
      </Layout>   
   );
}
export default SupplierList;