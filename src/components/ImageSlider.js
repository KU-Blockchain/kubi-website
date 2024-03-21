// components/ImageCarousel.js
'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import {motion, useAnimate} from "framer-motion";
import { Button, Center, HStack } from '@chakra-ui/react';
import styles from "@/components/globalstyles.module.css";
import next from 'next';

const ImageCarousel = ({ images }) => {

  const [index, setIndex]=useState(0);
  
  function nextIndex(){
    addclass()
    if(index==images.length-1){
      setIndex(0);
    }
    else{
      setIndex(prev=>prev+1);
    }
    
    setIsAnimating(true);
  }

  function prevIndex(){
    if(index==0){
      setIndex(images.length-1);
    }
    else{
      setIndex(prev=>prev-1);
    }

    setIsAnimating(true);
  }
  
  function addclass()
  {
    document.getElementById("imageHolder").classList.add(styles.ClickedImage);
    setTimeout(() => {
      removeClass()
    }, 300);
  }

  function removeClass()
  {
    document.getElementById("imageHolder").classList.remove(styles.ClickedImage);
  }
  
  
  return (
    <div >
      <motion.div id='imageHolder' style={{maxHeight:"500px",overflow:"hidden", alignItems:"center", alignContent:"center"}} 
      >
        <motion.img 
        initial={{ opacity: 0, x:200 }}
        whileInView={{ opacity: 1, x:0 }}
        style={{maxWidth:"100%", height:"auto"}} src={images[index].url} />
      </motion.div>
      <Center>
          <HStack spacing={3}>
            <Button onClick={prevIndex}>Previous</Button>
            <Button onClick={nextIndex}>next</Button>
          </HStack>
        </Center>
      
    </div>
  );
};

export default ImageCarousel;
