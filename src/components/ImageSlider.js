// components/ImageCarousel.js
'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import {motion} from "framer-motion";
import { Button, Center, Flex, HStack } from '@chakra-ui/react';
import styles from "@/components/globalstyles.module.css";

const ImageCarousel = ({ images }) => {

  const [index, setIndex]=useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
      addclass()
    }, 5000); // 5000 milliseconds = 5 seconds
  
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  function nextIndex(){
    addclass()
    console.log(index)
    if(index>=images.length-1){
      setIndex(0);
      console.log("reset");
    }
    else{
      setIndex(prev=>prev+1);
    }
    
  }

  function prevIndex(){
    if(index<=0){
      setIndex(images.length-1);
    }
    else{
      setIndex(prev=>prev-1);
    }

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
    <div style={{margin:"0px"}}>
      <motion.div id='imageHolder' style={{maxHeight:"450px",overflow:"hidden", alignItems:"center", alignContent:"center",}}>

        <motion.img 
        initial={{ opacity: 0, x:200 }}
        whileInView={{ opacity: 1, x:0 }}
        viewport={{ once: true }}
        style={{maxWidth:"100%", height:"auto"}} src={images[index]} />
      </motion.div>
      <Flex justifyContent="center">
          <HStack spacing="100%">
            <Button onClick={prevIndex}>&lt;&lt;</Button>
            <Button onClick={nextIndex}>&gt;&gt;</Button>
          </HStack>
        </Flex>
      
    </div>
  );
};

export default ImageCarousel;
