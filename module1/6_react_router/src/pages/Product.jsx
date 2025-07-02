function Product() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: 50,
      }}
    >
      Try adding products/:id to see product
      <span
        style={{ fontSize: 20, color: "gray", marginLeft: 10, marginTop: 20 }}
      >
        (101,102,103,104,105)
      </span>
      .
    </div>
  );
}

export default Product;
