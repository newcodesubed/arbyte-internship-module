import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ProductDetail from "./pages/ProductDetail";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 1
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="products" element={<Product />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
