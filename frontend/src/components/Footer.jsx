import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Box pt={6} pb={6}>
        <Typography variant="body1" color="secondary" textAlign={"center"}>
          All in All News &copy; | {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
