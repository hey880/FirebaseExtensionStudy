import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ change, text, keyDown }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="value"
        variant="outlined"
        onChange={change}
        value={text}
        onKeyDown={keyDown}
        placeholder="value"
      />
    </Box>
  );
}