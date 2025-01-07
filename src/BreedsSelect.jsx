// @ts-check

import { list } from 'postcss';
import React, { useState, useEffect } from 'react';

export const BreedsSelect = ({breeds, selectedBreed, onBreedChange}) => {
  return(
    <div>
      <select value={selectedBreed} onChange={(e) => onBreedChange(e.target.value)}>
        {Object.entries(breeds).map((breed,value) => (
          <option key={breeds} value={breed[1]}>
            {breed[1]}
          </option>
        ))}
      </select>
    </div>
  )
}