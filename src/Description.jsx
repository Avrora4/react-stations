// @ts-check

import React from "react";
import { useState } from "react";
import { DogImage }  from './DogImage';
import { DogListContainer } from './DogListContainer';

export const Description = () => {
    const [dogUrl,setDogUrl] = useState('https://dog.ceo/api/breeds/image/random');
    const update = async() => {
      await fetch("https://dog.ceo/api/breeds/image/random").then(
      res => res.json().then(
        (result) => {
          setDogUrl(result.message);
        }
      ))
    }
    return (
      <div className="image-container">
        <button onClick={update}>更新</button>
        <DogImage imageUrl={dogUrl}/>
      </div>
    );
};
