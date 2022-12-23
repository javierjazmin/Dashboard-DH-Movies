import React from 'react';
import ErrorImg from "../assets/images/error404.jpg";

function NotFound(){
    return (
        <div>
          <img src={ErrorImg} alt="imagen error 404"></img>
        </div>
        
    )
}
export default NotFound;