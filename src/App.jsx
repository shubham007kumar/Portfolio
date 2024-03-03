import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";

function App() {
  const [them, setTheme] = useState(false);

  const handleToggle = () => {
    setTheme((pre) => !pre);
  };

  const theme = createTheme({
    palette: {
      mode: them ? "light" : "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper square>
          <Navbar them={them} handleToggle={handleToggle} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#a2d9ff"
              fillOpacity="1"
              d="M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,117.3C672,107,768,149,864,181.3C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            <foreignObject x="620" y="250" width="250" height="100">
              <div xmlns="http://www.w3.org/1999/xhtml">
                <p style={{ color: "#000", fontFamily: "sans-serif" }}>
                  Copyright Shubham kumar 2021
                </p>
                <hr />
              </div>
            </foreignObject>
          </svg>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
