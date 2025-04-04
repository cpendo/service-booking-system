import React, { useState } from "react";
import {
  Table,
  Button,
  Stack,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Typography,
  Card,
  Box,
  Tooltip,
  IconButton,
  useTheme,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Add, Edit, Eye, Trash, SearchNormal } from "iconsax-react";

const ReactTable = ({
  data,
  columns,
  showSearchField = true,
  handleAdd,
  handleView,
  handleEdit,
  handleDelete,
  handleSearch,
  showAddButton = false,
  showView = true,
  showEdit = false,
  showDelete = false,
  addButtonText = "Add",
  actionButton = [],
}) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (handleSearch) {
      handleSearch(value);
    }
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span
          key={index}
          style={{
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.text.primary,
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  return (
    <Card sx={{ borderRadius: "12px 12px 12px 12px" }}>
      <Box
        sx={{ borderBottom: "1px solid", borderColor: "divider", px: 2, py: 2 }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {showSearchField && (
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                maxWidth: { xs: "100%", sm: "320px" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchNormal
                      size={20}
                      color={theme.palette.text.secondary}
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
          {showAddButton && (
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={(e) => {
                e.stopPropagation();
                handleAdd();
              }}
              size="large"
              sx={{ textTransform: "none" }}
            >
              {addButtonText}
            </Button>
          )}
        </Stack>
      </Box>

      <Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.accessorKey}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box>
                        <Typography
                          fontWeight="bold"
                          textTransform="uppercase"
                          variant="inherit"
                        >
                          {column.header}
                        </Typography>
                      </Box>
                      {column.sortable && (
                        <HeaderSort column={column} setSorting={setSorting} />
                      )}
                    </Stack>
                  </TableCell>
                ))}
                {(showView || showEdit || showDelete) && (
                  <TableCell>
                    <Typography
                      fontWeight="bold"
                      textTransform="uppercase"
                      variant="inherit"
                    >
                      Actions
                    </Typography>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {data?.length ? (
                data.map((row, index) => (
                  <TableRow
                    key={index}
                    hover
                    sx={{
                      "&:nth-of-type(odd)": {
                        bgcolor:
                          theme.palette.mode === "light"
                            ? "rgba(0, 0, 0, 0.02)"
                            : "rgba(255, 255, 255, 0.02)",
                      },
                      "&:hover": {
                        bgcolor:
                          theme.palette.mode === "light"
                            ? "rgba(0, 0, 0, 0.04)"
                            : "rgba(255, 255, 255, 0.04)",
                      },
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    {columns.map((column) => (
                      <TableCell key={column.accessorKey}>
                        {column.cell
                          ? column.cell({
                              ...row,
                              getValue: () => row[column.accessorKey],
                            })
                          : getHighlightedText(
                              String(row[column.accessorKey] || ""),
                              searchQuery
                            )}
                      </TableCell>
                    ))}
                    {actionButton?.length ? (
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          {actionButton.map((item, index) => (
                            <Tooltip
                              title={item.tooltip || "Action"}
                              key={index}
                            >
                              <IconButton
                                color={item.color || "default"}
                                onClick={() => item.onClick(row?.id, row)}
                              >
                                {item.icon}
                              </IconButton>
                            </Tooltip>
                          ))}
                        </Stack>
                      </TableCell>
                    ) : (
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          {showView && (
                            <Tooltip title="View">
                              <IconButton
                                color="secondary"
                                onClick={() => handleView(row.id, row)}
                              >
                                <Eye />
                              </IconButton>
                            </Tooltip>
                          )}
                          {showEdit && (
                            <Tooltip title="Edit">
                              <IconButton
                                color="primary"
                                onClick={() => handleEdit(row.id, row)}
                              >
                                <Edit />
                              </IconButton>
                            </Tooltip>
                          )}
                          {showDelete && (
                            <Tooltip title="Delete">
                              <IconButton
                                color="error"
                                onClick={() => handleDelete(row.id, row)}
                              >
                                <Trash />
                              </IconButton>
                            </Tooltip>
                          )}
                        </Stack>
                      </TableCell>
                    )}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + 1}
                    align="center"
                    sx={{ py: 6 }}
                  >
                    <Stack
                      spacing={2}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box sx={{ opacity: 0.6 }}>
                        <SearchNormal size={40} variant="Bulk" />
                      </Box>
                      <Typography variant="h6" color="textSecondary">
                        No data found
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {searchQuery
                          ? "Try adjusting your search to find what you're looking for."
                          : "There are no records to display."}
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Card>
  );
};

export default ReactTable;
