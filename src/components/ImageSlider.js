// components/ImageCarousel.js
'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import {motion, useAnimate} from "framer-motion";
import { Button, Center, HStack } from '@chakra-ui/react';
import next from 'next';

const ImageCarousel = ({ images }) => {

  const [index, setIndex]=useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  function nextIndex(){
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
  
  function setFalse()
  {
    setIsAnimating(false)
  }
  const animationVariants = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div>
      <motion.div style={{maxHeight:"500px",overflow:"hidden", alignItems:"center", alignContent:"center"}} 
      animate={isAnimating ? { opacity: 0.5, x: 0.5 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={setFalse}
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
