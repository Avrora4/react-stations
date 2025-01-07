// @ts-check
import { useState, useEffect } from "react";
import { DogImage } from "./DogImage";
import { BreedsSelect } from "./BreedsSelect";

export const DogListContainer = () => {
      const [breeds,setBreeds] = useState([]);
      const [selectedBreed,setSelectedBreed] = useState('affenpinscher');
      const [imageList, setImageList] = useState([]);
      const showButton = async () =>{
        const breedName = selectedBreed;
        if (breedName != null)
        {
          try {
            const response = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random/10`);
            const result = await response.json();
            setImageList(result.message);
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        }
      };
      useEffect(() => {
        const DogList = async() => {
          try{
          const response = await fetch(`https://dog.ceo/api/breeds/list/all`,{method: 'GET'});
          const result = await response.json();
          setBreeds(Object.keys(result.message));
          } catch (error){
              console.error('Fail to get dog info : ',error);
            }
        };
        DogList();
      },[])
  return (
  <div>
    <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={setSelectedBreed} />
    <button onClick={showButton}>表示</button>
      <div>
        {imageList.map((imageUrl) => (
          <img src={imageUrl} />
        ))}
      </div>
  </div>
  );
}

