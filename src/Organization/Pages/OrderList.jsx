import React, { useEffect, useMemo, useState} from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../Layout";
import Table from "../../component/Table";
import {Box} from '@mui/material';
import axios from "axios";
import {data as myData } from "../../component/Table/data/fieldagentdata"

export const OrgOrderList = () => {
    const baseurl ="http://192.168.1.78:8000";
    const [data, setData] = useState([]);
    console.log(data);
    const userId = localStorage.getItem('User_Id');


    useEffect(() => {
      axios.post(`${baseurl}/Agent/Supplier_List`,{
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
        enableRowActionsTrue: true,
        enableRowSelection : false,
        showColumnFilters : false,
        showGlobalFilter : true // Assuming this should also be passed as a prop
     };
     const columns = useMemo(() => [{
      
        id: 'data',
        columns: [
            {
                accessorKey: 'Order_ID',
                enableClickToCopy: true,
                filterVariant: 'autocomplete',
                header: 'Order ID',
                
             
              },
          {
            accessorFn: (row) => `${row.first_name} ${row.last_name}`,
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
            accessorKey: 'Billed_To',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Billed To',
            
         
          },
          {
            accessorKey: 'created_dt',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Created Date',
          
          },
          {
            accessorKey: 'Total',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Total',
           
         
          },
          {
            accessorKey: 'Status',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Status',
           
         
          },
          {
            accessorKey: 'Approved_by',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Approved by',
           
         
          },
          {
            accessorKey: 'Payment_Method',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Payment Method',
           
         
          },
          {
            accessorKey: 'Delivery_Status',
            enableClickToCopy: true,
            filterVariant: 'autocomplete',
            header: 'Delivery Status',
           
         
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
   const AddSupplier =""
  return (
    <Layout>
    <div>
       <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
          <h3 className="heading3">Order List</h3>
          {/* <span className="sbtitle">Suppliers Onboarded</span><span className="sonumber">890</span> */}

       </div>
    </div>
    <div className="tableDatadiv px-3 py-2">
      <Table {...tableProps} columns={columns} data={myData} AddSupplier={AddSupplier} isFieldAgent={false} isWarehouseAgent={false}  isAddagent={false} editClick={editClick} isAddsupplier={false}   deleteClick={deleteClick} isDraft={false} isLive={false} isView={true}></Table>
    </div>
 </Layout>  
  )
}
