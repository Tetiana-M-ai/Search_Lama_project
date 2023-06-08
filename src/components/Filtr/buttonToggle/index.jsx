import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export const FilterListToggle = ({ options, value, selectToggle }) => {
  const [formats, setFormats] = useState([]);

  const handleFormatChange = (event, newValue) => {
    setFormats(newValue);
    console.log(newValue);
  };

  return (
    <div className="ccontainer_form">
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormatChange}
        exclusive
        color="standard"
      >
        <ToggleButton value="pronajem">Pronajem</ToggleButton>
        <ToggleButton value="prodej">Prodej</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
