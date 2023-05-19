import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import axios from "axios";
import React from "react";

function Products() {
  const { error, isLoading, data, refetch } = useQuery(["Products"], () => {
    return axios.get("https://fakestoreapi.com/products");
  },
  {
    staleTime:10000
  });
  console.log(data);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap:"wrap",
        width:"100%",
      }}
    >
      {data &&
        data?.data?.map((product) => (
          <Card sx={{ maxWidth: 345 ,
          width:500,
          margin:2,
          position:"relative"}}>
            <CardActionArea >
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt="green iguana"
                sx={{  objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{fontSize:18}}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="purple" style={{fontSize:12}}>
                  {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{position:"absolute",
          bottom:2,
          right:2}}>
              <Button size="small" color="primary" variant="outlined">
                Add to basket
              </Button>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
}

export default Products;
