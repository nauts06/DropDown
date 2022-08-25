import React from "react";
import "../App.css"
import { Autocomplete, TextField } from "@mui/material";
const Search = ({ data, placeholder }) => {
  return (
    <div>
      <Autocomplete 
      className="movie"
        disablePortal
        id="combo-box-demo"
        getOptionLabel={(opt) => opt.Title}
        options={data}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={placeholder}  autoFocus='true' />}
      />
    </div>
  );
};

export default Search;
