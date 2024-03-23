import React from 'react';
import { useState, useEffect } from 'react';


//Dummy data for the images, replace with your actual images
const images = [
  { id: 1, src: '../src/assets/images/one.jpg', clicked: false },
  { id: 2, src: '../src/assets/images/two.jpg', clicked: false },
  { id: 3, src: '../src/assets/images/three.jpg', clicked: false },
  { id: 4, src: '../src/assets/images/four.jpg', clicked: false },
  { id: 5, src: '../src/assets/images/five.jpg', clicked: false },
  { id: 6, src: '../src/assets/images/six.jpg', clicked: false },
  { id: 7, src: '../src/assets/images/seven.jpg', clicked: false },
  { id: 8, src: '../src/assets/images/eight.jpg', clicked: false },
  // { id: 9, src: '../src/assets/images/nine.jpg', clicked: false },
];

function MemoryGame() {
  const [gameImages, setGameImages] = useState(images);
  const [score, setScore] = useState(0);

  //if a image cliked lets add 1 to the score
  //if the image is clicked again then score -1 and alert the user clicked the image again
  //when 5th round game is over

  const handleImageClick = (id ) => {
    const updatedImages = gameImages.map((image) => {
      if (image.id === id) {
        if (image.clicked) {
          //image.cliked means the image is already clicked
          //clicked is a met
          alert('Game Over');
          setScore(0);
          return { ...image, clicked: false };
        }else{ 
          setScore(score + 1)
        }
       
        return { ...image, clicked: true };
      }
      return image;
    });
    setGameImages(updatedImages);
  }

useEffect(() => {
    setGameImages(shuffleArray(gameImages));
  }
    , [score]);

  const shuffleArray = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  
  return (
    <div>
 
      <h2 style={{backgroundColor:"green",width:"25%",height:"50px",textAlign:"center",margin:"10px auto"}}>Score: {score}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {gameImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Memory game piece ${image.id}`}
            style={{ width: '300px', height: '300px', margin: '10px', cursor: 'pointer' }}
            onClick={() => handleImageClick(image.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MemoryGame;
