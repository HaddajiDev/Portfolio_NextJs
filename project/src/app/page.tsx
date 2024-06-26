"use client";
import React, { useState, useEffect } from 'react';
import Section1 from '@/components/TopSection/Section1';
import Code from '@/components/Code';
import Section2 from '@/components/TopSection/Section2';
import CustomCursur from '@/components/Cursur/CustomCursur';

export default function Home() {  
  return (
    <div>
      <CustomCursur />
      <Section1 />
      <Section2 />
      <Code />
    </div>
  );
}
