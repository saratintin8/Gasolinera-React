import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Surtidor from "./Pages/Surtidor";
import Product from "./Pages/Product";
import MethodPayment from "./Pages/MethodPayment";
import Quantity from "./Pages/Quantity";
import Resume from "./Pages/Resume";

function App() {
  return (
    <Box w="100%" h="100vh">
      <NavBar />
      <Container paddingTop={10}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surtidor" element={<Surtidor />} />
          <Route path="/product" element={<Product />} />
          <Route path="/method-payment" element={<MethodPayment />} />
          <Route path="/quantity" element={<Quantity />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
