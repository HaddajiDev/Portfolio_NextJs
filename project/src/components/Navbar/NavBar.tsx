import React from 'react';
import '@/components/Navbar/navbar.css';

function NavBar() {
  return (
    <body className="hero-anime">	
    
    <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-md navbar-light">
              <img className="imgs" src="https://ideogram.ai/assets/image/lossless/response/zqGvxw1ZQlSYpzczB8uC4Q" alt="" />                          
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto py-4 py-md-0">
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>                    
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" href="#">Portfolio</a>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" href="#">Agency</a>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                    
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" href="#">Journal</a>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>              
            </nav>		
          </div>
        </div>
      </div>
    </div>
  </body>
  )
}

export default NavBar