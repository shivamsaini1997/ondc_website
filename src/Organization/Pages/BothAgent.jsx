import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import Table from "../../component/Table";
import { Box } from "@mui/material";
import axios from "axios";
import { data as myData } from "../../component/Table/data/fieldagentdata";
import { toast } from "react-toastify";

export const BothAgent = () => {
  const navigate = useNavigate()
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("User_Id");

  useEffect(() => {
    axios
      .post(`${baseUrl}/Organization/Agents_List_BY_Organization`, {
        fk_orgnization_id: userId,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 1) {
          const formattedData = res.data.both?.map((item) => ({
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
            accessorKey: "warehouse_name",
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Warehouse Name",
          },
          {
            accessorKey: "profile",
            // enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Supplier’s List",
            size: 100,
            Cell: ({ cell, row }) => {
              // console.log(row.original);
              return (
                <Box className="d-flex flex-wrap g-5 sp-btn-g">
                  <NavLink
                    to={`/organization/supplier-list/${row.original.id}`}
                    className="formbtnnew4"
                  >
                    List
                  </NavLink>
                  {/* <NavLink to={"#"} className="formbtnnew3 ms-2" >Dashboard</NavLink> */}
                </Box>
              );
            },
          },
          {
            accessorKey: "profile",
            // enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Inventory",
            size: 100,
            Cell: ({ cell, row }) => {
              console.log(row.original);
              return (
                <Box className="d-flex flex-wrap g-5 sp-btn-g">
                  <NavLink
                                        to={`/organization/inventory/${row.original.id}`}

                    className="formbtnnew4"
                  >
                    List
                  </NavLink>
                  {/* <NavLink to={"#"} className="formbtnnew3 ms-2" >Dashboard</NavLink> */}
                </Box>
              );
            },
          },
        ],
      },
    ],
    []
  );

  const editClick = (e, row) => {
   
    navigate(`/organization/agent-profile-view/${row.id}`)
  };

  const deleteClick = async (e,row) => {
    console.log('Edit clicked for row:', row);
    try {
      const res = await axios.post(`${baseUrl}/Organization/Delete_Agent_By_Organization`, {
        agent_id: row.id,
      })
      if(res.data.status === 1){
        toast("Delted Succesfully")
      } else {
        toast.error(res.data.msg)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.msg)

    }
  };

  const addAgent = "/organization/add-agent";
  return (
    <Layout>
      <div>
        <div className="headprofile px-4 pt-3 border-0 text-center mb-4">
          <h3 className="heading3">Both Agent’s List</h3>
          <span className="sbtitle">Agent Onboarded</span>
          <span className="sonumber">890</span>
        </div>
      </div>
      <div className="text-end px-3">
        <NavLink to={"/organization/both-agent"} className="formbtnnew4">
          Both
        </NavLink>
        <NavLink to={"/organization/field-agent"} className="btnactive ms-md-2">
          Field Agent
        </NavLink>
        <NavLink
          to={"/organization/warehouse-agent"}
          className="btnactive ms-md-2"
        >
          Warehouse Agent
        </NavLink>
      </div>
      <div className="tableDatadiv px-3 py-2">
        <Table
          {...tableProps}
          columns={columns}
          data={data}
          addAgent={addAgent}
          isDelete={true}
          isFieldAgent={true}
          isWarehouseAgent={true}
          editClick={editClick}
          isAddagent={true}
          isAddsupplier={false}
          deleteClick={deleteClick}
          isDraft={false}
          isLive={false}
          isView={true}
        ></Table>
      </div>
    </Layout>
  );
};
