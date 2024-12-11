import React from 'react'
import ProjectCard from '../Projects/ProjectCard'
import ProjectsHolder from '../Projects/ProjectsHolder'
import GamesHoler from '../Projects/GamesHolder'
import Code from '../Code'
import Footer from '../Footer'
import { AllGames } from '../Projects/Project'

function Section2() {
  return (
    <div className='section-2'>
        <div className="cont-2">
            <main className="main">
            
                <div className='content'>
                    <p className='point-sec'>Work /&gt;</p>
                    <h3 className='point-sec'>Web projects...</h3>                    
                </div>            
            </main>
            <main className="main c2">            
                <div className='content'>                
                  <ProjectsHolder />                   
                </div>            
            </main>
            <main className="main">
                <div className='content'>  
                            
                    <h3 className='point-sec'>Games...</h3>
                </div>            
            </main>
            <main className="main c2">
                <div className='content'>                    
                    <GamesHoler/>
                </div>            
            </main>   
            <main className="main">
                <div className='content'>
                    <p className='point-sec'>About /&gt;</p>
                </div>            
            </main> 
            <main className="main">
                <div className='content'>                    
                    <Code />
                </div>            
            </main> 

            <main className="main">
                <div className='content'>
                    <p className='point-sec'>Contact /&gt;</p>
                </div>            
            </main> 
            <main className="main">
                <div className='content'>
                    <Footer />
                </div>            
            </main> 
        </div>
    </div>
  )
}

export default Section2