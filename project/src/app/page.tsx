"use client";
import React, { useState, useEffect } from 'react';
import Section1 from '@/components/TopSection/Section1';
import Code from '@/components/TopSection/Code';
import Section2 from '@/components/TopSection/Section2';

export default function Home() {  
  return (
    <div>
      <Section1 />
      <Section2 />
      <Code />
    </div>
  );
}
