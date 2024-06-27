"use client";
import React, { useState, useEffect } from 'react';
import Section1 from '@/components/TopSection/Section1';
import Code from '@/components/Code';
import Section2 from '@/components/TopSection/Section2';
import CustomCursur from '@/components/Cursur/CustomCursur';
import Cursur_2 from '@/components/Cursur/Cursur_2';

export default function Home() {  
  return (
    <div>
      {/* <CustomCursur /> */}      
      <Cursur_2 />
      <Section1 />
      <Section2 />      
    </div>
  );
}
