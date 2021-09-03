import React from "react";

function service()
{
   const card = (card1, card2, card3) => {
      return <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col1" style={{width: "37%"}}>
      <div className="card">
      <h1 style={{fontSize: 30, marginLeft: 30, color: "blue"}}>{card1}</h1>
       <p style={{marginLeft: 30, height: 50, padding: "5px 10px"}}>{card2}
       </p>
       <a href="#!" class="btn btn-primary" style={{color: "white"}}>{card3}</a>
      </div>
   </div>
   }
    return (
        <div className="services">
        <div className="row card-row">
        {card("UI Developer", "Hands on experience HTML, CSS, Bootstrap and ReactJs", "Ui Developer")}
        {card("FrontEnd Developer", "Hands on experience in NodeJs, ExpressJs and MongoDB", "FrontEnd")}
        {card("Python Developer", "Hands on experience in Python 3.0 programming", "Python")}
        {card("Java Developer", "Hands on experience in Java 8.0 Programming", "Java")}
      </div>
      </div>
    );
    
}

export default service;
