import React from "react";
import ReactTable from "../../components/table";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const Services = () => {
  const breadcrumbs = [
    <Link underline="hover" key="2" color="inherit" href="/services">
      Services
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      Services
    </Typography>,
  ];
  const mockData = [
    {
      serviceName: "Cleaning",
      description: "Cleaning Services",
      category: "Home Cleaning",
      noOfServiceProviders: 5,
    },
    {
      serviceName: "Pest Control",
      description: "Remove pests from your home",
      category: "Pest Control",
      noOfServiceProviders: 5,
    },
    {
      serviceName: "Gardening",
      description: "Plant your garden with care",
      category: "Gardening",
      noOfServiceProviders: 3,
    },
  ];

  const columns = [
    {
      header: "Service Name",
      accessorKey: "serviceName",
    },
    {
      header: "Description",
      accessorKey: "description",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Number of Service Providers",
      accessorKey: "noOfServiceProviders",
    },
  ];
  return (
    <Box sx={{ p: 5, minHeight: "100%" }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 3 }}>
        {breadcrumbs}
      </Breadcrumbs>
      <ReactTable data={mockData} columns={columns} />
    </Box>
  );
};

export default Services;
