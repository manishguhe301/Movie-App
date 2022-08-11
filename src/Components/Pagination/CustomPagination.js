import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import React from "react";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    text: "primary",
    color: "primary",
  },
});

const CustomPagination = ({ setPage, numberOfPages = 50 }) => {
  const HandlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={numberOfPages}
          onChange={(e) => {
            HandlePageChange(e.target.textContent);
          }}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
