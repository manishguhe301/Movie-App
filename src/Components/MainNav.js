import { useEffect } from "react";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
// import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="Trending"
        // value="recents"
        // onClick={() => window.scroll(0, 0)}
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="Movies"
        // value="favorites"
        // onClick={() => window.scroll(0, 0)}
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="TV Series"
        // value="nearby"
        // onClick={() => window.scroll(0, 0)}
        icon={<TvIcon />}
      />
    </BottomNavigation>
  );
}
