import Layout from "../../../Layout";
import React, { useMemo, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import Table from "../../../component/Table";
import { Box } from "@mui/material";
import { data } from "../../../component/Table/makeData";

export const OrderSupplieraAg = () => {
  const { id } = useParams();

  const tableProps = {
    enableColumnFilterModes: true,
    enableColumnOrdering: false,
    enableGrouping: false,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActionsTrue: true,
    enableRowSelection: false,
    showColumnFilters: false,
    showGlobalFilter: true, // Assuming this should also be passed as a prop
  };
  const columns = useMemo(
    () => [
      {
        id: "employee",
        columns: [
          {
            accessorKey: "Order_ID",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Order ID",
          },
          {
            accessorKey: "Billed_To",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Billed To",
          },

          {
            accessorKey: "Created_Date",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Created Date",
          },
          {
            accessorKey: "Total",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Total",
          },
      
          {
            accessorFn: (row) => `${row.status}`,
            //   enableClickToCopy: true,
            //   filterVariant: 'autocomplete',
            header: "Status",
            Cell: ({ renderedCellValue, row }) => (
              <Box>
                <span className={`${renderedCellValue}`}>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: "Approved by",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Approved by",
          },
          {
            accessorKey: "Payment Method",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Payment Method",
          },
          {
            accessorFn: (row) => `${row.status}`,
            //   enableClickToCopy: true,
            //   filterVariant: 'autocomplete',
            header: "Delivery Status",
            Cell: ({ renderedCellValue, row }) => (
              <Box>
                <span className={`${renderedCellValue}`}>{renderedCellValue}</span>
              </Box>
            ),
          },
        ],
      },
    ],
    []
  );
  //   Modal data
  const modalTitle = "Order Details";
  const modalWidth = "modal-lg";
  const modalid = "productdetailmodal";
  const databstoggleViewModal = "#productdetailmodal";
  const databstoggleViewModal2 = "modal";
  const viewClick = (row) => {
    console.log("ddd");
  };
  const editClick = (e) => {};

  const deleteClick = (e) => {
    console.log("delete");
  };
  return (
    <Layout>
      <div className="container">
        <div className="row py-2">
          <div className="col-12 form-border-bg p-2">
            <div
              className="suppliershowimg float-end"
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center justify-align-betwen">
                <div className="cercalimgbox">
                  {/* <p className="mb-0">A</p> */}
                  <img src="../../images/proimg.jpg" alt="" />
                </div>
                <p className="mb-0 ms-2 suppliername">Supplier’s Name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="supplerDbTabs">
                <NavLink  to={"/agent/supplier/home"}>Home</NavLink>
                <NavLink className="activetabdb" to={`/agent/supplier/product/${id}`}>Products</NavLink>
                <NavLink to={`/agent/supplier/order/${id}`}>Orders</NavLink>
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
              <span className="sbtitle">
                Uploads Done <span className="sonumber">890</span>
              </span>

            </div>
            <div className="tableDatadiv px-1">
              <Table
                {...tableProps}
                columns={columns}
                data={data}
                databstoggleViewModal2={databstoggleViewModal2}
                databstoggleViewModal={databstoggleViewModal}
                viewClick={viewClick}
                editClick={editClick}
                deleteClick={deleteClick}
                isDraft={true}
                isLive={true}
                isView={true}
              ></Table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
