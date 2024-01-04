import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Page from "components/Page";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "components/container/Card";
import { Input } from "react-componentry";
import { useForm, useFieldArray } from "react-hook-form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

//icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

export default function EditProduct() {
  const navigate = useNavigate();
  const { control } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      discountedPrice: 0,
      category: "",
      specifications: [
        {
          key: "In The box",
          details: "1 x Apple iPhone 12 Pro Max 256GB Graphite 1",
        },
        {
          key: "Warranty",
          details: "1 Year Manufacturer Warranty",
        },
      ],
    },
  });
  const links = [
    { label: "Details", path: "/products/1/details" },
    { label: "Images", path: "/products/1/images" },
    { label: "Pricing", path: "/products/1/pricing" },
    { label: "Inventory", path: "/products/1/inventory" },
    { label: "Shipping", path: "/products/1/shipping" },
    { label: "SEO", path: "/products/1/seo" },
    { label: "Variations", path: "/products/1/variations" },
  ];

  const { fields, append, remove } = useFieldArray({
    control,
    name: "specifications",
  });

  return (
    <Page title="Edit Product">
      <Container maxWidth="xl">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/products")}
          sx={{ bgcolor: "transparent", pl: 0 }}
        >
          Products
        </Button>
        <Typography variant="h4" sx={{ mt: 3, mb: 5 }}>
          Edit Product
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <List component={Paper} elevation={2} sx={{ p: 2 }}>
              {links.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText
                        primary={item.label}
                        sx={{
                          "& .MuiTypography-root": {
                            fontWeight: isActive ? 600 : 400,
                          },
                        }}
                      />
                    </ListItemButton>
                  )}
                </NavLink>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card title="Product Details">
              <Input
                size="small"
                label="Product Name"
                control={control}
                name="name"
                fullWidth
              />
              <div style={{ paddingBottom: 8 }} />
              <Input
                name="description"
                multiline
                fullWidth
                minRows={4}
                label="Description"
                control={control}
              />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Input
                    size="small"
                    fullWidth
                    name="price"
                    label="Price"
                    control={control}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    size="small"
                    fullWidth
                    name="discountedPrice"
                    label="Discount"
                    control={control}
                  />
                </Grid>
              </Grid>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: 1, mt: 3 }}
              >
                Specifications
              </Typography>
              <Box
                sx={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: 1,
                  mb: 2,
                }}
              >
                <Table size="small" aria-label="simple table">
                  <TableBody>
                    {fields.map((field, id) => (
                      <TableRow
                        key={id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Input
                            size="small"
                            fullWidth
                            name={`specifications.${id}.key`}
                            placeholder="Key"
                            control={control}
                          />
                        </TableCell>
                        <TableCell align="left">
                          <Input
                            size="small"
                            fullWidth
                            minRows={1}
                            multiline
                            name={`specifications.${id}.details`}
                            placeholder="Details"
                            control={control}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip title="Delete" arrow>
                            <IconButton
                              onClick={() => remove(id)}
                              sx={{ border: "1px solid rgba(0,0,0,0.1)" }}
                              aria-label="delete"
                            >
                              <DeleteIcon color="error" />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => append({ key: "", details: "" })}
              >
                Add
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card title="Actions">
              <Button variant="contained" startIcon={<SaveIcon />}>
                Save
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
