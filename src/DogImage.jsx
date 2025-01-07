// @ts-check

import { defaults } from 'autoprefixer';
import React from 'react';

export const DogImage = ({imageUrl}) => {
  return(
    <img src={imageUrl} alt="Dog's image" />
  );
};
