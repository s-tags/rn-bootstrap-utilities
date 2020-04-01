import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Logo from './logo.png';
import './index.css';

const Homepage = () => {
    return (
        <div>
            <div className="my-NavBar">
                <Navbar></Navbar>
            </div>
            

         <div className="flex-container">

                <div >
                 <h1>Bootstrap Native</h1> 
                    <p>
                    Bringing the world's most popular front-end library to the native
                    world. "Learn once write anywhere." 
                    </p>
                    <p>
                    Bootstrap Native is an open source toolkit for developing native 
                    application using your web's bootstrap components and 
                    utilities. Quickly prototype your ideas or develop native 
                    application using bootstrap's prebuilt components.
                    
                    </p>
                    <div>
                     <button className="btn-started">Get Started</button>
                     <button className="btn-download">Download</button>
                    </div>
                </div>
                    <div>
                        <img src = {Logo} alt="Bootstrap"/>
                    </div>
        </div>
           

            <div className="container-fluid no-gutter second-home ">
                <div className="row h-100 ">
                    <div className="col-4 m-0 p-0 d-flex  h-100 justify-content-center align-items-center">

                        <div className="px-5" >
                        <i className="icon fas fa-cube"></i>
                            <h2>Installation</h2>
                            <p>
                                Include Bootstrap source Sass and JavaScript 
                                file via npm, Composer or Meteor. Package 
                                managed install don't include
                                documentation, but do include our build 
                                systems and readme.
                            </p>
                            <p>
                                $ npm install rn-bootstrap-utilities
                            </p>
                            <div>
                            <a className="btn btn-outline-primary" href="#">Read Installation</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-4">

                        <div className="docu h-100 d-flex justify-content-center align-items-center px-5">
                            <div>
                                <i className="icon fas fa-align-justify"></i>
                                <h2> Documentation</h2>
                                <p>
                                    Developers guide on how to use bootstrap 
                                    native on their application
                                </p>
                                <div>
                                <a className="btn btn-outline-primary" href="#">Read Documentation</a>
                                </div>
                            </div>
                            
                    </div>
                        

                    </div>

                    <div className="col-4 m-0 p-0 d-flex  h-100 justify-content-center align-items-center">
                        
                        <div className="px-5">
                        <i className="icon fas fa-external-link-alt"></i>
                        <h2>Bootstrap</h2>
                            <p>
                                Build responsive mobile-first projects on the 
                                web with the worlds most popular front-end 
                                component library 
                            </p>
                            <div>
                                <a className="btn btn-outline-primary" href="https://getbootstrap.com/">Check out</a>
                            </div>
                    </div>

                    </div>
                </div>
            </div>
            

            <footer className="page-footer p-5 mt-1">
                <div>
                    <ul className="p-0 m-0">
                        <a className=" font-weight-bold" href="https://github.com/s-tags/rn-bootstrap-utilities">GitHub</a>
                        <a className=" font-weight-bold ml-3" href="#">About</a>   
                    </ul>
                    <p>
                        Inspired by bootstrap team and contributors. Built and maintain by s-tags <br/>
                        Contributors and backers are much appreciated
                    </p>
                    <p>
                        Code Licensed MIT.
                    </p>
                </div>
            </footer>
        
            
        </div>
         
       
    );
}

export default Homepage;