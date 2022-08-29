import { React } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Box, Container } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Container maxWidth="sm">
        <Box textAlign="center" mt={20}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </Provider>
  </BrowserRouter>
);
