import React from "react";
import { useRef } from "react";


function KittyGallery() {
  const galleryRef = useRef(null);
  const index = useRef(0);
  function showNextImg() {
    let imageList = galleryRef.current.querySelectorAll(".image");
    index.current = index.current + 1 >= imageList.length ? 0 : index.current + 1;
      imageList[index.current].scrollIntoView({
        behaviour:"smooth",
        block:"nearest",
        inline:"center"


      })
  }

  return (
    <div>
      <h1>KittyGallery</h1>
      <button onClick={showNextImg}>Next</button>
      <ul ref={galleryRef} className="gallery">
        <li className="image" >
          <img src="http://placekitten.com/g/200/300" alt="kittenImg" />
        </li>
        <li className="image">
          <img src="http://placekitten.com/g/200/250" alt="kittenImg" />
        </li>
        <li className="image" >
          <img src="http://placekitten.com/g/300/300" alt="kittenImg" />
        </li>
      </ul>
    </div>
  );
}

export default KittyGallery;
