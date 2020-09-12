import React from "react";
import "./index.css";
import logo from "../src/img/logo.jpg";

const Navbar = () => {

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-10 mx-auto">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="#"><img src={logo}/></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav text-uppercase  ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Food delivery <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">How it works</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Our cities</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sign up </a>
                                        </li>


                                    </ul>

                                </div>
                            </nav>
                        </div>
                    </div>
                    
                        <div className="main-text-box w-70">
                            <h1 className="main-heading">GOODBYE JUNK FOOD.<br/>
                            HELLO SUPER HEALTHY MEALS.</h1>
                            <a  href ="" className="btn btn-full">I'm hungry</a>
                            <a href=""  className="btn btn-free">Show me more</a>

                        
                    </div>
                    
                </div>
            </header>
        </>
    )
}


export default Navbar;