import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";

const ProductIndividual = () => {
  const { ProductId } = useParams();
  // alert(ProductId);

  const fetchIndividualItems = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/1")
      .catch((err) => {
        console.log("Error : ", err);
      });
  };
  return <div></div>;
};

export default ProductIndividual;
