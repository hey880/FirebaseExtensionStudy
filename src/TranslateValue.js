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
        label="번역할 말을 써주세요"
        variant="outlined"
        onChange={change}
        value={text}
        onKeyDown={keyDown}
        placeholder="번역할 말을 써주세요"
      />
    </Box>
  );
}
