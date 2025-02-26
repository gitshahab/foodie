'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

const ImagePicker = ({label, name}) => {
    const [ pickedImg, setpickedImg ] = useState();
    const imageInput = useRef();

    const handleClick = () => {
        imageInput.current.click();
    }

    const handleChange = (e) => {
        const file = e.target.files[0];

        if(!file) {
            setpickedImg(null);
            return;
        }
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setpickedImg(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {pickedImg ? <Image src={pickedImg} alt='pickedImg image by user' fill /> : <p>No image pickedImg yet!</p>}
        </div>
        <input className={classes.input}
         type='file' id={name} 
         accept='image/png, image/jpeg' 
         name={name}
         ref={imageInput}
         onChange={handleChange}
         required
        />
      </div>
      <button onClick={handleClick} className={classes.button} type='button'>Pick an Image</button>
    </div>
  )
}

export default ImagePicker
