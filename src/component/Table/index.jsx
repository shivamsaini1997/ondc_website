import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  // createRow,
  //  type MRT_ColumnDef,
  //  type MRT_Row,
  //  type MRT_TableOptions,
} from "material-react-table";
import { ListItemIcon, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import PublishIcon from "@mui/icons-material/Publish";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import { lighten } from "@mui/system";
import {
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
  MRT_ToggleDensePaddingButton,
  MRT_ShowHideColumnsButton,
} from "material-react-table";
import { NavLink } from "react-router-dom";

const Table = ({
  enableRowActionsTrue,
  enableFacetedValues,
  enableColumnPinning,
  enableGrouping,
  enableColumnOrdering,
  enableColumnFilterModes,
  enableRowSelection,
  showColumnFilters,
  showGlobalFilter,
  columns,
  data,
  editClick,
  viewClick,
  deleteClick,
  editClickedit,
  isView,
  draftClick,
  liveClick,
  isDraft,
  isLive,
  isAddsupplier,
  databstoggleViewModal,
  databstoggleViewModal2,
  AddSupplier,
  isAddagent,
  isEdit,
  isDelete,
  addAgent,
  buttonText,
  buttonLink,
  isbutton
}) => {
 
  const handleEditClick = (e, row) => {
    // Call the editClick function with the row object
    editClick(e, row);
  };

  const handleEditClickedit = (e, row) => {
    // Call the editClick function with the row object
    editClickedit(e, row);
  };

  const handledeleteClick = (e, row) => {
    // Call the editClick function with the row object
    deleteClick(e, row);
  };
  const table = useMaterialReactTable({
    columns,
    data,
    createDisplayMode: "row", // ('modal', and 'custom' are also available)
    editDisplayMode: "table",
    enableColumnFilterModes: enableColumnFilterModes,
    enableColumnOrdering: enableColumnOrdering,
    enableGrouping: enableGrouping,
    enableColumnPinning: enableColumnPinning,
    enableFacetedValues: enableFacetedValues,
    enableRowActions: enableRowActionsTrue,
    enableRowSelection: enableRowSelection,
    enableFullScreenToggle: true,
    enableRowNumbers: true,
    rowNumberDisplayMode: "original",
    columnFilterDisplayMode: "popover",

    // enableStickyHeader: true,
    defaultColumn: {
      minSize: 105,
    },
    initialState: {
      showColumnFilters: showColumnFilters,
      showGlobalFilter: showGlobalFilter,
      pagination: { pageIndex: 0, pageSize: 5 },
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
    },

    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    positionToolbarAlertBanner: "bottom",
    paginationDisplayMode: "pages",
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [5, 10, 15],
      shape: "rounded",
      variant: "outlined",
    },

    // renderDetailPanel: ({ row }) => (
    //   <Box
    //     sx={{
    //       alignItems: 'center',
    //       display: 'flex',
    //       justifyContent: 'space-around',
    //       left: '30px',
    //       maxWidth: '1000px',
    //       // position: 'sticky',
    //       width: '100%',
    //     }}
    //   >
    //     {/* <img
    //       alt="avatar"
    //       height={200}
    //       src={row.original.avatar}
    //       loading="lazy"
    //       style={{ borderRadius: '50%' }}
    //     /> */}
    //     {/* <Box sx={{ textAlign: 'center' }}>
    //       <Typography variant="h4">Signature Catch Phrase:</Typography>
    //       <Typography variant="h1">
    //         &quot;{row.original.signatureCatchPhrase}&quot;
    //       </Typography>
    //     </Box> */}
    //   </Box>
    // ),

    renderRowActionMenuItems: ({ closeMenu,row }) => [
     
      isView && (
        <MenuItem key={0} onClick={(e) => handleEditClick(e, row.original)} sx={{ m: 0 }}>
          <ListItemIcon>
            <RemoveRedEyeIcon />
          </ListItemIcon>
          View
        </MenuItem>
      ),
      isEdit && (
        <MenuItem key={0} onClick={(e) => handleEditClickedit(e, row.original)} sx={{ m: 0 }}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          Edit
        </MenuItem>
      ),
      isDelete && (
        <MenuItem key={1}  onClick={(e) => handledeleteClick(e, row.original)} sx={{ m: 0 }}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          Delete
        </MenuItem>
      ),
      isDraft && (
        <MenuItem key={1} onClick={draftClick} sx={{ m: 0 }}>
          <ListItemIcon>
            <SaveAsIcon />
          </ListItemIcon>
          <span className="Declined">Draft</span>
        </MenuItem>
      ),
      isLive && (
        <MenuItem key={1} onClick={liveClick} sx={{ m: 0 }}>
          <ListItemIcon>
            <PublishIcon />
          </ListItemIcon>
          <span className="Approved">Live</span>
        </MenuItem>
      ),
    ],

    renderTopToolbar: ({ table }) => {
      const handleDeactivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("deactivating " + row.getValue("name"));
        });
      };

      const handleActivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("activating " + row.getValue("name"));
        });
      };

      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("contact " + row.getValue("name"));
        });
      };

      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: "flex",
            gap: "0.5rem",
            p: "8px",
            justifyContent: "space-between",
          })}
        >
          <Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              {isAddsupplier && (
                <NavLink to={AddSupplier} className="formbtnnew4">
                  Add Supplier
                </NavLink>
              )}
              {isAddagent && (
                <NavLink
                  to={addAgent}
                  className="formbtnnew4"
                  variant="contained"
                >
                  Add Agent
                </NavLink>
              )}
                {isbutton && (
                <NavLink to={buttonLink} className="formbtnnew4">
                  {buttonText}
                </NavLink>
              )}
              {/* { <Button
                color="error"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleDeactivate}
                variant="contained"
              >
                Deactivate
              </Button>}
              {
              <Button
                color="success"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleActivate}
                variant="contained"
              >
                Activate
              </Button>}
              { <Button
                color="info"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleContact}
                variant="contained"
              >
                Delete
              </Button>} */}
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <MRT_GlobalFilterTextField table={table} />

            {/* <MRT_ToggleFiltersButton table={table} /> */}
            <MRT_ShowHideColumnsButton table={table} />
            <MRT_ToggleDensePaddingButton table={table} />

            <MRT_ToggleFullScreenButton table={table} />
          </Box>
        </Box>
      );
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
