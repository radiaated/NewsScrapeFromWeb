import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBbcNews, fetchAfNews, fetchHnNews } from "../features/newsSlice";
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  styled,
  Skeleton,
} from "@mui/material";
import NewsCard from "../components/NewsCard";

const StyledDivider = styled(Divider)({
  backgroundColor: "#1f1f1f",
});

const Home = () => {
  const { hn, bbc, af } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBbcNews());
    dispatch(fetchHnNews());
    dispatch(fetchAfNews());
  }, []);
  return (
    <Container maxWidth="lg">
      <Box mt={4} mb={4}>
        <Typography
          variant="h5"
          color="secondary"
          fontWeight="500"
          gutterBottom
        >
          BBC
        </Typography>
        <Grid container spacing={2.5}>
          {bbc.loading ? (
            <>
              {Array.from(new Array(4)).map((item, i) => (
                <Grid item md={3} sm={6} xs={12} mb={2} key={i}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      backgroundColor: "primary.light",
                      marginBottom: "0.5em",
                    }}
                    height={125}
                  />

                  <Skeleton
                    variant="rectangular"
                    sx={{
                      backgroundColor: "primary.light",
                    }}
                    height={25}
                  />
                </Grid>
              ))}
            </>
          ) : (
            bbc.news.map((item, id) => (
              <Grid item key={id} md={3} sm={6} xs={12} mb={2}>
                <NewsCard data={item} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
      <StyledDivider />
      <Box mt={4} mb={4}>
        <Typography
          variant="h5"
          color="secondary"
          fontWeight="500"
          gutterBottom
        >
          The Hacker News
        </Typography>
        <Grid container spacing={2.5}>
          {hn.loading ? (
            <>
              {Array.from(new Array(4)).map((item, i) => (
                <Grid item md={3} sm={6} xs={12} mb={2} key={i}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      backgroundColor: "primary.light",
                      marginBottom: "0.5em",
                    }}
                    height={125}
                  />
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      backgroundColor: "primary.light",
                    }}
                    height={25}
                  />
                </Grid>
              ))}
            </>
          ) : (
            hn.news.map((item, id) => (
              <Grid item key={id} md={3} sm={6} xs={12} mb={2}>
                <NewsCard data={item} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
      <StyledDivider />
      <Box mt={4} mb={4}>
        <Typography
          variant="h5"
          color="secondary"
          fontWeight="500"
          gutterBottom
        >
          All Football
        </Typography>
        <Grid container spacing={2.5}>
          {af.loading ? (
            <>
              {Array.from(new Array(4)).map((item, i) => (
                <Grid item md={3} sm={6} xs={12} mb={2} key={i}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      backgroundColor: "primary.light",
                      marginBottom: "0.5em",
                    }}
                    height={125}
                  />
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      backgroundColor: "primary.light",
                    }}
                    height={25}
                  />
                </Grid>
              ))}
            </>
          ) : (
            af.news.map((item, id) => (
              <Grid item key={id} md={3} sm={6} xs={12} mb={2}>
                <NewsCard data={item} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
      <StyledDivider />
    </Container>
  );
};

export default Home;
