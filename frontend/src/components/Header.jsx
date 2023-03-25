import React from "react";
import {
  AppBar,
  Stack,
  Typography,
  Toolbar,
  Container,
  styled,
  Switch,
} from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.navBar,
  color: "white",
}));

const Header = ({ data }) => {
  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ paddingTop: "1.5em", paddingBottom: "0.75em" }}>
        <Container maxWidth="lg">
          <Stack direction={"row"} justifyContent="space-between">
            <Typography
              variant="h1"
              fontWeight={900}
              fontSize={42}
              fontStyle="italic"
            >
              NEWS
            </Typography>
            <Switch
              checked={data.dmode}
              onChange={() => {
                data.setDmode(!data.dmode);
                localStorage.setItem("dmode", JSON.stringify(!data.dmode));
              }}
            />
          </Stack>
        </Container>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
