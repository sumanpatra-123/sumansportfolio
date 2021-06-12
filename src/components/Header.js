import React from 'react';
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Suman Patra's Portfolio Page</h1>

<Typed 
className="typed-text"
strings={["Web design", "Web development", "Facebook page handler", "Software Engineer"]}
typeSpeed={100}
backSpeed={100}
loop
/>

<div> 
    <a href="#" className="btn btn-outline-primary"> contact me </a>
     </div>
            </div>
        </div>
    )
}

export default Header;