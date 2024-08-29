import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetProducts } from "../redux/actions/ProductAction"; // Import the action creator

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products); // Ensure you're accessing the correct part of the state
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      dispatch(SetProducts(response.data)); // Dispatch the action to set products in state
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts(); // Call the async function directly here
  }, [dispatch]);

  console.log("Products:", products);

  return (
    <div className="product-list">
      {products?.map((product) => (
        <Link to={`/product/${product.id}`}>
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-category">Category: {product.category}</p>
              {/* <p className="product-description">{product.description}</p> */}
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductListing;
