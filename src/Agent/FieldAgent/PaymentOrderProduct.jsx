import React, { useMemo } from 'react'
import Layout from '../../Layout'
import Table from "../../component/Table";
import { data } from '../../component/Table/makeData';
import { useNavigate } from 'react-router-dom';


export const PaymentOrderProduct = () => {
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
              accessorKey: 'Product Name',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Product Name',
              
           
            },
            {
              accessorKey: 'Product ID',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Product ID',
             
           
            },
            {
              accessorKey: 'Price',
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Price',
             
           
            },
           
           
        
        ],
     },
  
     ],
        [],
  
  
     );

     const editClick = (e, row) => {
   
      // navigate(`/agent/order-details/${row.id}`)
    };
    

  return (
    <Layout>
        <div className="tableDatadiv py-4 px-3">
        <div className="d-flex justify-content-between">
            <p>Order ID #646573</p>
            <p>Total Products: 2</p>
        </div>
            <Table {...tableProps} columns={columns} data={data}  editClick={editClick}  isView={true}></Table>
        </div>
    </Layout>
  )
}
