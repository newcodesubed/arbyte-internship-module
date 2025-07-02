import React from "react";
import { useParams } from "react-router-dom";

const product = [
  {
    id: 101,
    product_name: "Wireless Mouse",
    price: 25.99,
    sold_out: false,
  },
  {
    id: 102,
    product_name: "Mechanical Keyboard",
    price: 79.99,
    sold_out: true,
  },
  {
    id: 103,
    product_name: "USB-C Hub",
    price: 39.5,
    sold_out: false,
  },
  {
    id: 104,
    product_name: "Noise Cancelling Headphones",
    price: 129.0,
    sold_out: true,
  },
  {
    id: 105,
    product_name: "Laptop Stand",
    price: 29.95,
    sold_out: false,
  },
];

const ProductDetail = () => {
  const { productId } = useParams(); // string
  const productData = product.find((item) => item.id === Number(productId));

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>
        <strong>ID:</strong> {productData.id}
      </p>
      <p>
        <strong>Name:</strong> {productData.product_name}
      </p>
      <p>
        <strong>Price:</strong> ${productData.price}
      </p>
      <p>
        <strong>Sold Out:</strong> {productData.sold_out ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default ProductDetail;
