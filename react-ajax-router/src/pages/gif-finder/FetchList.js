import React, { useState, useEffect } from "react";

export default function ImageList() {
  const [images, setImages] = useState(null);

  async function fetchImagesData(id) {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=3eFQvabDx69SMoOemSPiYfh9FY0nzO9x&q=cat&offset=0&limit=3");
    setImages( await response.json());
  }

  useEffect(() => {
    fetchImagesData();
  });

  if (!images) {
    return "loading...";
  }else{
    return (
      <>
        {images.data.map((image, i) => {
            return (<Image image={image} key={i}/>);
        })}
      </>
    );
  }
}

function Image(prop) {
  return (
      <details>
        <summary>{prop.image.type}</summary>
        <strong>{prop.image.id}</strong> years old
        <br />
        lives in {prop.image.url}
    </details>
  );
}
