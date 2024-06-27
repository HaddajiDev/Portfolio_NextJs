import { useEffect, useRef, useState } from 'react';


function Cursur_2() {
    const dotRef: any = useRef(null);
    const circleRef: any = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const dot = dotRef.current;
        const circle = circleRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let circleX = 0;
        let circleY = 0;

        const moveCursor = (e: any) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        };

        const animateCircle = () => {
            circleX += (mouseX - circleX) * 0.1;
            circleY += (mouseY - circleY) * 0.1;

            circle.style.left = `${circleX}px`;
            circle.style.top = `${circleY}px`;

            requestAnimationFrame(animateCircle);
        };

        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        document.addEventListener('mousemove', moveCursor);
        requestAnimationFrame(animateCircle);

        // Add hover effect for elements with the class 'hover-target'
        const hoverTargets = document.querySelectorAll('.hover-target');
        hoverTargets.forEach((target) => {
            target.addEventListener('mouseenter', handleMouseEnter);
            target.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            hoverTargets.forEach((target) => {
                target.removeEventListener('mouseenter', handleMouseEnter);
                target.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursorDot"></div>
            <div
                ref={circleRef}
                className={`cursorCircle ${isHovered ? 'hovered' : ''}`}
            ></div>
        </>
    );
}

export default Cursur_2;
