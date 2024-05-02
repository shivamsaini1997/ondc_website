import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../Layout";
import Table from "../../component/Table";
import { Box } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

export default function Warehouse() {

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [data, setData] = useState([]);
  console.log(data);
  const userId = localStorage.getItem("User_Id");
  useEffect(() => {
    axios
      .post(`${baseUrl}/Organization/Get_Warehouse_List`, {
        fk_organiztion_id: userId,
      })
      .then((res) => {
        const responseData = res.data;
        if (responseData.status === 1) {
          setData(res.data.data);
        } else {
          toast.error(responseData.msg);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);

 
  const tableProps = {
    enableColumnFilterModes: true,
    enableColumnOrdering: false,
    enableGrouping: false,
    enableColumnPinning: true,
    enableFacetedValues: true,
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
            accessorKey: "warehouse_name",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Warehouse name",
          },
          {
            accessorKey: "capacity",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Capacity",
          },
          {
            accessorKey: "no_of_employee",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "No of Employees",
          },
          {
            accessorKey: "address",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Address",
          },
          {
            accessorKey: "district",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "District",
          },
          {
            accessorKey: "tahasil",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Tehsil",
          },
          {
            accessorKey: "pincode",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Pincode",
          },
        ],
      },
    ],

    []
  );



  return (
    <Layout>
      <div>
        <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
          <h3 className="heading3">Warehouse List</h3>
        </div>
      </div>
      <div className="tableDatadiv px-3 py-2">
        <Table
          {...tableProps}
          buttonText={"Add Warehouse"}
          buttonLink={"/organization/warehouse/new"}
          isbutton={true}
          columns={columns}
          data={data}
          isDraft={false}
          isLive={false}
        ></Table>
      </div>
    </Layout>
  );
};
