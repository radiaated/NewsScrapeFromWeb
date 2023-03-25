import React from "react";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";

const NewsCard = ({ data }) => {
  return (
    <Card
      sx={{
        backgroundColor: "background.default",
        "&:hover": {
          opacity: 0.9,
        },
      }}
    >
      <CardActionArea href={data.url} target="_blank">
        <CardMedia component="img" image={data.cover} height={125} />
        <Typography variant="h3" fontSize={17} color="secondary.light" pt={1}>
          {data.title}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
