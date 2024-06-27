import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

function Code() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='codewrp'>      
      <pre className="codeBlock">
      <code className="language-javascript">
        {`
01       class Ahmed_Haddaji {
02         constructor() {
03           this.name = 'Ahmed Haddaji';
04           this.age = '20';
05           this.email = 'ahmedhaddajiahmed@gmail.com';
06         }
07       
08         workExperience() {
09           return [
10             { '2020-now' : 'Full-stack Game Developer' },
11             { '2024-now' : 'Full-stack Developer' },      
12           ];
13        }
14    
15         education() {
16           return [
17             { '2021-2022' : 'Bachelor of Computer Science ' },
18             { '2023-2024' : 'isimg Gabes - Computer Science (IT)'}
19           ];
20         }
21 
22         skills() {
23           return [
24             'HTML', 'Rust', 'Node.js', 'CSS', 'Bootstrap',
25             'Tailwind', 'javaScript', 'Python', 'C', 'C++',
26             'SCSS/Less', 'npm/yarn/pnpm', 'SQL', 'PostgreSQL',
27             'React', 'Nextjs', 'Unity', 'C#', 'PHP', 'MongoDB',
28             'MySQL', 'PlayFab', 'Photoshop', 'Motion design',
29             'TypeScript', 'java', 'Android Studio', 'Git',
30             'Godot', 'GDScript'
31           ];
32         }
33       }
        `} 
      </code>
    </pre>
    <p className='blink'>|</p> 
    </div>
  )
}

export default Code