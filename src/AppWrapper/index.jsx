import React, { Suspense } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Skeleton } from "@mui/material";
import { DataProvider } from "../Contexts/DataContext";
import { loadProfile } from "../../server/dal/api";
import { Coffee } from "@mui/icons-material";
const Profile = React.lazy(() => import("./Profile"));

export const AppWrapper = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Coffee sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex", flexGrow: 1 },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Bulldog Coffee
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <DataProvider data={loadProfile()}>
                <Suspense
                  fallback={
                    <Skeleton variant="circular" width={40} height={40} />
                  }
                >
                  <Profile />
                </Suspense>
              </DataProvider>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ maxWidth: 800, margin: "30px auto" }}>{children}</div>
    </>
  );
};
