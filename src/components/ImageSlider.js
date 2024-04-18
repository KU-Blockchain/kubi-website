// components/ImageCarousel.js
'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import {motion} from "framer-motion";
import { Button, Center, Flex, IconButton } from '@chakra-ui/react';
import styles from "@/components/globalstyles.module.css";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";

const ImageCarousel = ({ images }) => {

  const [index, setIndex]=useState(0);
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex(prev => (prev + 1) % images.length);
  //     addclass()
  //   }, 5000); // 5000 milliseconds = 5 seconds
  
  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, []);

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
      <motion.div
      initial={{ opacity: 0, x:200 }}
      whileInView={{ opacity: 1, x:0 }} 
      viewport={{ once: true }}
      id='imageHolder' className={styles.ImageSlider} style={{backgroundImage:`url(${images[index].url})`}}>
        <IconButton onClick={prevIndex} style={{position:"absolute", top:"50%"}} icon={<CgArrowLeft />}></IconButton>
        <IconButton onClick={nextIndex} style={{position:"absolute", top:"50%", right:0}} icon={<CgArrowRight />} ></IconButton>
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
