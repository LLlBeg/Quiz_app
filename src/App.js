import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <header>
      <Box mt={50}>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/settings")}
        >
          Start Game
        </Button>
      </Box>
    </header>
  );
}

export default App;
