import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function PhoneSlider({phone, setPhone}) {
  // const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setPhone(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" marginLeft="10%" marginRight="-30%">
        <RemoveCircleOutlineIcon />
        <Slider aria-label="Volume" value={phone} step={1} min={1111111111} max={9999999999} onChange={handleChange} />
        <AddCircleOutlineIcon />
      </Stack>
    </Box>
  );
}
