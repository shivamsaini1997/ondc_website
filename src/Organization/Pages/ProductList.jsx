import Layout from "../../Layout";
import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Table from "../../component/Table";
import { Box } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const OrgProductList = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("User_Id");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(`${baseUrl}/Organization/Get_Product_List_BY_Organization`, {
        fk_organization: userId,
      })
      .then((res) => {
        if (res.data.status === 1) {
          setData(res.data.data);
        } else {
          toast.error(res.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const tableProps = {
    enableColumnFilterModes: true,
    enableColumnOrdering: false,
    enableGrouping: false,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActionsTrue: true,
    enableRowSelection: true,
    showColumnFilters: false,
    showGlobalFilter: true, // Assuming this should also be passed as a prop
  };

  const columns = useMemo(
    () => [
      {
        id: "employee",
        columns: [
            {
                accessorKey: "agent_name",
                enableClickToCopy: true,
                filterVariant: "autocomplete",
                header: "Agent’s Name",
              },
          {
            accessorKey: "supplier_name",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Supplier’s Name",
          },
          {
            accessorKey: "product_name",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Product Name",
          },
          {
            accessorKey: "sku_id",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "SKU",
          },
         {
            accessorFn: (row) => `${row.quantity_in_stock}`,
            header: "Stock",
            Cell: ({ row }) => {
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
            },
          },
          {
            accessorKey: "created_dt",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Created Date",
          },
          {
            accessorKey: "product_loation",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Product Location",
          },
        ],
      },
    ],
    []
  );


  const viewClick = (row) => {
    console.log("ddd");
  };

  
  const editClick = (e, row) => {
    navigate(`/organization/product-detail/${row.id}`);
  };


  return (
    <>
      <Layout>
        <div className="productlistsupplier">
          <div>
            <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
              <h3 className="heading3">Product List</h3>
              <span className="sbtitle">Uploads Done</span>
              <span className="sonumber">890</span>
            </div>
          </div>
          <div className="tableDatadiv px-3 py-2">
            <Table
              {...tableProps}
              columns={columns}
              data={data}
              viewClick={viewClick}
              editClick={editClick}
              isView={true}
            ></Table>
          </div>
        </div>                                          
      </Layout>
    </>
  );
};

export default OrgProductList;
