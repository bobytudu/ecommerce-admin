import React from "react";
import Box from "@mui/material/Box";
import MaterialTable from "@material-table/core";
import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { ThemeOptionTypes } from "theme";
import { useNavigate } from "react-router-dom";
import Page from "components/Page";

export default function Products() {
  const navigate = useNavigate();
  const theme: ThemeOptionTypes = useTheme();
  const students = [
    {
      id: "1243",
      first_name: "Hello",
      last_name: "brother",
      gender: "male",
      email: "124@gmail.com",
    },
  ];
  return (
    <Page title="Products">
      <Container sx={{ pt: 5 }}>
        <Box
          sx={{
            " .MuiPaper-root": {
              borderRadius: "12px",
              boxShadow: theme.customShadows.card,
            },
          }}
        >
          <MaterialTable
            data={students}
            title="Products"
            onRowClick={(event, rowData: any) => {
              console.log(rowData);
              navigate(`/products/${rowData.id}`);
            }}
            columns={[
              { title: "ID", field: "id" },
              { title: "Name", field: "first_name" },
              { title: "Title", field: "last_name" },
              { title: "Gender", field: "gender" },
              { title: "Email", field: "email" },
            ]}
            options={{
              rowStyle: {
                fontSize: 14,
              },
              searchFieldVariant: "outlined",
              pageSize: 10,
            }}
          />
        </Box>
      </Container>
    </Page>
  );
}
