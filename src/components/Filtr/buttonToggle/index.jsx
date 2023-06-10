import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Controller } from 'react-hook-form';

export const FilterListToggle = ({ control }) => {
  return (
    <div className="ccontainer_form">
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <ToggleButtonGroup {...field} exclusive color="standard">
            <ToggleButton value="pronajem">Pronajem</ToggleButton>
            <ToggleButton value="prodej">Prodej</ToggleButton>
          </ToggleButtonGroup>
        )}
      />
    </div>
  );
};
