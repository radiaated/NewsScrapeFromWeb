import React from "react";
import { AppBar, Stack, Typography, Toolbar, Container } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "primary.main" }} position="sticky">
      <Toolbar sx={{ paddingTop: "1.5em", paddingBottom: "0.75em" }}>
        <Container maxWidth="lg">
          <Stack direction={"row"}>
            <Typography
              variant="h1"
              fontWeight={900}
              fontSize={42}
              fontStyle="italic"
            >
              NEWS
            </Typography>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
