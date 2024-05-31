import React, { useState } from 'react';
// import { render } from "react-dom";
import './Task1.css';

const Task1 = () => {
  const [images, setImages] = useState<string[]>([]);

  const fetchRandomImage = async (limit?:number): Promise<string | string[] | null> => {
    try {
      const response = await fetch(`https://tinyfac.es/api/data?limit=${limit??1}&quality=0`);
      const data = await response.json() as Array<{url: string}>;
      if (limit!==undefined&&limit>1){
        return data.map(image=>image.url)
      }
      const [image]= data;
      return image.url;
    } catch (error) {
      console.error('Error fetching random image:', error);
      return null;
    }
  };


  const addImage = async () => {
    const imageUrl = await fetchRandomImage(1);
    if (typeof imageUrl === 'string') {
      setImages(prevImages => [...prevImages, imageUrl]);
    }
  };

  const refreshAllImages = async () => {
    // const newImages: string[] = [];
    // for (let i = 0; i < images.length; i++) {
      const imageUrls = await fetchRandomImage(images.length);
      if (imageUrls) {
        setImages(imageUrls as Array<string>);
      }
    
   
  };

  const refreshImage = async (index: number) => {
    const imageUrl = await fetchRandomImage();
    if (typeof imageUrl === 'string'){
      setImages(prevImages => prevImages.map((image,idx)=>
        idx===index?imageUrl:image
      ) 
      )}
  };

  return (
    <div>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={image}
              alt={` ${index}`}
              className="image"
            />
            <div className="hover-content">
              <div onClick={() => refreshImage(index)}>
                <svg height="200" color='green' viewBox="0 0 64 64" width="100" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow-refresh-transfer-user_interface-interface" data-name="arrow-refresh-transfer-user interface-interface">
                    <path className='arrowPath' d="m59.008 34a2.921 2.921 0 0 0 -2.208-1.023h-.116a3.032 3.032 0 0 0 -2.966 2.616 21.653 21.653 0 0 1 -15.968 17.678 22.064 22.064 0 0 1 -23.792-8.7 1 1 0 0 1 .822-1.571h5.22a2 2 0 0 0 0-4h-16v16a2 2 0 0 0 4 0v-5.34a1 1 0 0 1 1.793-.608 28 28 0 0 0 49.874-12.721 2.9 2.9 0 0 0 -.659-2.331z"/>
                    <path className='arrowPath' d="m44 25h16v-16a2 2 0 0 0 -4 0v5.34a1 1 0 0 1 -1.793.608 28 28 0 0 0 -49.853 12.582 3.006 3.006 0 0 0 2.971 3.47 3.029 3.029 0 0 0 2.966-2.588 21.993 21.993 0 0 1 39.751-8.983 1 1 0 0 1 -.822 1.571h-5.22a2 2 0 0 0 0 4z"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        ))}
        <div className='plus-container'> 
          <div className="plus-icon" onClick={addImage}>
            <img src="plus.png" alt="Add" />
          </div>
        </div>
      </div>
      <div className='contMian'>
        <div className='mainButtons'>
          <button onClick={refreshAllImages}>Refresh All</button>
        </div>
      </div>
    </div>
  );
};



export default Task1
