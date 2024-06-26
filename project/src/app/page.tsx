"use client";

import React, { useState, useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  const controls = useAnimation();
  useEffect(() => {
      controls.start({ opacity: 1 });
  }, [controls]);
  
  return (
    <div>
      <motion.div>
        
      </motion.div>   
      <h1>Ahmed</h1>
      <h1>Ahmed</h1>
    </div>
  );
}
