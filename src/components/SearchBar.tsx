import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { green } from "../styles/colors";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginY: 2,
        borderColor: green,
        borderWidth: 10,
        borderStyle: "solid",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Restaurants, clinics, spas, theaters ..."
        inputProps={{
          "aria-label": "search fat for all",
        }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
