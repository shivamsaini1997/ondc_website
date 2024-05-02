import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout";
import Table from "../../component/Table";
import { Box } from "@mui/material";
import axios from "axios";
import { data as myData } from "../../component/Table/data/fieldagentdata";
import { toast } from "react-toastify";

export const SupplierListOrg = () => {
  const navigate = useNavigate()
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("User_Id");
  console.log(data);

  useEffect(() => {
    axios
      .post(`${baseUrl}/Organization/Get_Individual_Supplier_List_BY_Organization`, {
          fk_organization_id: userId
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 1) {
          const formattedData = res.data.data.map((item) => ({
            ...item,
            // Assuming 'created_dt' is the key for the date field
            created_dt: formatDate(item.created_dt),
          }));
          setData(formattedData);
        } else {
          toast.error(res.data.msg);
        }
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
    return `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;
  };

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
        id: "data",
        columns: [
          {
            accessorFn: (row) => `${row.first_name} ${row.last_name}`,
            id: "name",
            header: "Name",

            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  size: 10,
                }}
              >
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },

          {
            accessorKey: "mobileno",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Contact No.",
          },
          {
            accessorKey: "address",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Address",
          },
          {
            accessorKey: "tahasil",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Tehsil",
          },
          {
            accessorKey: "created_dt",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Created Date",
          },
          {
            accessorFn: (row) => `${row.status}`,
            //   enableClickToCopy: true,
            //   filterVariant: 'autocomplete',
            header: "Status",
            Cell: ({ renderedCellValue, row }) => (
              <Box>
                <select
                  className={"form-select form-select-table"}
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
        ],
      },
    ],

    []
  );

  const editClick = (e, row) => {
   
    navigate(`/organization/supplierView/${row.id}`)
  };

  const deleteClick = (e) => {
    console.log("delete");
  };
  const AddSupplier = "/organization/add-supplier";

  return (
    <Layout>
      <div>
        <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
          <h3 className="heading3">Supplier List</h3>
          {/* <span className="sbtitle">Suppliers Onboarded</span><span className="sonumber">890</span> */}
        </div>
      </div>
      <div className="tableDatadiv px-3 py-2">
        <Table
          {...tableProps}
          columns={columns}
          data={data}
          isView={true}
          isEdit={false}
          editClick={editClick}
          AddSupplier={AddSupplier}
          isFieldAgent={false}
          isWarehouseAgent={false}
          isAddagent={false}
          isAddsupplier={true}
        ></Table>
      </div>
    </Layout>
  );
};
