import React, { useEffect, useState } from 'react'

function CustomCursur() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (event: any) => {
        setPosition({
          x: event.clientX + window.scrollX,
          y: event.clientY + window.scrollY,
        });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleMouseMove);
      };
    }, []);
  return (
    <div
      className="cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
    
  )
}

export default CustomCursur